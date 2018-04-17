let toggle = true;

chrome.browserAction.onClicked.addListener((_) => {
	chrome.tabs.executeScript({ file: toggle ? 'enter.js' : 'exit.js', }, (_) => toggle = !toggle);
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'assets/pencil_48.png',
    title: 'Edit',
    message: `${toggle ? 'Entering' : 'Exiting'} edit mode.`,
  });
});
