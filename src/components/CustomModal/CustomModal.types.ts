import { ReactNode } from "react";

export interface IModalProps {
  open: boolean;
  closeCallback: any;
  title: string;
  content: ReactNode;
}
