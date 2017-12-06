$(function () {
    
    var manifest = {
        "chrome_url_overrides": {
            "newtab": "html/tab.html"
        },
    }
    
    function replace(tpl, obj) {
        var html = "";
        if(obj){
            html = tpl;
            
            var icons = obj.icons;
            var url = "";
            
            if(icons){
                var icon = obj.icons[2];
                if (!icon) {
                    icon = obj.icons[0];
                }
                
                if (icon) {
                    url = icon.url;
                }
            }
            if (!url) {
                url = "https://www.baidu.com/favicon.ico";
            }
            
            html = html.replace("mark1", url);
            html = html.replace("mark2", obj.name);
            html = html.replace("mark3", obj.id);
            html = html.replace("mark4", obj.description);
            html = html.replace("mark5", JSON.stringify(obj));
        }
        return html
    }
    
    chrome.management.getAll(function (apps) {
        var tpl = $("#labChromeExtTabTpl").html();
        var html = "";
        for (let app of apps) {
            html += replace(tpl,app);
        }
        $("#labChromeExtTabContent").html(html);
    });
    
    $(document).off("click", ".labChromeExtTabItem");
    $(document).on("click", ".labChromeExtTabItem", function (e) {
        var item = $(this).find(".labChromeExtTabItemJson");
        var icon = $(this).find("img").attr("src");
        item.toggle();
        
        var data = JSON.parse(item.text());
        
        chrome.notifications.create('lab-chrome-ext_' + (new Date()).getTime(), {
            type: "basic",
            iconUrl: icon,
            title: data.name,
            message: item.html()
        }, function (id) {
            setTimeout(function () {
                chrome.notifications.clear(id, function (d) {
                    console.log('clear ', id)
                })
            }, 3000);
        })
    });
    
});