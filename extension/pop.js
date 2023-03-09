let currentTabs;

document.addEventListener('DOMContentLoaded', function() {
	chrome.tabs.query({ pinned: false }, function(tabs) {
		document.getElementById('tabs_count').innerHTML = tabs.length;
	});

	if (window.screenTop !== 0 || window.screenY !== 0) {
		document.getElementById('full_screen').innerHTML = 'true';
	}
	
});