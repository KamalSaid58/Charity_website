import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode; //To pass whole children node of alert tag as paramaters
}

function Alert({ children }: AlertProps) {
  return (
    <div className="alert alert-info" role="alert">
      {children}
    </div>
  );
}

export default Alert;
