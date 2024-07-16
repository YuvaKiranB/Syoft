import styled from "styled-components";

export const Label = styled.label`
  font-family: roboto;
  font-size: 16px;
  font-weight: 600;
  color: #7e858e;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-top: 28px;
`;

export const Input = styled.input`
  border: 1px solid #94a3b8;
  border-radius: 5px;
  padding: 15px;
  font-size: 18px;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 10px;
  align-self: stretch;
  width: 100%;
  outline: none;
  background-color: "transparent";
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const FormContainer = styled.form`
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  background-color: "white";
  width: 450px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding-bottom: 60px;
`;

export const LogoImage = styled.img`
  height: 40px;
  margin: 35px;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 92%;
`;

export const CheckBoxLabel = styled.label`
  font-size: 20px;
  color: "black";
  font-family: roboto;
`;

export const CheckBoxInput = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

export const SignInButton = styled.button`
  margin-bottom: 0px;
  width: 100%;
  padding: 12px;
  border-width: 0px;
  border-radius: 8px;
  background-color: #3b82f6;
  color: white;
  font-family: roboto;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  align-self: flex-start;
  margin-top: 0px;
  color: red;
  font-family: roboto;
  font-size: 16px;
`;

export const SuccessMessage = styled.p`
  align-self: flex-start;
  margin-top: 0px;
  color: green;
  font-family: roboto;
  font-size: 16px;
`;

export const CheckBoxContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const LogoContainer = styled.div``;

export const LogoHeading = styled.h1``;

export const LogoPara = styled.p``;

export const LogoSpan = styled.span``;
