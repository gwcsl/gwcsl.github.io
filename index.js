
dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString) {
    const targetDate = dayjs(dateString);

    element.querySelector(".until__event").textContent = `Until ${ targetDate.format("MMMM D YYYY") }!`;

    setInterval(() => {
        const now = dayjs();
        const duration = dayjs.duration(targetDate.diff(now));

        if (duration.asMilliseconds() <= 0) return;

        element.querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2, "0");
        element.querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
        element.querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2, "0");
        element.querySelector(".until__numeric--days").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0");
    }, 250);
}

activateCountdown(document.getElementById("myCountdown"), "2021-12-12");

function alternateColor(color, textId, myInterval) {
    if(!myInterval){
        myInterval = 1000;    
    }
    var colors = ['firebrick', color];
    var currentColor = 1;
    document.getElementById(textId).style.color = colors[0];
    setInterval(function() {
        document.getElementById(textId).style.color = colors[currentColor];
        if (currentColor < colors.length-1) {
            ++currentColor;
        } else {
            currentColor = 0;
        }
    }, myInterval);
}
alternateColor('green','myText');

