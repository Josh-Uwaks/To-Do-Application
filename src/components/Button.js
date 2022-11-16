import React from 'react'
import { getClasses } from '../utils/getClasses'
import styles from '../styles/module/button.module.scss'

const buttonTypes = {
    primary: 'primary',
    secondary: 'secondary',
};
function Button({children, variant, handleModal, type, ...rest}){
    return <button onClick={handleModal}
    className={getClasses([styles.button, styles[`button--${buttonTypes[variant]}`]])}
    >{children}</button>
}
export default Button;
function SelectButton({children, ...rest}){
    return <select className={getClasses([styles.select])} {...rest}>{children}</select>
}
export {SelectButton};
