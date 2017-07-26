/* Copyright (c) 2015 Asustor Inc. All rights reserved. */

var getLocale = function() {
	var me = this;
	INDEX_S = _INDEX_STRINGS;
	delete _INDEX_STRINGS;
};

var getString = function(c, i) {
		try {
			var s = INDEX_S[c][i];

			return (typeof s !== 'undefined') ? s : '';
		} catch(e) {
			return '';
		}
};

this.getLocale();

// Shortcut to get strings
var _S = getString;


var h1 = _S('COMMON', 'H1');
var info = _S('COMMON', 'INFO');
var link = _S('COMMON', 'LINK');

document.getElementById("h1").innerHTML = h1;
document.getElementById("info").innerHTML = info;
document.getElementById("link").innerHTML = link;
