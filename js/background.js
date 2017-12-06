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

chrome.extension.onMessage.addListener(
    function (message, sender, sendResponse) {
        // alert("test");
        if (message.msg === 'getAllExt') {
            debugger;
            chrome.management.getAll(function (apps) {
                sendResponse(apps);
    
    
                // chrome.tabs.query({
                //     active: true,
                //     currentWindow: true
                // }, function (tabs) {
                //     chrome.tabs.sendMessage(tabs[0].id, {
                //         greeting: "hello"
                //     }, function (respone) {
                //         console.log(respone)
                //     });
                // });
                
                
                
                // $("body").text(apps.length + ">" + JSON.stringify(apps));
            });
        }
    }
);