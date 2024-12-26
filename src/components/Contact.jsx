import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { TiLocationArrow } from "react-icons/ti";
// npm i @emailjs/browser

const Contact = () => {
  const formRef = useRef();

  // const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
    .send(
      "service_n9ex8zo",
        "template_7emcgta",
      {
        from_name: form.name,
        to_name: 'JavaScript Mastery',
        from_email: form.email,
        to_email: 'sujata@jsmastery.pro',
        message: form.message,
      },
      "8GaaDGL1nE9-wbPm7",
    )
    .then(
      () => {
        setLoading(false);
  
        setTimeout(() => {
          setForm({
            name: '',
            email: '',
            message: '',
          });
        }, 3000);
      },
      (error) => {
        setLoading(false);
        console.error(error);
      },
    );
  
  //   emailjs
  //     .sendForm(
  //       "service_n9ex8zo",
  //       "template_7emcgta",
       
  //       form.current,
       
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         console.log("message sent");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
   };

  return (
    
    <section className="c-space   lg:px-0 my-20  " id="contact" >
      
   <div className="relative min-h-screen flex items-center justify-center flex-col">
        
   <img src="/src/assets/images/email2.png" alt="terminal-bg" className=" absolute  inset-0  min-h-screen"
     />
        <div className="contact-container bg-black">
          
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input "
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

               <TiLocationArrow className='text-purple-400 w-5 h-5'/>
            </button>
          </form>
          
        </div>
        <img src="/src/assets/images/email2.png" alt="terminal-bg" className="absolute  min-h-screen" style={{
      right: 0,
      top:0,
      transform: "scaleX(-1)",
    }}
     />
      </div>
     
    </section>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;