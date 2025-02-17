import { timeToFloat, timeToStr } from "./utils";

export default function ClassBlock({ name, timeStart, timeEnd, columnTimeStart, columnTimeEnd, columnHeight}) {
    const timeStartFloat = timeToFloat(timeStart);
    const timeEndFloat = timeToFloat(timeEnd)
    
    const position = (timeStartFloat - columnTimeStart) / (columnTimeEnd - columnTimeStart) * columnHeight;
    const height = ((timeEndFloat - timeStartFloat) / (columnTimeEnd - columnTimeStart)) * columnHeight;

    return (
        <div className="classBlock" style={{top: position, height: height}}>
            <p>{name}</p>
            <p>{timeToStr(timeStart)} - {timeToStr(timeEnd)}</p>
        </div>
    );
}