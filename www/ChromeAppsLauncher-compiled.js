"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChromeAppsLauncher = function () {
    function ChromeAppsLauncher() {
        _classCallCheck(this, ChromeAppsLauncher);
    }

    _createClass(ChromeAppsLauncher, [{
        key: "init",
        value: function init() {
            this.bindEvents();
        }
    }, {
        key: "render",
        value: function render() {
            var self = this;
            this.getInstalledApps(function (appList) {
                appList.forEach(function (app) {
                    if (app.isApp) {
                        var name = app.shortName || app.name;
                        var id = app.id;
                        var icon = null;
                        if (app.icons) {
                            icon = app.icons[app.icons.length - 1].url;
                        }
                        var $app = self.$genAppPanel(name, icon, id);
                    }
                });
            });
        }
    }, {
        key: "bindEvents",
        value: function bindEvents() {
            // アプリパネルがクリックされたら，アプリを起動
        }
    }, {
        key: "$genAppPanel",
        value: function $genAppPanel(appName, appIcon, appId) {}
    }, {
        key: "getInstalledApps",
        value: function getInstalledApps(callback) {
            chrome.management.getAll(function (items) {
                callback(items);
            });
        }
    }]);

    return ChromeAppsLauncher;
}();
