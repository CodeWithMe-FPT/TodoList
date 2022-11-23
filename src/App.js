import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

const TODO_APP_STORAGE_KEY = 'TODO_APP'
const todoListStorage = JSON.parse(localStorage.getItem(TODO_APP_STORAGE_KEY));

function App() {
  const [todoList, setTodoList] = useState(todoListStorage ?? []);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const onAddBtnClick = (e) => {
    setTodoList([
      { id: v4(), name: textInput, isCompleted: false },
      ...todoList,
    ]);
    setTextInput("");
  };

  const onCheckBtnClick = (id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };

  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield
        name='add-todo'
        placeholder='Thêm việc cần làm...'
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance='primary'
            onClick={onAddBtnClick}
          >
            Thêm
          </Button>
        }
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </>
  );
}

export default App;