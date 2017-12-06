$(function () {
    $("body").text("pop");
    chrome.management.getAll(function (apps) {
        $("body").text(apps.length+">"+JSON.stringify(apps));
    });
    
    
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            greeting: "hello"
        }, function (respone) {
            console.log(respone)
        });
    });
});

chrome.extension.onMessage.addListener(
    function (message, sender, sendResponse) {
        console.log(message);
        if (message.msg === 'initHtml') {
            sendResponse("i got it");
        }
    }
);