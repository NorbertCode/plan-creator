import { timeToStr } from "../utility/timeUtils";

export default function ModalPopup({ data, ref }) {
    return (
        <dialog ref={ref} className="modalPopup">
            <div className="leftSide">
                <p><strong>{data.name} </strong></p>
                <p>{timeToStr(data.timeStart)} - {timeToStr(data.timeEnd)}</p>
            </div>
            <div className="rightSide">
                <p><strong>{data.type}</strong></p>
                <p> {data.place}</p>
            </div>
            <div className="description">
                <p dangerouslySetInnerHTML={{__html: data.description}}></p>
            </div>
        </dialog>
    );
}