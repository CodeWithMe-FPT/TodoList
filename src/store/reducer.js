import { SET_TODO_INPUT, SET_TODO_LiST, COMPLETE_TODO } from "./constants";
import { v4 } from "uuid";

const TODO_APP_STORAGE_KEY = 'TODO_APP'
const todoListStorage = JSON.parse(localStorage.getItem(TODO_APP_STORAGE_KEY));

// const [todoList, setTodoList] = useState(todoListStorage ?? []);
// const [textInput, setTextInput] = useState("");

// useEffect(() => {
//   localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
// }, [todoList]);

export const initState = {
    todoList: todoListStorage,
    textInput: "",
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                textInput: action.payload
            }

        case SET_TODO_LiST:
            localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify([{ id: v4(), name: state.textInput, isCompleted: false }, ...state.todoList]));
            return {
                todoList: [{ id: v4(), name: state.textInput, isCompleted: false }, ...state.todoList],
                textInput: '',
            }

        case COMPLETE_TODO:
            let newState = state.todoList.map((todo) => {
                return todo.id === action.payload ? { ...todo, isCompleted: true } : todo
            })
            return {
                ...state,
                todoList: newState,

            };

        default:
            throw new Error('Invalid')
    }
}

export default reducer