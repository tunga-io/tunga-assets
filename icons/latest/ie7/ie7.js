/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Tunga-Icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'tg-ic-rocket-side': '&#xe90f;',
		'tg-ic-calendar-add': '&#xe923;',
		'tg-ic-headphone': '&#xe924;',
		'tg-ic-filter-alt': '&#xe927;',
		'tg-ic-rocket': '&#xe929;',
		'tg-ic-rocket-circle': '&#xe92b;',
		'tg-ic-rocket-o': '&#xe935;',
		'tg-ic-chat': '&#xe900;',
		'tg-ic-colon': '&#xe901;',
		'tg-ic-ellipsis': '&#xe902;',
		'tg-ic-add': '&#xe903;',
		'tg-ic-check': '&#xe904;',
		'tg-ic-attention': '&#xe905;',
		'tg-ic-calendar': '&#xe906;',
		'tg-ic-close': '&#xe907;',
		'tg-ic-meter': '&#xe908;',
		'tg-ic-file': '&#xe909;',
		'tg-ic-download': '&#xe90a;',
		'tg-ic-g-drive': '&#xe90b;',
		'tg-ic-pencil': '&#xe90c;',
		'tg-ic-filter': '&#xe90d;',
		'tg-ic-github': '&#xe90e;',
		'tg-ic-id': '&#xe910;',
		'tg-ic-logout': '&#xe911;',
		'tg-ic-bank': '&#xe912;',
		'tg-ic-card': '&#xe913;',
		'tg-ic-wallet': '&#xe914;',
		'tg-ic-cash': '&#xe915;',
		'tg-ic-avatar': '&#xe916;',
		'tg-ic-projects': '&#xe917;',
		'tg-ic-circle': '&#xe918;',
		'tg-ic-search': '&#xe919;',
		'tg-ic-tools': '&#xe91a;',
		'tg-ic-slack': '&#xe91b;',
		'tg-ic-tag': '&#xe91c;',
		'tg-ic-trello': '&#xe91d;',
		'tg-ic-tribe': '&#xe91e;',
		'tg-ic-upload': '&#xe91f;',
		'tg-ic-link': '&#xe920;',
		'tg-ic-warning': '&#xe922;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/tg-ic-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
