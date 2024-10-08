/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

const EsModal = ({
  itemId = "es_modal",
  isOpen = false,
  onClose,
  content,
  ...props
}) => {
  return (
    <>
      <dialog id={itemId} className={` modal ${isOpen ? "modal-open" : ""}`}>
        <div className="modal-box max-w-5xl dark:bg-gradient-to-r from-slate-950 from-2% via-teal-700 via-40% to-cyan-900 to-90%">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>
            ✕
          </button>
          <div className="w-full">{content}</div>
        </div>
        <label className="modal-backdrop" htmlFor={itemId} onClick={onClose}>
          Close
        </label>
      </dialog>
    </>
  );
};

export default EsModal;
