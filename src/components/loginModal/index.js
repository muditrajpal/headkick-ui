import React, { useEffect, useState } from "react";
import {
  Button,
  Header,
  Modal,
  Form,
  Checkbox,
  Divider,
  Icon,
} from "semantic-ui-react";
import "./styles.css";

function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      className="login-modal"
    >
      <Modal.Header className="login-modal__header-primary">
        Welcome to Headkick!
        <Header
          as="h6"
          className="login-modal__header-secondary no-border text-grey"
        >
          Please login to continue
        </Header>
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>E-mail</label>
            <input placeholder="joe@schmoe.com" type="email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Enter 8 characters or more"
              type={showPassword ? "text" : "password"}
              style={{ position: "relative" }}
            />
            <Icon
              name={showPassword ? "eye" : "eye slash outline"}
              className="login-modal__pass-visible-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </Form.Field>
          <Form.Field className="login-modal__form__chechbox-and-forget-password">
            <Checkbox label="Save Password" />
            <span className="text-blue text-bold">Forgot password?</span>
          </Form.Field>
          <Button fluid type="submit">
            Login
          </Button>
        </Form>
        <Divider horizontal>
          <Header as="h4" className="font-size-small text-grey">
            Or login with
          </Header>
        </Divider>
        <div className="login-modal__oauth">
          <Button
            color="google plus"
            className="login-modal__oauth__items background-none"
          >
            <Icon name="google" /> Google
          </Button>
          <Button
            color="facebook"
            className="login-modal__oauth__items background-none"
          >
            <Icon name="facebook" /> Facebook
          </Button>
        </div>
      </Modal.Content>
      <Button className="login-modal__close-btn" onClick={() => setOpen(false)}>
        <Icon name="close" />
      </Button>
      <div className="login-modal__signup-link">
        Don't have an account yet?{" "}
        <span className="text-blue text-underline">Sign up now</span>
      </div>
    </Modal>
  );
}

export default LoginModal;
