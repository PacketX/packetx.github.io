// JavaScript Document
var INTERVAL = 5000;
var ELAPSED = 800;
var BG_COUNT = 3;
var bgIndex = 0;
$(document).ready(function(e) {
	window.setTimeout(switchBG, INTERVAL);
});
function switchBG() {
	var $bg = $(".kv");
	$bg.children("div:first").fadeToggle(ELAPSED);
	$bg.children("div:last").fadeToggle(ELAPSED, "swing", function() {
		bgIndex = (bgIndex + 1) % BG_COUNT;
		$(".kv > div:hidden").removeClass().addClass("kv" + ((bgIndex + 1) % BG_COUNT + 1).toString());
		window.setTimeout(switchBG, INTERVAL);
	});
}
$(document).ready(function() {
    $(".toggle").click(function() {
        $(this).toggleClass("active");
        $(".m_nav").slideToggle();
    });
    $(".m_nav > ul > li:has(ul) > a").append('<div class="arrow-bottom"></div>');
});