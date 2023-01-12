import styles from './Button.module.css'

function Button({ onClick, children, title, disabled = false }) {
  return (
    <button className={styles.button} onClick={onClick} title={title} disabled={disabled}>{children}</button>
  )
}

export default Button