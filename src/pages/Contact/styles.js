import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
`;

export const FormDiv = styled.div`
  background-size: cover;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const H1 = styled.h1`
  text-align: center;
  color: #ddd;
`;

export const Form = styled.form`
  max-width: 600px;
  width:100%;
  padding: 0 10px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 16px 0;
  border: 0;
  background: #111;
  padding: 20px 40px;
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 16px 0;
  border: 0;
  background: #111;
  padding: 20px 40px;
  resize: block;
  max-height: 220px;
  min-height: 120px;
`;

export const Button = styled.button`
  float: right;
  border: 0;
  background: #303234;
  color: white;
  padding: 12px 50px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #6239eb;
  }
`;
