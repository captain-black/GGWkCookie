
// 获取cookie对象
var app_cookieNames = document.cookie.split('; ').map(

    function(cookie) {
        return cookie.split('=')[0];
    }
)

// 此代码片段主要用于获取网页的根域名
var app_rootDomain = document.domain.split('.').slice(-2).join('.');


// 添加cookie,且直接添加在根域名
function app_setCookie(name, value) {

    // 检测cookie如果没有的话，再进行添加
    if (app_cookieNames.indexOf(name) == -1) {
        // 直接将cookie中到根域名
        document.cookie = name + '=' + value + ';domain=' + app_rootDomain + ';path=/';             
    }
}


// 删除某个cookie,且直接从根域名删除
function app_deleteCookie(name) {

    var date = new Date();

    date.setTime(date.getTime() -1);

    document.cookie = name + '=;domain=' + app_rootDomain + ';expires=' + date.toGMTString() + ';path=/';
}
