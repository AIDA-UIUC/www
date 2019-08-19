import React, {useState} from 'react';

const useForm = () => {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    alert(`Message sent. ${JSON.stringify(values)}`)
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  }
};

export default function ContactForm() {
  const {
    handleChange,
    handleSubmit,
    values,
  } = useForm();

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6 col-12-mobilep">
          <input type="text" name="name" placeholder="Name" onChange={handleChange} value={values.name || ""} />
        </div>
        <div className="col-6 col-12-mobilep">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} value={values.email || ""}/>
        </div>
        <div className="col-12">
          <textarea name="message" placeholder="Message" rows="6" onChange={handleChange} value={values.message || ""} />
        </div>
        <div className="col-12">
          <ul className="actions special">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}
