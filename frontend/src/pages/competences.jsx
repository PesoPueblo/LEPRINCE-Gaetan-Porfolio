import compétences from '../data/compétence.json'
import '../styles/compet.css'
export default function Competences(){

function Grade({note}){
    const round = [];
    for (let i = 0; i < note; i++) {
        round.push(
            <i className='fa-solid fa-circle' key={`full${i}`}></i>
        )
    }
    for (let i = 0; i < 5-note; i++) {
        round.push( 
            <i className='fa-regular fa-circle' key={`empty${i}`}></i>
        ) 
        
    }
    return (
        <div className='grade'>
            {round}
        </div>
    )


}

    return(
        <div id="compétences" className="competence-gallery section">
            <h2 className='title'>Mes compétences</h2>
            <div className='compet-gallery'>
              {compétences.map((compet)=>{
                    return (
                    <div key={compet.id} className='CompCard'>
                        
                        <h3 className='compTitle' key={compet.titre}>{compet.titre}</h3>
                        <div className='list' key={`list${compet.id}`}>
                            {compet.technologie.map((tech)=>{
                                let note= tech.grade;
                                return(
                                    <div key={tech.id} className='tech'>
                                        <h4 key={`lang${tech.id}`}>{tech.langage}</h4>
                                        {Grade({note})}
                                    </div>
                                )

                            })}
                        </div>
                    </div>
                    )
               })}  
            </div>
            

        </div>
    )
}