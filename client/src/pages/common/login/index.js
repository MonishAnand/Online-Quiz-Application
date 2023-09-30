import { Form } from "antd";
import React from 'react';

function Login() {
  return (
    <div className='flex justify-center item-center h-screen w-screen'>
      <div className="card w-400 p-3">
        <div className="flex flex-col"></div>
        <h1 className="text-2xl divider">Login</h1>
       <Form
       layout="vertical">
        <Form.Item
        name='email'
        label='Email'
        >
            <input type="text"  />
        </Form.Item>
        <Form.Item
        name='password'
        label='Password'
        >
            <input type="password"  />
        </Form.Item>
        <button type="submit" className="primary-contained-btn mt-2 w-100">Login</button>
       </Form>
      </div>
    </div>
  )
}

export default Login
