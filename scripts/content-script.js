const D_KEY_CODE = 68;

function duplicateTab() {
  chrome.storage.local.set({
    scrollY: window.scrollY,
    URL: window.location.href,
  });
  window.open(window.location.href, "_blank");
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == D_KEY_CODE && e.ctrlKey) {
    duplicateTab();
  }
});

window.addEventListener("load", () => {
  try {
    chrome.storage.local.get("scrollY", (y) => {
      console.log(y);
      chrome.storage.local.get("URL", (url) => {
        console.log(url);
        if (url.URL != null && url.URL != undefined) {
          if (url.URL == window.location.href) {
            window.scrollTo(0, y.scrollY);
            chrome.storage.local.set({
              URL: null,
            });
          }
        }
      });
    });
  } catch (error) {
    // some error ocurred
  }
});

// $('div').mouseup(function() {
//     alert(getSelectedText());
// });

// function getSelectedText() {
//     if (window.getSelection) {
//         return window.getSelection().toString();
//     } else if (document.selection) {
//         return document.selection.createRange().text;
//     }
//     return '';
// }
