export function timeToFloat(time) {
    const hours = Math.floor(time / 100);
    const minutes = (time % 100) / 60
    return hours + minutes
}

export function timeToStr(time) {
    const hours = Math.floor(time / 100).toString();
    let minutes = (time % 100).toString();
    if (minutes == "0")
        minutes = "00";
    return hours + ":" + minutes;
}