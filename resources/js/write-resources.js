//// 공통 리소스 - write 순서 유지 //// 

// web font 
document.write("<link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600' />");
document.write("<link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/earlyaccess/nanumgothic.css' />");
document.write("<link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/earlyaccess/notosanskr.css' />");

// jquery
document.write("<script type='text/javascript' src='resources/plugin/jquery/jquery-3.1.0.min.js'></script>");
document.write("<script type='text/javascript' src='resources/plugin/jquery/jquery-ui.min.js'></script>");

// icon
document.write("<link rel='stylesheet' type='text/css' href='resources/plugin/font-awesome/4.6.3/css/font-awesome.min.css' />");

// css skin 
document.write("<link rel='stylesheet' type='text/css' href='resources/css/skin-starq-admin.css' id='skin' />");
document.write("<link rel='stylesheet' type='text/css' href='resources/css/responsive-starq-admin.css' />");

// control common-ui
document.write("<script type='text/javascript' src='resources/js/control-common-ui.js'></script>");

// jquery plugin - datetimepicker
document.write("<link rel='stylesheet' href='resources/plugin/jquery/datetimepicker-master/build/jquery.datetimepicker.min.css' />");
document.write("<script type='text/javascript' src='resources/plugin/jquery/datetimepicker-master/build/jquery.datetimepicker.full.min.js'></script>");


//// 추가 리소스 ////

// highcharts // for Analytics pages
document.write("<script type='text/javascript' src='resources/plugin/highcharts/4.2.5/js/highcharts.js'></script>");
document.write("<script type='text/javascript' src='resources/plugin/highcharts/4.2.5/js/highcharts-more.js'></script>");
document.write("<script type='text/javascript' src='resources/plugin/highcharts/4.2.5/js/modules/exporting.js'></script>");
document.write("<script type='text/javascript' src='resources/js/highcharts-custom-theme.js'></script>");

// html editor // for Support pages
document.write("<script type='text/javascript' src='resources/plugin/ckeditor/ckeditor.js'></script>");