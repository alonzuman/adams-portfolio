import React, { useState } from 'react'

export default function Login({ login }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const credentials = {
    username: 'adam',
    password: '123456'
  }

  const validateLogin = () => {
    const user = {
      username,
      password
    }

    if (user.username === credentials.username && user.password === credentials.password) {
      login();
    } else {
      console.log('failed')
    }
  }

  return (
    <div className='container'>
      <h1>Login page</h1>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={validateLogin}>Login</button>
    </div>
  )
}
