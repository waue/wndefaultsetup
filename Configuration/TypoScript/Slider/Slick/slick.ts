#slick.ts

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
		imageStdWrap.wrap = <div class="fade" data-slide style="max-height:{$wn.orbitHome.slider.hcss}; margin-left:0; overflow:hidden">|</div>
		rendering.slider{
			imgTagStdWrap.wrap = <div>|</div>
			caption{
				stdWrap.required = 1
				stdWrap.wrap = <div class="orbit-caption">|</div>
				wrap = |</li>
			}
			caption.stdWrap.cObject = TEXT
		}
		layout.default.value = ###IMAGES###
		#equalH.override = 200c
	}

} 

page.content>

page.jsFooterInline {
	455 = TEXT
	455.value(
		console.log('slider');
		$('.fade').slick({
		
		});
	)

}

