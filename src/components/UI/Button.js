import styles from './Button.module.css'

function Button(props) {
  const { onclick, children, title, disabled = false } = props
  return (
    <button {...props} className={styles.button} onClick={onclick} title={title} disabled={disabled}>{children}</button>
  )
}

export default Button