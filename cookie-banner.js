// Creare's 'Implied Consent' EU Cookie Law Banner
// Created by Rob Kent, Tom Foyster & James Bavington

var dropCookie = true;
var cookieDuration = 28; 
var cookieName = 'complianceCookie';
var cookieValue = 'on';
var privacyMessage = '<div><h4>Our Privacy &amp; Cookies Policy</h4><p>Our Website uses cookies<span class="nomo"> to improve your experience</span>. Please visit our <a rel="nofollow" href="/privacy-policy.html">Privacy &#038; Cookies</a> page for more info<span class="nomo">rmation about cookies and how we use them</span>.</p><a class="close-cookie-banner" href="javascript:void(0);" onclick="jQuery(this).parent().parent().hide();"><span>Close</span></a></div>';

jQuery(document).ready(function($) {
	if(checkCookie(window.cookieName) != window.cookieValue){
		createDiv(); 
		window.setTimeout(function() {
			$('#cookie-law').fadeOut();
		}, 5000);
	}
	 
	function createDiv(){
		var bodytag = document.getElementsByTagName('body')[0];
		var div = document.createElement('div');
		div.setAttribute('id','cookie-law');
		div.innerHTML = privacyMessage;	
		bodytag.appendChild(div);
		document.getElementsByTagName('body')[0].className+=' cookiebanner';	
		createCookie(window.cookieName,window.cookieValue, window.cookieDuration);
	}
	
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000)); 
			var expires = "; expires="+date.toGMTString(); 
		}
		else var expires = "";
		if(window.dropCookie) { 
			document.cookie = name+"="+value+expires+"; path=/"; 
		}
	}
	
	function checkCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	function eraseCookie(name) {
		createCookie(name,"",-1);
	} 

});
