function showDiff() {
    let date = Date.now()-Date.monday();
    let weekend = Date.monday().next().friday().at("18:00")-Date.monday();
    console.log("date: " + date);
    console.log("weekend: " + weekend);
    if (date > weekend) {
        result = 100 + "%";
    } else {
        result = (date/weekend)*100 + "%";
    }

    document.getElementById("showp").innerHTML = result;
    document.getElementById("pb").style.width = result;

    setTimeout(showDiff, 1000);
}

window.addEventListener("load", () => {
    showDiff();
});