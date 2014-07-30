//Modernizr
page.includeJSlibs{
  modernizr = //cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min.js
  modernizr.external = 1
  modernizr.if.isTrue = {$wn.includeModernizr}
}
//JQuery
page.includeJSFooterlibs {
  jquery = //code.jquery.com/jquery-2.1.0.min.js
  jquery {
    external = 1
    disableCompression = 1
    excludeFromConcatenation = 1
    if.isTrue = {$wn.includeJQuery}
  }  
}
//JQueryUI
page.includeJSFooterlibs {
  jqueryUI = //code.jquery.com/ui/1.10.4/jquery-ui.min.js
  jqueryUI {
    external = 1
    disableCompression = 1
    excludeFromConcatenation = 1
    if.isTrue = {$wn.includeJQueryUI}
  }  
}

//slick - Slider (http://kenwheeler.github.io/slick/)
page.includeCSSLibs {
  slick = //cdn.jsdelivr.net/jquery.slick/1.3.6/slick.css
  slick {
    external = 1
    disableCompression = 1
    excludeFromConcatenation = 1
    if.isTrue = {$wn.includeSlickSlider}
  }
}
page.includeJSFooterlibs {
  slickjq = //code.jquery.com/jquery-migrate-1.2.1.min.js
  slickjq {
    external = 1
    disableCompression = 1
    excludeFromConcatenation = 1
    if.isTrue = {$wn.includeSlickSlider}
  }
}


page.includeJSFooterlibs {
  slick = //cdn.jsdelivr.net/jquery.slick/1.3.6/slick.min.js
  slick {
    external = 1
    disableCompression = 1
    excludeFromConcatenation = 1
    if.isTrue = {$wn.includeSlickSlider}
  }
}





######################################
#Fallbacks, falls CDN nicht erreichbar
######################################
//Modernizr Fallback wird gleich im Head ausgeführt
page.headerData {
        10 = TEXT
        10.value(
        <script  type="text/javascript">window.Modernizr || document.write('<script src="typo3conf/ext/wndefaultsetup/Resources/Public/Scripts/modernizr-2.7.1-dev.js">\x3C/script>');</script>
        )
        10.if.isTrue = {$wn.includeModernizr}
}

//Footer Fallbacks werden erst in fallbackFooter.js ausgeführt - hier werden aber die Variablen zur Steuerung definiert
page.jsInline.10 = TEXT
page.jsInline.10.value(
	var includeJQuery = {$wn.includeJQuery}, includeJQueryUI = {$wn.includeJQueryUI}
)


page.includeJSFooter{
 fallback = EXT:wndefaultsetup/Resources/Public/Scripts/fallbackFooter.js
 main = fileadmin/Scripts/wnmain.js 
}