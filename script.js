document.getElementById("page1").hidden = false;
document.getElementById("page1").style.opacity = "0%";
setTimeout(() => {
    document.getElementById("page1").style.opacity = "100%";
}, 1000);
setTimeout(() => {
    document.getElementById("page1").style.opacity = "0%";
}, 4000);
setTimeout(() => {
    document.getElementById("page1").hidden = true;
    document.getElementById("page2").style.display = "flex";
    document.getElementById("page2").style.opacity = "0%";
}, 5000);
setTimeout(() => {
    document.getElementById("page2").style.opacity = "100%";
}, 5500);

function gotoPage3() {
    document.getElementById("page2").style.opacity = "0%";
    setTimeout(() => {
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").hidden = false;

    }, 1000);
    setTimeout(() => {
        document.getElementById("page3").style.opacity = "100%";
    }, 1500);
    setTimeout(() => {
        document.getElementById("page3").style.opacity = "0%";
    }, 3500);
    setTimeout(() => {
        document.getElementById("page3").hidden = true;
        document.getElementById("page4").hidden = false;
    }, 4500);
    setTimeout(() => {
        document.getElementById("page4").style.opacity = "100%";
    }, 5000);
}

function gotoPage5() {
    document.getElementById("page4").style.opacity = "0%";
    setTimeout(() => {
        document.getElementById("page4").hidden = true;
        document.getElementById("page5").style.display = "flex";
    }, 1000);

    setTimeout(() => {
        document.getElementById("page5").style.opacity = "100%";
    }, 1500);
}

function gotoPage6() {
    document.getElementById("page5").style.opacity = "0%";
    setTimeout(() => {
        document.getElementById("page5").style.display = "none";
        document.getElementById("page6").style.display = "flex";
    }, 1000);
    setTimeout(() => {
        document.getElementById("page6").style.opacity = "100%";
    }, 1500);
}