import styles from "./Header.module.css"
import {NavLink} from "react-router-dom"

function Header(){
    function toggleTheme(e) {
        document.body.classList.toggle("dark", e.target.checked);
    }

    return(
        <>
            <div className="d-flex justify-content-between p-3">
                <h4 style={{marginBottom: 0, color: "#00764b"}}>Smart Task Manager</h4>
                <ul className= {styles['pagesNav']}>
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? styles.activePage : styles.pageLink
                    }>Home</NavLink></li>
                    <li><NavLink to="/stats"  className={({ isActive }) =>
                        isActive ? styles.activePage : styles.pageLink
                    }>Stats</NavLink></li>
                    <li><a href="" className={styles['pagesNav']}>Settings</a></li>
                </ul>
                <div style={{display: "flex", justifyContent: "space-between", width: '14%'}}>
                    <span className={styles['themeFont']}>Light</span>
                    <div style={{margin:'2% 4%'}}>
                        <label className={styles['switch']} >
                            <input type="checkbox" onChange={toggleTheme}/>
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </label>
                    </div>
                    
                    <span className={styles['themeFont']}>Dark</span>
                </div>
                
            </div>
        </>
        
    )
}

export default Header