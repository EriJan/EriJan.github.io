
var baseIngr = [];
// var cakeCount;

function setLocalCakeCount() {
    "use strict";
    // Code borrowed from w3C.
    // Check browser support
    if (typeof (Storage) !== "undefined") {
        // Store
        if (window.localStorage.getItem("cakeCount")) {
            var localCakeCount;
            localCakeCount = document.getElementById("numCakes").value;
            window.localStorage.setItem("cakeCount", localCakeCount);
        } else {
            window.localStorage.setItem("cakeCount", 1);
        }
    }
}


function updateRecipe() {
    "use strict";
    var i, numCakes, asideElement, ingrList;
    numCakes = document.getElementById("numCakes").value;
    asideElement = document.getElementsByTagName("aside")[0];
    ingrList = asideElement.getElementsByTagName("li");
    for (i = 0; i < ingrList.length; i++) {
        var tempStr = ingrList[i].textContent;
        var tempNumber = parseInt(tempStr.match(/[0-9]+/));
        if (typeof (baseIngr[i]) === "undefined") {
            baseIngr[i] = tempNumber;
        }
        tempNumber = baseIngr[i] * numCakes;
        tempStr = tempStr.replace(/[0-9]+/, tempNumber);
        ingrList[i].textContent = tempStr;
    }
    setLocalCakeCount();
}

window.oninput = function () {
    "use strict";
    updateRecipe();
};

window.onload = function () {
    "use strict";
    // Code borrowed from w3C.
    // Check browser support
    if (typeof (Storage) !== "undefined") {
        // Store
        if (window.localStorage.getItem("cakeCount")) {
            document.getElementById("numCakes").value = parseInt(window.localStorage.getItem("cakeCount"));
            updateRecipe();
        }
    }
};
// source http://api.jquery.com/hover/
$(document).ready(function () {
    $(".votingStars span").hover(
        function () {
            $(this).prevAll().text("\u2605");
            $(this).text("\u2605");
        }, function () {
            $(this).prevAll().text("\u2606");
             $(this).text("\u2606");
        }
    );
});
