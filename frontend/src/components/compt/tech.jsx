export default function Tech({name,img}){
    //comportement
    //fonction qui génère les icones de notation 
    
    //render
    return(
        <div className='tech'>
            <img src={img} alt={name} className="tech-img"/>
            <h4 >{name}</h4>
        </div>
    )
}