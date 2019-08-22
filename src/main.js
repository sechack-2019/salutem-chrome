document.querySelector('button').addEventListener('click', () => {
    chrome.tabs.getSelected(null, tabs => {
        chrome.tabs.sendMessage(tabs.id, 'Action');
    });
});
