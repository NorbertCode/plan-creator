import { timeToFloat } from "./utils";

export default function ClassBlock({ name, timeStart, timeEnd, columnTimeStart, columnTimeEnd, columnHeight}) {
    const timeStartFloat = timeToFloat(timeStart);
    const timeEndFloat = timeToFloat(timeEnd)
    
    const timeStartStr = timeStart.toString().slice(0, 2) + ":" + timeStart.toString().slice(2);
    const timeEndStr = timeEnd.toString().slice(0, 2) + ":" + timeEnd.toString().slice(2);

    const position = (timeStartFloat - columnTimeStart) / (columnTimeEnd - columnTimeStart) * columnHeight;
    const height = ((timeEndFloat - timeStartFloat) / (columnTimeEnd - columnTimeStart)) * columnHeight;

    return (
        <div className="classBlock" style={{top: position, height: height}}>
            <p>{name}</p>
            <p>{timeStartStr} - {timeEndStr}</p>
        </div>
    );
}