meFun = {};

$(function () {
    meFun.qrCode = function () {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            let content = $("#tab1-content");
            let html = $("#s1m1tpl").html();
            content.append(html);

            let url = tabs[0].url;
            new QRCode($("#s1m1div")[0], url);

            let desc = $("#s1m1desc");
            desc.append($("<div style='word-wrap: break-word;'/>").text("标题：" + tabs[0].title));
            desc.append($("<div style='word-wrap: break-word;'/>").text(JSON.stringify(tabs[0])));
        });
    };
    
    meFun.qrCode();
    
    meFun.replaceHtml = function (selector) {
        let content = $("#tab1-content");
        content.html("");

        let html = $(selector).html();

        content.append(html);
    };

    $("#page").click(function () {
        var id = chrome.i18n.getMessage("@@extension_id");
        window.open("chrome-extension://" + id + "/index.html");
    });

    $("#setting").click(function () {
        var id = chrome.i18n.getMessage("@@extension_id");
        window.open("chrome-extension://" + id + "/html/options.html");
    });
});

$(function () {
    $(document).on("click","#s1m2btn",function(){
        let text = $("#s1m2input").val();

        new QRCode($("#s1m2div")[0], text);
    });
});

$(function () {
	//获取预览图片路径
	let getObjectURL = function(file){
	    let url = null ; 
	    if (window.createObjectURL!=undefined) { // basic
	        url = window.createObjectURL(file) ;
	    } else if (window.URL!=undefined) { // mozilla(firefox)
	        url = window.URL.createObjectURL(file) ;
	    } else if (window.webkitURL!=undefined) { // webkit or chrome
	        url = window.webkitURL.createObjectURL(file) ;
	    }
	    return url ;
	}

    $(document).on("click","#s1m3btn",function(){
        let decodeQRIMG = $("#s1m3input")[0].files[0];
        let image = getObjectURL(decodeQRIMG);
        qrcode.decode(image);
        qrcode.callback = function(imgMsg){
            $("#s1m3div").text(imgMsg);
        }
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

var decodeQRIMG = "";
