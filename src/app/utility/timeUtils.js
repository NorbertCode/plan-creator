export function timeToFloat(time) {
    // Converts from format HHMM (like 1130) to a float where the hour is the integer part and minutes are the decimal part
    // For example 1130 becomes 11.5, 1515 becomes 15.25
    const hours = Math.floor(time / 100);
    const minutes = (time % 100) / 60
    return hours + minutes
}

export function timeToStr(time) {
    // Converts from format HHMM to HH:MM, for example 1130 becomes 11:30
    const hours = Math.floor(time / 100).toString();
    let minutes = (time % 100).toString();
    if (minutes == "0")
        minutes = "00";
    return hours + ":" + minutes;
}