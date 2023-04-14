import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: string;
  onClose: () => void;
  children: React.ReactNode;
  style: string;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  style,
}) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={style}>
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
};
