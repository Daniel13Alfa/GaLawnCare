import '../Style/App.css';
import houseHome from '../assets/Images/HouseHome.png';
import Footer from './Footer';
import TailwindCarousel from './TailwindCarousel';

function Home() {
    return (
        <div>
            <div className="flex justify-center pb-5 relative">
                <div className="w-full flex justify-center">
                    <img
                    src={houseHome}
                    alt="Ga Lawn Care"
                    className="h-120 md:h-160 w-10/12 md:w-12/15 max-w-screen-xl block"
                    />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </div>
            <div className='w-screen'>
                <div className='mx-auto md:w-12/15 flex flex-col md:flex-row'>
                    <div className='w-full md:w-6/10'>
                        <TailwindCarousel/>
                    </div>
                    <div className='w-full md:w-4/10'>
                        <div className='pl-9 md:pl-0 w-11/12 md:w-full pt-3 md:pt-0'>
                            <h1 className='text-lg text-justify'>At <strong>GA Lawn Care</strong>, we take pride in delivering quality, reliability, and a deep respect for nature. Our mission is to enhance the beauty and health of every lawn we touch, offering personalized care with integrity and professionalism. Based in Mableton, Georgia, we proudly serve our local community and surrounding areas with a wide range of lawn care and landscaping services — including mowing, trimming, planting, mulch installation, seasonal clean-ups, and more. In the image carousel, you'll find a glimpse of the projects we've completed for our satisfied customers. Whether you're looking to maintain a vibrant lawn or transform your outdoor space, <strong>GA Lawn Care</strong> is here to help you bring your vision to life.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
