import React, { useState } from "react"

export  function Form () {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: 'Formulaire de contact Portfolio',
        message: '',
        accessKey: '621ad3be-ee1d-44cf-961d-4982cf0c6f94' 
      });
    
      const [response, setResponse] = useState({
        type: '',
        message: ''
      });
    
      const handleChange = e =>
        setContact({ ...contact, [e.target.name]: e.target.value });
    
      const handleSubmit = async e => {
        e.preventDefault();
        try {
          const res = await fetch('https://api.staticforms.xyz/submit', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: { 'Content-Type': 'application/json' }
          });
    
          const json = await res.json();
    
          if (json.success) {
            setResponse({
              type: 'success',
              message: `Merci pour votre message! Je répondrais par retour de mail dès que possible`
            });
            document.querySelector('form').setAttribute('style', 'animation: myAnim 2s ease 0s 1 normal forwards')
            document.querySelector('.response').setAttribute('style', 'display:flex')
            
          } else {
            setResponse({
              type: 'error',
              message: json.message
            });alert(response.message)
          }
        } catch (e) {
          console.log('An error occurred', e);
          setResponse({
            type: 'error',
            message: 'An error occured while submitting the form'
          });
        }
      };
    return(
    <div>
        <form action="https://api.staticforms.xyz/submit" method="post" onSubmit={handleSubmit}>
            <label className="label" htmlFor="name">Votre Nom</label>
            <input className="input" type="text" name="name" placeholder="Saisir votre nom" id='name' onChange={handleChange} aria-label="saisir votre nom ici" required /> 
            <label className="label" htmlFor="email">Votre Email</label>
            <input className="input"  type="email" name="email" id="email" placeholder="Saisir votre email" onChange={handleChange} aria-label="saisir votre mail ici" required/>
            <label className="label" htmlFor="message">Votre Message</label> 
            <textarea name="message" id="message" placeholder="Saisir votre message" onChange={handleChange} aria-label="saisir votre message ici"required/>  
            <input className='btn'type="submit" value="Envoyer" />
        </form>
        <p className="response">{response.message}</p>

    </div>
    )
}