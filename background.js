/**
 * Action for extension added into Google Chrome Explorer
 */
chrome.runtime.onInstalled.addListener(async () => {
  // let url = chrome.runtime.getURL("hello.html");
  // let tab = await chrome.tabs.create({ url });
  // console.log(`Created tab ${tab.id}`);
});

/**
 * Search a command in the runtaime Google Chrome Explorer
 */
chrome.commands.onCommand.addListener((command) => {
  alert(`Command "${command}" triggered`);
});
