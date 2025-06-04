import '../Style/App.css';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-green-900 text-white text-center w-screen pb-4 pt-4">
            <div className='w-screen flex  justify-center space-x-1'>
                <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/ga_lawn_care_services_llc?igsh=N3J2N20xbHpncGJv'><Instagram/></a>
                <a><Facebook/></a>
                <a><Twitter/></a>
            </div>
            <p>© 2025 GA Lawn Care. All rights reserved.</p>
            <p cla0sName="mt-2">Tel: (678)531-8276 | garlawncare@gmail.com</p>
        </footer>
    );
}

export default Footer;
