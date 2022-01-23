import { Button, Card, Divider } from "antd";
import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";
import styled from "@emotion/styled";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <Container>
      <Header>Jira</Header>
      <ShadowCard>
        <FormTitle>{isRegister ? "请注册" : "请登录"}</FormTitle>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <Divider />
        <a onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "已有账号，直接登录" : "没有账号？注册新账号"}
        </a>
      </ShadowCard>
    </Container>
  );
};

const Header = styled.header`
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
  text-align: center;
  font-size: 3rem;
`;

const FormTitle = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const LongButton = styled(Button)`
  width: 100%;
`;
