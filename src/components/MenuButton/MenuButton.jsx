import classes from './MenuButton.module.css'

export default function MenuButton({ children, isActive, ...props }) {

    return <button {...props} className={isActive ? `${classes.menuButton} ${classes.active}` : classes.menuButton}>{children}</button>
}