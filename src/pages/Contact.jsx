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
          <form onSubmit={handleFormSubmit}>
            <InputGroup className="name mb-3">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <Form.Control
                    placeholder="Full Name"
                    aria-label="Name"
                    name="name"
                    onChange ={handleInputChange}
                    value={name}
                />
            </InputGroup> 

            <InputGroup className="email mb-3">
                <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
                <Form.Control
                    placeholder="juan@juan23.com"
                    aria-label="Email:"
                    name="email"
                    onChange ={handleInputChange}
                    value={email}
                />
            </InputGroup>

            <InputGroup className="message mb-3">
                <InputGroup.Text>Your Message</InputGroup.Text>
                <Form.Control 
                    as="textarea" 
                    aria-label="With textarea" 
                    name= "message"
                    onChange={handleInputChange}
                    value={message}
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