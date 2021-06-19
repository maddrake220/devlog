import React, { useEffect } from "react";
import AuthForm from "../../components/AuthForm";
import { useAuth } from "../_app";
import { useRouter } from "next/router";

const Auth = () => {
  const router = useRouter();
  const auth = useAuth();
  useEffect(() => {
    if (auth.isLogin) {
      router.push("/");
    }
  }, [auth]);
  return (
    <>
      {auth.isLogin ? (
        <div>You're already logged in ! </div>
      ) : (
        <>
          <AuthForm />
        </>
      )}
      )
    </>
  );
};

export default Auth;
