import ClassColumn from "./classColumn.js";
import TimeColumn from "./timeColumn.js";

import plan from "./planData.json";
import { formatDate, getFutureDate, getPreviousMonday } from "./utils.js";

export default function ContentTable({ date, mode }) {
    const height = 600;
    const timeStart = 700;
    const timeEnd = 2100;

    const days = [];
    const totalDays = mode == "single" ? 1 : 5;
    const startDate = mode == "single" ? date : new Date(getPreviousMonday(date));
    for (let i = 0; i < totalDays; i++) {
        days.push((
            <ClassColumn key={i + formatDate(date)} day={startDate.getDay() + i} date={formatDate(getFutureDate(startDate, i))} plan={plan} timeStart={timeStart} timeEnd={timeEnd} height={height}/>
        ));
    }

    return (
        <div className="content">
            <TimeColumn timeStart={timeStart} timeEnd={timeEnd} height={height}/>
            {days}
        </div>
    );
}