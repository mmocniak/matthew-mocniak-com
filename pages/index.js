import Head from "next/head";
import { useEffect, useState } from "react"; // Import useEffect from React
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const [copied, setCopied] = useState(false);
    const [lightbox, setLightbox] = useState({
        isOpen: false,
        imageSrc: "",
    });

    useEffect(() => {
        const emailContainer = document.getElementById("email-container");
        const emailSpan = document.getElementById("email");

        emailContainer.addEventListener("click", () => {
            const email = emailSpan.textContent;

            navigator.clipboard
                .writeText(email)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 2000);
                })
                .catch((err) => {
                    console.error("Failed to copy: ", err);
                });
        });
    }, []);

    const openLightbox = (imageSrc) => {
        setLightbox({
            isOpen: true,
            imageSrc,
        });
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightbox({
            isOpen: false,
            imageSrc: "",
        });
        document.body.style.overflow = "unset";
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && lightbox.isOpen) {
                closeLightbox();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [lightbox.isOpen]); // Dependency array ensures this runs only when lightbox state changes

    return (
        <div className="mx-auto mt-8 mb-48 max-w-full md:max-w-2xl p-4 sm:p-8 bg">
            <Head>
                <title>Matthew Mocniak</title>
                <meta
                    name="description"
                    content="Software designer, side project tinkerer, and idea thinker, based in Raleigh, NC."
                />
                <meta property="og:image" content="./images/meta.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                <div className="">
                    <div className="max-w-max bg-custom-gradient rounded-full">
                        <img
                            src="./images/faces/MM-toy face transparent.png"
                            alt="MM-PFP"
                            className="w-32 md:w-40 h-32 md:h-40 object-bottom rounded-full"
                        />
                    </div>

                    <div className="mt-8 space-y-4 sm:space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-semibold text-primary-light dark:text-primary-dark">
                            Matthew Mocniak
                        </h1>
                        <h2 className="text-xl sm:text-2xl text-secondary-light dark:text-secondary-dark">
                            I'm a software designer with a keen attention to
                            detail. I love working closely with other designers
                            and developers to deliver excellent products and
                            experiences.
                        </h2>
                    </div>

                    <div className="mt-8 px-3 py-2 space-y-2 text-base rounded-xl bg-indigo-50 dark:bg-indigo-950 dark:bg-opacity-40 text-blue-600 dark:text-blue-400 border border-blue-600 border-opacity-10 dark:border-opacity-20 md:grid md:grid-flow-col md:content-center md:space-y-0">
                        <a
                            className="p-1 flex items-center hover:underline hover:text-blue-500 dark:hover:text-blue-300 active:text-blue-800 dark:active:text-blue-100"
                            href="https://www.figma.com/@matthew_mocniak"
                            target="_blank"
                        >
                            <img
                                src="./images/socials/figma.svg"
                                alt="Figma"
                                width="30"
                                height="30"
                            />
                            @matthew_mocniak
                        </a>
                        <a
                            className="p-1 flex items-center hover:underline hover:text-blue-500 dark:hover:text-blue-300 active:text-blue-800 dark:active:text-blue-100"
                            href="https://www.threads.net/@matthew_mocniak"
                            target="_blank"
                        >
                            <svg
                                viewBox="0 0 30 30"
                                fill="var(--stroke-color-light)"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    width: "30px",
                                    height: "auto",
                                    display: "block",
                                }}
                            >
                                <path
                                    d="M20.0066 14.1966C19.9165 14.1512 19.8249 14.1074 19.7322 14.0656C19.5707 10.9367 17.9448 9.14536 15.2147 9.12703C15.2023 9.12695 15.19 9.12695 15.1776 9.12695C13.5446 9.12695 12.1865 9.85989 11.3506 11.1936L12.8521 12.2767C13.4766 11.2804 14.4566 11.0681 15.1783 11.0681C15.1867 11.0681 15.195 11.0681 15.2033 11.0681C16.1022 11.0742 16.7806 11.349 17.2196 11.8849C17.5391 12.2751 17.7528 12.8143 17.8586 13.4948C17.0616 13.3524 16.1996 13.3086 15.2782 13.3641C12.6825 13.5213 11.0138 15.1132 11.1259 17.3251C11.1827 18.4471 11.7143 19.4124 12.6226 20.0429C13.3906 20.576 14.3796 20.8366 15.4076 20.7776C16.7651 20.6994 17.83 20.1548 18.573 19.1589C19.1372 18.4027 19.4941 17.4226 19.6517 16.1878C20.2986 16.5983 20.7781 17.1386 21.0429 17.788C21.4932 18.8921 21.5194 20.7062 20.1116 22.1853C18.8782 23.481 17.3956 24.0415 15.1549 24.0588C12.6694 24.0395 10.7896 23.2013 9.56745 21.5676C8.42299 20.0378 7.83152 17.8281 7.80946 15C7.83152 12.1718 8.42299 9.96218 9.56745 8.43239C10.7896 6.79869 12.6694 5.96052 15.1549 5.9411C17.6584 5.96067 19.5709 6.80287 20.8399 8.44446C21.4621 9.24947 21.9312 10.2618 22.2405 11.4422L24 10.9486C23.6251 9.49567 23.0353 8.24367 22.2326 7.20535C20.6058 5.10077 18.2266 4.02236 15.161 4H15.1487C12.0894 4.02228 9.73679 5.10479 8.15632 7.21742C6.74992 9.0974 6.02445 11.7133 6.00008 14.9923L6 15L6.00008 15.0077C6.02445 18.2867 6.74992 20.9026 8.15632 22.7826C9.73679 24.8952 12.0894 25.9778 15.1487 26H15.161C17.8809 25.9802 19.7981 25.2314 21.3775 23.5721C23.4439 21.4013 23.3817 18.6803 22.7006 17.0099C22.212 15.8121 21.2805 14.8391 20.0066 14.1966ZM15.3104 18.8393C14.1728 18.9067 12.9909 18.3698 12.9326 17.2197C12.8894 16.367 13.5097 15.4155 15.3802 15.3021C15.5944 15.2891 15.8046 15.2828 16.0111 15.2828C16.6906 15.2828 17.3262 15.3522 17.904 15.485C17.6885 18.3155 16.4242 18.7751 15.3104 18.8393Z"
                                    stroke="var(--stroke-color-light)"
                                    strokeWidth="0"
                                    strokeLinecap="round"
                                />
                            </svg>
                            @matthew_mocniak
                        </a>
                        <span
                            id="email-container"
                            className="p-1 flex items-center hover:underline hover:text-blue-500 dark:hover:text-blue-300 active:text-blue-800 dark:active:text-blue-100 cursor-pointer"
                        >
                            <img
                                src="./images/socials/hey.svg"
                                alt="Hey"
                                width="30"
                                height="30"
                            />
                            <span
                                id="email"
                                className="flex-1 w-full inline-block"
                            >
                                {copied
                                    ? "Copied to clipboard ✓"
                                    : "matthew.m@hey.com"}
                            </span>
                        </span>
                    </div>
                </div>
                {/* Work history */}
                <div className="mt-16 space-y-6">
                    <div className="border-b border-slate-700 border-opacity-20 dark:border-opacity-50 pb-2 text-secondary-light dark:text-secondary-dark text-sm font-semibold uppercase">
                        Experience
                    </div>
                    <ul className="text-lg space-y-6 w-auto sm:mr-4">
                        <li>
                            <a
                                href="https://www.zapier.com"
                                className="flex justify-between group"
                            >
                                <div className="text-secondary-light dark:text-secondary-dark">
                                    <span className="text-primary-light dark:text-primary-dark font-medium group-hover:underline group-hover:text-blue-500 dark:group-hover:text-blue-400 active:text-blue-800">
                                        Zapier
                                    </span>
                                    , Senior Product Designer
                                </div>
                                <span className="text-slate-400 dark:text-slate-500">
                                    2024–
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.lattice.com"
                                className="flex justify-between group"
                            >
                                <div className="text-secondary-light dark:text-secondary-dark">
                                    <span className="text-primary-light dark:text-primary-dark font-medium group-hover:underline group-hover:text-blue-500 dark:group-hover:text-blue-400 active:text-blue-800">
                                        Lattice
                                    </span>
                                    , Senior Product Designer
                                </div>
                                <span className="text-slate-400 dark:text-slate-500">
                                    2022–24
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.viget.com"
                                className="flex justify-between group"
                            >
                                <div className="text-secondary-light dark:text-secondary-dark">
                                    <span className="text-primary-light dark:text-primary-dark font-medium group-hover:underline group-hover:text-blue-500 dark:group-hover:text-blue-400 active:text-blue-800">
                                        Viget
                                    </span>
                                    , Senior Product Designer
                                </div>
                                <span className="text-slate-400 dark:text-slate-500">
                                    2019–22
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.kitcosets.com"
                                className="flex justify-between group"
                            >
                                <div className="text-secondary-light dark:text-secondary-dark">
                                    <span className="text-primary-light dark:text-primary-dark font-medium group-hover:underline group-hover:text-blue-500 dark:group-hover:text-blue-400 active:text-blue-800">
                                        KitCo Sets
                                    </span>
                                    , Co-founder
                                </div>
                                <span className="text-slate-400 dark:text-slate-500">
                                    2019–22
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.redhat.com"
                                className="flex justify-between group"
                            >
                                <div className="text-secondary-light dark:text-secondary-dark">
                                    <span className="text-primary-light dark:text-primary-dark font-medium group-hover:underline group-hover:text-blue-500 dark:group-hover:text-blue-400 active:text-blue-800">
                                        Red Hat
                                    </span>
                                    , Product Designer
                                </div>
                                <span className="text-slate-400 dark:text-slate-500">
                                    2019
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.ibm.com"
                                className="flex justify-between group"
                            >
                                <div className="text-secondary-light dark:text-secondary-dark">
                                    <span className="text-primary-light dark:text-primary-dark font-medium group-hover:underline group-hover:text-blue-500 dark:group-hover:text-blue-400 active:text-blue-800">
                                        IBM
                                    </span>
                                    , UX Designer
                                </div>
                                <span className="text-slate-400 dark:text-slate-500">
                                    2016–19
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.ibm.com"
                                className="flex justify-between group"
                            >
                                <div className="text-secondary-light dark:text-secondary-dark">
                                    <span className="text-primary-light dark:text-primary-dark font-medium group-hover:underline group-hover:text-blue-500 dark:group-hover:text-blue-400 active:text-blue-800">
                                        IBM
                                    </span>
                                    , Business Analyst
                                </div>
                                <span className="text-slate-400 dark:text-slate-500">
                                    2014–16
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Recent work to showcase */}
                <div className="mt-16">
                    <div className="border-b border-slate-700 border-opacity-20 dark:border-opacity-50 pb-2 text-secondary-light dark:text-secondary-dark text-sm font-semibold uppercase">
                        Recent Work
                    </div>
                    <div className="mt-6 space-y-3 sm:mr-4">
                        <h3 className="font-semibold text-xl text-primary-light dark:text-primary-dark">
                            Lattice HRIS
                        </h3>
                        <p className="text-lg text-secondary-light dark:text-secondary-dark">
                            I joined a top-secret team as the third designer and
                            worked closely with cross-functional partners to
                            launch Lattice HRIS, transforming Lattice from a
                            suite of talent products to an extensive human
                            resources platform.
                        </p>
                        <p className="text-lg text-secondary-light dark:text-secondary-dark">
                            I designed an onboarding experience for new hires,
                            revamped the employee profile, and created
                            beneficial tools for admins to confidently manage
                            their workforce.
                        </p>
                        {/* <blockquote>
                            This compensation section is very intuitive [...]
                            it's better than Rippling.
                        </blockquote> */}
                    </div>
                    <div className="mt-4 mb-6 space-y-3">
                        <a
                            className="mt-4 flex items-center hover:underline text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 active:text-blue-800 dark:active:text-blue-100 visited:text-purple-500 dark:visited:text-purple-400"
                            href="https://lattice.com/blog/introducing-lattice-hris"
                            target="_blank"
                        >
                            Read the Lattice HRIS announcement →
                        </a>
                    </div>
                    <div className="mt-6">
                        <img
                            src="/images/projects/lattice/latticehris-profile.png"
                            alt="Lattice HRIS user profile"
                            className="border bg-emerald-50 dark:bg-emerald-950 border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-cover object-left-top p-0 hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/lattice/latticehris-profile.png"
                                )
                            }
                        />
                    </div>
                    <div className="mt-6">
                        <img
                            src="/images/projects/lattice/latticehris-directory.png"
                            alt="Lattice HRIS directory"
                            className="border bg-emerald-50 dark:bg-emerald-950 border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-screen object-cover object-left-top p-0 hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/lattice/latticehris-directory.png"
                                )
                            }
                        />
                    </div>
                    <div className="mt-6">
                        <img
                            src="/images/projects/lattice/latticehris-handoff.png"
                            alt="Design documentation for handing off a feature to my engineering team"
                            className="border bg-zinc-100 dark:bg-zinc-900 border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-screen object-cover object-left-bottom p-0 hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/lattice/latticehris-handoff.png"
                                )
                            }
                        />

                        {/* <a href="./images/projects/lattice/thumbs/latticehris-directory.webp">
                            <img
                                src="./images/projects/lattice/thumbs/latticehris-directory.webp"
                                className="border bg-emerald-50 border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover object-left-top pl-1 pt-2 hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a> */}
                        {/* <a href="./images/projects/lattice/latticehris-handoff.png">
                            <img
                                src="./images/projects/lattice/latticehris-handoff.png"
                                className="border bg-[#f5f5f5] border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover p-1 object-right-bottom hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a> */}
                    </div>
                    <div class="flex flex-col flex-shrink-0 md:flex-row items-center w-full mt-6">
                        <button
                            class="flex items-center w-full md:w-auto text-center justify-center md:text-left bg-white border border-slate-700 border-opacity-20 text-blue-600 p-5 py-3 rounded-lg filter drop-shadow-btn hover:bg-slate-100 hover:text-blue-500 active:bg-slate-200 active:text-blue-800 active:shadow-inner focus:outline-none focus:ring-4 focus:ring-offset-2 transition duration-100 disabled:bg-slate-200 dark:disabled:bg-zinc-600 disabled:text-slate-400 dark:disabled:text-zinc-900 dark:disabled:font-medium disabled:border-none disabled:shadow-none disabled:drop-shadow-none disabled:cursor-not-allowed"
                            disabled
                        >
                            {/* <img src="./images/socials/figma.svg" alt="Figma" width="24" height="24" class="mr-1 disabled: opacity-50 disabled:cursor-not-allowed"/> */}
                            View case study
                        </button>
                        <p class="text-sm font-medium text-orange-500 mt-3 md:mt-0 md:ml-3 md:w-auto">
                            Coming soon
                        </p>
                    </div>

                    <div className="mt-28 space-y-3 sm:mr-4">
                        <h3 className="font-semibold text-xl text-primary-light dark:text-primary-dark">
                            SpectrumAi
                        </h3>
                        <p className="text-lg text-secondary-light dark:text-secondary-dark">
                            My team and I developed a portable tool to assist
                            technicians in ABA therapy sessions with their
                            clients. The app offers robust curriculum management
                            and powerful in-session tracking tools.
                        </p>{" "}
                        <p className="text-lg text-secondary-light dark:text-secondary-dark">
                            It also introduced a novel feature allowing
                            therapists to revisit and accurately document
                            previous sessions, thanks to auto-generated
                            timestamps for every logged event.
                        </p>
                    </div>
                    <div className="mt-4 mb-6 space-y-2">
                        <a
                            className="mt-6 flex items-center hover:underline text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 active:text-blue-800 dark:active:text-blue-100 visited:text-purple-500 dark:visited:text-purple-400"
                            href="https://www.axios.com/pro/health-tech-deals/2022/06/01/exclusive-spectrumai-raises-9m-virtual-autism-care"
                            target="_blank"
                        >
                            SpectrumAi Secures $9M Seed Funding for Autism Care
                            Innovation →
                        </a>
                        <a
                            className="mt-6 flex items-center hover:underline text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 active:text-blue-800 dark:active:text-blue-100 dark:visited:text-purple-400"
                            href="https://bhbusiness.com/2023/03/16/cvs-health-ventures-leads-20m-investment-in-aba-data-collection-startup-spectrumai/"
                            target="_blank"
                        >
                            CVS Health Ventures Invests $20M in ABA Startup
                            SpectrumAi →
                        </a>
                    </div>

                    <div className="mt-6">
                        <img
                            src="/images/projects/spectrumai/spectrumai-ipads.png"
                            alt="SpectrumAi session tracking tool"
                            className="border bg-indigo-200 dark:bg-indigo-950 border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-scale-down p-6 hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/spectrumai/spectrumai-ipads.png"
                                )
                            }
                        />
                    </div>
                    {/* <div className="mt-6">
                        <a
                            href="./images/projects/spectrumai/spectrumai-ipads.png"
                            className="max-w-full"
                        >
                            <img
                                src="./images/projects/spectrumai/spectrumai-ipads.png"
                                className="border bg-indigo-200 border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 sm:h-64 md:h-96 w-full object-scale-down p-6 hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a>
                    </div> */}
                    <div className="mt-6">
                        <img
                            src="/images/projects/spectrumai/spectrumai-treatment plan.png"
                            alt="SpectrumAi treatment plan builder"
                            className="border bg-indigo-50 dark:bg-indigo-950 border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-cover object-left-top p-2 hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/spectrumai/spectrumai-treatment plan.png"
                                )
                            }
                        />
                    </div>
                    {/* <div className="mt-3 flex grid-cols-2 gap-3">
                        <a href="./images/projects/spectrumai/spectrumai-treatment plan.png">
                            <img
                                src="./images/projects/spectrumai/spectrumai-treatment plan.png"
                                className="border border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover object-left-top hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a>
                        <a href="./images/projects/spectrumai/spectrumai-iterations.png">
                            <img
                                src="./images/projects/spectrumai/spectrumai-iterations.png"
                                className="border border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover object-left hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a>
                    </div> */}
                    <div className="mt-6">
                        <img
                            src="/images/projects/spectrumai/spectrumai-iterations.png"
                            alt="Iterations for making the in-session UI page"
                            className="border bg-indigo-50 dark:bg-indigo-950 border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-cover object-left-top p-2 hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/spectrumai/spectrumai-iterations.png"
                                )
                            }
                        />
                    </div>
                    <div class="flex flex-col flex-shrink-0 md:flex-row items-center w-full mt-6">
                        <button
                            class="flex items-center w-full md:w-auto text-center justify-center md:text-left bg-white border border-slate-700 border-opacity-20 text-blue-600 p-5 py-3 rounded-lg filter drop-shadow-btn hover:bg-slate-100 hover:text-blue-500 active:bg-slate-200 active:text-blue-800 active:shadow-inner focus:outline-none focus:ring-4 focus:ring-offset-2 transition duration-100 disabled:bg-slate-200 dark:disabled:bg-zinc-600 disabled:text-slate-400 dark:disabled:text-zinc-900 dark:disabled:font-medium disabled:border-none disabled:shadow-none disabled:drop-shadow-none disabled:cursor-not-allowed"
                            disabled
                        >
                            {/* <img src="./images/socials/figma.svg" alt="Figma" width="24" height="24" class="mr-1 disabled: opacity-50 disabled:cursor-not-allowed"/> */}
                            View case study
                        </button>
                        <p class="text-sm font-medium text-orange-500 mt-3 md:mt-0 md:ml-3 md:w-auto">
                            Coming soon
                        </p>
                    </div>

                    <div className="mt-28 space-y-3 sm:mr-4">
                        <h3 className="font-semibold text-xl text-primary-light dark:text-primary-dark">
                            Documentation Header
                        </h3>
                        <p className="text-lg text-secondary-light dark:text-secondary-dark">
                            A powerful, lil documentation component used by more
                            than 1.3k Figma users. It can be dropped into any
                            Figma or FigJam file to add context to a mock-up,
                            describe a workflow, or annotate your work.
                        </p>
                        <p className="text-lg text-secondary-light dark:text-secondary-dark">
                            I've rebuilt this component several times to take
                            advantage of the latest Figma features, including
                            component properties and newer versions of Auto
                            Layout, to provide greater flexibility and faster
                            loading times.
                        </p>
                    </div>
                    <div className="mt-6">
                        <img
                            src="/images/projects/documentation header/documentation-header-v3.png"
                            alt="An overview of the third version of the documentation header component"
                            className="border border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-cover object-left-top hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/documentation header/documentation-header-v3.png"
                                )
                            }
                        />
                    </div>
                    {/* <div className="mt-6">
                        <a
                            href="./images/projects/documentation header/documentation-header-v3.png"
                            className="max-w-full"
                        >
                            <img
                                src="./images/projects/documentation header/documentation-header-v3.png"
                                className="border border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 sm:h-64 md:h-96 w-full object-cover object-left-top hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a>
                    </div> */}
                    <div className="mt-6">
                        <img
                            src="/images/projects/documentation header/documentation-header-v2.png"
                            alt="An overview of the second version of the documentation header component"
                            className="border border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-cover object-left-top hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/documentation header/documentation-header-v2.png"
                                )
                            }
                        />
                    </div>
                    {/* <div className="mt-3 flex grid-cols-2 gap-3">
                        <a href="./images/projects/documentation header/documentation-header-v2.png">
                            <img
                                src="./images/projects/documentation header/documentation-header-v2.png"
                                className="border border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover object-center hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a>
                        <a href="./images/projects/documentation header/documentation-header-outlines.png">
                            <img
                                src="./images/projects/documentation header/documentation-header-outlines.png"
                                className="border border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover object-left-top hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a>
                    </div> */}
                    <div className="mt-6">
                        <img
                            src="/images/projects/documentation header/documentation-header-outlines.png"
                            alt="A comparison of the three versions of the documentation header component, illustrated as outlines of each component"
                            className="border border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-cover hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/documentation header/documentation-header-outlines.png"
                                )
                            }
                        />
                    </div>
                    <button className="flex w-full md:w-auto mt-6 group">
                        <a
                            href="https://www.figma.com/community/file/930683346927230979/Documentation-Header-Component"
                            alt="View on Figma Community"
                            className="flex items-center w-full justify-center bg-white dark:bg-zinc-800 border border-slate-700 dark:border-zinc-600 border-opacity-20 text-blue-600 dark:text-blue-400 dark:font-medium  pl-4 pr-5 py-3 rounded-lg filter drop-shadow-btn hover:bg-slate-100 dark:hover:bg-zinc-700 hover:text-blue-500 dark:hover:text-blue-300 active:bg-slate-200 dark:active:bg-zinc-950 active:text-blue-800 dark:active:text-blue-100 active:shadow-inner focus:outline-none focus:ring-4 focus:ring-offset-2 transition duration-100"
                        >
                            <img
                                src="./images/socials/figma.svg"
                                alt="Figma"
                                width="24"
                                height="24"
                                className="mr-1"
                            />
                            View on Figma Community
                        </a>
                    </button>
                    <div className="mt-28 space-y-3 sm:mr-4">
                        <h3 className="font-semibold text-xl text-primary-light dark:text-primary-dark">
                            Vaxfinder
                        </h3>
                        <p className="text-lg text-secondary-light dark:text-secondary-dark">
                            I led product design for a website we built in less
                            than one week to collect and display vaccine site
                            details for the Commonwealth of Massachusetts.
                            Within the first two weeks of launch, the Vaxfinder
                            site garnered 60 million pageviews and at its peak
                            hosted around 40,000 concurrent users.
                        </p>
                    </div>
                    <div className="mt-6">
                        <img
                            src="/images/projects/vaxfinder/vaxfinder mobile.png"
                            alt="Screenshots of the Vaxfinder website on mobile"
                            className="border border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-cover hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/vaxfinder/vaxfinder mobile.png"
                                )
                            }
                        />
                    </div>
                    <div className="mt-6">
                        <img
                            src="/images/projects/vaxfinder/vaxfinder desktop.png"
                            alt="A detailed screenshot of the Vaxfinder website on desktop"
                            className="border border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-cover object-top hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/vaxfinder/vaxfinder desktop.png"
                                )
                            }
                        />
                    </div>
                    {/* <div className="mt-6 flex grid-cols-2 gap-3">
                        <a href="./images/projects/vaxfinder/vaxfinder mobile.png">
                            <img
                                src="../images/projects/vaxfinder/vaxfinder mobile.png"
                                className="border border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a>
                        <a href="./images/projects/vaxfinder/vaxfinder desktop.png">
                            <img
                                src="./images/projects/vaxfinder/vaxfinder desktop.png"
                                className="border border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover object-top hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a>
                    </div> */}
                    <div className="mt-28 space-y-3 sm:mr-4">
                        <h3 className="font-semibold text-xl text-primary-light dark:text-primary-dark">
                            Matchwell
                        </h3>
                        <p className="text-lg text-secondary-light dark:text-secondary-dark">
                            An online platform that connects healthcare
                            professionals with facilities that offer flexible
                            shift opportunities. I led product design for both
                            the clinician and facility apps, each with their own
                            user group.
                        </p>
                    </div>
                    <div className="mt-6">
                        <img
                            src="/images/projects/matchwell/01 matchwell mobile.png"
                            alt="Screenshots of the Matchwell web app on mobile"
                            className="border border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-cover hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/matchwell/01 matchwell mobile.png"
                                )
                            }
                        />
                    </div>
                    {/* <div className="mt-6">
                        <a
                            href="./images/projects/matchwell/01 matchwell mobile.png"
                            className="max-w-full"
                        >
                            <img
                                src="./images/projects/matchwell/01 matchwell mobile.png"
                                className="border border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 sm:h-64 md:h-96 w-full object-cover hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a>
                    </div> */}
                    <div className="mt-6">
                        <img
                            src="/images/projects/matchwell/02 matchwell desktop.png"
                            alt="An image of the Matchwell candidates experience on desktop"
                            className="border border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-cover hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/matchwell/02 matchwell desktop.png"
                                )
                            }
                        />
                    </div>
                    <div className="mt-6">
                        <img
                            src="/images/projects/matchwell/03 matchwell documentation.png"
                            alt="Design documentation for handing off user profile designs to my engineering team"
                            className="border bg-indigo-50 dark:bg-indigo-950 border-slate-700 border-opacity-5 shadow-sm rounded h-56 sm:h-64 md:h-96 w-full object-cover object-top pt-4 px-4 hover:shadow-md transform hover:-translate-y-0.5 transition cursor-pointer"
                            onClick={() =>
                                openLightbox(
                                    "/images/projects/matchwell/03 matchwell documentation.png"
                                )
                            }
                        />
                    </div>
                    {/* <div className="mt-3 flex grid-cols-2 gap-3">
                        <a href="./images/projects/matchwell/02 matchwell desktop.png">
                            <img
                                src="./images/projects/matchwell/02 matchwell desktop.png"
                                className="border border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a>
                        <a href="./images/projects/matchwell/03 matchwell documentation.png">
                            <img
                                src="./images/projects/matchwell/03 matchwell documentation.png"
                                className="border border-slate-700 border-opacity-20 shadow-sm rounded-md h-56 w-screen object-cover object-top hover:shadow-xl transform hover:-translate-y-0.5 transition"
                            ></img>
                        </a>
                    </div> */}
                    <div className="mt-20 pb-2 text-lg text-secondary-light dark:text-secondary-dark">
                        Thanks for visiting, I hope you like my stuff!
                    </div>
                    <div
                        className="signature-container mt-8"
                        style={{ width: "10em", display: "inline-block" }}
                    >
                        <svg
                            viewBox="0 0 1683 809"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                            }}
                        >
                            <path
                                d="M924.98 558.474C910.517 563.292 869.427 611.187 881.615 635.568C896.068 664.478 934.629 630.749 944.266 592.202C945.878 585.778 948.136 571.965 944.266 568.11C939.427 563.292 987.611 553.655 1021.34 558.474C1049.61 562.512 1000.03 563.166 991.748 597.312C988.043 612.588 1001.08 626.264 1014.63 618.297C1043.77 601.169 1087.53 550.022 1098.43 553.655C1112.89 558.473 1079.16 611.475 1064.7 650.022C1048.04 694.456 1156.25 534.382 1165.89 534.382C1175.53 534.382 1141.8 587.384 1146.62 616.294C1152.24 650.022 1204.44 587.384 1223.71 548.837C1224.39 547.48 1224.99 546.276 1225.51 545.218M1225.51 545.218C1230.11 535.906 1228.9 537.819 1225.51 545.218ZM1225.51 545.218C1218.34 560.868 1201.45 601.063 1209.26 611.475C1223.71 630.749 1276.71 553.655 1300.8 544.018C1310.44 544.018 1265.66 570.235 1300.8 592.202C1339.35 616.294 1310.44 541.609 1315.26 544.018C1332.78 552.779 1336.14 572.157 1344.65 587.139C1356.42 607.853 1385.74 605.385 1406.34 593.423C1428.92 580.315 1453.14 558.155 1474.38 526.074M1474.38 526.074C1474.99 525.156 1475.6 524.23 1476.2 523.296M1474.38 526.074C1482.19 475.922 1498.11 377.946 1513.77 307.567M1474.38 526.074C1471.27 546.078 1469.45 558.473 1469.45 558.473M1476.2 523.296C1487.23 506.199 1497.42 486.375 1506.08 463.698M1476.2 523.296C1473.32 535.742 1471.17 548.149 1469.45 558.473M1476.2 523.296C1482.15 497.602 1491.22 471.741 1506.08 463.698M1506.08 463.698C1512.44 447.053 1517.99 428.872 1522.45 409.104C1530.46 373.612 1537.12 344.378 1542.28 320.495M1506.08 463.698C1510.9 461.091 1516.32 460.356 1522.45 462.106C1556.18 471.743 1503.18 529.563 1469.45 558.473M1542.28 320.495C1558.85 243.866 1560.09 222.335 1541.72 226.008C1534.06 227.54 1523.97 261.69 1513.77 307.567M1542.28 320.495C1608.63 355.385 1655.65 414.628 1667 452.471C1682.42 529.565 1604.36 592.202 1551.36 606.657C1478.12 637.495 1466.24 584.171 1469.45 558.473M1542.28 320.495C1533.13 315.682 1523.61 311.333 1513.77 307.567M1513.77 307.567C1504.11 303.874 1494.14 300.741 1483.9 298.284C1427.69 290.253 1301.77 281.901 1247.8 312.739C1180.35 351.286 1218.89 409.106 1262.26 418.743C1305.62 428.379 1406.81 423.561 1416.45 423.561M443.136 230.826C708.146 226.008 753.043 202.903 896.062 182.643C1030.98 163.531 1021.34 158.551 1233.35 148.914M76.9387 120.004C65.6958 139.277 38.3918 178.788 19.1183 182.643C-4.97352 187.461 62.4836 120.004 86.5754 100.73C110.667 81.457 134.76 71.8202 149.215 71.8202C163.67 71.8202 168.489 91.0937 168.489 110.367C168.489 129.641 154.034 206.734 144.397 230.826C136.688 250.1 72.1191 409.106 76.9387 413.924C81.7583 418.742 220.527 58.3288 235.946 42.91C255.219 23.6366 260.038 52.5469 260.038 67.0019C260.038 221.19 211.854 356.103 216.672 360.922C221.491 365.74 346.768 52.5472 356.405 42.91C380.497 28.4545 370.86 163.369 356.405 245.281C341.95 327.193 308.221 524.746 332.313 572.93C356.405 621.113 433.499 572.93 452.772 534.383M433.522 274.192C411.036 293.465 365.614 340.999 385.343 370.559C404.638 399.469 452.786 264.555 457.605 264.555C462.423 264.555 445.819 392.103 457.605 399.469C496.152 423.561 544.335 197.098 549.154 197.098C553.972 197.098 510.607 389.832 534.699 380.196C580.759 361.772 592.519 211.553 597.337 211.553C602.156 211.553 571.088 370.262 611.793 356.104C722.615 317.557 710.336 14 717.796 14C725.257 14 688.886 341.649 693.705 341.649C698.523 341.649 735.143 227.935 765.98 216.371C804.527 201.916 770.812 322.375 770.798 341.649C770.784 360.922 790.058 360.922 799.695 356.104C818.271 346.816 842.847 323.785 864.662 300.669M864.662 300.669C878.635 285.864 891.474 271.024 900.88 259.737C905.699 250.1 904.735 230.826 881.607 250.1C876.788 254.918 866.188 267.446 862.333 279.01C860.502 284.504 861.455 292.782 864.662 300.669ZM864.662 300.669C869.895 313.535 881.126 325.362 896.062 322.375C915.335 318.521 952.919 289.61 968.337 274.192C966.731 270.979 972.192 265.519 1006.88 269.373C1050.25 274.192 1040.61 254.918 1040.61 250.1C1040.61 245.282 1064.7 240.463 1074.34 240.463C1083.98 240.463 1088.8 226.008 1103.25 221.19C1117.71 216.371 1112.89 211.553 1127.34 211.553M558.786 519.925C531.482 523.138 490.365 519.925 544.331 481.378C611.788 433.195 616.597 486.197 611.778 495.833C596.616 532.657 569.037 597.818 546.773 645.81M546.773 645.81C536.02 668.988 526.506 688.162 520.229 698.205C512.478 710.607 525.177 685.599 546.773 645.81ZM546.773 645.81C592.296 561.933 677.35 412.371 693.691 409.103C717.782 404.285 657.127 635.846 659.962 650.021C664.78 674.112 847.878 380.19 857.515 409.103C866.528 436.144 816.536 576.977 821.85 725.178C822.582 745.592 825.512 768.095 840.997 781.417C851.649 790.581 868.89 796.708 900.88 794.575C958.215 790.753 968.172 770.822 973.033 761.092L973.156 760.847"
                                stroke="var(--stroke-color-light)"
                                strokeWidth="28"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>
            </main>

            {lightbox.isOpen && (
                <div
                    className="fixed inset-0 bg-slate-950 bg-opacity-70 dark:bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-xl p-2"
                        onClick={closeLightbox}
                    >
                        ✕
                    </button>
                    <img
                        src={lightbox.imageSrc}
                        alt="Enlarged view"
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}
