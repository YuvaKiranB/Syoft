import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect, Link } from "react-router-dom";

import {
  Label,
  Input,
  LoginContainer,
  FormContainer,
  LogoImage,
  InputContainer,
  CheckBoxLabel,
  CheckBoxInput,
  SignInButton,
  ErrorMessage,
  CheckBoxContainer,
  LogoContainer,
  LogoHeading,
  LogoPara,
  LogoSpan,
  SuccessMessage,
} from "./styling";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    showPassword: false,
    errorMessage: "",
    emailId: "",
    phone: "",
    showSuccess: false,
    successMessage: "",
    notFilledFields: false,
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = (message) => {
    const { history } = this.props;

    history.replace("/login");

    this.setState({
      username: "",
      emailId: "",
      phone: "",
      password: "",
      showSuccess: true,
      successMessage: message,
    });
  };

  onSubmitFailure = (errorMessage) => {
    this.setState({ showSubmitError: true, errorMessage });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password, emailId, phone } = this.state;

    if (username === "" || password === "" || emailId === "" || phone === "") {
      this.setState({
        notFilledFields: true,
        showSuccess: false,
        showSubmitError: false,
      });
    } else {
      this.setState({ notFilledFields: false });
      const userDetails = {
        user_firstname: username,
        user_email: emailId,
        user_phone: phone,
        user_password: password,
        user_lastname: "ni",
        user_city: "visakhapatnam",
        user_zipcode: "530012",
      };
      const url =
        "https://syoft.dev/Api/user_registeration/api/user_registeration";
      const options = {
        method: "POST",
        body: JSON.stringify(userDetails),
      };

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(response);
      if (response.ok === true) {
        this.onSubmitSuccess(data.msg);
      } else {
        this.onSubmitFailure(data.error_msg);
      }
    }
  };

  onChangeEmailId = (event) => {
    this.setState({ emailId: event.target.value });
  };

  onChangePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  //Field Items

  renderPasswordField = () => {
    const { password, showPassword } = this.state;
    const type = showPassword ? "text" : "password";

    return (
      <>
        <Label htmlFor="password">Password *</Label>
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

  renderEmailField = () => {
    const { emailId } = this.state;
    return (
      <>
        <Label color="#7e858e" htmlFor="emailId">
          Email Id *
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

  renderPhoneField = () => {
    const { phone } = this.state;
    return (
      <>
        <Label color="#7e858e" htmlFor="phone">
          Phone *
        </Label>
        <Input
          type="text"
          id="phone"
          value={phone}
          onChange={this.onChangePhone}
          placeholder="Phone"
          color="#64748b"
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <Label color="#7e858e" htmlFor="username">
          First Name *
        </Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          color="#64748b"
        />
      </>
    );
  };

  //Field Items

  toggleShowPassword = (event) => {
    this.setState({ showPassword: event.target.checked });
  };
  render() {
    const {
      showSubmitError,
      errorMessage,
      successMessage,
      showSuccess,
      notFilledFields,
    } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <LoginContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LogoContainer>
            <LogoImage />
            <LogoHeading>Sign up</LogoHeading>
            <LogoPara>
              Already have an account?
              <LogoSpan>
                <Link to="/login">Sign in</Link>
              </LogoSpan>
            </LogoPara>
          </LogoContainer>
          <InputContainer>{this.renderUsernameField()}</InputContainer>

          <InputContainer>{this.renderEmailField()}</InputContainer>
          <InputContainer>{this.renderPhoneField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <CheckBoxContainer>
            <CheckBoxInput
              onChange={this.toggleShowPassword}
              type="checkbox"
              id="checkBox"
            />
            <CheckBoxLabel htmlFor="checkBox">Show Password</CheckBoxLabel>
          </CheckBoxContainer>
          <SignInButton type="submit">Sign In</SignInButton>
          {showSubmitError && <ErrorMessage>{`*${errorMessage}`}</ErrorMessage>}
          {showSuccess && (
            <SuccessMessage>{`*${successMessage}`}</SuccessMessage>
          )}
          {notFilledFields && (
            <ErrorMessage>*Fill mandatory fields</ErrorMessage>
          )}
        </FormContainer>
      </LoginContainer>
    );
  }
}

export default SignUp;
