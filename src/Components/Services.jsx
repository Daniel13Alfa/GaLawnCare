import '../Style/App.css'
import { FaTree, FaSeedling, FaWater, FaLeaf } from 'react-icons/fa'

const services = [
  {
    title: 'Lawn Mowing',
    description: 'Professional mowing services to keep your yard neat and healthy.',
    icon: <FaLeaf className="text-green-600 w-10 h-10" />,
  },
  {
    title: 'Tree Trimming',
    description: 'Skilled trimming and pruning for healthy, beautiful trees.',
    icon: <FaTree className="text-green-600 w-10 h-10" />,
  },
  {
    title: 'Garden Design',
    description: 'Custom garden design to match your home and lifestyle.',
    icon: <FaSeedling className="text-green-600 w-10 h-10" />,
  },
  {
    title: 'Irrigation Systems',
    description: 'Efficient watering systems to keep your landscape thriving.',
    icon: <FaWater className="text-green-600 w-10 h-10" />,
  },
]

function Services(){
    return(
        <div>
            <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          At GA Lawn Care, we offer a full range of landscaping services to keep your outdoors looking its best.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
}
export default Services;