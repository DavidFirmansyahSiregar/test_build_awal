import React from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Form, Input, } from "antd";

export const LoginPage = () => {
    // const navigate = useNavigate();
    
    return (
        <div>
            <Form>
            <Form.Item
            name="email"
            label="E-mail"
            rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
            ]}
        >
            <Input 
                placeholder="Input Email"
            />
        </Form.Item>
        <Form.Item
            name="password"
            label="Password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
            hasFeedback
        >
            <Input.Password />
        </Form.Item>
            <Button
                // onClick={() => {
                //     localStorage.setItem("credentials", "value");
                //     navigate("/dashboard");
                // }}
            >
                L O G I N
            </Button>
            </Form>
        </div>
    );
};