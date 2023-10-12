function showDiff() {
    let lastMonday = new Date();
    lastMonday.setDate(lastMonday.getDate() - (lastMonday.getDay() + 6) % 7);
    lastMonday.setHours(0, 0, 0, 0);

    let currentDateTime = new Date() - lastMonday;
    console.log(currentDateTime);

    let thisFriday = new Date();
    thisFriday.setDate(lastMonday.getDate() + 4);
    thisFriday.setHours(18, 0, 0, 0);
    thisFriday -= lastMonday;

    if (currentDateTime > thisFriday) {
        result = 100 + "%";
    } else {
        result = (currentDateTime/thisFriday)*100 + "%";
    }

    document.getElementById("showp").innerHTML = result;
    document.getElementById("pb").style.width = result;

    setTimeout(showDiff, 1000);
}

window.addEventListener("load", () => {
    showDiff();
});