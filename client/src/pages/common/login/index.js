import { Form } from "antd";
import React from 'react';
import { Link } from 'react-router-dom'

function Login() {

  const onFinish = (values) => {
    console.log(values);
  }
  return (
    <div className='flex justify-center item-center h-screen w-screen'>
      <div className="card w-400 p-3">
        <div className="flex flex-col"></div>
        <h1 className="text-2xl divider">Login</h1>
        <Form
          layout="vertical"
          className="mt-2"
          onFinish={onFinish}>
          <Form.Item
            name='email'
            label='Email'
          >
            <input type="text" />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
          >
            <input type="password" />
          </Form.Item>
          <div className="flex flex-col gap-2">
            <button type="submit" className="primary-contained-btn mt-2 w-100">Login</button>
            <Link to="/register" className="text-center mt-02 underline">Not a Member? Register Here</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
