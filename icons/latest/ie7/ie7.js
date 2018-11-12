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
		'tg-ic-lock-alt': '&#xe9b6;',
		'tg-ic-search-alt': '&#xe9b7;',
		'tg-ic-chat-alt': '&#xe9b8;',
		'tg-ic-headphone-alt': '&#xe9b9;',
		'tg-ic-times-circle-o': '&#xe9b5;',
		'tg-ic-times-circle': '&#xe9b4;',
		'tg-ic-bullhorn': '&#xe9b3;',
		'tg-ic-quote-left': '&#xe9b1;',
		'tg-ic-quote-right': '&#xe9b2;',
		'tg-ic-google': '&#xe9ac;',
		'tg-ic-google-plus-circle': '&#xe9ad;',
		'tg-ic-google-plus-official': '&#xe9ae;',
		'tg-ic-google-plus-square': '&#xe9af;',
		'tg-ic-google-plus': '&#xe9b0;',
		'tg-ic-team-thick': '&#xe9a9;',
		'tg-ic-rocket-side-thick': '&#xe9aa;',
		'tg-ic-team': '&#xe9ab;',
		'tg-ic-envelope-o': '&#xe9a4;',
		'tg-ic-envelope-open-o': '&#xe9a5;',
		'tg-ic-envelope-open': '&#xe9a6;',
		'tg-ic-envelope-square': '&#xe9a7;',
		'tg-ic-envelope': '&#xe9a8;',
		'tg-ic-info-circle': '&#xe9a2;',
		'tg-ic-info': '&#xe9a3;',
		'tg-ic-toggle-off': '&#xe9a0;',
		'tg-ic-toggle-on': '&#xe9a1;',
		'tg-ic-bell-o': '&#xe99c;',
		'tg-ic-bell-slash-o': '&#xe99d;',
		'tg-ic-bell-slash': '&#xe99e;',
		'tg-ic-bell': '&#xe99f;',
		'tg-ic-map-marker': '&#xe997;',
		'tg-ic-map-o': '&#xe998;',
		'tg-ic-map-pin': '&#xe999;',
		'tg-ic-map-signs': '&#xe99a;',
		'tg-ic-map': '&#xe99b;',
		'tg-ic-location-arrow': '&#xe996;',
		'tg-ic-phone-square': '&#xe991;',
		'tg-ic-phone': '&#xe992;',
		'tg-ic-address-book-o': '&#xe993;',
		'tg-ic-address-book': '&#xe994;',
		'tg-ic-lock': '&#xe995;',
		'tg-ic-flag-o': '&#xe98f;',
		'tg-ic-flag': '&#xe990;',
		'tg-ic-flag-checkered': '&#xe97e;',
		'tg-ic-bitcoin': '&#xe978;',
		'tg-ic-calendar-check-o': '&#xe979;',
		'tg-ic-check-circle-o': '&#xe97a;',
		'tg-ic-check-square-o': '&#xe97b;',
		'tg-ic-check-square': '&#xe97c;',
		'tg-ic-check2': '&#xe97d;',
		'tg-ic-pencil-square-o': '&#xe97f;',
		'tg-ic-pencil-square': '&#xe980;',
		'tg-ic-pencil2': '&#xe981;',
		'tg-ic-trash-o': '&#xe983;',
		'tg-ic-trash': '&#xe984;',
		'tg-ic-star-half-empty': '&#xe985;',
		'tg-ic-star-half-full': '&#xe986;',
		'tg-ic-star-half-o': '&#xe987;',
		'tg-ic-star-half': '&#xe988;',
		'tg-ic-star-o': '&#xe989;',
		'tg-ic-star': '&#xe98a;',
		'tg-ic-newspaper-o': '&#xe98b;',
		'tg-ic-pie-chart': '&#xe976;',
		'tg-ic-image': '&#xe92e;',
		'tg-ic-education': '&#xe92f;',
		'tg-ic-drill': '&#xe931;',
		'tg-ic-cv': '&#xe932;',
		'tg-ic-skills': '&#xe933;',
		'tg-ic-tool-case': '&#xe937;',
		'tg-ic-build-network': '&#xe938;',
		'tg-ic-post-task': '&#xe939;',
		'tg-ic-manage-tasks': '&#xe93a;',
		'tg-ic-make-transaction': '&#xe93b;',
		'tg-ic-browse-developers': '&#xe93c;',
		'tg-ic-intensive-guidance': '&#xe93d;',
		'tg-ic-dedicated-monitor': '&#xe93e;',
		'tg-ic-do-it-yourself': '&#xe93f;',
		'tg-ic-project': '&#xe940;',
		'tg-ic-coding-skills': '&#xe947;',
		'tg-ic-teamwork-dot': '&#xe948;',
		'tg-ic-teamwork-arrow': '&#xe949;',
		'tg-ic-teamwork': '&#xe94a;',
		'tg-ic-soft-skills-alt': '&#xe94b;',
		'tg-ic-soft-skills': '&#xe94c;',
		'tg-ic-do-workflow': '&#xe94d;',
		'tg-ic-do-workflow-alt': '&#xe94e;',
		'tg-ic-do-web': '&#xe94f;',
		'tg-ic-do-slice': '&#xe950;',
		'tg-ic-do-pm': '&#xe951;',
		'tg-ic-do-pm-alt': '&#xe952;',
		'tg-ic-do-app': '&#xe953;',
		'tg-ic-how-feedback': '&#xe954;',
		'tg-ic-how-workflow': '&#xe955;',
		'tg-ic-how-matches': '&#xe956;',
		'tg-ic-how-needs': '&#xe957;',
		'tg-ic-mobile': '&#xe958;',
		'tg-ic-other': '&#xe959;',
		'tg-ic-speed-up': '&#xe95a;',
		'tg-ic-web': '&#xe95b;',
		'tg-ic-web-alt': '&#xe95c;',
		'tg-ic-service-workflow': '&#xe95d;',
		'tg-ic-service-web': '&#xe95e;',
		'tg-ic-service-slicing': '&#xe95f;',
		'tg-ic-service-pm': '&#xe960;',
		'tg-ic-service-app': '&#xe961;',
		'tg-ic-cv-alt': '&#xe965;',
		'tg-ic-file-search': '&#xe96a;',
		'tg-ic-building': '&#xe96d;',
		'tg-ic-money-loop': '&#xe925;',
		'tg-ic-cc-stripe': '&#xe982;',
		'tg-ic-medium': '&#xe98c;',
		'tg-ic-twitter': '&#xe98e;',
		'tg-ic-twitter-square': '&#xe98d;',
		'tg-ic-linkedin': '&#xe977;',
		'tg-ic-linkedin-square': '&#xe973;',
		'tg-ic-bars': '&#xe964;',
		'tg-ic-check': '&#xe904;',
		'tg-ic-close': '&#xe907;',
		'tg-ic-cross': '&#xe963;',
		'tg-ic-attention': '&#xe905;',
		'tg-ic-warning': '&#xe922;',
		'tg-ic-add': '&#xe903;',
		'tg-ic-question': '&#xe962;',
		'tg-ic-circle': '&#xe918;',
		'tg-ic-search': '&#xe919;',
		'tg-ic-download': '&#xe90a;',
		'tg-ic-upload': '&#xe91f;',
		'tg-ic-pencil': '&#xe90c;',
		'tg-ic-attachment': '&#xe930;',
		'tg-ic-copy': '&#xe921;',
		'tg-ic-logout': '&#xe911;',
		'tg-ic-exit-door': '&#xe934;',
		'tg-ic-paper-plane': '&#xe928;',
		'tg-ic-paper-plane-outline': '&#xe936;',
		'tg-ic-chat': '&#xe900;',
		'tg-ic-headphone': '&#xe924;',
		'tg-ic-home': '&#xe92d;',
		'tg-ic-messages': '&#xe92a;',
		'tg-ic-support': '&#xe941;',
		'tg-ic-tools': '&#xe91a;',
		'tg-ic-location': '&#xe92c;',
		'tg-ic-rocket': '&#xe929;',
		'tg-ic-rocket-tilted': '&#xe90f;',
		'tg-ic-rocket-o': '&#xe935;',
		'tg-ic-rocket-circle': '&#xe92b;',
		'tg-ic-ellipsis': '&#xe902;',
		'tg-ic-colon': '&#xe901;',
		'tg-ic-filter-alt': '&#xe927;',
		'tg-ic-filter': '&#xe90d;',
		'tg-ic-arrow-left': '&#xe968;',
		'tg-ic-arrow-right': '&#xe966;',
		'tg-ic-arrow-up': '&#xe969;',
		'tg-ic-arrow-down': '&#xe967;',
		'tg-ic-caret-left': '&#xe96c;',
		'tg-ic-caret-down': '&#xe96b;',
		'tg-ic-previous': '&#xe943;',
		'tg-ic-next': '&#xe942;',
		'tg-ic-avatar': '&#xe916;',
		'tg-ic-calendar': '&#xe906;',
		'tg-ic-calendar-add': '&#xe923;',
		'tg-ic-agenda': '&#xe926;',
		'tg-ic-meter': '&#xe908;',
		'tg-ic-file': '&#xe909;',
		'tg-ic-projects': '&#xe917;',
		'tg-ic-profile': '&#xe945;',
		'tg-ic-id': '&#xe910;',
		'tg-ic-bank': '&#xe912;',
		'tg-ic-card': '&#xe913;',
		'tg-ic-wallet': '&#xe914;',
		'tg-ic-cash': '&#xe915;',
		'tg-ic-tag': '&#xe91c;',
		'tg-ic-link': '&#xe920;',
		'tg-ic-tribe': '&#xe91e;',
		'tg-ic-github': '&#xe90e;',
		'tg-ic-github-alt': '&#xe96f;',
		'tg-ic-github-square': '&#xe974;',
		'tg-ic-gitlab': '&#xe975;',
		'tg-ic-slack': '&#xe91b;',
		'tg-ic-g-drive': '&#xe90b;',
		'tg-ic-trello': '&#xe91d;',
		'tg-ic-facebook-official': '&#xe970;',
		'tg-ic-facebook-square': '&#xe971;',
		'tg-ic-facebook': '&#xe972;',
		'tg-ic-coinbase': '&#xe96e;',
		'tg-ic-harvest': '&#xe946;',
		'tg-ic-iDeal': '&#xe944;',
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
