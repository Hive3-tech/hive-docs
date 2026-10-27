import { useEffect, useRef, type ReactNode } from "react";

/** A native <dialog> opened modally on mount. Mount it to open, unmount (via onClose) to close.
 *  The browser provides focus trapping, Escape handling, and inerting of the page behind it. */
export function Modal({
  onClose,
  label,
  className,
  children,
}: {
  onClose: () => void;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      className={className}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
    >
      {children}
    </dialog>
  );
}
