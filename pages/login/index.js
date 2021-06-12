import React from "react";
import AuthForm from "../../components/AuthForm";
import { SiGoogle, SiGithub } from "react-icons/Si";
import styled from "styled-components";
import { useProvideAuth } from "../../components/useAuth";
import { useAuth } from "../_app";

const Container = styled.div`
  margin-top: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Auth = () => {
  const { signWithGoogle, signWithGithub } = useProvideAuth();

  const auth = useAuth();
  const onSocialLoginClick = async (e) => {
    const {
      target: { name },
    } = e;
    if (name === "google") {
      signWithGoogle();
    } else if (name === "github") {
      signWithGithub();
    }
  };

  return (
    <>
      {auth ? (
        <div>You already logged in ! </div>
      ) : (
        <Container>
          <div className="authBtns">
            <AuthForm />
            <button onClick={onSocialLoginClick} name="google">
              Continue with Google <SiGoogle />
            </button>
            <button onClick={onSocialLoginClick} name="github">
              Continue with Github <SiGithub />
            </button>
          </div>
        </Container>
      )}
    </>
  );
};

export default Auth;
