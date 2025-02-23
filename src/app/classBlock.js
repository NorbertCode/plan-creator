import { useEffect, useRef } from "react";
import { timeToFloat, timeToStr } from "./utils";

export default function ClassBlock({ data, columnTimeStart, columnTimeEnd, columnHeight}) {
    const timeStartFloat = timeToFloat(data.timeStart);
    const timeEndFloat = timeToFloat(data.timeEnd)
    const columnTimeStartFloat = timeToFloat(columnTimeStart);
    const columnTimeEndFloat = timeToFloat(columnTimeEnd);
    
    const position = (timeStartFloat - columnTimeStartFloat) / (columnTimeEndFloat - columnTimeStartFloat) * columnHeight;
    const height = ((timeEndFloat - timeStartFloat) / (columnTimeEndFloat - columnTimeStartFloat)) * columnHeight;

    const sideTexts = [useRef(null), useRef(null)];
    useEffect(() => {
        const textHeight = sideTexts[0].current.offsetHeight;
        const currentDisplay = sideTexts[0].current.children[0].style.display;
        const display = textHeight > height || currentDisplay == "inline-block" ? "inline-block" : "block";

        sideTexts.forEach((sideText) => {
            for (let i = 0; i < sideText.current.children.length; i++) {
                sideText.current.children[i].style.display = display;
                if (display == "inline-block") {
                    sideText.current.children[i].style.fontSize = "0.7em";
                }
            }
        });
    });

    return (
        <div className="classBlock" style={{top: position, height: height}}>
            <div ref={sideTexts[0]} className="leftSide">
                <p>{data.name} </p>
                <p>{timeToStr(data.timeStart)} - {timeToStr(data.timeEnd)}</p>
            </div>
            <div ref={sideTexts[1]} className="rightSide">
                <p>{data.type}</p>
                <p> {data.place}</p>
            </div>
        </div>
    );
}