function detectIE() {
    var e = window.navigator.userAgent,
        n = e.indexOf("MSIE ");
    if (n > 0) return parseInt(e.substring(n + 5, e.indexOf(".", n)), 10);
    if (e.indexOf("Trident/") > 0) {
        var t = e.indexOf("rv:");
        return parseInt(e.substring(t + 3, e.indexOf(".", t)), 10)
    }
    var r = e.indexOf("Edge/");
    return r > 0 && parseInt(e.substring(r + 5, e.indexOf(".", r)), 10)
}
detectIE() && document.getElementsByTagName("html")[0].classList.add("ie");