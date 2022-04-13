$(document).ready(function () {
    var disableDevtoolScript = document.createElement('script');
    disableDevtoolScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/disable-devtool/disable-devtool.min.js');
    document.head.appendChild(disableDevtoolScript);
    $('body').bind('cut copy', function (e) {
        e.preventDefault();
    });
});

$(document).ready(function () {
    $('body').bind('cut copy', function (e) {
        e.preventDefault();
    });
    
    $("body").on("contextmenu", function (e) {
        return false;
    });

    $("body").on("selectstart", function (e) {
        return false;
    });

    $("body").on("dragstart", function (e) {
        return false;
    });

    $("body").on("drop", function (e) {
        return false;
    });
});

$(window).load(function () {
    const e2407eda5cb9b29dda863ea91c51974cbfc4efea = Math.random().toString(36).substring(2, 7);
    const fa5c5172cab7de97cc39b2ddda5f16f1 = function (args) {
        return args[1].toString().toLowerCase() == "purchase" && window.location.pathname.includes("products/")
    }

    window[e2407eda5cb9b29dda863ea91c51974cbfc4efea] = fbq;

    fbq = function () {
        if (fa5c5172cab7de97cc39b2ddda5f16f1(arguments)) {
            return;
        }
        window[e2407eda5cb9b29dda863ea91c51974cbfc4efea].callMethod ? window[e2407eda5cb9b29dda863ea91c51974cbfc4efea].callMethod.apply(window[e2407eda5cb9b29dda863ea91c51974cbfc4efea], arguments) : window[e2407eda5cb9b29dda863ea91c51974cbfc4efea].queue.push(arguments)
    }

    _fbq = fbq;

    const auxfn_fbPixelAPI = fbPixelAPI;
    fbPixelAPI = function (eventName, eventData, eventID, customer) {
        if (eventName.toLowerCase() == "purchase" && window.location.pathname.includes("products/")) {
            return;
        }
        auxfn_fbPixelAPI(eventName, eventData, eventID, customer);
    };
});