import React, { useState } from "react";
import styled from "styled-components";
import { useProvideAuth } from "./useAuth";
import { SiGoogle, SiGithub } from "react-icons/si";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Authform = styled.form`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
`;
const AuthInput = styled.input`
  max-width: 320px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
  font-size: 14px;
  color: black;

  &:focus {
    outline: none;
  }
`;

const AuthSubmit = styled.input`
  text-align: center;
  background: #04aaff;
  color: white;
  max-width: 320px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  margin-top: 10;
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
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

const AuthError = styled.span`
  color: tomato;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
`;

const AuthSwitch = styled.span`
  color: #04aaff;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 50px;
  display: block;
  font-size: 12px;
  text-decoration: underline;
`;
const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const { signWithGoogle, signWithGithub } = useProvideAuth();

  const { signin, signup } = useProvideAuth();

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

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (newAccount) {
      signup(email, password);
    } else {
      signin(email, password);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <div>
      <Container>
        <Authform onSubmit={onSubmit}>
          <AuthInput
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
          />
          <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
          />
          <AuthSubmit
            type="submit"
            value={newAccount ? "계정 만들기" : "로그인"}
          />
          {error && <AuthError>{error}</AuthError>}
        </Authform>

        <AuthSwitch onClick={toggleAccount}>
          {newAccount ? "로그인" : "계정 만들기"}
        </AuthSwitch>
        <AuthBtns>
          <AuthBtn onClick={onSocialLoginClick} name="google">
            구글로 계속하기 <SiGoogle />
          </AuthBtn>
          <AuthBtn onClick={onSocialLoginClick} name="github">
            깃헙으로 계속하기 <SiGithub />
          </AuthBtn>
        </AuthBtns>
      </Container>
    </div>
  );
};

export default AuthForm;
