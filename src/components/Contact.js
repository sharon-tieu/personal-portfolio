import React from 'react';
import {Container} from 'react-bootstrap';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import catpoint from "../assets/img/catpoint.jpeg"

export const Contact = () => {
  const form = useRef();
  const sendMessage = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_472w51b', 'template_fazgq2w', form.current, 'EoZGR7RtU0zZsdUIh')
      .then((result) => {
        console.log('result.text:', result.text);
      }, (error) => {
        console.log('error.text:', error.text);
      });
       e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <h1 className="white-font">Contact</h1>
        <form ref={form} onSubmit={sendMessage} className="form">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 p-4">
                  <div className="form-group text-align-left mt-3">
                    <label className="mb-1">Full Name</label>
                    <input
                      placeholder="Naruto Uzumaki"
                      type="text"
                      className="form-control border-field"
                      name="userName"
                      required />
                  </div>
                  <div className="form-group text-align-left mt-3">
                    <label className="mb-1">Email</label>
                    <input
                      placeholder="naruto.uzumaki@leafvillage.com"
                      type="email"
                      className="form-control"
                      name="userEmail"
                      required />
                  </div>

                  <div className="form-group text-align-left mt-3">
                    <label className="mb-1">Message</label>
                    <textarea
                      placeholder="Type your message..."
                      type="text"
                      className="form-control" rows="3"
                      name="message"
                      required />
                  </div>
                  <div className="form-group d-flex flex-row-reverse text-align-right mt-3">
                    <button
                    className="btn btn-primary btn-sm"
                    type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={catpoint} alt="Cat" className="cat-icon mt-5" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </section>
  )
}
