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

    meFun.qrText = function () {
        let content = $("#tab1-content");
        content.html("");

        let input = $("<input/>");
        let btn = $("<button>生成二维码</button>");
        let img = $("<div/>");

        content.append(input);
        content.append(btn);
        content.append(img);

        btn.click(function(){
            let text = input.val();

            new QRCode(img[0], text);
        });
    };

    meFun.qrCode();

    $("#page").click(function () {
        var id = chrome.i18n.getMessage("@@extension_id");
        window.open("chrome-extension://" + id + "/index.html");
    });

    $("#setting").click(function () {
        var id = chrome.i18n.getMessage("@@extension_id");
        window.open("chrome-extension://" + id + "/html/options.html");
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