import ClassColumn from "./classColumn.js";
import TimeColumn from "./timeColumn.js";

import plan from "./planData.json";
import { formatDate } from "./utils.js";

export default function ContentTable({ weekday, date }) {
    const height = 600;
    const timeStart = 700;
    const timeEnd = 2100;

    return (
        <div className="content">
            <TimeColumn timeStart={timeStart} timeEnd={timeEnd} height={height}/>
            <ClassColumn day={weekday} date={formatDate(date)} plan={plan} timeStart={timeStart} timeEnd={timeEnd} height={height}/>
        </div>
    );
}