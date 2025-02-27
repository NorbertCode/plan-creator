import { getText } from "../utility/languageUtils";

const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];

export default function ColumnHeader({ day, date }) {
    let dayName = "";
    if (day != null)
        dayName = days[day];

    return (
        <div className="columnHeader">
            <p>{getText(dayName)} {date}</p>
        </div>
    );
}