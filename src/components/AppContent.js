import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import styles from '../styles/module/todo.module.scss'
function AppContent(){
    const todoList = useSelector((state) => state && state.todo.todoList)
    console.log(todoList);
    const sortedtodoList = [...todoList]
    sortedtodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
    return(
        <div className={styles.wrapper}>
            {sortedtodoList && sortedtodoList.length > 0 ? 
            sortedtodoList.map((item, index) => {return <TodoItem key={index} item={item}/>})
            : <p className={styles.emptylist}>No To-Do List Available</p>}
        </div>
    )
}
export default AppContent;