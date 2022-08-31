/**
 * 
 */

var Ajaxize = {

	getJson: function(url, callback, async) {
		Ajaxize.ajaxJson(url, 'get', null, callback, async);
	},

	postJson: function(url, dataJson, callback, async) {
		Ajaxize.ajaxJson(url, 'post', dataJson, callback, async);
	},

	ajaxJson: function(url, method, dataJson, callback, async) {

		if (async == undefined) {
			async = true;
		}

		$.ajax({
			async: async,
			url: url,
			type: method,
			data: dataJson,
			dataType: 'json',
		}).fail(function(jqXHR, textStatus, errorThrown) {

			console.log(textStatus + ': ' + errorThrown);

		}).done(function(json, textStatus, jqXHR) {

			callback(json);

		}).always(function(a, b, c) {
		});
	},

}
