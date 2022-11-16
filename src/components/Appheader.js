import React, { useState } from 'react'
import Button from './Button'
import { SelectButton } from './Button'
import styles from '../styles/module/app.module.scss'
import Modal from './Modal/modal'
export default function Appheader(){
    const [modalOpen, setModalOpen] = useState(false)
    const handleModal = () => {
        setModalOpen(!modalOpen)
    }
    return(
        <div className={styles.appHeader}>
            <Button variant='primary' type='button' handleModal={handleModal}>Add Task</Button>
            <SelectButton>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='incomplete'>Incomplete</option>
            </SelectButton>
            <Modal handleModal={handleModal} modalOpen={modalOpen} setModalOpen={setModalOpen} type='add'/>
        </div>
    )
}