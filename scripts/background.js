chrome.browserAction.onClicked.addListener(function(tab) {
  save_url = 'https://freshreader.app/save?url='+encodeURIComponent(tab.url)
  chrome.tabs.update(tab.id, { url: save_url });
});
