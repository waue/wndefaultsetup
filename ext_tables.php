<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/', 'WaueNet Default Setup');

$fields = array(
    'wnframework' => array(
      'exclude' => 0,
      'label' => 'Framework(veraltet)',
      'config' => array (
        'type' => 'select',
        'default' => '0',
        'items' => array(
		    array('kein Framework', 0, 'selicons/k1.gif'),
		    array('Foundation', 1, 'selicons/k2.gif'),
		    array('Bootstrap', 2, 'selicons/k3.gif'),
		)
      )
    ),
  );

  t3lib_div::loadTCA('pages');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', $fields);
 \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('pages','wnframework');
?>