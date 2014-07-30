#########################################
#CSS - Standard ist das CDN
#(sollte individuall angepasst werden)
#########################################
page.includeCSS.foundation = //cdn.jsdelivr.net/foundation/5.2.2/css/foundation.css
page.includeCSS.foundation.external=1

#########################################
#JS - Standard ist das CDN
#(sollte individuall angepasst werden)
#########################################
page.includeJSFooterlibs {
	fastclick= typo3conf/ext/wndefaultsetup/Resources/Public/foundation-5.2.2/js/vendor/fastclick.js
}

page.includeJSFooterlibs {
  foundation = //cdnjs.cloudflare.com/ajax/libs/foundation/5.3.0/js/foundation.min.js
  foundation {
    external = 1
    disableCompression = 1
    excludeFromConcatenation = 1
  }  
}

#Fondation aktiveren	
page.jsFooterInline.200=TEXT
page.jsFooterInline.200.value = $(document).foundation(); var doc = document.documentElement; doc.setAttribute('data-useragent', navigator.userAgent);


#{layout} wird durch die Auswahl des BE-Layouts gesteuert und wählt dadurch die Layout Datei aus
#z.B. typo3conf/ext/wndefaultsetup/Resources/Private/Layouts/OrbitHome.html
page.3 = LOAD_REGISTER
page.3{
	template.cObject = CASE
	template.cObject{
		   key.data      = page:backend_layout // levelfield:-2,backend_layout_next_level,slide
		   1             = TEXT
		   1.value       = Orbit
		   2             = TEXT
		   2.value       = Banded
		   default       = TEXT
		   default.value = default
	}
}
page.10 = FLUIDTEMPLATE
page.10{
	#template = TEXT
	#template.value = <f:layout name="{layout}" />
	template = FILE
	file = typo3conf/ext/wndefaultsetup/Resources/Private/Templates/{register:template}.html
	file.stdWrap.insertData = 1
	partialRootPath = EXT:wndefaultsetup/Resources/Private/Partials/
	layoutRootPath = EXT:wndefaultsetup/Resources/Private/Layouts/
	variables.layout = TEXT
	variables.layout.dataWrap={register:template}
}

#####################
#Logo
#####################
lib.Logo = IMAGE
lib.Logo {
  file {
    import.data = levelmedia:-1, slide
    treatIdAsReference = 1
    import.listNum = 0
  }
  linkWrap = <a href="?id={0}"> | </a>
}
#####################
#Copyright
#####################
#Achtung: braucht $TYPO3_CONF_VARS['FE']['addRootLineFields']='author'

lib.Copyright = TEXT
lib.Copyright{
  data = date : U
  strftime = %Y
  noTrimWrap = |&copy; | {page:author // levelfield:-2,author,slide}|
  insertData = 1
}




#####################
#Standardmenü
#####################
lib.standardMenu = COA
lib.standardMenu.1=TEXT
#lib.standardMenu.1.value = Standard Menü
lib.standardMenu.10 = HMENU
lib.standardMenu.10{
  stdWrap.wrap = <ul class="{field:class}">|</ul>
  stdWrap.insertData=1
  1 = TMENU
  1.NO = 1
  1.NO.wrapItemAndSub = <li>|</li>
  1.NO.ATagParams = class="{field:atagclass}"
}


#####################
#Orbit-Slider - Deprecaded seit Foundation-5.3
#####################
/*
lib.content101 = CONTENT
lib.content101.table = tt_content
lib.content101.slide = -1
lib.content101.select {
  pidInList = this
  orderBy = sorting
  where = colPos=101

}
lib.content101.renderObj{

	image.20{
		1{
			layoutKey=default
			layout.wn.element = ###SRC###
			file.width.override={$wn.orbitHome.slider.w}
			file.height={$wn.orbitHome.slider.h}
		}



		renderMethod = slider
		imageStdWrap.dataWrap =|
		imageStdWrap.wrap = <ul data-orbit style="max-height:{$wn.orbitHome.slider.hcss}; margin-left:0; overflow:hidden">|</ul>
		rendering.slider{
			imgTagStdWrap.wrap = <li>|
			caption{
				stdWrap.required = 1
				stdWrap.wrap = <div class="orbit-caption">|</div>
				wrap = |</li>
			}
		}
		layout.default.value = ###IMAGES###
		#equalH.override = 200c
	}

} 
*/


[globalVar = TSFE:page|backend_layout = 1]
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:wndefaultsetup/Configuration/TypoScript/Foundation/OrbitHome/setup.ts">
[global]
	
  
  
  
  
  
  
