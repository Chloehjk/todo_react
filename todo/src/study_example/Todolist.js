import React from 'react';
import List from 'List';

function Todolist() {
    const [todo, setTodo] = React.useState('');
    const [todoList, setTodoList] = React.useState([]);
    
    const change = (e) => {
        setTodo(e.target.value);
    }
    const add = (e) => {
        setTodoList([...todoList, todo]);
        setTodo('');
    }
    const enter = (e) => {
        if (e.key === 'Enter') {
            add();
        }
    }

    const deleteTodo = (index) => {
        setTodoList([...todoList.slice(0, index), todoList.slice(index + 1, todoList.length)]);
    }
    
    return (
        <div>
            <input value={todo} onChange={change} onKeyPress={enter}/>
            <button onClick={add}>추가</button>
            {todoList.map((v ,i) => {
                    return <List v={v} i={i} deleteTodo={deleteTodo}/>
                })}
        </div>
    )
}
export default Todolist
