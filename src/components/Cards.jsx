import styles from "./Cards.module.css"

function Cards({whichProject, count}){
    return(
        <div id={styles[whichProject.split(' ')[0]]}>
            <p style={{fontSize:'1.1rem', fontWeight: '500'}}>{whichProject}</p>
            <p style={{fontSize:'2rem', fontWeight: '500', marginBottom: '0'}}>{count}</p>
        </div>
    )
}

export default Cards;