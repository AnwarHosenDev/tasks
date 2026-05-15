import type { ModalProps } from "@/types/modal.types";
import { useEffect } from "react";
import { X } from "lucide-react";

export const Modal = ({
  modalTitle,
  isOpen,
  onClose,
  children,
}: ModalProps) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    // Modal Backdrop
    <div
      className={`
        fixed inset-0 z-50 flex justify-center items-center
        bg-black/50 transition-all duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
      onClick={onClose}
    >
      {/* Modal Body */}
      <div
        role="dialog"
        aria-modal="true"
        className={`
            max-w-[90%] max-h-[90%] bg-primary rounded-lg
            px-6 py-4 shadow-lg transition-all duration-300
            ${isOpen ? "scale-100 translate-y-0" : "scale-90 translate-y-3"}
            `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center space-x-2 mb-4">
          <h2 className="text-xl font-bold">{modalTitle}</h2>

          <X
            size={20}
            onClick={onClose}
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          />
        </div>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};
