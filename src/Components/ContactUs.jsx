import '../Style/App.css'
import { useState } from 'react';
import CustomSelect from './UI/CustomSelect';

const projectOptions = [
  { label: "Maintenance", value: "maintenance" },
  { label: "Design", value: "design" },
  { label: "Irrigation", value: "irrigation" },
];

const socialtOptions = [
  { label: "Google", value: "Google" },
  { label: "Facebook", value: "Facebook" },
  { label: "Instagram", value: "Instagram" },
  { label: "Friend", value: "Friend" },
];

function ContactUs(){
  //project options value
  const [projectType, setProjectType] = useState("");
  const handleProjectChange = (value) => {
    setProjectType(value);
  };
  //how did you hear about us
  const [social, setSocial]= useState("")
  const handleSocial = (value) => {
    setSocial(value);
  }

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
      <form onSubmit={handleSubmit} className="mt-10 max-w-2xl mx-auto p-5 space-y-4 bg-white rounded shadow">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Name *" className="inputC" onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone Number *" className="inputC" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email address *" className="inputC" onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" className="inputC" onChange={handleChange} />
          <input type="text" name="city" placeholder="City" className="inputC" onChange={handleChange} />
          <input type="text" name="zip" placeholder="Zip Code" className="inputC" onChange={handleChange} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <CustomSelect options={socialtOptions} labelSelect="How found" onChange={handleSocial}/>
          <CustomSelect options={projectOptions} labelSelect="Type of Projects" onChange={handleProjectChange} />
        </div>
        <textarea name="message" placeholder="Tell us about your project" className="inputC" onChange={handleChange}></textarea>
        <button type="submit" className="block mx-auto bg-green-700 text-white px-6 py-2 rounded hover:bg-green-700 cursor-pointer">Send</button>
      </form> 
    </div>
  );
}
export default ContactUs;