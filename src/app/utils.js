// --- Date functions ---
export function formatDate(date) {
    const day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    const year = (date.getYear() + 1900).toString();

    if (month.length == 1) {
        month = "0" + month;
    }

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

export function getFutureDate(currentDate, incrementDays) {
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + incrementDays);
    return futureDate;
}

export function getPreviousMonday(date) {
    const prevMonday = new Date(date);
    return prevMonday.setDate(prevMonday.getDate() - (prevMonday.getDay() + 6) % 7);
}

// --- Time functions ---
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