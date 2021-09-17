import React, { useState, useEffect } from 'react';
import './style.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

import emailjs from 'emailjs-com';

import Button from '../../components/Button';

const initialValues = {
    name:'',
    email:'',
    message:''
}

const Contact = () => {

    const [contactFormInfo, setContactFormInfo] = useState(initialValues);
    const [showAlert, setShowAlert] = useState(false);

    const onChange = e => {
        setContactFormInfo({
            ...contactFormInfo,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // emailjs.send(serviceID, templateID, templateParams, userID);
        emailjs.send( "service_50dffvn", "template_p4e5c5v", contactFormInfo, "user_lkrgD5ntA1hvJGsahBXJu")

            .then((response) => {
                console.log('Success!', response.status, response.text);
                setContactFormInfo(initialValues);
                setShowAlert(true);
            }, (err) => {
                console.log('Error!', err);
            });
    }

    const handleAlert = () => {
        setShowAlert(false);
    } 

    useEffect(() => {
        if(showAlert)
        {
            setTimeout(handleAlert, 4000);
        }
    }, [showAlert])

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <article className='contact'>
            <div className="contact-container">

                {showAlert && 
                    <div 
                        className='alertOk'
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration='1500'
                    >
                        <p>Email enviado!</p>
                    </div>
                }

                <h4
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration='1500'
                >Mandame un mensaje por mail, ni bien lo vea te contesto!</h4>
                <form className="contact-form" onSubmit={onSubmit}>
                    <input
                        className='form-input input-name' 
                        type="text"
                        name='name'
                        placeholder='Nombre'
                        value={contactFormInfo.name}
                        onChange={onChange}
                        required
                        data-aos="fade-right"
                        data-aos-duration='800'
                    />

                    <input 
                        className='form-input input-email'
                        type="email"
                        name='email'
                        placeholder='Email'
                        value={contactFormInfo.email}
                        onChange={onChange}
                        required
                        data-aos="fade-left"
                        data-aos-duration='800'
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
                        data-aos="fade-up"
                        data-aos-duration='1200'
                    />
                <Button 
                    data-aos="fade-up-left"
                    data-aos-duration='1500'
                >
                    Enviar Mensaje!
                </Button>

                </form>
            </div>
        </article>
    )
}

export default Contact
