import Todo from "./Todo";
import { memo } from "react";
function TodoList({ todoList }) {
    console.log('re-render');
    return (
        <>
            {todoList.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </>
    );
}
export default memo(TodoList) 