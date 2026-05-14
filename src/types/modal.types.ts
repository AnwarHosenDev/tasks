export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modalTitle?: string;
  children?: React.ReactNode;
};
