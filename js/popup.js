meFun = {};

$(function () {
    meFun.qrCode = function () {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            let content = $("#tab1-content");
            let img = $("<div/>");
            content.append(img);
            let url = tabs[0].url;
            new QRCode(img[0], url);
            content.append($("<div/>").text("标题：" + tabs[0].title));
            content.append($("<div/>").text(JSON.stringify(tabs[0])));
        });
    };
});

chrome.extension.onMessage.addListener(
    function (message, sender, sendResponse) {
        console.log(message);
        if (message.msg === 'initHtml') {
            sendResponse("i got it");
        }
    }
);