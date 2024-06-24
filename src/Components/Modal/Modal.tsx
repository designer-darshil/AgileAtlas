// src/components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="text-center p-6 border-b border-[#F2F4FA]">
          <h3 className="text-lg leading-6 font-semibold">{title}</h3>
        </div>
        <div className="p-6 text-start">{children}</div>
        <div className="px-4 py-3 flex items-center justify-end gap-3">
          <button
            type="button"
            className="mt-3 inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="button"
            className="mt-3 inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-primary text-white text-base font-medium"
            onClick={onClose}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
