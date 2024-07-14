"use client";
import '../app/globals.css'
import Navbar from '../app/components/Navbar/index'
import Footer from '../app/components/Footer/index'
import React, { useState } from 'react';
//import { db } from '../app/components/firebase/config.js';

const Join = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [work, setWork] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form inputs
        if (!name || !email || !contact || !work) {
            setError('All fields are required');
            return;
        }
        setMessage('Your response has been recorded');
    };

    // const handleClick = () => {
    //     setMessage('Your response has been recorded');
    //   };

    return (
        <div>
        <div>
        <Navbar />
        </div>
        <div className="justify-center items-center">
    <img src="/images/pharma/contactbg.png" alt="Description of the image" className="w-full max-h-[270px] object-cover" />
</div>
            <div className="mx-auto max-w-12xl px-0 py-12 my-8 lg:px-20 bg-lightgrey  relative">

                <div className="text-center">
                    <h3 className="text-center text-4xl lg:text-62xl font-bold">FOR FURTHER ENQUIRIES</h3>
                    <p className="text-lightblack text-base font-normal">Our team will get back to you as soon as possible.</p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                    <form className="">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="grid grid-cols-1 gap-6">
                                <label htmlFor="name" className="sr-only">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="my-4 py-4 sm:text-xl text-black rounded-full bg-lightgrey pl-4 focus:outline-none bg-emailbg focus:text-black"
                                    placeholder="Name"
                                    autoComplete="off"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {/* Repeat this structure for other form inputs */}
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <label htmlFor="email" className="sr-only">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="my-4 py-4 sm:text-xl text-black rounded-full bg-lightgrey pl-4 focus:outline-none bg-emailbg focus:text-black"
                                    placeholder="Email"
                                    autoComplete="off"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <label htmlFor="contact" className="sr-only">Contact Number:</label>
                                <input
                                    type="tel"
                                    id="contact"
                                    className="my-4 py-4 sm:text-xl text-black rounded-full bg-lightgrey pl-4 focus:outline-none bg-emailbg focus:text-black"
                                    placeholder="Contact No."
                                    autoComplete="off"
                                    required
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="options" className="sr-only">Choose an option:</label>
                                <div className='relative'>
                                <select
            id="options"
            value={work}
            onChange={(e) => setWork(e.target.value)}
            className="my-4 py-4 sm:text-xl text-lightblack rounded-full bg-lightgrey pl-4 pr-8 appearance-none focus:outline-black bg-emailbg focus:text-black border-lightblack w-full"
        >
                                    <option value="" disabled>Why do you want to contact us?</option>
                                    <option value="option1">Product Related Information</option>
                                    <option value="option2">Career at Risana</option>
                                    <option value="option4">Other</option>
                                </select>
                                
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
        <button
        type="submit"
        className="joinButton w-full text-xl text-white bg-blue-600 font-semibold text-center rounded-full bg-navyblue hover:bg-btnblue py-4"
        onClick={handleSubscribe}>
        Submit
        </button>
      {message && (
        <p className="mt-4 text-green-600 text-lg font-medium">{message}</p>
      )}
</div>
</form>
                </div>
            </div>
            <div>
        <Footer />
        </div>
        </div>
    );
};

export default Join;

export function generateStaticParams() {
    return [{ slug: 'contact' }]
  }
