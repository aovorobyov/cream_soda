import React from "react";
import ReactDOM from "react-dom";
import './Modal.css'

export default function Modal ({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modalBlock" onClick={onClose}>
        <div className='modalWindow' onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};