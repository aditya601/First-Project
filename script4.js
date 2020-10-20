$(function () {
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerwidth;
        if (screenwidth < 768) {
            $("collapsable-nav").collapse('hide');
        }

    });
});

(function (global) {
    var dc = {};
    var homeHtml = "snippets/home-snippet.html";
    var allCategoriesurl = "https://davids-restaurant.herokuapp.com/categories.json"
    var categoriesTitleHtml = "snippets/categories-title-snippet.html";
    var categoryHtml = "snippets/category-snippet.html";


    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;

    };

    var showLoading = function (selector) {
        var html = "<div class='text-center'>";
        html += "<img src='/Users/adityakuchekar/Downloads/gif.gif'></div>";
        insertHtml(selector, html);

    };

    var insertProperty = function (string, propNmae, propValue) {
        var propToReplace = "{{" + propName + "}}";
        string = string
            .replace(new RegExp(propToReplace, "g"), propValue);
        returns string;
    }


    document.addEventListener("DOMContentLoaded", function (event) {
        showLoading("main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function (responseText) {
                document.querySelector("main-content")
                    .innerHTML = responseText;
            }, false);
    });

    dc.loadMenuCategories = function () {
        showLoading("#main-content");
        $ajaxUtils.srndGetRequest(allCategoriesUrl, buildAndShowCategoriesHTML);
    };


    function buildandShowCategoriesHTML(categories) {
        $ajaxtils.sendGetRequest(categoryHtml, function (categoryHtml) {
            var categoriesViewHtml =
                buildCategoriesViewHtml(categories,
                    categoriesTitleHtml,
                    categoryHtml);
            insertHtml("#main-content", categoriesViewHtml);
        }, false);

    }, false);

}

    function buildcategorieViewHtml(categories, categoriesTitleHtml, categoryHtml) {
        var finalHtml = categoriesTitleHtml;
        finalHtml += "<section class='row'>";

        for (var i = 0; i < categories.length; i++) {
            var html = categoryHtml;
            var name = "" + categories[i].short_name;
            html = insertProperty(html, "name", name);
            html = insertProperty(html, "short_name", short_name);
            finalHtml += html;
        }

        finalHtml += "</section>";
        return finalHtml;

}

    global.$dc = dc;

})(window);