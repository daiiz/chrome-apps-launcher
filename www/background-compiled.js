chrome.app.runtime.onLaunched.addListener(function (launchData) {
    var DEFAULT_WIDTH = 600;
    var DEFAULT_HEIGHT = 400;
    chrome.storage.local.get(["main_window_width", "main_window_height"], function (items) {
        var w = items["main_window_width"] || DEFAULT_WIDTH;
        var h = items["main_window_height"] || DEFAULT_HEIGHT;
        createMainWindow(w, h);
    });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === 'onResizeWindow') {
        keepMainWindowSize(request.size.width, request.size.height);
    }
});

// MainWindowのサイズ変更を記憶する
var keepMainWindowSize = function (width, height) {
    chrome.storage.local.set({
        "main_window_width": width,
        "main_window_height": height
    }, null);
};

// MainWindowを開く
var createMainWindow = function (width, height) {
    chrome.app.window.create('index.html', {
        width: width,
        height: height,
        type: 'shell',
        singleton: false
    }, function (appWindow) {});
};

// chrome.app.runtime.onLaunched.addListener(function () {
//     chrome.app.window.create('index.html', {
//         bounds: {
//             width: 500,
//             height: 300
//         }
//     });
// });

//# sourceMappingURL=background-compiled.js.map