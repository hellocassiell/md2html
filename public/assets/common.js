var $ = require('../assets/jquery.1.12.4.min.js');
var SmoothScroll = require('../assets/smooth-scroll.12.1.5.min.js');
var FastClick = require('../assets/fastclick.1.0.6.js');


$(function () {
    $("pre").wrap("<section class='code-group'><figure class='highlight plain active' data-lng='plain'><table><tbody><tr><td class='code'></td></tr></tbody></table></figure></section>"),
    $(".mobile-bar .menu-button").on("click", function () {
        $(".mobile-content").toggleClass("open")
    }), $(".mobile-mask").on("click", function () {
        $(".mobile-content").removeClass("open")
    }), $(".main-menu-item.active > .main-menu-link").on("click", function (e) {
        $(this).closest(".main-menu-item").toggleClass("active"), e.preventDefault()
    }), $(".code-group").delegate(".code-group-title[data-lng]", "click", function () {
        var e = $(this),
            t = e.closest(".code-group"),
            i = e.attr("data-lng");
        e.siblings(".active").removeClass("active"), t.find(".highlight.active").removeClass("active"), e.addClass("active"), t.find('.highlight[data-lng="' + i + '"]').addClass("active")
    }), SmoothScroll('a[href*="#"]', {
        offset: 60
    }), FastClick.attach(document.body), $("#mainMenu .main-menu-item.current > .main-menu-link").on("click", function (e) {
        $(this).closest(".main-menu-item").addClass("active"), e.preventDefault()
    })
});