import React from "react";
type ModalProps = {
  closeModal: any;
};

const NewQueue = (props: ModalProps) => {
  return (
    <div className="modal_background">
      <div className="modal_container">
        <button
          onClick={() => {
            props.closeModal(false);
          }}
        >
          {" "}
          X{" "}
        </button>
        <div className="modal_content">
          <h2>Số thứ tự được cấp</h2>
          <h1>2001201</h1>
          <h3>DV: Khám răng hàm mặt (tại quầy số 1)</h3>
        </div>
        <div className="modal_footer">
          <div>
            <p>Thời gian cấp:</p>
            <p>Hạn sử dụng:</p>
          </div>
          <div>
            <p>09:30 11/10/2021</p>
            <p>17:30 11/10/2021</p>
          </div>
        </div>
      </div>
    </div>
    // <div className="queue_popup">
    //   <span>X</span>
    //   <div className="wrap">
    //     <h2>Số thứ tự được cấp</h2>
    //     <h1>2001201</h1>
    //     <h3>DV: Khám răng hàm mặt (tại quầy số 1)</h3>
    //   </div>
    //   <div className="bottom">
    //     <div>
    //       <p>Thời gian cấp:</p>
    //       <p>Hạn sử dụng:</p>
    //     </div>
    //     <div>
    //       <p>09:30 11/10/2021</p>
    //       <p>17:30 11/10/2021</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NewQueue;
