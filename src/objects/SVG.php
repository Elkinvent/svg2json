<?php

class SVG {
	private $errors;
	private $defs;
	private $groupData;
	
	public function __construct($svgString=null) {
		$this->errors = array();
		$this->defs = array();
		$this->groupData = null;
		$this->rawSvg = $svgString;
	}
	
	public function addError($error) { $this->errors[] = $error; }
	public function getErrors() { return $this->errors; }

	public function addDef($def) { $this->defs[] = $def; }
	public function getDefs() { return $this->defs; }

	public function setGroupData($data) { $this->groupData = $data; }
	public function getGroupData() { return $this->groupData; }

	// bounding box
	public function getBBox() {
		$bbox = array('x'=>null,'y'=>null,'width'=>null,'height'=>null);
		if ($this->rawSvg != null) {
			// use PhantomJS to get svg bbox
			// http://www.phantomjs.org/
			$timeout = 5000;	// 5-second timeout
			$svg_filename = "svg-".rand()."-".rand().".svg";
			$svg_file = getcwd().DIRECTORY_SEPARATOR.$svg_filename;
			$svg = $this->rawSvg;
			$svg = str_ireplace('<svg', '<svg onload="load(evt)"', $svg);
			$svg = str_ireplace('</svg>', '<script type="application/ecmascript"><![CDATA[var target=null;function load(evt){this.target=evt.target;window.setTimeout("finish()",100);}function finish(){if(this.target&&this.target.getBBox){var bb=this.target.getBBox();console.log("{\"x\":"+bb.x+",\"y\":"+bb.y+",\"width\":"+bb.width+",\"height\":"+bb.height+"}");}else{console.log(false);}}]]></script></svg>', $svg);
			$handle = fopen($svg_file, "w");
			fwrite($handle, $svg);
			fclose($handle);
			$phantomjs = 	"var page = require(\"webpage\").create();\n".
					"page.viewportSize = { \"width\":1024, \"height\":768 };\n".
					"page.onConsoleMessage = function(msg){\n".
					"	console.log(msg);\n".
					"	phantom.exit();\n".
					"};\n".
					"page.onLoadFinished = function(status){\n".
					"	window.setTimeout(phantom.exit, ".$timeout.");\n".
					"};\n".
					"page.open('".$svg_filename."');";	
			$js_file = tempnam(sys_get_temp_dir(), "tjs");
			$handle = fopen($js_file, "w");
			fwrite($handle, $phantomjs);
			fclose($handle);
			if (PHP_OS == "Linux") $result = shell_exec("DISPLAY=:0 phantomjs \"".$js_file."\"");
			else $result = shell_exec("phantomjs \"".$js_file."\"");
			unlink($js_file);
			unlink($svg_file);
			if ($result) {
				// ignore PhantomJS debug warnings like "phonon backend plugin could not be loaded"
				$results = explode("\n", trim($result));
				foreach ($results as $key => $value) {
					$json = json_decode($value, true);
					if ($json != null && isset($json['x']) && isset($json['y']) && isset($json['width']) && isset($json['height'])) {
						$bbox = $json;
						break;
					}
				}
			}
		}
		return $bbox;
	}

}
?>
