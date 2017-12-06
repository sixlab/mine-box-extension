!function () {
    debugger;
    var u = window.location.href;
    if (!/[=\/]zhaobiao\//.test(u)) return;
    u = $('#ytmForDList');
    if (!u.length) return;
    var r = /^[\u4e00-\u9fa5]{0,4}[^\u4e00-\u9fa5]+/;
    u.find('ul:first').find('a').each(function (x, v) {
        x = $(this);
        v = x.html();
        while (r.test(v))
            v = v.replace(r, '');
        v = v.replace(/^年度?/, '');
        v = v.replace(/^关于/, '');
        x.html(v)
    })
}();

var v = '公告公告告：北京市燃气集团研究院物业管理服务项目招标公告';

var r = /^[\u4e00-\u9fa5]{0,4}[^\u4e00-\u9fa5]+/;

// while ((result = r.exec(v)) != null) {
//     console.log(result);
// }

while (r.test(v))
    v = v.replace(r, '');
console.log(v)
console.log(v)
v = v.replace(/^年度?/, '');
console.log(v)
v = v.replace(/^关于/, '');
console.log(v)

rr = /[\u4e00-\u9fa5]/;
console.log(rr.test("北"))
console.log(rr.test("："))
console.log(rr.test(":"))
console.log(rr.test("北"))
console.log(rr.test("北"))
console.log(rr.test("北"))
console.log(rr.test("北"))
console.log(rr.test("北"))


