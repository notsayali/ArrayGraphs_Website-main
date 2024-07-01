export const Team = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
              </svg>
              <span className="relative">OUR BEST PRODUCTS</span>
            </span>{' '}
          </h2>

        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="/images/pharma/meganxtmain.png"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-white">
                Meganxt HD
                </p>
                <p className="mb-4 text-xs text-white">Calcium citrate Malatate, Methylcobalamin, Vitamin D3, Magnesium, Zinc, L-Methylfolate Calcium and Pyridoxal-5-Phosphate Tablets</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="/images/pharma/wellmovemain.png"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-white">
                 Wellmove TH
                </p>
                <p className="mb-4 text-xs text-white">Diclofenac Diethylamine, Thiocolchicoside, Methyl Salicylate, Menthol, Linseed Oil and Benzyl Alcohol Gel</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="/images/pharma/maloxetmain.png"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-white">
                  Maloxet Suspension
                </p>
                <p className="mb-4 text-xs text-white">Aluminium Hydroxide, Magnesium Hydroxide, Simethicone and Oxetacaine Suspension</p>
              </div>
            </div>
          </div>
       
            </div>
          </div>
    );
  };