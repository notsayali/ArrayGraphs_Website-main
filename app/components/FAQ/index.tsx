'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (

        <div id="faq-section" className='mx-auto w-full pt-9 pb-9 lg:px-8 bg-lightblue my-6'>
            <h2 className="text-center text-4xl lg:text-62xl font-bold">FAQ</h2>
            <div className="w-full px-4 pt-10">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>What are some of Risana Pharmaceuticals' best products?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className={`px-4 pt-4 pb-2 relative text-base text-black font-normal opacity-100 ${open ? 'h-auto' : 'h-0'}`}>
                                Our best products are Meganxt HD, Wellmove TH, and Meloxet Suspension.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>What areas of healthcare does Risana Pharmaceuticals specialize in?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className={`px-4 pt-4 pb-2 relative text-base text-black font-normal opacity-100 ${open ? 'h-auto' : 'h-0'}`}>
                                We specialize in orthopedic, gynecological, diabetic, and cardiac disorders, offering the latest generation pharmaceutical products.<br/>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Does Risana Pharmaceuticals organize any health awareness initiatives?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className={`px-4 pt-4 pb-2 relative text-base text-black font-normal opacity-100 ${open ? 'h-auto' : 'h-0'}`}>
                                Yes, we regularly organize health awareness camps to educate the community on various health issues and preventive measures.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;
