function secToMin(seconds) {
    var minutes = (seconds / 60).toFixed(0);
    var seconds_left = (seconds % 60).toFixed(0);
    return minutes + ' min. ' + seconds_left + ' sek. ';
}

function secToHours(seconds) {
    var hours = (seconds / 3600).toFixed(0);
    var seconds_left = (seconds % 3600).toFixed(0);
    var result = '';
    if (hours > 0) {
        result += hours + ' godz. ';
    }
    result += secToMin(seconds_left);
    return result;
}
exports.secToMin = secToMin;
exports.secToHours = secToHours;