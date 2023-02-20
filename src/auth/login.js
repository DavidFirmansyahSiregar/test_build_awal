import React from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
// import { useState } from "react";
// import { Axios } from "axios";

export const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          margin: 20,
        }}
        initialValues={{
          remember: true,
        }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Input Email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
          // onClick={() => {
          //     localStorage.setItem("credentials", "value");
          //     navigate("/dashboard");
          // }}
          >
            L O G I N
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
