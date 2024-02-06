// import uuid from "react-uuid";
import { v4 as uuidv4 } from 'uuid';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SWITCH_TODO = 'SWITCH_TODO';

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload: payload,
  };
};

const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: '',
      body: '',
      isDone: false,
    },
  ],
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }; //TODO: 여기 작성

    case 'DELETE_TODO':
      return {}; //TODO: 여기 작성

    case 'SWITCH_TODO':
      return {}; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
