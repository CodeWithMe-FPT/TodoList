import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useStore, actions } from "./store";
function App() {

  const [state, dispatch] = useStore();
  const { todoList, textInput } = state;

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
            onClick={() => {
              dispatch(actions.setTodoList())
            }}
          >
            Thêm
          </Button>
        }
        value={textInput}
        onChange={(e) => {
          console.log(e.target.value);
          dispatch(actions.setTodoInput(e.target.value))
        }}
      ></Textfield>
      <TodoList />
    </>
  );
}

export default App;