
function Setting({darkTheme, setDarkTheme, setTaskList}){
    function resetApp(){
        localStorage.removeItem('task');
        setTaskList([])
        setDarkTheme(false)
    }

    function clearTask(){
        localStorage.removeItem('task');
        setTaskList([])
    }

    return(
        <div style={{padding: '2% 6%'}}>
            <p style={{fontSize: '1.5rem'}} className="fontClr">Appearance</p>
            <hr className="hr-color"/>
            <p style={{fontSize: '1.2rem', marginBottom: '0'}} className="fontClr">Interface Theme</p>
            <p style={{color: 'gray'}}>Customizing your workspace, make it enjoyable and comfortable to work!</p>
            <div className="d-flex" style={{width: '40%'}}>
                <div style={{textAlign: 'center'}}>
                    <button className={`themeBtn ${darkTheme ? 'themeBtnActive' : ' '}`} onClick={()=>setDarkTheme(true)}>
                        <img src="/dark-theme.png" alt="" style={{height: '100%', width: '100%'}} />
                    </button>
                    <p className="fontClr">Dark</p>
                </div>
                <div style={{textAlign: 'center'}}>
                    <button className={`themeBtn ${!darkTheme ? 'themeBtnActive' : ' '}`} onClick={()=>setDarkTheme(false)}>
                        <img src="/light-theme.png" alt="" style={{height: '100%', width: '100%'}}/>
                    </button>
                    <p className="fontClr">Light</p>
                </div>
            </div>
            <div className="mt-5">
                <p style={{fontSize: '1.5rem'}} className="fontClr">Data Management</p>
                <hr className="hr-color"/>  
                <button className="manageBtn me-5" onClick={clearTask}>Clear All Tasks</button>
                <button className="manageBtn" onClick={resetApp}>Reset App</button>
            </div>
        </div>
    )
}

export default Setting