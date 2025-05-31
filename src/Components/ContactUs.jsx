import '../Style/App.css'
import { useState } from 'react';

function ContactUs(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    referral: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/send-email", formData); // Asegúrate de cambiar esto a tu backend real
      alert("Mensaje enviado correctamente");
    } catch (error) {
      alert("Hubo un error al enviar el mensaje");
    }
  };
  return(
    <div className=''>
      <h1 className='text-center text-4xl pt-5'>Request A Quote</h1>
      <form onSubmit={handleSubmit} className="mt-10 max-w-2xl mx-auto p-6 space-y-4 bg-white rounded shadow">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Name *" className="inputC" onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone Number *" className="inputC" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email address *" className="inputC" onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" className="inputC" onChange={handleChange} />
          <input type="text" name="city" placeholder="City" className="inputC" onChange={handleChange} />
          <input type="text" name="zip" placeholder="Zip Code" className="inputC" onChange={handleChange} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <select name="referral" className="input" onChange={handleChange} required>
            <option value="">How did you hear about us?</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Friend">Friend</option>
          </select>
          <select name="projectType" className="input" onChange={handleChange} required>
            <option value="">Type of Projects</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Design">Design</option>
            <option value="Irrigation">Irrigation</option>
          </select>
        </div>
        <textarea name="message" placeholder="Tell us about your project" className="inputC" onChange={handleChange}></textarea>
        <button type="submit" className="block mx-auto bg-green-700 text-white px-6 py-2 rounded hover:bg-green-700 cursor-pointer">Send</button>
      </form> 
    </div>
  );
}
export default ContactUs;