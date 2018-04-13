var template = `
<html lang="zh">

<head>
    <meta charset="utf-8">
    <title>使用SDK进行开发</title>
    <meta name="description" content="ProductAI® provides state-of-the-art APIs for visual product recognition based on artificial intelligence.">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <style>
        @font-face {
            font-family: Consolas;
            font-style: normal;
            font-weight: 400;
            src: local('Consolas'), format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215
        }

        @font-face {
            font-family: 'Droid Sans';
            font-style: normal;
            font-weight: 400;
            src: local('Droid Sans Regular'), local('DroidSans-Regular'),  format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215
        }
    </style>
    <script src="https://hm.baidu.com/hm.js?6733c4a4460763145f64601e0cdb020c"></script>
    <script>
        var _hmt = _hmt || [];
        ! function () {
            var e = document.createElement("script");
            e.src = "https://hm.baidu.com/hm.js?6733c4a4460763145f64601e0cdb020c";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }()
    </script>
   <script>
   
$(function () {
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
   </script>
</head>

<body class="page">
    <h1 class="hide">Productai</h1>
    <header id="header" class="page-hd">
        <div class="mobile-bar">
            <button class="menu-button" type="button">
                <i class="fa fa-list"></i>
            </button>
        </div>
        <a href="/zh" class="page-logo">
            <img src="http://developers.productai.com/images/logo.svg">
            <span class="slogan">开发者文档</span>
        </a>
        <ul class="page-nav">
            <li class="page-nav-item active">
                <a href="/zh/quick_start/" target="_self" class="page-nav-link">快速开始</a>
            </li>
            <li class="page-nav-item">
                <a href="/zh/reference/" target="_self" class="page-nav-link">参考文档</a>
            </li>
            <li class="page-nav-item">
                <a href="/zh/console/" target="_self" class="page-nav-link">控制台教程</a>
            </li>
            <li class="page-nav-item">
                <a href="/zh/faq/" target="_self" class="page-nav-link">FAQ</a>
            </li>
            <li class="page-nav-item">
                <a href="https://www.productai.cn/trial?from=developers.productai.cn" target="_blank" class="page-nav-link">免费试用</a>
            </li>
        </ul>
        <footer class="page-hd-ft">
            <a href="//console.productai.cn/" class="page-hd-trial" target="_blank">进入ProductAI </a>
            <a href="/en/" class="page-hd-global" target="_self">
                <i class="fa fa-globe dib"></i>
                <span class="dib">English</span>
            </a>
        </footer>
    </header>
    <aside class="mobile-content">
        <nav class="mobile-content-inner">
            <ul class="mobile-nav">
                <li class="mobile-nav-item active">
                    <a href="/zh/quick_start/" target="_self" class="mobile-nav-link">
                        <span>快速开始</span>
                    </a>
                    <ul class="mobile-nav">
                        <li class="mobile-nav-item">
                            <a href="/zh/quick_start/" class="mobile-nav-link">
                                <span>平台介绍</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item active">
                            <a href="/zh/quick_start/sdk" class="mobile-nav-link">
                                <span>使用SDK进行开发</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/quick_start/api" class="mobile-nav-link">
                                <span>使用API进行开发</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/quick_start/language" class="mobile-nav-link">
                                <span>语言支持</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/quick_start/region" class="mobile-nav-link">
                                <span>地区支持</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="mobile-nav-item">
                    <a href="/zh/reference/" target="_self" class="mobile-nav-link">
                        <span>参考文档</span>
                    </a>
                    <ul class="mobile-nav">
                        <li class="mobile-nav-item">
                            <a href="/zh/reference/" class="mobile-nav-link">
                                <span>搜索基础</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/reference/image_search" class="mobile-nav-link">
                                <span>图片搜索服务</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/reference/product_search" class="mobile-nav-link">
                                <span>商品搜索服务</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/reference/detect" class="mobile-nav-link">
                                <span>检测与定位服务</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/reference/classify" class="mobile-nav-link">
                                <span>分析与标注服务</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/reference/general_tagging" class="mobile-nav-link">
                                <span>通用标注服务</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/reference/color" class="mobile-nav-link">
                                <span>色彩标注服务</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/reference/fashion_analysis" class="mobile-nav-link">
                                <span>时尚分析服务</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/reference/batch" class="mobile-nav-link">
                                <span>批量图像数据处理</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="mobile-nav-item">
                    <a href="/zh/console/" target="_self" class="mobile-nav-link">
                        <span>控制台教程</span>
                    </a>
                    <ul class="mobile-nav">
                        <li class="mobile-nav-item">
                            <a href="/zh/console/" class="mobile-nav-link">
                                <span>以图搜图服务搭建教程</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/console/detect" class="mobile-nav-link">
                                <span>图像内物体检测教程</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/console/classify" class="mobile-nav-link">
                                <span>图像分析与标注教程</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/console/password" class="mobile-nav-link">
                                <span>如何重置密码</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/console/batch" class="mobile-nav-link">
                                <span>如何使用批量服务</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/console/access_key" class="mobile-nav-link">
                                <span>如何获取access_key_id</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="mobile-nav-item">
                    <a href="/zh/faq/" target="_self" class="mobile-nav-link">
                        <span>FAQ</span>
                    </a>
                    <ul class="mobile-nav">
                        <li class="mobile-nav-item">
                            <a href="/zh/faq/" class="mobile-nav-link">
                                <span>帐号相关</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/faq/data" class="mobile-nav-link">
                                <span>数据相关</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/faq/sdk" class="mobile-nav-link">
                                <span>SDK相关</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a href="/zh/faq/error" class="mobile-nav-link">
                                <span>错误相关</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="mobile-nav-item">
                    <a href="https://www.productai.cn/trial?from=developers.productai.cn" target="_blank" class="mobile-nav-link">
                        <span>免费试用</span>
                    </a>
                </li>
                <li class="mobile-nav-split"></li>
                <li class="mobile-nav-item">
                    <a href="//console.productai.cn/" class="mobile-nav-link" target="_blank">
                        <span>进入ProductAI</span>
                    </a>
                </li>
                <li class="mobile-nav-item">
                    <a href="/en/" class="mobile-nav-link" target="_self">
                        <i class="fa fa-globe dib"></i>
                        <span class="dib">English</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="mobile-mask"></div>
    </aside>
    <aside class="sidebar">
        <div class="sidebar-inner">
            <ul class="main-menu" id="mainMenu">
                <li class="main-menu-item">
                    <a href="/zh/quick_start/" class="main-menu-link">平台介绍
                        <i class="fa fa-angle-left main-menu-link-icon"></i>
                    </a>
                </li>
                <li class="main-menu-item active">
                    <a href="/zh/quick_start/sdk" class="main-menu-link">使用SDK进行开发
                        <i class="fa fa-angle-left main-menu-link-icon"></i>
                    </a>
                    <ol class="main-menu">
                        <li class="main-menu-item main-menu-level-2">
                            <a class="main-menu-link" href="#Python-SDK">
                                <span class="main-menu-text">Python SDK</span>
                            </a>
                        </li>
                        <li class="main-menu-item main-menu-level-2">
                            <a class="main-menu-link" href="#PHP-SDK">
                                <span class="main-menu-text">PHP SDK</span>
                            </a>
                        </li>
                        <li class="main-menu-item main-menu-level-2">
                            <a class="main-menu-link" href="#Java-SDK">
                                <span class="main-menu-text">Java SDK</span>
                            </a>
                        </li>
                        <li class="main-menu-item main-menu-level-2">
                            <a class="main-menu-link" href="#Net-SDK">
                                <span class="main-menu-text">.Net SDK</span>
                            </a>
                        </li>
                        <li class="main-menu-item main-menu-level-2">
                            <a class="main-menu-link" href="#创建第一个搜索服务">
                                <span class="main-menu-text">创建第一个搜索服务</span>
                            </a>
                        </li>
                    </ol>
                </li>
                <li class="main-menu-item">
                    <a href="/zh/quick_start/api" class="main-menu-link">使用API进行开发
                        <i class="fa fa-angle-left main-menu-link-icon"></i>
                    </a>
                </li>
                <li class="main-menu-item">
                    <a href="/zh/quick_start/language" class="main-menu-link">语言支持
                        <i class="fa fa-angle-left main-menu-link-icon"></i>
                    </a>
                </li>
                <li class="main-menu-item">
                    <a href="/zh/quick_start/region" class="main-menu-link">地区支持
                        <i class="fa fa-angle-left main-menu-link-icon"></i>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
    <div class="page-bd">
        <article class="post">
            <header class="post-hd">
                <h1>{{{title}}}</h1>
            </header>
            <div class="post-bd">
                {{{content}}}
            </div>
        </article>
    </div>
    <script>
        window.PAGE_TYPE = "quick_start"
    </script>
</body>

</html>
`;

module.exports = template;