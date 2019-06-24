import React, { useState } from 'react';

const Login = props => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <input value={account} onChange={e => setAccount(e.currentTarget.value)} />
      <input value={password} onChange={e => setPassword(e.currentTarget.value)} />
      <button onClick={() => props.loginAttempt({account, password})}>로그인</button>
      {
        props.userData.user != {} && (
          <div>
            {props.userData.user.id} <br />
            {props.userData.user.name} <br />
            {props.userData.user.phoneNumber} <br />
            {props.userData.user.email} <br />
          </div>
        )
      }
    </div>
  )
};

export default Login;
