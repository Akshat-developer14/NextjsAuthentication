"use client";
import { BarLoader } from "react-spinners";
import { CardWrapper } from "./CardWrapper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if(success || error) return;
    if (!token) {
      setError("Token not found");
      return;
    };
    newVerification(token).then((data) => {
      if (data) {
        setError(data.error);
        setSuccess(data.success);
      }
    }).catch(() => {
      setError("Something went wrong!");
    });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <CardWrapper
      headerLabel="Confirming your verification of email"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex items-center justify-center">
        {!success && !error &&
        <BarLoader />
        }
        <FormSuccess message={success} />
        {!success && (
        <FormError message={error} />
      )}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
