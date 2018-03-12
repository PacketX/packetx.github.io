// JavaScript Document
var SLOGAN1 = [
	'實體與虛擬化環境的流量監控',
	'低風險流量(YouTube, NetFlix...)旁路機制',
	'匯入威脅情資,執行惡意IP/Domain/URL阻斷',
	'網路流量L2-L7解析與Metadata產出'
];
var SLOGAN2 = [
	'Network Visibility for both physical and virtual environment(VMware & KVM)',
	'In-line bypass low-threatening traffic such as multimedia streaming',
	'Carrying out massive IP/domain/URL blocking according to external intelligence',
	'Netflow, DNS/HTTP/HTTPS log and App recognition log'
];
var INTERVAL = 5000;
var ELAPSED = 800;
var BG_COUNT = 4;
var bgIndex = 0;
$(document).ready(function(e) {
    $(".kv > div:visible").find('h1').html(SLOGAN1[0] + '<br/>' + SLOGAN2[0]);
    $(".kv > div:hidden").find('h1').html(SLOGAN1[1] + '<br/>' + SLOGAN2[1]);
	window.setTimeout(switchBG, INTERVAL);
});
function switchBG() {
	var $bg = $(".kv");
	$bg.children("div:first").fadeToggle(ELAPSED);
	$bg.children("div:last").fadeToggle(ELAPSED, "swing", function() {
		bgIndex = (bgIndex + 1) % BG_COUNT;
        var ni = (bgIndex + 1) % BG_COUNT;
		$(".kv > div:hidden").removeClass().addClass("kv" + (ni + 1).toString())
            .find('h1').html(SLOGAN1[ni] + '<br/>' + SLOGAN2[ni]);
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
