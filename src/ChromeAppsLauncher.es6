class ChromeAppsLauncher {
    constructor () {
    }

    init () {
        this.bindEvents();
    }

    render () {
        var self = this;
        this.getInstalledApps(appList => {
            appList.forEach(app => {
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

    bindEvents () {
        // アプリパネルがクリックされたら，アプリを起動
    }

    $genAppPanel (appName, appIcon, appId) {
    }

    getInstalledApps (callback) {
        chrome.management.getAll(items => {
            callback(items);
        });
    }
}