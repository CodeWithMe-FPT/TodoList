
import { SET_TODO_INPUT, SET_TODO_LiST, COMPLETE_TODO } from "./constants";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload,
})

export const setTodoList = () => ({
    type: SET_TODO_LiST,
})

export const completeTodo = payload => ({
    type: COMPLETE_TODO,
    payload,
})




// const onTextInputChange = (e) => {
//     setTextInput(e.target.value);
// };

// const onAddBtnClick = (e) => {
//     setTodoList([
//         { id: v4(), name: textInput, isCompleted: false },
//         ...todoList,
//     ]);
//     setTextInput("");
// };

// const onCheckBtnClick = (id) => {
//     setTodoList((prevState) =>
//         prevState.map((todo) =>
//             todo.id === id ? { ...todo, isCompleted: true } : todo
//         )
//     );
// };

// export { onAddBtnClick, onCheckBtnClick, onTextInputChange }