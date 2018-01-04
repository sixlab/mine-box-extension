//
//
// chrome.runtime.sendMessage(
//     "hello",
//     function (response) {
//         console.log(response)
//     }
// );
//
//
// chrome.extension.onMessage.addListener(
//     function (message, sender, sendResponse) {
//         console.log(message);
//         if (message.msg === 'initHtml') {
//             sendResponse("i got it");
//         }
//     }
// );

// 接受从 content 的 chrome.runtime.sendMessage 发来的消息
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        let topic = request.topic;
        switch (topic){
            case "btn03":
                btn03(request, sender, sendResponse);
                break;
            case "readfree":
                readfree(request, sender, sendResponse);
                break;
        }
    }
);

function btn03(request, sender, sendResponse) {
    var tabId = sender.tab.id;

    chrome.bookmarks.getTree(function (tree) {
        chrome.tabs.sendMessage(tabId, tree, function (respone) {

        });
    });

    sendResponse("ok");
}

function readfree(request, sender, sendResponse) {
    let today = new Date();
    let text = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    switch (request.message.type){
        case "daily":
            let checkDate = localStorage.getItem("checkDate");
            if (text != checkDate) {
                sendResponse({
                    success: false,
                    checkDate: checkDate
                });
            } else {
                sendResponse({
                    success: true,
                    checkDate: checkDate
                });
            }
            break;
        case "check":
            localStorage.setItem("checkDate", text);
            sendResponse({
                success: true,
                checkDate: text
            });
            break;
    }
}

// chrome.extension.onMessage.addListener(
//     function (message, sender, sendResponse) {
//         // alert("test");
//         console.log("back:",message,sender)
//         if (message.msg === 'getAllExt') {
//             debugger;
//             chrome.management.getAll(function (apps) {
//                 sendResponse(apps);
//
//
//                 // chrome.tabs.query({
//                 //     active: true,
//                 //     currentWindow: true
//                 // }, function (tabs) {
//                 //     chrome.tabs.sendMessage(tabs[0].id, {
//                 //         greeting: "hello"
//                 //     }, function (respone) {
//                 //         console.log(respone)
//                 //     });
//                 // });
//
//
//
//                 // $("body").text(apps.length + ">" + JSON.stringify(apps));
//             });
//
//
//             chrome.bookmarks.getTree(function (apps) {
//                 // sendResponse(apps);
//
//
//                 // chrome.tabs.query({
//                 //     active: true,
//                 //     currentWindow: true
//                 // }, function (tabs) {
//                 //     chrome.tabs.sendMessage(tabs[0].id, {
//                 //         greeting: "hello"
//                 //     }, function (respone) {
//                 //         console.log(respone)
//                 //     });
//                 // });
//
//
//                 // $("body").text(apps.length + ">" + JSON.stringify(apps));
//             });
//         }
//     }
// );