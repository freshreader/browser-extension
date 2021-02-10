"use strict";

const browser = (window.browser) ? window.browser : window.chrome;

window.addEventListener("load", function () {
  // set up the appearance of the popup depending on the outcome of the opt-in
  browser.storage.local.get("optIn", function (result) {
    document.getElementById("opt-in-prompt").hidden = result.optIn;
    document.getElementById("after-opt-in").hidden = !result.optIn;
  });

  document.getElementById("button-enable").addEventListener(
    "click",
    function () {
      browser.storage.local.set({ "optIn": true, "optInShown": true });
      document.getElementById("opt-in-prompt").hidden = true;
      document.getElementById("after-opt-in").hidden = false;
      window.close(); // may not work, but still attempt
    });

  document.getElementById("button-cancel").addEventListener(
    "click",
    function () {
      browser.storage.local.set({ "optIn": false, "optInShown": true });
      document.getElementById("opt-in-prompt").hidden = false;
      document.getElementById("after-opt-in").hidden = true;
    });
});