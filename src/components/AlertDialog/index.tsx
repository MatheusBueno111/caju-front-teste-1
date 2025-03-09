import { Button } from "./components/Button";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Overlay } from "./components/Overlay";
import { AlertDialogDefault } from "./variants/Default";

const variants = {
  default: AlertDialogDefault,
};

export const AlertDialog = ({
  variant = "default",
  ...props
}: {
  variant?: keyof typeof variants;
} & React.ComponentProps<typeof AlertDialogDefault>) => {
  const Component = variants[variant];
  return <Component {...props} />;
};

AlertDialog.Overlay = Overlay;
AlertDialog.Content = Content;
AlertDialog.Footer = Footer;
AlertDialog.Button = Button;
AlertDialog.Header = Header;
