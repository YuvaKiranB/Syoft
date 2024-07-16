import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

import {
  Label,
  Input,
  LoginContainer,
  FormContainer,
  LogoImage,
  InputContainer,
  CheckBoxLabel,
  CheckBoxInput,
  LoginButton,
  ErrorMessage,
  CheckBoxContainer,
} from "./styling";

class SignUp extends Component {
  state = {
    emailId: "",
    password: "",
    showSubmitError: false,
    showPassword: false,
    errorMessage: "",
  };

  onChangeEmailId = (event) => {
    this.setState({ emailId: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = (data) => {
    const { history } = this.props;

    localStorage.setItem("user_data", JSON.stringify(data));

    history.replace("/");
  };

  onSubmitFailure = (errorMessage) => {
    this.setState({ showSubmitError: true, errorMessage });
  };

  submitForm = async (event) => {
    event.preventDefault();
    console.log("ok");
    const { emailId, password } = this.state;
    const userDetails = {
      user_email: emailId,
      user_password: password,
    };
    const url = "https://syoft.dev/Api/userlogin/api/userlogin";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
    if (data.status === true) {
      this.onSubmitSuccess(data.user_data);
    } else {
      this.onSubmitFailure(data.msg);
    }
  };

  renderPasswordField = () => {
    const { password, showPassword } = this.state;
    const type = showPassword ? "text" : "password";

    return (
      <>
        <Label htmlFor="password">Password</Label>
        <Input
          type={type}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { emailId } = this.state;
    return (
      <>
        <Label color="#7e858e" htmlFor="emailId">
          Email Id
        </Label>
        <Input
          type="text"
          id="emailId"
          value={emailId}
          onChange={this.onChangeEmailId}
          placeholder="Email Id"
          color="#64748b"
        />
      </>
    );
  };

  toggleShowPassword = (event) => {
    this.setState({ showPassword: event.target.checked });
  };

  render() {
    const { showSubmitError, errorMessage } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <LoginContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LogoImage alt="website logo" />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <CheckBoxContainer>
            <CheckBoxInput
              onChange={this.toggleShowPassword}
              type="checkbox"
              id="checkBox"
            />
            <CheckBoxLabel htmlFor="checkBox">Show Password</CheckBoxLabel>
          </CheckBoxContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorMessage>{`*${errorMessage}`}</ErrorMessage>}
        </FormContainer>
      </LoginContainer>
    );
  }
}

export default SignUp;
