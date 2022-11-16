import React, { useEffect, useState } from 'react'
import {GrClose} from 'react-icons/gr'
import styles from '../../styles/module/modal.module.scss'
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../app/slices/todoSlice';
import { nanoid } from '@reduxjs/toolkit';
import toast from 'react-hot-toast'
function Modal({modalOpen, setModalOpen, type, item}){
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incompleted');

    useEffect(() => {
        if(type === 'update' && item){
            setTitle(item.title)
            setStatus(item.status)
        }else{
            setTitle('')
            setStatus('incompleted')
        }
    }, [type, item, modalOpen])


    const onSubmit = (e) => {    
        e.preventDefault();
        if(title === ''){
            toast.error('A title must be entered!!')
            return;
        }
        if(title && status){
            if(type === 'add'){
                dispatch(
                    addTodo({
                        id: nanoid(),
                        title,
                        status,
                        time: new Date().toLocaleString(),
                    })
                )
                toast.success('Task Added Successfully');
            }
            if(type === 'update'){
                if(item.title !== title || item.status !== status){
                    dispatch(updateTodo({...item, title, status}))
                    toast.success('Update has been made successfully')
                }else{
                    toast.error('no changes made');
                }
            }
            setModalOpen(false)
        }
    }
    return(
        <>
        {
            modalOpen && 
            <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.modalclose} onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} tabIndex={0} role='button'>
                    <GrClose/>
                </div>
                <form className={styles.form} onSubmit={onSubmit}>
                    <h1 className='text-[#646681] text-2xl mb-3'>{type === 'add' ? 'Add Task' : 'Update Task'}</h1>
                        <label htmlFor='text'>
                            Title
                            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} name='title' id='title'/>
                        </label>
                        
                        <label htmlFor='status'>
                            Status
                            <select id='status' onChange={(e) => setStatus(e.target.value)} value={status} name='status'>
                                <option value='completed'>Completed</option>
                                <option value='incompleted'>Incomplete</option>
                            </select>
                        </label>      
                        
                        <div className={styles.buttoncontainer}>
                            <Button variant='primary' type='submit'>{type === 'add'? 'Add Task' : 'Update Task'}</Button>
                            <Button variant='secondary' type='button' onClick={() => setModalOpen(false)}>Cancel</Button>
                        </div>
                </form>
            </div>
            </div>
        }
        </>
    )
}
export default Modal;