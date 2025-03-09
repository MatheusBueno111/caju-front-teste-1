import { AlertDialog } from "../..";
import { AlertDialogDefaultProps } from "./types";

export const AlertDialogDefault: React.FC<AlertDialogDefaultProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Tem certeza?",
  description = "Essa ação não pode ser desfeita.",
  confirmText = "Confirmar",
  cancelText = "Cancelar",
}) => {
  if (!isOpen) return null;

  return (
    <AlertDialog.Overlay onClick={onClose}>
      <AlertDialog.Content onClick={(e) => e.stopPropagation()}>
        <AlertDialog.Header>{title}</AlertDialog.Header>
        <p>{description}</p>
        <AlertDialog.Footer>
          <AlertDialog.Button variant={"cancel"} onClick={onClose}>
            {cancelText}
          </AlertDialog.Button>
          <AlertDialog.Button variant={"confirm"} onClick={onConfirm}>
            {confirmText}
          </AlertDialog.Button>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Overlay>
  );
};
