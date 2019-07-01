import React, { useState } from 'react';

import img from '~/assets/download.jpg';

import { styled } from 'linaria/react';

const S = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
  `,
  Box: styled.div`
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
  `,
  InnerBox: styled.div`
    display: flex;
    flex-flow: column nowrap;

    p {
      margin: 0 1rem;
    }
    p:first-child {
      margin-top: 1rem;
    }

    input {
      margin: 0.5rem 1rem;
      padding: 0.2rem;
      min-width: 24rem;
    }

    div {
      flex: 1;
    }

    button {
      justify-self: flex-end;
      align-self: flex-end;
    }
  `
};

const Login = props => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  return (
    <S.Wrapper>
      <S.Box>
        <img src={img} alt="" />
        <S.InnerBox>
          <p>아이디</p>
          <input value={account} onChange={e => setAccount(e.currentTarget.value)} />
          <p>비밀번호</p>
          <input value={password} onChange={e => setPassword(e.currentTarget.value)} type="password" />
          <div />
          <button onClick={() => props.loginAttempt({account, password})}>로그인</button>
        </S.InnerBox>
      </S.Box>
    </S.Wrapper>
  )
};

export default Login;
