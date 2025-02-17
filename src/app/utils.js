// --- Date functions ---
export function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getYear() + 1900;
    return day + "." + month + "." + year;
}

export function convertToDate(dateStr) {
    const dateSplit = dateStr.split(".");
    return new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]);
}

export function isDateBetween(currentDateStr, startDateStr, endDateStr) {
    const currentDate = convertToDate(currentDateStr);
    return convertToDate(startDateStr) <= currentDate && currentDate <= convertToDate(endDateStr);
}

// --- Time functions ---
export function timeToFloat(time) {
    const hours = Math.ceil(time / 100);
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