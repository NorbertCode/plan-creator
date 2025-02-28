import { getText } from "../utility/languageUtils";
import { timeToStr } from "../utility/timeUtils";

export default function ModalPopup({ data, modalRef, wrapperRef }) {
    // This entire script is incredibly dumb
    // 1. For some reason onClick doesn't work with the close button
    //    No matter what I tried just using onClick wouldn't close the modal, but other events worked fine
    //    This is why there is a hidden button, which is autofocused and the close button works using onFocus
    // 2. There are three layers of nodes - wrapper, dialog and an inner wrapper
    //    The outer wrapper is necessary to allow closing the modal when clicking outside of it
    //    But for some reason the dialog launches its onClick no matter where you click
    //    So stopPropagation() has to be used in the inner wrapper
    
    function closeModal() {
        modalRef.current.close();
        wrapperRef.current.style.display = "none";
    }

    return (
        <div ref={wrapperRef} className="modalWrapper" onClick={closeModal}>
            <dialog ref={modalRef} className="modalPopup" style={{backgroundColor: data.backgroundColor}}>
                <div onClick={e => e.stopPropagation()} style={{width: "100%", height: "100%"}}>
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
                </div>
            </dialog>
        </div>
    );
}