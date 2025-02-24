export function formatDate(date) {
    // Converts date object to a nice string in format d.mm.yyyy
    const day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    const year = (date.getYear() + 1900).toString();

    if (month.length == 1) {
        month = "0" + month;
    }

    return day + "." + month + "." + year;
}

export function convertToDate(dateStr) {
    // Converts string in format d.mm.yyyy to a date object
    const dateSplit = dateStr.split(".");
    return new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]);
}

export function isDateBetween(currentDateStr, startDateStr, endDateStr) {
    const currentDate = convertToDate(currentDateStr);
    return convertToDate(startDateStr) <= currentDate && currentDate <= convertToDate(endDateStr);
}

export function getFutureDate(currentDate, incrementDays) {
    // Returns date object of the date in incrementDays days
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + incrementDays);
    return futureDate;
}

export function getPreviousMonday(date) {
    const prevMonday = new Date(date);
    return prevMonday.setDate(prevMonday.getDate() - (prevMonday.getDay() + 6) % 7);
}