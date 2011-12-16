/*
  fabricjs ignored tests: FIXME
    16 // image doesn't render properly  
    20 // very intense shape  
    33, 34, 35 // very intense shapes 
    52 // image doesn't render properly 
    56 // image doesn't render properly 
    66 // the shape is too big 
    68 // svg has parsing error 
    72, 73 // shapes are too big 
    74, 75 // shapes has weird dimensions 
    78, 79, 80, 81, 82, 83, 84, 85 // wrong offset

  other ignored test tests:
    "_error" // manual run
*/

var tests = {
"callouts": ["cloud", "cloud_c", "cloud_l", "cloud_r", "elips_c", "elips_l", "elips_r", "rectg_c", "rectg_l", "rectg_r", "rnd_rectg_c", "rnd_rectg_l", "rnd_rectg_r", "round_c", "round_l", "round_r", "segmented", "segmented_c", "segmented_l", "segmented_r", "stared", "stared_c", "stared_l", "stared_r"],
"fabricjs": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147"],
"other": ["3dpie", "angel", "animateTransform", "arcs01", "arcs02", "babybottle", "base64--VML-unsupported", "BlankMap-World", "BlankMap-World_gray", "bubble", "building", "butterfly", "button", "cameleon", "car", "centreeurope20", "circle", "computer", "cubic01", "cubic02", "defs", "dragon", "effect-blur", "effect-shadow", "ellipse", "entity", "ford", "git", "gradient-linear", "gradient-path", "gradient-radial", "gradient-stroke", "gradient-transform-not-supported", "grapes-clean-format", "grapes-inkscape-format", "great-seal", "heron-cendre", "http-headers-status", "image", "inheritance", "keycut", "line", "lion", "map", "matrix", "nested_groups", "nested_svg", "operashare", "path", "path_morphing", "pattern", "phone", "polygon", "polyline", "PreserveAspectRatio", "projectionpolaire10", "quad01", "rectangle", "relative", "rounded-rect", "schematic", "scim", "SGML", "stelapad-logo-text", "stelapad-logo", "svgopen09", "svgopen10", "svg_has_a_posse", "symbol", "tetris", "text-bad", "text-good", "text", "textpath", "textPath2", "tiger", "tiger2", "toolpost", "transform-nested", "transform-rotate", "transform-skew", "transform-translate", "transform", "transform2", "transformations-groups", "transformations", "tref", "trident-event", "tspan", "type-specimen", "use", "viewbox", "wifi", "wildcat", "yinyang", "zakura"],
"w3c-svg-11f2": ["color-prop-01-b", "color-prop-02-f", "color-prop-03-t", "color-prop-04-t", "color-prop-05-t", "conform-viewers-01-t", "coords-coord-01-t", "coords-coord-02-t", "coords-trans-01-b", "coords-trans-02-t", "coords-trans-03-t", "coords-trans-04-t", "coords-trans-05-t", "coords-trans-06-t", "coords-trans-07-t", "coords-trans-08-t", "coords-trans-09-t", "coords-trans-10-f", "coords-trans-11-f", "coords-trans-12-f", "coords-trans-13-f", "coords-trans-14-f", "coords-transformattr-01-f", "coords-transformattr-02-f", "coords-transformattr-03-f", "coords-transformattr-04-f", "coords-transformattr-05-f", "coords-units-01-b", "coords-units-02-b", "coords-units-03-b", "coords-viewattr-01-b", "coords-viewattr-02-b", "coords-viewattr-03-b", "filters-blend-01-b", "filters-color-01-b", "filters-color-02-b", "filters-composite-02-b", "filters-composite-03-f", "filters-comptran-01-b", "filters-conv-01-f", "filters-conv-02-f", "filters-diffuse-01-f", "filters-displace-01-f", "filters-displace-02-f", "filters-example-01-b", "filters-felem-01-b", "filters-felem-02-f", "filters-gauss-01-b", "filters-gauss-02-f", "filters-gauss-03-f", "filters-image-01-b", "filters-image-03-f", "filters-image-04-f", "filters-image-05-f", "filters-light-01-f", "filters-light-02-f", "filters-light-03-f", "filters-morph-01-f", "filters-offset-01-b", "filters-overview-01-b", "filters-specular-01-f", "filters-tile-01-b", "filters-turb-01-f", "filters-turb-02-f", "fonts-desc-02-t", "fonts-desc-03-t", "fonts-elem-01-t", "fonts-elem-02-t", "fonts-elem-03-b", "fonts-elem-04-b", "fonts-elem-05-t", "fonts-elem-06-t", "fonts-elem-07-b", "fonts-glyph-02-t", "fonts-glyph-04-t", "fonts-kern-01-t", "fonts-overview-201-t", "masking-filter-01-f", "masking-intro-01-f", "masking-mask-01-b", "masking-mask-02-f", "masking-opacity-01-b", "masking-path-01-b", "masking-path-02-b", "masking-path-03-b", "masking-path-04-b", "masking-path-05-f", "masking-path-07-b", "masking-path-08-b", "masking-path-09-b", "masking-path-10-b", "masking-path-11-b", "masking-path-12-f", "masking-path-13-f", "masking-path-14-f", "metadata-example-01-t", "painting-control-01-f", "painting-control-02-f", "painting-control-03-f", "painting-control-04-f", "painting-control-05-f", "painting-control-06-f", "painting-fill-01-t", "painting-fill-02-t", "painting-fill-03-t", "painting-fill-04-t", "painting-fill-05-b", "painting-marker-01-f", "painting-marker-02-f", "painting-marker-03-f", "painting-marker-04-f", "painting-marker-05-f", "painting-marker-06-f", "painting-marker-07-f", "painting-render-01-b", "painting-render-02-b", "painting-stroke-01-t", "painting-stroke-02-t", "painting-stroke-03-t", "painting-stroke-04-t", "painting-stroke-05-t", "painting-stroke-06-t", "painting-stroke-07-t", "painting-stroke-08-t", "painting-stroke-09-t", "painting-stroke-10-t", "paths-data-01-t", "paths-data-02-t", "paths-data-03-f", "paths-data-04-t", "paths-data-05-t", "paths-data-06-t", "paths-data-07-t", "paths-data-08-t", "paths-data-09-t", "paths-data-10-t", "paths-data-12-t", "paths-data-13-t", "paths-data-14-t", "paths-data-15-t", "paths-data-16-t", "paths-data-17-f", "paths-data-18-f", "paths-data-19-f", "paths-data-20-f", "pservers-grad-01-b", "pservers-grad-02-b", "pservers-grad-03-b", "pservers-grad-04-b", "pservers-grad-05-b", "pservers-grad-06-b", "pservers-grad-07-b", "pservers-grad-08-b", "pservers-grad-09-b", "pservers-grad-10-b", "pservers-grad-11-b", "pservers-grad-12-b", "pservers-grad-13-b", "pservers-grad-14-b", "pservers-grad-15-b", "pservers-grad-16-b", "pservers-grad-17-b", "pservers-grad-18-b", "pservers-grad-20-b", "pservers-grad-21-b", "pservers-grad-22-b", "pservers-pattern-01-b", "pservers-pattern-02-f", "pservers-pattern-04-f", "render-elems-01-t", "render-elems-02-t", "render-elems-03-t", "render-elems-06-t", "render-elems-07-t", "render-elems-08-t", "render-groups-01-b", "render-groups-03-t", "shapes-circle-01-t", "shapes-circle-02-t", "shapes-ellipse-01-t", "shapes-ellipse-02-t", "shapes-ellipse-03-f", "shapes-grammar-01-f", "shapes-intro-01-t", "shapes-intro-02-f", "shapes-line-01-t", "shapes-line-02-f", "shapes-polygon-01-t", "shapes-polygon-02-t", "shapes-polygon-03-t", "shapes-polyline-01-t", "shapes-polyline-02-t", "shapes-rect-01-t", "shapes-rect-02-t", "shapes-rect-03-t", "shapes-rect-04-f", "shapes-rect-05-f", "shapes-rect-06-f", "shapes-rect-07-f", "struct-cond-01-t", "struct-cond-02-t", "struct-cond-03-t", "struct-defs-01-t", "struct-frag-01-t", "struct-frag-02-t", "struct-frag-03-t", "struct-frag-04-t", "struct-frag-05-t", "struct-frag-06-t", "struct-group-01-t", "struct-group-02-b", "struct-group-03-t", "struct-image-01-t", "struct-image-02-b", "struct-image-03-t", "struct-image-04-t", "struct-image-05-b", "struct-image-06-t", "struct-image-07-t", "struct-image-08-t", "struct-image-09-t", "struct-image-10-t", "struct-image-13-f", "struct-image-14-f", "struct-image-15-f", "struct-image-16-f", "struct-symbol-01-b", "struct-use-01-t", "struct-use-03-t", "struct-use-04-b", "struct-use-05-b", "struct-use-10-f", "struct-use-11-f", "struct-use-12-f", "styling-class-01-f", "styling-css-01-b", "styling-css-02-b", "styling-css-03-b", "styling-css-04-f", "styling-css-05-b", "styling-css-07-f", "styling-css-08-f", "styling-elem-01-b", "styling-inherit-01-b", "styling-pres-01-t", "text-align-01-b", "text-align-02-b", "text-align-03-b", "text-align-04-b", "text-align-05-b", "text-align-06-b", "text-altglyph-01-b", "text-altglyph-02-b", "text-deco-01-b", "text-fonts-01-t", "text-fonts-02-t", "text-fonts-03-t", "text-fonts-04-t", "text-fonts-202-t", "text-fonts-203-t", "text-intro-01-t", "text-intro-02-b", "text-intro-03-b", "text-intro-04-t", "text-intro-05-t", "text-intro-06-t", "text-intro-07-t", "text-intro-09-b", "text-path-01-b", "text-path-02-b", "text-spacing-01-b", "text-text-01-b", "text-text-03-b", "text-text-04-t", "text-text-05-t", "text-text-06-t", "text-text-07-t", "text-text-08-b", "text-text-09-t", "text-text-10-t", "text-text-11-t", "text-tref-01-b", "text-tref-02-b", "text-tref-03-b", "text-tspan-01-b", "text-tspan-02-b", "types-basic-01-f"]
};