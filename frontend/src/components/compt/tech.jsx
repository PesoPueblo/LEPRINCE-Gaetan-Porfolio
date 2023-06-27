export default function Tech({name,img, note}){
    function Grade({note}){
        const round = [];
        for (let i = 0; i < note; i++) {
            round.push(
                <i className='fa-solid fa-circle note' key={`full${i}`}></i>
            )
        }
        for (let i = 0; i < 5-note; i++) {
            round.push( 
                <i className='fa-regular fa-circle note' key={`empty${i}`}></i>
            ) 
            
        }
        return (
            <div className='grade'>
                {round}
            </div>
        )};
    return(
        <div className='tech'>
            <img src={img} alt={name} className="tech-img"/>
            <h4 >{name}</h4>
            {Grade({note})}
        </div>
    )
}