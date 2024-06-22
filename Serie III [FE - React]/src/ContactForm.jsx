import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = 'El nombre completo es obligatorio.';
    if (!formData.email) formErrors.email = 'El correo electrónico es obligatorio.';
    if (!formData.subject) formErrors.subject = 'El asunto es obligatorio.';
    if (!formData.message) formErrors.message = 'El mensaje es obligatorio.';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      {submitted ? (
        <p>Mensaje enviado con éxito.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre completo:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p>{errors.fullName}</p>}
          </div>
          <div>
            <label>Correo electrónico:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label>Asunto:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p>{errors.subject}</p>}
          </div>
          <div>
            <label>Mensaje:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p>{errors.message}</p>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
