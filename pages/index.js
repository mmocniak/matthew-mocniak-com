import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Matthew Mocniak</title>
        <meta name="description" content="Product designer, side project tinkerer, and idea thinker, based in Raleigh, NC." />
        <meta property="og:image" content="./images/meta.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-4 mt-8 mb-48 max-w-full md:mx-8 lg:mx-24 md:max-w-2xl">
        <div className="">
        <div className="max-w-max bg-blue-100 p-2 md:p-5 rounded-full"><img src="./images/faces/smile.png" alt="Smiling Memoji" className="w-32 md:w-40 h-32 md:h-40"/></div>

          <div className="mt-8 space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
              Matthew Mocniak
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 ">
              I'm a product designer with a keen attention to detail. I love
              working closely with other designers and developers to deliver
              excellent products and experiences.
            </h2>
            
          </div>

          <div className="mt-8 px-3 py-2 space-y-2 text-base rounded-lg bg-blue-50 text-blue-600 border border-blue-600 border-opacity-10 md:grid md:grid-flow-col md:content-center md:space-y-0">
              <a className="p-1 flex items-center hover:underline hover:text-blue-500 active:text-blue-800" href="https://www.figma.com/@matthew_mocniak" target="_blank"><img src="./images/socials/figma.svg" alt="Figma" width="30" height="30"/>@matthew_mocniak</a>
              <a className="p-1 flex items-center hover:underline hover:text-blue-500 active:text-blue-800" href="https://www.twitter.com/@matthew_mocniak" target="_blank"><img src="./images/socials/twitter.svg" alt="Twitter" width="30" height="30"/>@matthew_mocniak</a>
              <a className="p-1 flex items-center hover:underline hover:text-blue-500 active:text-blue-800" href="mailto:matthew.m@hey.com"><img src="./images/socials/hey.svg" alt="Hey" width="30" height="30"/>matthew.m@hey.com</a>
          </div>
        </div>
{/* Work history */}
          <div className="mt-10 space-y-4">
            <div className="border-b border-gray-700 border-opacity-20 pb-2 text-base text-gray-500">Experience</div>
            <ul className="text-lg space-y-6 w-auto sm:mr-10">

              <li><a href="https://www.lattice.com" className="flex justify-between group"><div><span className="text-gray-700 font-medium group-hover:underline group-hover:text-blue-500 active:text-blue-800">Lattice</span>, <span className="text-gray-500">Senior Product Designer (New Product Initiative)</span></div><span className="text-gray-400">2022–</span></a></li>
            
              <li><a href="https://www.viget.com" className="flex justify-between group"><div><span className="text-gray-700 font-medium group-hover:underline group-hover:text-blue-500 active:text-blue-800">Viget</span>, <span className="text-gray-500">Senior Product Designer</span></div><span className="text-gray-400">2019–22</span></a></li>

              <li><a href="https://www.kitcosets.com" className="flex justify-between group"><div><span className="text-gray-700 font-medium group-hover:underline group-hover:text-blue-500 active:text-blue-800">KitCo Sets</span>, <span className="text-gray-500">Co-founder</span></div><span className="text-gray-400">2019–22</span></a></li>

              <li><a href="https://www.redhat.com" className="flex justify-between group"><div><span className="text-gray-700 font-medium group-hover:underline group-hover:text-blue-500 active:text-blue-800">Red Hat</span>, <span className="text-gray-500">Product Designer</span></div><span className="text-gray-400">2019</span></a></li>
              
              <li><a href="https://www.ibm.com" className="flex justify-between group"><div><span className="text-gray-700 font-medium group-hover:underline group-hover:text-blue-500 active:text-blue-800">IBM</span>, <span className="text-gray-500">UX Designer</span></div><span className="text-gray-400">2016–19</span></a></li>

              <li><a href="https://www.ibm.com" className="flex justify-between group"><div><span className="text-gray-700 font-medium group-hover:underline group-hover:text-blue-500 active:text-blue-800">IBM</span>, <span className="text-gray-500">Business Analyst</span></div><span className="text-gray-400">2014–16</span></a></li>

            </ul>
          </div>
{/* Recent work to showcase */}
          <div className="mt-16">
            <div className="border-b border-gray-700 border-opacity-20 pb-2 text-base text-gray-500">Recent Work</div>
            
            <div className="mt-4 space-y-2 sm:mr-10">
              <h3 className="font-bold text-xl text-gray-700">Documentation Header</h3>
              <p className="text-lg text-gray-500">A powerful, lil documentation component that can be dropped into any file to add context to a mock-up, describe a workflow, or annotate your work.</p>
            </div>

            <div className="mt-6">
              <a href="./images/full/documentation header/01 documentation header.png" className="max-w-full"><img src="./images/full/documentation header/01 documentation header.png" className="border border-gray-700 border-opacity-20 shadow-sm rounded-md h-56 sm:h-64 md:h-96 w-full object-cover hover:shadow-xl transform hover:-translate-y-0.5 transition"></img></a>
            </div>

            <div className="mt-3 flex grid-cols-2 gap-3">
              <a href="./images/full/documentation header/02 documentation in use.png"><img src="./images/full/documentation header/02 documentation in use.png" className="border border-gray-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover object-top hover:shadow-xl transform hover:-translate-y-0.5 transition"></img></a>
              <a href="./images/full/documentation header/03 documentation text width.png"><img src="./images/full/documentation header/03 documentation text width.png" className="border border-gray-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover object-left hover:shadow-xl transform hover:-translate-y-0.5 transition"></img></a>
            </div>

            <button className="flex w-full md:w-auto mt-6 group">
            <a href="https://www.figma.com/community/file/930683346927230979/Documentation-Header-Component" alt="Figma Community File"  className="flex items-center w-full justify-center bg-white border border-gray-700 border-opacity-20 text-blue-600  pl-4 pr-5 py-3 rounded filter drop-shadow-btn hover:bg-gray-100 hover:text-blue-500 active:bg-gray-200 active:text-blue-800 active:shadow-inner focus:outline-none focus:ring-4 focus:ring-offset-2 transition duration-100"><img src="./images/socials/figma.svg" alt="Figma" width="24" height="24" className="mr-1"/>View Community File</a>
            </button>


            <div className="mt-28 space-y-2 sm:mr-10">
              <h3 className="font-bold text-xl text-gray-700">Vaxfinder</h3>
              <p className="text-lg text-gray-500">I led product design for a website we built in less than one week to collect and display vaccine site details for the Commonwealth of Massachusetts. Within the first two weeks of launch, the Vaxfinder site garnered 60 million pageviews and at its peak hosted around 40,000 concurrent users.</p>
            </div>

            <div className="mt-3 flex grid-cols-2 gap-3">
              <a href="./images/full/vaxfinder/vaxfinder mobile.png"><img src="../images/full/vaxfinder/vaxfinder mobile.png" className="border border-gray-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover hover:shadow-xl transform hover:-translate-y-0.5 transition"></img></a>
              <a href="./images/full/vaxfinder/vaxfinder desktop.png"><img src="./images/full/vaxfinder/vaxfinder desktop.png" className="border border-gray-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover object-top hover:shadow-xl transform hover:-translate-y-0.5 transition"></img></a>
            </div>

            {/* <button className="flex w-full md:w-auto mt-6 group">
            <a href="https://vaxfinder.mass.gov/" alt="Vaxfinder" className="w-full justify-center bg-white border border-gray-700 border-opacity-20 text-blue-600 px-5 py-3 rounded filter drop-shadow-btn hover:bg-gray-100 hover:text-blue-500 active:bg-gray-200 active:text-blue-800 active:shadow-inner focus:outline-none focus:ring-4 focus:ring-offset-2 transition duration-100">Go to vaxfinder.mass.org</a>
            </button> */}

            <div className="mt-28 space-y-2 sm:mr-10">
              <h3 className="font-bold text-xl text-gray-700">Matchwell</h3>
              <p className="text-lg text-gray-500">An online platform that connects healthcare professionals with facilities that offer flexible shift opportunities. I led product design for both the clinician and facility apps, each with their own user group.</p>
            </div>

            <div className="mt-6">
              <a href="./images/full/matchwell/01 matchwell mobile.png" className="max-w-full"><img src="./images/full/matchwell/01 matchwell mobile.png" className="border border-gray-700 border-opacity-20 shadow-sm rounded-md h-56 sm:h-64 md:h-96 w-full object-cover hover:shadow-xl transform hover:-translate-y-0.5 transition"></img></a>
            </div>

            <div className="mt-3 flex grid-cols-2 gap-3">
              <a href="./images/full/matchwell/02 matchwell desktop.png"><img src="./images/full/matchwell/02 matchwell desktop.png" className="border border-gray-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover hover:shadow-xl transform hover:-translate-y-0.5 transition"></img></a>
              <a href="./images/full/matchwell/03 matchwell documentation.png"><img src="./images/full/matchwell/03 matchwell documentation.png" className="border border-gray-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover object-top hover:shadow-xl transform hover:-translate-y-0.5 transition"></img></a>
            </div>

            <div className="mt-20 pb-2 text-xl text-gray-500">Thanks for visiting, I hope you like my stuff!</div>
            <div className="text-indent text-transparent h-14 mt-4 bg-signature bg-no-repeat bg-contain"></div>

          </div>

      </main>
    </div>
  );
}
