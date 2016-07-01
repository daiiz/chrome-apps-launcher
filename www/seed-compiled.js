// windowの形状記憶
var tmpTimer = false;
window.addEventListener('resize', function (e) {
    if (tmpTimer !== false) {
        window.clearTimeout(tmpTimer);
    }
    tmpTimer = window.setTimeout(function () {
        // リサイズが完了したときだけ反応する
        chrome.runtime.sendMessage({
            type: "onResizeWindow",
            size: { width: window.innerWidth, height: window.innerHeight }
        }, null);
    }, 300);
}, false);

//# sourceMappingURL=seed-compiled.js.map