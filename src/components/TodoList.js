import React from "react";
import Todo from "./Todo";
import { useStore, actions } from "../store";
export default function TodoList() {
    const [state, dispatch] = useStore();
    const todoList = state.todoList;
    return (
        <>
            {todoList.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </>
    );
}