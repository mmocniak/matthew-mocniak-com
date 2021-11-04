import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Matthew Mocniak</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mx-4 sm:mx-12 lg:mx-64 xl:mx-96 mt-24 mb-48 space-y-28 min-w-min">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-800">
              Matthew Mocniak
            </h1>
            <h2 className="text-2xl text-gray-600">
              I'm a product designer with a keen attention to detail. I love
              working closely with other designers and developers to deliver
              excellent products and experiences.
            </h2>

            <div className="grid grid-flow-col auto-cols-max space-x-8 px-4 py-2 rounded bg-blue-50 text-blue-600">
              <div>
                <a className="flex align-middle" href="https://www.figma.com/@matthew_mocniak" target="_blank"><img src="./images/figma.svg" alt="Figma" width="30" height="30"/>@matthew_mocniak</a>
              </div>
              <div>
              <a className="flex align-middle" href="https://www.twitter.com/@matthew_mocniak" target="_blank"><img src="./images/twitter.svg" alt="Twitter" width="30" height="30"/>@matthew_mocniak</a>
              </div>
              <div>
              <a className="flex align-middle" href="mailto:matthew.m@hey.com"><img src="./images/hey.svg" alt="Hey" width="30" height="30"/>matthew.m@hey.com</a>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-b border-black border-opacity-10"><div className="mb-2 text-base text-gray-500">Experience</div></div>
            <ul className="text-lg space-y-6 w-auto mr-20">
              <li className="flex justify-between"><div className="text-gray-700 font-semibold">Viget, <span className="font-normal text-gray-500">Product Designer</span></div><div className="text-gray-400">2019–</div></li>
              <li className="flex justify-between"><div className="text-gray-700 font-semibold">KitCo Sets, <span className="font-normal text-gray-500">Co-founder</span></div><div className="text-gray-400">2019–</div></li>
              <li className="flex justify-between"><div className="text-gray-700 font-semibold">Red Hat, <span className="font-normal text-gray-500">Product Designer</span></div><div className="text-gray-400">2018–19</div></li>
              <li className="flex justify-between"><div className="text-gray-700 font-semibold">IBM, <span className="font-normal text-gray-500">UX Designer</span></div><div className="text-gray-400">2016–18</div></li>
              <li className="flex justify-between"><div className="text-gray-700 font-semibold">IBM, <span className="font-normal text-gray-500">Business Analyst</span></div><div className="text-gray-400">2014–16</div></li>
            </ul>
          </div>

          <div>
            <div className="space-y-6">
              <div className="border-b border-black border-opacity-10"><div className="mb-2 text-base text-gray-500">Recent Work</div></div>
              </div>
            
            <div className="space-y-28 mt-6">
              <div className="space-y-8">
                <div className="text-lg space-y-2 w-auto mr-20">
                  <p className="font-bold text-gray-700">Documentation Header</p>
                  <p className="text-gray-500">A powerful, lil documentation component that can be dropped into any file to add context to a mock-up, describe a workflow, or annotate your work.</p>
                </div>

                <div className="w-56 bg-white px-5 py-3 border border-black border-opacity-10 rounded filter drop-shadow-btn text-center text-blue-600">
                    Figma Community File
                </div>

                <div className="flex col-span-4 space-x-3">
                    <div className="bg-gradient-to-b from-gray-100 to-gray-100 w-48 h-28 hover:from-white"></div>
                    <div className="bg-gray-100 w-48 h-28"></div>
                    <div className="bg-gray-100 w-48 h-28"></div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="text-lg space-y-2 w-auto mr-20">
                  <p className="font-bold text-gray-700">VaxFinder</p>
                  <p className="text-gray-500">A website we built in less than one week to collect and display vaccine site details for the Commonwealth of Massachusetts.</p>
                </div>

                {/* <div className="w-56 bg-white px-5 py-3 border-2 border-black border-opacity-10 rounded drop-shadow text-center text-blue-600">
                    Figma Community File
                </div> */}

                <div className="flex col-span-4 space-x-3">
                    <div className="bg-gray-100 w-48 h-28"></div>
                    <div className="bg-gray-100 w-48 h-28"></div>
                    <div className="bg-gray-100 w-48 h-28"></div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="text-lg space-y-2 w-auto mr-20">
                  <p className="font-bold text-gray-700">Matchwell</p>
                  <p className="text-gray-500">An online platform that connects healthcare professionals to facilities with flexible job opportunities. I led design for the clinician and facility apps, each with their own user group.</p>
                </div>

                {/* <div className="w-56 bg-white px-5 py-3 border-2 border-black border-opacity-10 rounded drop-shadow text-center text-blue-600">
                    Figma Community File
                </div> */}

                <div className="flex col-span-4 space-x-3">
                    <div className="bg-gray-100 w-48 h-28"></div>
                    <div className="bg-gray-100 w-48 h-28"></div>
                    <div className="bg-gray-100 w-48 h-28"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
