import { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha'
import Swal from 'sweetalert2'
import './login.css'

const Login = () => {

    const SET_KEY = import.meta.env.VITE_SITE_KEY;
    const navigate = useNavigate();
    const [captcha, setCaptcha] = useState(null)
    const [formChan, setFormChan] = useState(true)
    const [isDisable, setIsDisable] = useState(true)

    const onFinish = (values) => {

        const rule = values.email !== "admin@admin.com" || values.password !== "Admin"

        if (rule) {
            Swal.fire(
                "Error",
                "Credential not valid.",
                "error"
            )
            return
        }

        Swal.fire(
            "Success",
            "Login successful.",
            "success"
        ).then(() => {
            navigate("/characters");
        });
    }

    const onFinishFailed = () => {
        Swal.fire(
            "Error",
            "Upps, check your credentials",
            "error"
        )
    }

    const onChange = (value) => {
        setCaptcha(value)

        if (value && !formChan) {
            setIsDisable(false)
        } else {
            setIsDisable(true)
        }
    }

    const formChange = (_, allValues) => {

        const emailFilled = allValues.email && allValues.email !== ""
        const passwordFilled = allValues.password && allValues.password !== ""

        if (emailFilled && passwordFilled) {
            setFormChan(false)

            if (captcha) {
                setIsDisable(false)
            }

        } else {
            setFormChan(true)
            setIsDisable(true)
        }
    }

    return (
        <div className="login">

            <div className="login__container">

                <div className="login__logo">
                    <img src="src/assets/LoginImage.jpg" alt="logo" />
                </div>

                <Form
                    layout="vertical"
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    onValuesChange={formChange}
                    autoComplete="off"
                    requiredMark={false}
                    className="login__form"
                >

                    <div className="login__fields">

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your Email.' }
                            ]}
                            className="login__field"
                        >
                            <Input className="login__input" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                { required: true, message: 'Please input your Password.' }
                            ]}
                            className="login__field"
                        >
                            <Input.Password className="login__input" />
                        </Form.Item>

                    </div>

                    <div className="login__captcha">
                        <ReCAPTCHA
                            sitekey={SET_KEY}
                            onChange={onChange}
                        />
                    </div>

                    <Form.Item className="login__actions">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login__button"
                            disabled={isDisable || formChan}
                        >
                            Submit
                        </Button>
                    </Form.Item>

                </Form>

            </div>

        </div>
    )
}

export default Login