import React, {useState} from "react";
import validateEmail from '../../utils/helpers';

function Contact () {
    const [formState, setFormState] = useState({name: '', email:'', message: ''});
    const {name, email, message} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} cannot be empty`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h2 
                    className="text-blue-300 text-2xl my-2"
                    >Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="w-1/2">
                    <label htmlFor="name" className="font-bold">Name:</label>
                    <input className="w-full m-2" type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div className="w-1/2">
                    <label htmlFor="email" className="font-bold">Email:</label>
                    <input className="w-full m-2" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="w-1/2">
                    <label htmlFor="message" className="font-bold">Message:</label>
                    <textarea className="w-full m-2" name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </section>
    )
}

export default Contact;