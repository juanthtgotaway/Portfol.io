import { useState } from "react";

import { validateEmail } from "./utils/helpers";

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
            setErrorMessage('Email');
            return;
          }

        alert(`Thank you for reaching out ${name}`);
    }


    return (
        <div>
          <h2>Contact</h2>
          <form className="form" onSubmit={handleFormSubmit}>
              <label>
                  Name:
                  <input type="text" 
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Fre Shavacado"
                  />
              </label>
              <label>
                  Email Address:
                  <input type="text" 
                  name="email"
                  onChange={handleInputChange}
                  placeholder="DinoSaysRawr@JurassicPark.com" 
                  />
              </label>
              <label>
                  Message:
                  <input type="text" 
                  name="message" 
                  onChange={handleInputChange}
                  placeholder="Your message goes here"
                  />
              </label>
              <button type="submit">
                  Submit
              </button>
          </form>
        </div>
      );
}

export default contactForm;