function secToMin(seconds) {
    var minutes = (seconds / 60).toFixed(0);
    var secondsLeft = (seconds % 60).toFixed(0);
    return minutes + ' min. ' + secondsLeft + ' sek. ';
}

function secToHours(seconds) {
    var hours = (seconds / 3600).toFixed(0);
    var secondsLeft = (seconds % 3600).toFixed(0);
    var result = '';
    if (hours > 0) {
        result += hours + ' godz. ';
    }
    result += secToMin(secondsLeft);
    return result;
}
exports.secToMin = secToMin;
exports.secToHours = secToHours;