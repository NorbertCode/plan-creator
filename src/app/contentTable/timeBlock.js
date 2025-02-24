import { timeToStr } from "../utility/timeUtils";

export default function TimeBlock({ timeStart, timeEnd, height }) {
    return (
        <div className="timeBlock" key={timeStart} style={{height: height}}>
            <p>{timeToStr(timeStart)} - {timeToStr(timeEnd)}</p>
        </div>
    );
}