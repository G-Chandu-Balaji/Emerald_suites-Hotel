import React from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

export default function Modal({ children, onClose }) {
  const ref = useOutsideClick(onClose);

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen  backdrop-blur-[2px] z-1000">
      <div
        ref={ref}
        className="fixed top-[50%] left-[50%] translate-[-50%] shadow-lg transition-all rounded-lg bg-white p-1"
      >
        <button
          className="absolute top-2 right-2 p-2 cursor-pointer"
          onClick={onClose}
        >
          <HiXMark size={30} />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}
