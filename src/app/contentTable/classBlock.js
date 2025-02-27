import { timeToFloat, timeToStr } from "../utility/timeUtils";

import overrides from "../config/overrideConfig.json"

export default function ClassBlock({ data, columnTimeStart, columnTimeEnd, columnHeight, onClick }) {
    // Apply overrides from config
    overrides.forEach((override) => {
        if (data[override.filterKey] == override.filterValue) {
            data[override.overrideKey] = override.overrideValue;
        }
    });

    // Calculate position in the table and block's height based on when it starts and ends
    const timeStartFloat = timeToFloat(data.timeStart);
    const timeEndFloat = timeToFloat(data.timeEnd)
    const columnTimeStartFloat = timeToFloat(columnTimeStart);
    const columnTimeEndFloat = timeToFloat(columnTimeEnd);
    
    const position = (timeStartFloat - columnTimeStartFloat) / (columnTimeEndFloat - columnTimeStartFloat) * columnHeight;
    const height = ((timeEndFloat - timeStartFloat) / (columnTimeEndFloat - columnTimeStartFloat)) * columnHeight;

    return (
        <div className="classBlock" onMouseDown={() => onClick(data)} style={{top: position, height: height, backgroundColor: data.backgroundColor}}>
            <div className="leftSide">
                <p><strong>{data.name} </strong></p>
                <p>{timeToStr(data.timeStart)} - {timeToStr(data.timeEnd)}</p>
            </div>
            <div className="rightSide">
                <p><strong>{data.type}</strong></p>
                <p> {data.place}</p>
            </div>
            <div className="description">
                <p>{data.description}</p>
            </div>
        </div>
    );
}