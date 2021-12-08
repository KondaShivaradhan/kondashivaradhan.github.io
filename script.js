$(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();

    $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        },
        1000
    );
});

$("#article", "#img").ready(function() {
    AOS.init();
});

function sun() {

    var sg = document.getElementById("svg");
    sg.style.fill = "rgb(71,78,93)";


    document
        .getElementById("about")
        .setAttribute("style", "background:rgb(71,78,93);color:white");

}
window.addEventListener("load", function() {
    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    document.getElementById("mainl").innerHTML = "LOADED!";
    document.getElementById("nonel").style.display = "none";
    document.getElementById("nonel1").style.display = "none";
    document.getElementById("nonel2").style.display = "none";
    document.getElementById("loadimg").style.display = "none";
    setTimeout(function() {
        document.getElementById("loading").style.display = "none";
    }, 1000);
    var h = $(".html").attr('data-value');
    var c = $(".css").attr('data-value');
    var j = $(".js").attr('data-value');
    var p = $(".php").attr('data-value');
    var cc = $(".c").attr('data-value');
    var jp = $(".jp").attr('data-value');
    var ph = $(".ph").attr('data-value');
    $("#anime")
        .animate({
            width: h
        }, 1000);
    $("#anime2")
        .animate({
            width: c
        }, 1000);
    $("#anime3")
        .animate({
            width: j
        }, 1000);
    $("#anime4")
        .animate({
            width: p
        }, 1000);
    $("#anime5")
        .animate({
            width: cc
        }, 1000);
    $("#anime6")
        .animate({
            width: jp
        }, 1000);

});


var images = new Array(
    "https://lh3.googleusercontent.com/h32SW6ylK0yjbsEc0LWJmyvubltBxU0fkPR8OTezPQGtHII-r--tDOfgABSXBeTslwT3o3mlqnLwOULJG9JcmNDQwYwLcYic5viz2OGwdEfjs1wTGvDRe7Zl9nO5L4v9JNw5GDanyAUCQ4eG95jsr9HSN1OEx0h2OcI9RdEcxTukyYs9_h7VMzt-jtfGonCa-YBXpxcPK3pQK1QX4lzidctcOyPV29RM-ud8KWipkes2DYJ1tM35jEZmzBnHk6nI_-hNZXqERRSje-Olt5uUbxoutFPDCiuY3ZuT8SghWt0A3fOpwQeGBOuxukE0GoOelbP53XlPxgLUSsh_A74qKBaVXADcxNpkPRV3Cxx5UHiyPz3DFCUJ_KOWzmlB9uFdq90zaLnUb4taMWsq4vYBNbag8kLiauzS_NtgskE-i871WbcIFAjqHegGpndEodL7Qlqw8vIMQazSGDX7jWMpEt7Yp09dgbqG1PWjanV7Gda0_OpQLfyxV-8GAXfwDotqhlpD7_n88nUbwrmGbSJSMidxdMaoXp3g8LUeuTGtGTIezMX-1YQkn8Q1GaM3Rlpf0z9eZNMH1oV83ndqtD-Ch2ZLspL88pjpy__qsighVyb-S32wYK-t9mJc2-7QHJ6Il83idx206gYWj7NgPyqhunxeUJjBKg8=w2086-h1390-no",
    "https://lh3.googleusercontent.com/lzuEIeE80wbvRT33wEeCC3kYOTtLV66PRwIdewtKj0vMRMGjcWK6G1L3NHBTn8f0_DY-AbUrcLp3dBeye2nqsDzFjlXoq686e0R9zWb8G3QtHJfJrW2vL-yx3YxH6reZ2tiDzKOlS4oBu89xOCIHwU3jHMaPNrDzAia4SuZK3edl_UXEmtwhTBqt_i3eeuaZ1EMK-lyHWuPtpLtcbfZfSv63UXHx7p0ZU2Cn1ZFy7hf65443Y3As3pNSDmEblbLoyI2oM6SfNRt7OwB0Q8Wn4VwFvHC_GxN6-UIzqFseNeNtJ71-fa6gPB5bwzi1t7MhaJ0wxe8YL_VqdJ_3a7myTwdYa4O8gD2qv5sq6rOLbPrcMF-gpxCh_GREmptmI4E2trX7YOK74OhgIbRLX3Eh6_J1vIM-hgxWshpsifzrny95BNT26QZF-bIEBG89stTSKbKKe3_C7ToV2cV84cFQS7pzDuNNwKY44iMZ5eBDHscj_MnOv6jvSYQr5cgttQND_6-kq_yuPRHDLRkSXrd0DdIySZid13XJtBPCq1_-0gmHJ5vL-zcIYlKzXRCMG2Qpd4tOGACk0CT4ciZQQRJD8G99jidSAfy5AP0vbEgdBzeb-enuWuK-sBkJEbTf6D9ovlGniMeCEKHb6JL4IfQxj8W-zmWcx00=w2086-h1390-no"
);
window.onscroll = function() {
    myFunction();
};

function col() {
    var sg = document.getElementById("svg");
    sg.style.fill = "#fff";

}

function myFunction() {
    var navbar = document.getElementById("navi");
    var sticky = navbar.offsetTop;

    if (window.pageYOffset > 80) {
        document.getElementById("navis").style.transition = "all 1s";
        document.getElementById("ncons").style.transition = "all 1.5s";
        document.getElementById("ncon2s").style.transition = "all 1.5s";
        document.getElementById("navis").style.top = "0";
        document.getElementById("ncons").style.top = "20px";
        document.getElementById("ncon2s").style.top = "20px";
    } else {
        document.getElementById("navis").style.transition = "all 0.5s";
        document.getElementById("ncons").style.transition = "all 0.5s";
        document.getElementById("ncon2s").style.transition = "all 0.5s";
        document.getElementById("navis").style.top = "-100px";
        document.getElementById("ncons").style.top = "-100px";
        document.getElementById("ncon2s").style.top = "-100px";
    }
}

$('div').bind('inview', monitor);

function monitor(event, visible) {
    if (visible) {
        $("#anime")
            .animate({
                width: "50%"
            }, 1000);
        $("#anime2")
            .animate({
                width: c
            }, 1000);
        $("#anime3")
            .animate({
                width: j
            }, 1000);
        $("#anime4")
            .animate({
                width: p
            }, 1000);
    } else {
        // element has gone out of the viewport
    }
}
$('.skills').on('inview', function(event, isInView) {
    if (isInView) {
        $("#anime")
            .animate({
                width: "50%"
            }, 1000);
        $("#anime2")
            .animate({
                width: c
            }, 1000);
        $("#anime3")
            .animate({
                width: j
            }, 1000);
        $("#anime4")
            .animate({
                width: p
            }, 1000);
    } else {
        // element has gone out of viewport
    }
});

// Age calculator
function ageCalc() {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365.25;

    d = new Date("1998/05/18");
    dt = d.getDate();
    mn = d.getMonth();
    mn++;
    yy = d.getFullYear();
    var date1 = new Date(mn + "/" + dt + "/" + yy);
    var date2 = new Date();
    var timeDiff = (date2.getTime() - date1.getTime());
    var age = (timeDiff / years);
    console.log(age);

    age = ((age)).toFixed(1);
    console.log(age);

    document.getElementById("age").innerHTML = age + " Years old";

}