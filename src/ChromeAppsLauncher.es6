class ChromeAppsLauncher {
    constructor () {
    }

    init () {
        this.bindEvents();
    }

    render () {
        var self = this;
        var $stage = $('#app-list');
        this.getInstalledApps(appList => {
            appList.forEach(app => {
                if (app.isApp) {
                    var name = app.shortName || app.name;
                    var id = app.id;
                    var icon = null;
                    if (app.icons) icon = app.icons[app.icons.length - 1].url;
                    var $app = self.$genAppPanel(name, icon, id);
                    if ($app) $stage.append($app);
                }
            });
        });

    }

    bindEvents () {
        // アプリパネルがクリックされたら，アプリを起動
        $('#app-list').on('click', '.app-panel', e => {
            var appId = $(e.target).closest('.app-panel').attr('data-id');
            chrome.management.launchApp(appId, () => {
                window.close();
            });
        });
    }

    $genAppPanel (appName, appIcon, appId) {
        if (appIcon !== null) {
            var panel = `<div class="app-panel" data-id="${appId}">
                    <img src="${appIcon}">
                    <div class="app-name">${appName}</div>
                </div>`;
            return $(panel);
        }
        return false;
    }

    getInstalledApps (callback) {
        chrome.management.getAll(items => {
            callback(items);
        });
    }
}