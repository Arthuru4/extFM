document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.onMessage.addListener(
        function (message, callback) {

            if (message.Message === 'Play') {
                chrome.tabs.executeScript({
                    code: 'if (document.querySelector(\'.i_stop\')) document.querySelector(\'.i_stop\').dispatchEvent(new Event(\'click\'))\n' +
                        '\n' +
                        ' else document.querySelector(\'.i_play\').dispatchEvent(new Event(\'click\'))'
                });
            }
        }
    );
});
