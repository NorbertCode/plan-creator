import { timeToStr } from "../utility/timeUtils";

export default function ModalPopup({ data, ref }) {
    return (
        <dialog ref={ref} className="modalPopup">
            <div className="leftSide">
                <p>{data.name} </p>
                <p>{timeToStr(data.timeStart)} - {timeToStr(data.timeEnd)}</p>
            </div>
            <div className="rightSide">
                <p>{data.type}</p>
                <p> {data.place}</p>
            </div>
            <div className="description">
                <p>{data.description}</p>
            </div>
        </dialog>
    );
}