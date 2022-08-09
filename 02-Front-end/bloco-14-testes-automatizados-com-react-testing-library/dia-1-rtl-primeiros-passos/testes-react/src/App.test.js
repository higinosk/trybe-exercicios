import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Verifica se existe um input de email na tela", () => {
  render(<App />);
  const inputEmail = screen.getByLabelText("Email");

  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email");
});

test("verifica se existe udois botões na tela", () => {
  render(<App />);
  const buttons = screen.getAllByRole("button");

  expect(buttons).toHaveLength(2);
});

test("Verifica se existe o botão de enviar", () => {
  render(<App />);
  const sendButton = screen.getByTestId("id-send");

  expect(sendButton).toBeInTheDocument();
  expect(sendButton).toHaveValue("Enviar");
});

test("Verifica que ao digitar o email e clicar em Enviar, o email é renderizado", () => {
  render(<App />);
 
const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});
//acessar os elementos
//interagir com os elementos (se necessary)
//fazer os testes
