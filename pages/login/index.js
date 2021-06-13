import React, { useEffect } from "react";
import AuthForm from "../../components/AuthForm";
import { SiGoogle, SiGithub } from "react-icons/si";
import styled from "styled-components";
import { useProvideAuth } from "../../components/useAuth";
import { useAuth } from "../_app";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const AuthBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
`;

const AuthBtn = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  padding: 10px 0px;
  font-size: 14px;
  text-align: center;
  width: 150px;
  background: white;
  cursor: pointer;
`;
const Auth = () => {
  const router = useRouter();
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
  useEffect(() => {
    if (auth.isLogin) {
      router.push("/");
    }
  }, [auth]);
  return (
    <>
      <Container>
        {auth.isLogin ? (
          <div>You already logged in ! </div>
        ) : (
          <>
            <AuthForm />
            <AuthBtns>
              <AuthBtn onClick={onSocialLoginClick} name="google">
                구글로 계속하기 <SiGoogle />
              </AuthBtn>
              <AuthBtn onClick={onSocialLoginClick} name="github">
                깃헙으로 계속하기 <SiGithub />
              </AuthBtn>
            </AuthBtns>
          </>
        )}
      </Container>
      )
    </>
  );
};

export default Auth;
