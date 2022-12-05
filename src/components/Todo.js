import Button from "@atlaskit/button";
import React from "react";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle'
import { useStore, actions } from "../store";

const ButtonStyled = styled(Button)`
  margin-top: 5px !important;
  text-align: left !important;
  &,
  &:hover {
    ${(p) =>
    p.iscompleted === "true" &&
    css`
        text-decoration: line-through !important;
    `}
  }
  &:hover {
    .check-icon, .remove-icon {
      display: inline-block;
    }
  }
  .check-icon, .remove-icon {
    display: none;
    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;



export default function Todo({ todo }) {
  const [state, dispatch] = useStore();

  const a = (
    <span className='check-icon' onClick={() => dispatch(actions.completeTodo(todo.id))}>
      <CheckIcon primaryColor='#4fff4f' />
    </span>
  )

  const b = (
    <span className='remove-icon' onClick={() => dispatch(actions.removeTodo(todo.id))}>
      <CrossCircleIcon primaryColor="red" />
    </span>
  )

  return (
    <ButtonStyled
      iscompleted={todo.isCompleted.toString()}
      shouldFitContainer
      iconAfter={
        (!todo.isCompleted) ? a : b
      }
    >
      {todo.name}
    </ButtonStyled>
  );
}