import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import '../App.css'

function contactForm() {

    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        
        e.preventDefault();
        
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {

        if (!validateEmail(email)) {
            setErrorMessage('Email is not valid');
            return;
          }

        alert(`Thank you for reaching out ${name}`);
    }


    return (
        <div>
          <h2>Contact</h2>
          <p>Please feel free to reach out and I will get back to you as soon as possible!</p>
          <form onSubmit={handleFormSubmit}>
            <InputGroup hasValidation className="name mb-3">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <Form.Control
                    placeholder="Full Name"
                    aria-label="Name"
                    name="name"
                    onChange ={handleInputChange}
                    value={name}
                    required isInvalid
                />
            </InputGroup> 

            <InputGroup hasValidation className="email mb-3">
                <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
                <Form.Control
                    placeholder="juan@juan23.com"
                    aria-label="Email:"
                    name="email"
                    onChange ={handleInputChange}
                    value={email}
                    required isInvalid
                />
            </InputGroup>

            <InputGroup hasValidation className="message mb-3">
                <InputGroup.Text>Your Message</InputGroup.Text>
                <Form.Control 
                    as="textarea" 
                    aria-label="With textarea" 
                    name= "message"
                    onChange={handleInputChange}
                    value={message}
                    required isInvalid
                />
            </InputGroup>

            <Button type="submit">
                    Submit
            </Button> 
            
          </form>
        </div>
      );
};

export default contactForm;