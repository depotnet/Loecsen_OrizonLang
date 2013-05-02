/**
 * Very simple way to check if a file exists on this domain.
 * Use with the jQuery library.
 *
 * Important: 	Works only on the same domain. 
 * 		Cross-domain-requests have to be done in another way (see JSONP)!
 *
 * Use: console.log(   "/data/list.json".fileExists()  );
 */
String.prototype.fileExists = function() {
	filename = this.trim();
	/*console.log("Exists?" + filename);*/

/*
	var response = jQuery.ajax({
		url: filename,
		type: 'HEAD',
		cache: false,
		async: false
	}).status;
	console.log("Exists : " + response);
	return (response != "200") ? false : true;
	*/
	var response = false;
	jQuery.ajax({
		url: filename,
		type: 'HEAD',
		cache: false,
		async: false
	}).done(function(){/*console.log("Exists!" + filename);*/ response = true;})
	.fail(function(){/*console.log("Not Exists" + filename);*/ response = false;});
	
	return response;
}
