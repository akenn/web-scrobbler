'use strict';

/**
 * Module for all communication with L.FM
 *
 * (some is still done in legacy/scrobbler)
 */
define([
	'jquery'
], function ($) {

	var apiUrl = 'http://scrobble.akenn.org/v0.1/';

	function scrobble(method, params) {
		var url = apiUrl + 'scrobble?' + params;

		if (method === 'GET') {
			$.get(url)
		} else if (method === 'POST') {
			$.post(url)
		} else {
			console.error('Unknown method: ' + method);
		}
	}

	return {
		scrobble: scrobble
	};

});
