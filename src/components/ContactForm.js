import React, { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});

  const handleSubmit = async event => {
    const axios = require('axios');

    try {
      const res = await axios.post(
        'https://al210gps9i.execute-api.us-east-1.amazonaws.com/dev/message',
        JSON.stringify(values)
      );
      console.log(res);

      await alert("Message sent! We'll be in touch shortly.");
    } catch (err) {
      console.log(err);
      await alert(
        'Internal server error. Could not send your message. Please message us on Discord at https://discord.gg/GEMh8umbe7.'
      );
    }

    setValues({});
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default function ContactForm() {
  const { handleChange, handleSubmit, values } = useForm();

  return (
    <form method="post" onSubmit={() => false}>
      <div className="row">
        <div className="col-6 col-12-mobilep">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={values.name || ''}
          />
        </div>
        <div className="col-6 col-12-mobilep">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email || ''}
          />
        </div>
        <div className="col-12">
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            onChange={handleChange}
            value={values.message || ''}
          />
        </div>
        <div className="col-12">
          <ul className="actions special">
            <li>
              <input
                type="button"
                value="Send message"
                onClick={handleSubmit}
              />
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}
