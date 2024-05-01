import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ToDoList from "../ToDoList/index.jsx";

// Teste para adicionar um produto
test("adiciona um produto", () => {
  const { getByPlaceholderText, getByText } = render(<ToDoList />);

  const productNameInput = getByPlaceholderText("Nome do produto");
  const quantityInput = getByPlaceholderText("Quantidade");
  const addButton = getByText("Adicionar");

  fireEvent.change(productNameInput, { target: { value: "Arroz" } });
  fireEvent.change(quantityInput, { target: { value: "2" } });
  fireEvent.click(addButton);

  expect(getByText("Arroz - Quantidade: 2")).toBeInTheDocument();
});

// Teste para remover um produto
test("remove um produto", async () => {
  const { getByText, queryByText } = render(<ToDoList />);

  const addButton = getByText("Adicionar");
  fireEvent.click(addButton);

  await waitFor(() => {
    const deleteButton = queryByText("Excluir");
    expect(deleteButton).toBeInTheDocument();
  });

  fireEvent.click(queryByText("Excluir"));

  await waitFor(() => {
    expect(queryByText("Arroz - Quantidade: 2")).toBeNull();
  });
});

// Teste para aumentar a quantidade de produtos
test("aumenta a quantidade de produtos", async () => {
  const { getByText, queryByText } = render(<ToDoList />);

  const addButton = getByText("Adicionar");
  fireEvent.click(addButton);

  await waitFor(() => {
    const increaseButton = queryByText("+");
    expect(increaseButton).toBeInTheDocument();
  });

  fireEvent.click(queryByText("+"));

  expect(getByText("Arroz - Quantidade: 3")).toBeInTheDocument();
});

// Teste para diminuir a quantidade de produtos
test("diminui a quantidade de produtos", async () => {
  const { getByText, queryByText } = render(<ToDoList />);

  const addButton = getByText("Adicionar");
  fireEvent.click(addButton);

  await waitFor(() => {
    const decreaseButton = queryByText("-");
    expect(decreaseButton).toBeInTheDocument();
  });

  fireEvent.click(queryByText("-"));

  expect(getByText("Arroz - Quantidade: 1")).toBeInTheDocument();
});

// Teste para adicionar produto com nome vazio
test("não adiciona produto com nome vazio", () => {
  const { getByText, getByPlaceholderText } = render(<ToDoList />);

  const productNameInput = getByPlaceholderText("Nome do produto");
  const quantityInput = getByPlaceholderText("Quantidade");
  const addButton = getByText("Adicionar");
  const errorLabel = getByText("Preencha todos os campos!");

  fireEvent.change(quantityInput, { target: { value: "2" } });
  fireEvent.click(addButton);

  expect(errorLabel).toBeInTheDocument();
});

// Teste para adicionar produto com quantidade inválida
test("não adiciona produto com quantidade inválida", () => {
  const { getByText, getByPlaceholderText } = render(<ToDoList />);

  const productNameInput = getByPlaceholderText("Nome do produto");
  const quantityInput = getByPlaceholderText("Quantidade");
  const addButton = getByText("Adicionar");
  const errorLabel = getByText("Insira uma quantidade válida!");

  fireEvent.change(productNameInput, { target: { value: "Arroz" } });
  fireEvent.change(quantityInput, { target: { value: "-1" } });
  fireEvent.click(addButton);

  expect(errorLabel).toBeInTheDocument();
});

// Teste para diminuir a quantidade para 0
test("diminui a quantidade de um produto para 0", async () => {
  const { getByText, queryByText } = render(<ToDoList />);

  const addButton = getByText("Adicionar");
  fireEvent.click(addButton);

  await waitFor(() => {
    const decreaseButton = queryByText("-");
    expect(decreaseButton).toBeInTheDocument();
  });

  fireEvent.click(queryByText("-"));

  expect(queryByText("Arroz - Quantidade: 0")).toBeNull();
});