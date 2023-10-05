import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

export function FormikForm() {
  //defini un state de message de validation 
  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  //function qui vérifie si l'email à un format correct
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Champ Obligatoire';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Adresse mail non conforme';
    }
    return error;
  }
  //validateur pour le nom minimu 2 lettre pas de chiffre ni symbole
  function validateName(value) {
    let error;
    if (!value) {
      error = 'Champ Obligatoire';
    } else if (!/[A-Za-z]{2,}/.test(value)) {
      error = 'Une erreur est survenue! Le Nom doit contenir minimun 2 lettres';
    }
    return error;
  }

  return (
    <div>
      {/* modèle formik pour formulaire  */}
      <Formik
      /* initialise les valeurs du formulaire à envoyer */
        initialValues={{
          name: '',
          email: '',
          subject: 'Formulaire de contact Portfolio',/*objet du mail  */
          message: '',
          accessKey: '621ad3be-ee1d-44cf-961d-4982cf0c6f94' /** accesskey reçu après la demande sur le site static form */
        }}
        /*comportement onsbmit */
        onSubmit={async function (values) {
          try {
            //post vers l'API de static form
            const res = await fetch('https://api.staticforms.xyz/submit', {
              method: 'POST',
              body: JSON.stringify(values),/*on passe en body le contenu modifier par le handlechange*/
              headers: { 'Content-Type': 'application/json' }
            });

            const json = await res.json();
            //en cas de réussite de l'envoie du mail 
            if (json.success) {
              //modification ddu message de validation 
              setResponse({
                type: 'success',
                message: `Merci pour votre message! J'y répondrais dans les plus bref délais!`
              });
              document.querySelector('.form').setAttribute('style', 'animation: myAnim 2s ease 0s 1 normal forwards')/* animation de disparition du formulaire*/
              document.querySelector('.response').setAttribute('style', 'display:flex')/*changement du display pour faire apparaitre le message */

            } else {/*en cas d'échec de l'envoie  */
              setResponse({
                type: 'error',
                message: json.message
              }); alert(response.message)
            }
          } catch (e) {
            console.log('An error occurred', e);
            setResponse({
              type: 'error',
              message: 'An error occured while submitting the form'
            });
          }
          
        }}
      >
        {({ errors, touched }) => (
          <Form action="https://api.staticforms.xyz/submit" method="post" className='form'>
            <label className="label" htmlFor="email">Votre Email</label>
            <Field name="email" className="input" validate={validateEmail} placeholder="Saisir votre email" id='email' />
            {errors.email && touched.email && <span className='error'>{errors.email}</span>}
            <label className="label" htmlFor="name">Votre Nom</label>
            <Field name="name" className="input" validate={validateName} placeholder="Saisir votre nom" id='name' />
            {errors.name && touched.name && <span className='error'>{errors.name}</span>}
            <label className="label" htmlFor="message">Votre Message</label>
            <Field as='textarea' name="message" id="message" placeholder="Saisir votre message" required />
            <button type="submit" className='btn'>Envoyer</button>
          </Form>
        )}
      </Formik>
      <p className="response">{response.message}</p>
    </div>)
};