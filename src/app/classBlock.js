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
            <div className="leftSide">
                <p>{data.name}</p>
                <p>{timeToStr(data.timeStart)} - {timeToStr(data.timeEnd)}</p>
            </div>
            <div className="rightSide">
                <p>{data.type}</p>
                <p>{data.place}</p>
            </div>
        </div>
    );
}