const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export default function ColumnHeader({ day, date }) {
    const dayName = days[day];
    return (
        <div className="columnHeader">
            <p>{dayName} {date}</p>
        </div>
    );
}