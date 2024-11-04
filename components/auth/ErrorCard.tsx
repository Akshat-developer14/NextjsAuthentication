import { FaExclamationTriangle } from "react-icons/fa";
import { CardWrapper } from "./CardWrapper";

const ErrorCard = () => {
  return (
  <CardWrapper
    headerLabel="Oops! Something went wrong!"
    backButtonLabel="Back to login"
    backButtonHref="/auth/login"
  >
    <div className="w-full flex items-center justify-center">
        <FaExclamationTriangle className="text-destructive size-8"/>
    </div>
  </CardWrapper>

  );
};

export default ErrorCard;
