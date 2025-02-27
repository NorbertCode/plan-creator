import { getText } from "../utility/languageUtils";
import { timeToStr } from "../utility/timeUtils";

export default function ModalPopup({ data, ref }) {
    // This is incredibly dumb, but for some reason onClick doesn't work here
    // No matter what I tried just using onClick wouldn't close the modal, but other events worked fine
    // This is why there is a hidden button, which is autofocused and the close button works using onFocus
    
    function closeModal() {
        ref.current.close();
    }

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
            <button autoFocus style={{position: "absolute", top: 0, left: 0, opacity: 0}}></button>
            <button className="modalButton" onFocus={closeModal}>{getText("close")}</button>
        </dialog>
    );
}