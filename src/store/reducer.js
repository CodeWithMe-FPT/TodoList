import { SET_TODO_INPUT, SET_TODO_LiST, COMPLETE_TODO, REMOVE_TODO } from "./constants";
import { v4 } from "uuid";

const TODO_APP_STORAGE_KEY = 'TODO_APP'
const todoListStorage = JSON.parse(localStorage.getItem(TODO_APP_STORAGE_KEY));

export const initState = {
    todoList: todoListStorage ? todoListStorage : [],
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
                todoList: [...state.todoList, { id: v4(), name: state.textInput, isCompleted: false }],
                textInput: '',
            }

        case COMPLETE_TODO:
            var newStateComplete = state.todoList.map((todo) => {
                return todo.id === action.payload ? { ...todo, isCompleted: true } : todo
            })
            localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(newStateComplete));
            return {
                ...state,
                todoList: newStateComplete,
            };

        case REMOVE_TODO:
            var newStateRemove = state.todoList.filter((todo) => todo.id !== action.payload);
            localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(newStateRemove));
            return {
                ...state,
                todoList: newStateRemove,
            };
        default:
            throw new Error('Invalid')
    }
}

export default reducer