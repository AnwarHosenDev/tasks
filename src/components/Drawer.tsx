import type { ReactNode } from "react";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;

  position?: "bottom" | "right" | "left" | "top";

  /** Tailwindcss class */
  width?: string; // for left/right position
  height?: string; // for top/bottom position

  /** Classes for the parent div */
  className?: string;
};

export function Drawer({
  isOpen,
  onClose,
  children,
  position = "right",
  width = "w-80",
  height = "h-auto",
  className,
}: DrawerProps) {
  // Drawer Animation based on direction
  const motion = {
    right: isOpen ? "translate-x-0" : "translate-x-full",
    left: isOpen ? "translate-x-0" : "-translate-x-full",
    bottom: isOpen ? "translate-y-0" : "translate-y-full",
    top: isOpen ? "translate-y-0" : "-translate-y-full",
  };

  // Drawer Size based on position
  const mainSize = position === "bottom" || position === "top" ? height : width;
  const crossSize =
    position === "bottom" || position === "top" ? width : height;

  return (
    // Drawer Container
    <div
      className={`
        fixed inset-0 z-50
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      {/* Drawer Overlay */}
      <div
        onClick={onClose}
        className={`
          absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Drawer Content Container */}
      <div
        className={`
          absolute bg-primary border-border shadow-xl
          transition-transform duration-300 ease-out

          ${position === "right" ? "right-0 top-0 h-full" : ""}
          ${position === "left" ? "left-0 top-0 h-full" : ""}
          ${position === "bottom" ? "bottom-0 left-0 right-0 mx-auto" : ""}
          ${position === "top" ? "top-0 left-0 right-0 mx-auto" : ""}

          ${mainSize}
          ${crossSize}
          ${motion[position]}
          ${className}
        `}
      >
        {/* Drawer Content */}
        {children}
      </div>
    </div>
  );
}
