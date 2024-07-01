import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Therapy Area",
        link: ['> Orthopedic', '> Gynecological', '> Diabetic', '> Cardiac'],
    },
]

const Footer = () => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        console.log("Email submitted:", email);
    }

    return (
<div className="bg-navyblue py-6" id="first-section">
    <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-12 xl:gap-x-24">
            {/* COLUMN-1: Photo */}
            <div className='col-span-3 flex items-center justify-center xl:justify-start'>
                <div className='bg-white rounded-lg p-2'>
                    <Image src="/images/pharma/logo.png" alt="Risana Logo" width={170} height={170} />
                </div>
            </div>
            {/* COLUMN-2: Risana Pharmaceuticals */}
            <div className='col-span-3'>
                <h3 className='text-white text-xl font-bold leading-9 mb-4'>Risana Pharmaceuticals</h3>
                <h4 className='text-white text-base font-normal mb-2'><b>Phone number:</b> +91 9109165066 </h4>
                <h4 className='text-white text-base font-normal mb-2'><b>E-mail Address:</b> risana.pharma@gmail.com </h4>
                <h4 className='text-white text-base font-normal mb-2'><b>Address:</b> Purna Nagar, Chinchwad, Pune - 411019</h4>
            </div>
            {/* COLUMN-3: Therapy Area */}
            <div className='col-span-3'>
                <h3 className="text-white text-xl font-bold leading-9 mb-4">Therapy Area</h3>
                <ul>
                    {products[0].link.map((link, index) => (
                        <li key={index} className='mb-2 text-white text-lg font-normal'>{link}</li>
                    ))}
                </ul>
            </div>
            {/* COLUMN-4: Follow Us */}
            <div className='col-span-3'>
                <h3 className="text-white text-xl font-bold leading-9 mb-4">Follow Us</h3>
                <div className="flex space-x-2">
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/pharma/logo01-removebg-preview.png" alt="Facebook" width={40} height={40} />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/pharma/logo02-removebg-preview.png" alt="Instagram" width={40} height={40} />
                    </Link>
                </div>
            </div>
        </div>
    </div>

    {/* Legal Links and Scroll to Top Button */}
    <div className="mx-auto max-w-7xl px-4 mt-4">
        <div className="border-t border-footer pt-3 flex justify-between items-center">
            <h3 className="text-offwhite">Risana Pharmaceuticals. All Rights Reserved.</h3>
            <Link href="/">
                <button className="text-xl font-semibold bg-white py-2 px-4 navbutton rounded-full hover:bg-white">
                    <Image src="/images/pharma/arrow.svg" alt="Up" width={20} height={20} />
                </button>
            </Link>
        </div>
    </div>
</div>

    )
}

export default Footer;
