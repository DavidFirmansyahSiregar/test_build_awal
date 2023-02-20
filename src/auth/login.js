import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Axios } from "axios";

export const LoginPage = () => {
//   const navigate = useNavigate()
  const [data, setData] = useState("email, password")

  const Data = ( email,password, [...data]) => {
    Axios.post("https://63a00cff24d74f9fe82cd33d.mockapi.io/dummydata", {
      email,
      password,
    });
   
  };

  const onFinish = (Data) => {
    console.log("Success:", Data);
    // navigate("/dashboard");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          name={data.email}
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
          <Input 
          placeholder="Input Email" 
          onChange={(e) => setData(e.target.email)}
          />
        </Form.Item>
        <Form.Item
          name={data.password}
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password onChange={(e) => setData(e.target.password)}/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
          type="primary"
        //   onClick={() => {
        //       localStorage.setItem(Data);
        //   }}
          >
            L O G I N
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
