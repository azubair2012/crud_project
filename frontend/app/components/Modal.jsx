import { useState } from "react";

const Modal = () => {
  return (
    <div className={Modal ? "hidden" : "w-40 h-40 border-sky-500 bg-slate-900"}>
      Modal
    </div>
  );
};

export default Modal;
