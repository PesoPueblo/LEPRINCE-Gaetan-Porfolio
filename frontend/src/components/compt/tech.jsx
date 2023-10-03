export default function Tech({name,img}){
    //comportement
    //fonction qui génère les icones de notation 
    
    //render
    return(
        <div className='tech'>
            <img src={img} alt={"logo "+ name} className="tech-img"/>
            <h3 >{name}</h3>
        </div>
    )
}