$(function () {
    //将需要的 HTML 代码放到页面
    $("body").after("<div id='me-switch'></div>");
    $("body").after("<div id='me-content'></div>");
    $("body").after("<ul id='me-sudoku' style='display: none'>" +
        "    <li class='me-sudoku-item' id='me-show-Qr'>" +
        "        <div><i class='iconfont icon-erweima-copy'></i></div>" +
        "        <div>二维码</div>" +
        "    <li class='me-sudoku-item' id='me-zhihu-img'>" +
        "        <div><i class='iconfont icon-erweima-copy'></i></div>" +
        "        <div>知乎图片</div>" +
        "        </a></li>" +
        "    <li class='me-sudoku-item'>" +
        "        <div><i class='iconfont icon-daikaifa'></i></div>" +
        "        <div>settings</div>" +
        "    </li>" +
        "    <li class='me-sudoku-item'>" +
        "        <div><i class='iconfont icon-daikaifa'></i></div>" +
        "        <div>E-mail</div>" +
        "    </li>" +
        "    <li class='me-sudoku-item'>" +
        "        <div><i class='iconfont icon-daikaifa'></i></div>" +
        "        <div>Clock</div>" +
        "    </li>" +
        "    <li class='me-sudoku-item'>" +
        "        <div><i class='iconfont icon-daikaifa'></i></div>" +
        "        <div>Files</div>" +
        "    </li>" +
        "    <li class='me-sudoku-item'>" +
        "        <div><i class='iconfont icon-daikaifa'></i></div>" +
        "        <div>Favourites</div>" +
        "    </li>" +
        "    <li class='me-sudoku-item'>" +
        "        <div><i class='iconfont icon-daikaifa'></i></div>" +
        "        <div>Mobile</div>" +
        "    </li>" +
        "    <li class='me-sudoku-item'>" +
        "        <div><i class='iconfont icon-daikaifa'></i></div>" +
        "        <div>Exit</div>" +
        "    </li>" +
        "</ul>");

    // 悬浮球拖拽
    !function () {
        var oDiv = document.getElementById('me-switch');

        tqfc(oDiv);

        function tqfc(obj) {
            let click = false;
            obj.onmousedown = function (ev) {
                click = true;

                var ev = ev || event;
                var oDivX = ev.clientX - this.offsetLeft;
                var oDivY = ev.clientY - this.offsetTop;
                obj.style.backgroundColor = '#ee6100';

                //加入兼容问题
                if (obj.setCapture) {
                    obj.setCapture();
                }

                document.onmousemove = function (ev) {  //注意这里是document
                    click = false;

                    var ev = ev || event;
                    L = ev.clientX - oDivX;
                    T = ev.clientY - oDivY;

                    //限制不超出可视范围
                    if (L < 100) {  //磁性吸附重点在于这里,原本是0,改成100
                        L = 0;
                    } else if (L > document.documentElement.clientWidth - obj.offsetWidth) {
                        L = document.documentElement.clientWidth - obj.offsetWidth;
                    }

                    if (T < 0) {
                        T = 0;
                    } else if (T > document.documentElement.clientHeight - obj.offsetHeight) {
                        T = document.documentElement.clientHeight - obj.offsetHeight;
                    }

                    obj.style.left = L + 'px';
                    obj.style.top = T + 'px';
                };
                return false;
            };
            obj.onmouseup = function () {
                if (click) {
                    if ($("#me-sudoku").is(":visible") || $("#me-content").is(":visible")) {
                        $("#me-sudoku").hide();
                        $("#me-content").hide();
                    } else {
                        $("#me-sudoku").show();
                    }
                }
                document.onmousedown = document.onmousemove = null;
                obj.style.backgroundColor = '#1199FF';

                //加入兼容问题
                if (obj.releaseCapture) {
                    obj.releaseCapture();
                }
            }
        }
    }();

    // 九宫格菜单
    !function () {
        // var url = chrome.extension.getURL('img/logo.png');
        // url = chrome.extension.getURL('iconfont/iconfont.svg');

        function showQr() {
            new QRCode(document.getElementById("me-content"), location.href);
            $("#me-content").show();
        }

        function showZhihuImg() {
            $("figure .VagueImage").each(function () {
                var ele = $("<img class='origin_image zh-lightbox-thumb lazy' width='960' data-rawwidth='960' />")
                var url = $(this).attr("data-src");
                ele.attr("src", url);
                ele.attr("data-original", url);
                ele.attr("data-actualsrc", url);

                $(this).parent().replaceWith(ele);
            });
        }

        $(".me-sudoku-item").on("click", function () {
            debugger;
            if (this.id === "me-show-Qr") {
                showQr();
            }

            if (this.id === "me-zhihu-img") {
                showZhihuImg();
            }

            $("#me-sudoku").hide();
        });
    }();

});