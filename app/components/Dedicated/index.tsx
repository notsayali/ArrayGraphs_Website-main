import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">
            <div className='mx-auto max-w-7xl px-0 sm:py-0 lg:px-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-0'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/pharma/wellnessmission.png" alt="man-icon" width={600} height={900} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <h2 className="text-4xl lg:text-60xl font-bold sm:leading-tight text-center lg:text-start"></h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start"> We believe in fostering healthy relationships for life by providing reliable and effective pharmaceutical solutions. As a professional pharmaceutical company, we specialize in producing and marketing the latest generation of pharmaceutical products.</p>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start"> Our focus is exclusively on treating and managing disorders related to <i className="text-black">orthopedic, gynecological, diabetic, and cardiac</i> problems, ensuring that our patients receive the best care possible.</p>
                        <p className="font-medium text-black text-2xl mt-5 text-center lg:text-start"> </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
