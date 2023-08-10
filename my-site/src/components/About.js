import styles from './About.module.css'

function About() {
    return( 
        <div className={styles.aboutCont}>
            <div className={styles.aboutImage}>
                <img src="https://images.unsplash.com/photo-1564277287253-934c868e54ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"/>
            </div>
            <div className={styles.aboutText}>
            <h1>Nossa história</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vehicula elit. Quisque non congue dui. Nullam sit amet turpis id libero feugiat cursus vitae nec ante. Sed ullamcorper id quam a tincidunt. Vivamus laoreet, ex nec varius aliquam, purus ipsum sodales orci, eu egestas orci odio non urna.</p>
            <Btn message="Sobre nós"/>
            </div>
        </div>
    )
}
export default About
