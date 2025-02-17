import { timeToFloat, timeToStr } from "./utils";

export default function ClassBlock({ data, columnTimeStart, columnTimeEnd, columnHeight}) {
    const timeStartFloat = timeToFloat(data.timeStart);
    const timeEndFloat = timeToFloat(data.timeEnd)
    const columnTimeStartFloat = timeToFloat(columnTimeStart);
    const columnTimeEndFloat = timeToFloat(columnTimeEnd);
    
    const position = (timeStartFloat - columnTimeStartFloat) / (columnTimeEndFloat - columnTimeStartFloat) * columnHeight;
    const height = ((timeEndFloat - timeStartFloat) / (columnTimeEndFloat - columnTimeStartFloat)) * columnHeight;

    return (
        <div className="classBlock" style={{top: position, height: height}}>
            <p>{data.name} - {data.type}</p>
            <p>{timeToStr(data.timeStart)} - {timeToStr(data.timeEnd)}</p>
            <p>{data.place}</p>
        </div>
    );
}