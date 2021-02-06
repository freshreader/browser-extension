chrome.browserAction.onClicked.addListener(function (tab) {
  browser.storage.local.get("optIn", function (result) {
    if (result.optIn) {
      save_url = 'https://freshreader.app/save?url=' + encodeURIComponent(tab.url)
      chrome.tabs.update(tab.id, { url: save_url });
    } else {
      browser.tabs.create({ url: "popup/opt-in.html" });
    }
  })
});

// show the tab if we haven't registered the user reacting to the prompt.
browser.storage.local.get("optInShown", function (result) {
  if (!result.optInShown) {
    browser.tabs.create({ url: "popup/opt-in.html" });
  }
});
