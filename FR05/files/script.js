$(document).ready(function() {
    function b() {
        $("html, body").animate({
            scrollTop: $(document).height()
        },
        1500)
    }
    setTimeout(b, 2500);
    var g = window.navigator.userAgent.toLowerCase(),
    a = /'UCBrowser|MiuiBrowser|SamsungBrowser|opera mini|x11/i.test(g);
    var e = $("videor");
    if (a) {
        e.hide("hide");
        $(".video-block").addClass("mobile")
    }
    e.on("click",
    function(i) {
        i.preventDefault();
        e[0].play()
    });
    e.trigger("click");
    var h = $(".step-btn");
    var f = 0;
    var c = $(".step-item");
    var d = c.length;
    h.not(".submit-btn").on("click",
    function() {
        f++;
        c.hide().eq(f).fadeIn();
        b()
    })
});