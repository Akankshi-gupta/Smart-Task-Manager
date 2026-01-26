import styles from "./Header.module.css"

function Header(){
    return(
        <>
            <div className="d-flex justify-content-between p-3">
                <h4 style={{marginBottom: 0, color: "#00764b"}}>Smart Task Manager</h4>
                <ul className= {styles['pagesNav']}>
                    <li><a href="" className={styles['pagesNav']}>Home</a></li>
                    <li><a href="" className={styles['pagesNav']}>Stats</a></li>
                    <li><a href="" className={styles['pagesNav']}>Settings</a></li>
                </ul>
                <div style={{display: "flex", justifyContent: "space-between", width: '14%'}}>
                    <span className={styles['themeFont']}>Light</span>
                    <label className={styles['switch']}>
                        <input type="checkbox"/>
                        <span className={styles['slider round']}></span>
                    </label>
                    <span className={styles['themeFont']}>Dark</span>
                </div>    
                
            </div>
        </>
        
    )
}

export default Header