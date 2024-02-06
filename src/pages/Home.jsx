import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onSubmitHnadler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuidv4(),
        title,
        body,
        isDone: false,
      })
    );
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  return (
    <div>
      <header>TodoList</header>
      <main>
        <form className="inputArea" onSubmit={onSubmitHnadler}>
          <div>
            제목 :{' '}
            <input
              type="text"
              value={title}
              onChange={(e) => titleChangeHandler(e)}
            ></input>
          </div>
          <div>
            내용 :{' '}
            <input
              type="text"
              value={body}
              onChange={(e) => bodyChangeHandler(e)}
            ></input>
          </div>
          <button>추가하기</button>
        </form>
        <div className="todoList">
          <div className="ActiveList">
            {todos.filter(
              function (todo) {
                return todo.isDone === false;
              }.map(function (todo) {
                return (
                  <div key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.body}</div>
                    <button>삭제하기</button>
                    <button>완료</button>
                  </div>
                );
              })
            )}
          </div>
          <div className="doneList">
            {todos.filter(
              function (todo) {
                return todo.isDone === true;
              }.map(function (todo) {
                return (
                  <div key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.body}</div>
                    <button>삭제하기</button>
                    <button>취소</button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
