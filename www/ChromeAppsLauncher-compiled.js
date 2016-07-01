'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChromeAppsLauncher = function () {
    function ChromeAppsLauncher() {
        _classCallCheck(this, ChromeAppsLauncher);
    }

    _createClass(ChromeAppsLauncher, [{
        key: 'init',
        value: function init() {
            this.bindEvents();
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            var $packed = $('#app-packed');
            var $unpacked = $('#app-unpacked');
            this.getInstalledApps(function (appList) {
                appList.forEach(function (app) {
                    if (app.isApp) {
                        var name = app.shortName || app.name;
                        var id = app.id;
                        var icon = null;
                        if (app.icons) icon = app.icons[app.icons.length - 1].url;
                        var $app = self.$genAppPanel(name, icon, id);
                        if ($app) {
                            if (app.installType === 'development') {
                                $unpacked.append($app);
                            } else {
                                $packed.append($app);
                            }
                        }
                    }
                });
            });
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            // アプリパネルがクリックされたら，アプリを起動
            $('#app-list').on('click', '.app-panel', function (e) {
                var appId = $(e.target).closest('.app-panel').attr('data-id');
                chrome.management.launchApp(appId, function () {
                    window.close();
                });
            });
        }
    }, {
        key: '$genAppPanel',
        value: function $genAppPanel(appName, appIcon, appId) {
            if (appIcon !== null) {
                var panel = '<div class="app-panel" data-id="' + appId + '">\n                    <img src="' + appIcon + '">\n                    <div class="app-name">' + appName + '</div>\n                </div>';
                return $(panel);
            }
            return false;
        }
    }, {
        key: 'getInstalledApps',
        value: function getInstalledApps(callback) {
            chrome.management.getAll(function (items) {
                callback(items);
            });
        }
    }]);

    return ChromeAppsLauncher;
}();
