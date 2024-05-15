import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import '../App.css';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'email') {
            setEmail(value);
            if (!validateEmail(value)) {
                setErrors(prev => ({ ...prev, email: 'Please enter a valid email address.' }));
            } else {
                setErrors(prev => ({ ...prev, email: '' }));
            }
        } else if (name === 'name') {
            setName(value);
            setErrors(prev => ({ ...prev, name: value ? '' : 'Name is required.' }));
        } else if (name === 'message') {
            setMessage(value);
            setErrors(prev => ({ ...prev, message: value ? '' : 'Please enter a message.' }));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!email || !name || !message || errors.email || errors.name || errors.message) {
            let errorDetails = '';
            if (!name) errorDetails += 'Name is missing. ';
            if (!email) errorDetails += 'Email is missing. ';
            if (!message) errorDetails += 'Message is missing. ';
            errorDetails += Object.values(errors).filter(err => err).join(' ');

            alert("Please correct the errors before submitting:\n" + errorDetails);
            return;
        }

        alert(`Thank you for reaching out, ${name}!`);
        setEmail('');
        setName('');
        setMessage('');
        setErrors({ name: '', email: '', message: '' }); 
    };

    return (
        <div>
            <h2>Contact</h2>
            <p>Please feel free to reach out and I will get back to you as soon as possible!</p>
            <Form onSubmit={handleFormSubmit}>
                <InputGroup hasValidation className="mb-3">
                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                    <Form.Control
                        placeholder="Full Name"
                        aria-label="Name"
                        name="name"
                        onChange={handleInputChange}
                        value={name}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </InputGroup>

                <InputGroup hasValidation className="mb-3">
                    <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
                    <Form.Control
                        placeholder="juan@juan23.com"
                        aria-label="Email"
                        name="email"
                        onChange={handleInputChange}
                        value={email}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </InputGroup>

                <InputGroup hasValidation className="mb-3">
                    <InputGroup.Text>Your Message</InputGroup.Text>
                    <Form.Control 
                        as="textarea" 
                        aria-label="With textarea" 
                        name="message"
                        onChange={handleInputChange}
                        value={message}
                        isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.message}
                    </Form.Control.Feedback>
                </InputGroup>

                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default ContactForm;
