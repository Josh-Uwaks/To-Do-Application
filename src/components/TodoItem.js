import React, { useState } from 'react'
import {format} from 'date-fns/esm'
import styles from '../styles/module/todo.module.scss'
import { getClasses } from '../utils/getClasses'
import {MdDelete} from 'react-icons/md'
import {HiPencil} from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../app/slices/todoSlice'
import toast from 'react-hot-toast'
import Modal from './Modal/modal'

function TodoItem({item}){
    const {title, time} = item
    const dispatch = useDispatch();
    const handleDelete = () => {
        console.log('delete function')
        dispatch(deleteTodo(item.id))
        toast.success('Todo Deleted Successfully')
    }
    const handleUpdate = () => { 
        console.log('update function')      
    }
    const [updatemodalOpen, setUpdatemodalOpen] = useState(false);
    const handleUpdateModal = () => {
        setUpdatemodalOpen(true)
    }
    return(
        <>
            <div className={styles.todoContainer}>
                <div className={styles.todoItem}>
                    <div className='flex items-center'>
                        []
                        <div className={styles.text}>
                        <p className={getClasses([styles.todoContent, item.status === 'completed' && styles["todoContent--completed"]])}>{title}</p>
                        <p className={styles.time}>{format(new Date(time), 'p, MM/dd/yyyy')}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.action}>
                    <div className={styles.icon} onClick={handleDelete} onKeyDown={handleDelete} role='button' tabIndex={0}>
                        <MdDelete/>
                    </div>
                    <div className={styles.icon} onClick={handleUpdateModal} onKeyDown={handleUpdate} role='button' tabIndex={0}>
                        <HiPencil/>
                    </div>
                </div>
            </div>
            <Modal type='update' modalOpen={updatemodalOpen} setModalOpen={setUpdatemodalOpen} item={item}/>
        </>
    )
}
export default TodoItem;