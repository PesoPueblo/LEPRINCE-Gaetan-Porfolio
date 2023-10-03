
export default function GalleryPhoto ({image, titre}){
    //function qui gère les cas d'image seul ou mutiple dans la gallery
    if (typeof image === 'string'|| image instanceof String){
        return (
            <img src={image} alt="page du projet" />
        )
    } else {
        const images=[];
        for (let i = 1; i < image.length; i++) {
            images.push(
                <img src={image[i]} key={`${image[i]}`} alt= {`page du projet ${titre} numéro ${i}`} />
            )
        }
        return images
    }

}