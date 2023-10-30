import React, { useState } from "react";
import styled from "styled-components";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

export const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    gap: 20px;
    padding: 0rem 1rem;

    @media (min-width: 1280px) {
      column-gap: 8rem;
    }

    @media (min-width: 1024px) {
      column-gap: 5rem /* 80px */;
      padding: 0rem 0rem;
    }
  `;

  const Image = styled.img`
    display: none;
    height: 24rem;
    width: auto;

    @media (min-width: 1024px) {
      display: flex;
    }
  `;

  const FormContainer = styled.div`
    padding: 0rem 1rem;
    height: 37rem;
    width: 40rem;
    background-color: rgb(255 255 255);
    box-shadow: 0px 20px 25px -5px #d1d5db;
    border-radius: 0.375rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    @media (min-width: 640px) {
      padding: 0rem 4rem;
    }
  `;

  const Title = styled.h2`
    text-align: center;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: #04072f;
    font-family: "Poppins", sans-serif;
  `;

  const FormField = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    row-gap: 0.5rem;
  `;

  const Label = styled.span`
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #04072f;
    font-family: "Poppins", sans-serif;
  `;

  const Input = styled.input`
    width: 100%;
    padding-left: 0.75rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    border: 2px solid rgb(209 213 219);
    color: #737b86;
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
  `;

  const PasswordToggle = styled.div`
    position: absolute;
    color: #737b86;
    background-color: #ffffff;
    top: 1.055rem;
    right: 0;
    padding-right: 0.75rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    line-height: 1.25rem;
    border: none;
    height: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const CheckboxLabel = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    column-gap: 0.5rem;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #737b86;
    font-family: "Poppins", sans-serif;
  `;

  const ChangePassword = styled.span`
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #f78719;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
  `;

  const RememberMeText = styled.span`
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #f78719;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    text-decoration: underline;
  `;

  const Button = styled.div`
    cursor: pointer;
    width: 100%;
    background: #1575a7;
    height: 2.75rem;
    border-radius: 0.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;

    @media (min-width: 640px) {
      width: 20rem;
    }
  `;

  const RegisterLink = styled.span`
    color: #04072f;
    font-family: "Poppins";
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-family: "Poppins", sans-serif;
  `;

  const PasswordContainer = styled.span`
    row-gap: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
  `;

  const RegisterLinkText = styled.span`
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #f78719;
    font-weight: 700;
    cursor: pointer;
    text-decoration: underline;
    font-family: "Poppins", sans-serif;
  `;
  return (
    <Container>
      <Image src="/photo.png" alt="" />

      <FormContainer>
        <Title>Login</Title>

        <FormField>
          <Label>Login ID</Label>
          <Input
            type="text"
            autoComplete="loginID"
            placeholder="Enter Login ID"
          />
        </FormField>

        <PasswordContainer>
          <FormField>
            <Label>Password</Label>
            <div style={{ position: "relative", width: "100%" }}>
              <Input
                type={isPasswordVisible ? "text" : "password"}
                autoComplete="password"
                placeholder="Enter Password"
              />
                <PasswordToggle
                  onClick={() => {
                    togglePasswordVisibility();
                  }}
                >
                  {isPasswordVisible ? <BsEyeSlashFill /> : <BsEyeFill />}
                </PasswordToggle>
            </div>
          </FormField>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems:"center",
              width: "100%",
              flexWrap:"wrap"
            }}
          >
            <CheckboxLabel>
              <input type="checkbox" />
              <span>Remember Me</span>
            </CheckboxLabel>
            <ChangePassword>Change Password</ChangePassword>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <CheckboxLabel>
              <input type="checkbox" />
              <span>
                Agree to <RememberMeText>Terms & Conditions</RememberMeText>
              </span>
            </CheckboxLabel>
          </div>
        </PasswordContainer>

        <Button>Login</Button>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
          }}
        >
          <RegisterLink>
            Don't have an account?{" "}
            <RegisterLinkText>Register Here</RegisterLinkText>
          </RegisterLink>
        </div>
      </FormContainer>
    </Container>
  );
};
