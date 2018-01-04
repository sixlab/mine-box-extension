$(function () {
    chrome.management.getAll(function (apps) {
        for (let obj of apps) {
            let li = $("<li />");
            let div = $("<div />");

            if(obj.icons && obj.icons[0].url){
                div.append("<img width='16' height='16' " +
                    " src='" + obj.icons[0].url + "' >");
            }else{
                div.append("<img width='16' height='16' " +
                    " src='chrome://extension-icon/"+obj.id+"/16/0' >");
            }

            if (obj.enabled) {
                div.append('<strong>' + obj.name + '</strong>');
            } else {
                div.append('<strong>[禁]</strong>');
                div.append(obj.name);
            }
            div.append('<br />');
            div.append('<small>' + obj.description + '</small>');
            div.append('<br />');
            div.append('<br />');
            li.append(div);

            $(".mcd-menu").append(li);
            $(".container").append(JSON.stringify(obj));
            $(".container").append("<br />");
            $(".container").append("<br />");
            $(".container").append("<br />");
            $(".container").append("<br />");
        }
    });
});
