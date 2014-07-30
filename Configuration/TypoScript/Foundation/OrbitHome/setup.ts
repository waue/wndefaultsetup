
lib.content = CONTENT
lib.content.table = tt_content
lib.content.select {

    # Use the sorting of the backend. We could as well use the date field or the header.
    orderBy = sorting

    # normal column
    where = colPos = 0
}




#field:colPos muss von Fluid übergeben werden
lib.content102 = CONTENT
lib.content102.table = tt_content
lib.content102.select {
  pidInList = this
  orderBy = sorting
	where.field = colPos
	where.wrap = colPos = |
}


lib.content102.renderObj = COA
lib.content102.renderObj{
	10 = FILES
	10 {
		references {
			table = tt_content
			uid.field = uid
			fieldName = image
		}
		renderObj = IMAGE
		renderObj {
			file.import.data = file:current:publicUrl
			file.height = 300c
			file.width  = 400c
			stdWrap.typolink.parameter.data = file:current:link
		}
	}

	20 = TEXT
	20.field = header
	20.wrap = <h4>|</h4>
	
	
	30 = TEXT
	30.field = bodytext
	30.parseFunc < lib.parseFunc_RTE
}
