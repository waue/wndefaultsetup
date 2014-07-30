//Falls jquery nicht vom jqueryServer geladen wurde

if ((includeJQuery)&&(typeof jQuery == 'undefined')) {
  console.log('Fallback jQuery');
  document.write(unescape("%3Cscript src='typo3conf/ext/wndefaultsetup/Resources/Public/Scripts/jquery-2.1-min.js'   type='text/javascript'%3E%3C/script%3E"));
}

if ((includeJQueryUI)&&(!window.jQuery.ui)) {
 console.log('Fallback jQuery UI');
 document.write(unescape('%3Cscript src="typo3conf/ext/wndefaultsetup/Resources/Public/Scripts/jquery-ui.min.js"'));
}