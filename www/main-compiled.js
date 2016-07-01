'use strict';

// use: jQuery

var localSearch = function localSearch(v) {
    var keyword = v.toLowerCase().trim();
    var cards = $('.app-panel');
    if (keyword.length === 0) {
        // すべて表示
        cards.show();
    } else {
        // タイトル部分一致検索
        cards.each(function () {
            var $card = $(this);
            var title = $card.find('.app-name').html().toLowerCase().trim();
            if (title.indexOf(keyword) === -1) {
                $card.hide();
            } else {
                $card.show();
            }
        });
    }
};

$(function () {
    var cal = new ChromeAppsLauncher();
    cal.init();
    cal.render();

    // 検索
    $('#search-input').on('keyup', function (e) {
        localSearch($(e.target).val());
    });

    // フォーカス移動
    $(window).on('keypress', function (e) {
        if (document.activeElement.id !== 'search-input') {
            console.info(document.activeElement.id);
            $('#search-input')[0].focus();
        }
    });
});
