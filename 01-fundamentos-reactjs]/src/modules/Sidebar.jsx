import styles from './Sidebar.module.css'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            
            <div className={styles.profile}>
                <strong>Erik Kaue</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">Edite seu Perfil</a>
            </footer>
        </aside>
    )
}