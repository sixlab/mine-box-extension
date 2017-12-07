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
         if(request.topic === "btn03"){
             var tabId = sender.tab.id;

             chrome.bookmarks.getTree(function (tree) {
                 chrome.tabs.sendMessage(tabId, tree, function (respone) {

                 });
             });

             sendResponse(sender);
         }
    }
);

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