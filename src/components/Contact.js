import { useState } from "react";
import { Container } from "react-bootstrap";
import catpoint from "../assets/img/catpoint.jpeg"

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});


  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully' });
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <form onSubmit={handleSubmit} className="form">
          <h1 className="white-font">Contact</h1>
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 p-4">

                  <div className="form-group text-align-left mt-3">
                    <label className="mb-1">Name</label>
                    <input placeholder="Name" type="text" className="form-control border-field" />
                  </div>

                  <div className="form-group text-align-left mt-3">
                    <label className="mb-1">Email</label>
                    <input placeholder="Email" type="text" className="form-control" />
                  </div>

                  <div className="form-group text-align-left mt-3">
                    <label className="mb-1">Message</label>
                    <textarea placeholder="Type your message..." type="text" className="form-control" rows="3" />
                  </div>

                  <div className="form-group text-align-left mt-3">
                    <button className="btn btn-primary btn-sm">Send</button>
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

      {/* <Container>
        <Row className="align-items-center white-font">
          <Col>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                  <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate('email', e.target.value)
                        }
                        />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                </Col>
                <Col>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
                <Col>
                  <img src={cute} alt="Contact Cat" className="cat-icon" />
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container> */}
    </section>
  )
}
