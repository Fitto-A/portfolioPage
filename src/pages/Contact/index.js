import React, { useState } from 'react';
import './style.scss';

import Button from '../../components/Button';

const initialValues = {
    name:'',
    email:'',
    message:''
}


const Contact = () => {

    const [contactFormInfo, setContactFormInfo] = useState(initialValues);

    const onSubmit = e => {
        e.preventDefault();
        setContactFormInfo({...initialValues})
    }

    const onChange = e => {
        setContactFormInfo({
            ...contactFormInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <article className='contact'>
            <div className="contact-container">
                <form className="contact-form" onSubmit={onSubmit}>
                    <input
                        className='form-input input-name' 
                        type="text"
                        name='name'
                        placeholder='Nombre'
                        value={contactFormInfo.name}
                        onChange={onChange}
                        required
                    />

                    <input 
                        className='form-input input-email'
                        type="email"
                        name='email'
                        placeholder='Email'
                        value={contactFormInfo.email}
                        onChange={onChange}
                        required
                    />
                    <br />
                    <br />
                    <br />
                    <textarea
                        className='form-textarea' 
                        name='message'
                        value={contactFormInfo.message}
                        onChange={onChange}
                        placeholder='Mensaje'
                        required
                    />
                <Button >
                    Enviar Mensaje!
                </Button>

                </form>
            </div>
        </article>
    )
}

export default Contact
