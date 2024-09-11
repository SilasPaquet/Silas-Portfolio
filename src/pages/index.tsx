import Head from "next/head";
import Image from "next/image";
import '../app/globals.css';
import { Toaster, toast } from "react-hot-toast";
export default function Home() {
return (
<>  
<Toaster/>
<Head>
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com/s/chakrapetch/v8/cIfnMbdUsUoiW9oIRSE2rHsMvl0g.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        />
    <title>Silas&apos; Portfolio</title>
</Head>
<div data-theme="forest">
    <div className="navbar bg-black fixed top-0 left-0 right-0 z-10 flex justify-between items-center">
        <div className="flex items-center">
            <span className="text-accent text-2xl font-bold px-2 py-1 h-10">
            {"{"}S{"}"}
            </span>
        </div>
        <div className="flex space-x-4">
            <a href="#top" className="btn btn-ghost text-xl text-accent">Home</a>
            <a href="#projects" className="btn btn-ghost text-xl text-secondary">Projects</a>
            <a href="#skills" className="btn btn-ghost text-xl text-primary">Skills</a>
        </div>
    </div>
    <div id="top" className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
                src="/CV_pic.jpg "
                alt="CV pic"
                className="max-w-sm rounded-lg shadow-2xl" width={512} height={704}/>
            <div>
                <h1 className="text-5xl text-primary font-bold pb-1 pl-3" style={{ textShadow: "2px 2px 5px #008080" }}>Silas PAQUET</h1>
                <h2 className="text-xl text-primary pl-[190px]" style={{ textShadow: "1px 1px 3px #008080" }}>Software Engineer</h2>
                <p className="text-lg text-secondary pt-6 px-3 pb-1">
                    Hi there ! I&apos;m a junior developper currently in 2nd year at Epitech Lyon<br/><br/><br/>
                </p>
                <p className="text-secondary pl-3 pb-1">Feel free to contact me :</p>
                <a
                    className="btn text-accent link-hover"
                    onClick={() =>
                    {
                    navigator.clipboard.writeText("paquetsilas@gmail.com");
                    toast("Email copied to clipboard !",
                    {
                    style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#1db88e",
                    },
                    }
                    );
                    }}
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="none"
                        >
                        <path
                            d="M12 13.5l8-5.5H4l8 5.5zm0 1.5L4 9v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9l-8 6z"
                            />
                    </svg>
                    paquetsilas@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/silas-paquet-a103702b2/" className="btn text-accent link-hover">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="none">
                        <path
                            d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.25 19h-3v-9h3v9zm-1.5-10.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm12.25 10.25h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.2c.81-.77 1.86-1.2 3-1.2 2.21 0 4 1.79 4 4v5z" />
                    </svg>
                    Linkedin
                </a>
                <a href="/CV%20SILAS%20PAQUET.pdf" download className="btn text-accent link-hover pr-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                    My CV
                </a>
            </div>
        </div>
    </div>
    <div id="projects" className="flex flex-col items-center pb-[70px]">
        <style jsx>{`
            #projects {
            scroll-margin-top: 140px;
            }
            `}
        </style>
        <div className="mb-[50px] text-center">
            <h1 className="text-4xl font-bold text-primary mb-[15px]" style={{ textShadow: "2px 2px 5px #008080" }}>
            My Projects
            </h1>
            <p className="text-lg text-secondary">A collection of my recent work</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-[100px] space-y-6 md:space-y-0 mb-[150px]">
            <div
                className="card bg-base-100 w-96 shadow-xl transition-transform transform hover:scale-105 duration-200 ease-in-out cursor-pointer"
                onClick={() =>
                {
                const projectDesc = document.getElementById("project_1_desc");
                const modalTitle = document.getElementById("modal_1_title");
                if (projectDesc instanceof HTMLDialogElement) {
                projectDesc.showModal();
                }
                if (modalTitle) {
                modalTitle.scrollIntoView({
                behavior: "auto",
                block: "start",
                });
                }
                }}
                >
                <figure>
                    <Image src="/radar.png" alt="Error loading image" width={1919} height={1006}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">MY_RADAR</h2>
                    <p className="text-secondary">
                        Simulation of collisions between a potentially very large amount of moving objects.
                    </p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn text-accent"
                            onClick={(e) => {
                        e.stopPropagation();
                        const projectDesc = document.getElementById("project_1_desc");
                        const modalTitle = document.getElementById("modal_1_title");
                        if (projectDesc instanceof HTMLDialogElement) {
                        projectDesc.showModal();
                        }
                        if (modalTitle) {
                        modalTitle.scrollIntoView({
                        behavior: "auto",
                        block: "start",
                        });
                        }
                        }}
                        >
                        About
                        </button>
                    </div>
                </div>
            </div>
            <dialog id="project_1_desc" className="modal modal-fade">
                <div className="modal-box max-w-7xl h-11/12 h-full flex flex-col">
                    <div className="flex flex-row flex-grow">
                        <div className="w-1/2 pr-4">
                            <h3 id="modal_1_title" className="font-bold text-lg text-primary pb-9">MY RADAR</h3>
                            <p className="py-5 px-3 text-lg text-secondary">
                                A graphical simulation program that reads a specially formatted file, containing data for the objects to be initialized.<br />
                                There are 2 types of objects: planes and towers.<br/><br/>
                                Planes appear once their time to spawn is reached (counting from the start of the simulation) and go from a certain coordinate to another at a certain speed, getting destroyed if their hitbox collides with another one while travelling.<br /><br />
                                Towers have a position and a radius, and prevent planes from crashing if they collide while inside their radius.<br /><br />
                                The interesting part about this project is the optimization needed for the program to run smoothly, even with multiple thousands of planes.<br />
                                It uses a quadtree to recursively separate the screen into 4 sections if a part of the tree is overpopulated by planes, making collision checks more efficient and optimized proportionally to the total number of planes on the screen.<br /><br />
                                There are also controls that allow the user to:<br/><br/>
                                - Hide/Show the sprites of the objects<br/><br/>
                                - Hide/Show the hitboxes of the objects<br/><br/>
                                - Display the hitboxes of every plane that has finished its flight either by crashing (red hitbox) or by arriving at its destination (green hitbox)<br /><br />
                                - Display the ID of the planes (determined by their order of appearance in the data file)
                            </p>
                        </div>
                        <div className="w-1/2 flex flex-col space-y-4 items-center overflow-auto">
                            <Image src="/radar_nohb.png" alt="no hitbox" className="object-contain w-full max-h-full" width={1919} height={1001}/>
                            <Image src="/radar_debug.png" alt="debug" className="object-contain w-full max-h-full" width={1919} height={1006}/>
                            <Image src="/radar_ids.png" alt="IDs shown" className="object-contain w-full max-h-full" width={1919} height={1006}/>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className="card bg-base-100 w-96 shadow-xl transition-transform transform hover:scale-105 duration-200 ease-in-out"
                onClick={() =>
                {
                const projectDesc = document.getElementById("project_2_desc");
                const modalTitle = document.getElementById("modal_2_title");
                if (projectDesc instanceof HTMLDialogElement) {
                projectDesc.showModal();
                }
                if (modalTitle) {
                modalTitle.scrollIntoView({
                behavior: "auto",
                block: "start",
                });
                }
                }}
                >
                <figure>
                    <Image
                        src="/haemo_menu.png"
                        alt="Haemolacria menu"
                        width={1920} height={1080}
                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">HAEMOLACRIA</h2>
                    <p className="text-secondary">RPG game with projectile-based combat mechanics as well as multiple levels, enemies and items. </p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn text-accent"
                            onClick={(e) => {
                        e.stopPropagation();
                        const projectDesc = document.getElementById("project_2_desc");
                        const modalTitle = document.getElementById("modal_2_title");
                        if (projectDesc instanceof HTMLDialogElement) {
                        projectDesc.showModal();
                        }
                        if (modalTitle) {
                        modalTitle.scrollIntoView({
                        behavior: "auto",
                        block: "start",
                        });
                        }
                        }}
                        >
                        About
                        </button>
                    </div>
                </div>
            </div>
            <dialog id="project_2_desc" className="modal modal-fade">
                <div className="modal-box max-w-7xl h-11/12 h-full flex flex-col">
                    <div className="flex flex-row flex-grow">
                        <div className="w-1/2 pr-4">
                            <h3 id="modal_2_title" className="font-bold text-lg text-primary pb-9">HAEMOLACRIA</h3>
                            <p className="py-5 px-3 text-lg text-secondary">
                                2D Action Role Playing Game made in collaboration with a classmate for an Epitech project.<br />
                                The project is fully coded in C using the CSFML library.<br /><br />
                                Game includes:<br /><br />
                                - 3 Levels to explore, consisting of multi-layered tiled maps (made with Tiled)<br /><br />
                                - Projectile-based combat system, where the player can shoot damaging orbs at enemies, which behave differently depending on the player&apos;s stats<br /><br />
                                - Multiple ranged & melee enemies with different stats and sound effects<br /><br />
                                - Several stat-modifying equippable items<br /><br />
                                - Inventory system that allows the player to equip/unequip items<br /><br />
                            </p>
                        </div>
                        <div className="w-1/2 flex flex-col space-y-4 items-center overflow-auto">
                            <Image src="/haemo_village.png" alt="village" className="object-contain w-full max-h-full" width={1920} height={1080}/>
                            <Image src="/haemo_dungeon.png" alt="dungeon" className="object-contain w-full max-h-full" width={1920} height={1080}/>
                            <Image src="/haemo_bossfight.png" alt="bossfight" className="object-contain w-full max-h-full" width={1920} height={1080}/>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className="card bg-base-100 w-96 shadow-xl transition-transform transform hover:scale-105 duration-200 ease-in-out"
                onClick={() =>
                {
                const projectDesc = document.getElementById("project_3_desc");
                const modalTitle = document.getElementById("modal_3_title");
                if (projectDesc instanceof HTMLDialogElement) {
                projectDesc.showModal();
                }
                if (modalTitle) {
                modalTitle.scrollIntoView({
                behavior: "auto",
                block: "start",
                });
                }
                }}
                >
                <figure>
                    <Image
                        src="/tcsh_logo.jpg "
                        alt="Tcsh logo"
                        width={1200} height={653}
                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">MINISHELL 2</h2>
                    <p className="text-secondary">Tcsh inspired shell.</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn text-accent"
                            onClick={(e) => {
                        e.stopPropagation();
                        const projectDesc = document.getElementById("project_3_desc");
                        const modalTitle = document.getElementById("modal_3_title");
                        if (projectDesc instanceof HTMLDialogElement) {
                        projectDesc.showModal();
                        }
                        if (modalTitle) {
                        modalTitle.scrollIntoView({
                        behavior: "auto",
                        block: "start",
                        });
                        }
                        }}
                        >
                        About
                        </button>
                    </div>
                </div>
            </div>
            <dialog id="project_3_desc" className="modal modal-fade">
                <div className="modal-box max-w-7xl h-11/12 h-full flex flex-col">
                    <div className="flex flex-row flex-grow">
                        <div className="w-1/2 pr-4">
                            <h3 id="modal_3_title" className="font-bold text-lg text-primary pb-9">MINISHELL 2</h3>
                            <p className="py-5 px-3 text-lg text-secondary">A partial recreation of Tcsh (TENEX C Shell), a UNIX command interpreter, entirely coded in C for an Epitech project<br/><br/>The shell includes the following fonctionalities:<br/><br/>- Execution of binaries : the ability to run programs found in the system&apos;s PATH<br/><br/>- Semicolons ( &apos;;&apos; ) : Allows executing multiple commands in a single line<br/><br/>- Pipes ( &apos;|&apos; ) : Enables the chaining of processes, passing the output of one command as the input of another<br/><br/>- Redirections ( &apos;{">"}&apos;, &apos;{"<"}&apos;, &apos;{"<<"}&apos;, &apos;{">>"}&apos; ) : Allows changing the input and output streams of processes</p>
                        </div>
                        <div className="w-1/2 flex flex-col space-y-4 items-center overflow-auto">
                            <Image src="/shell_tests.png" alt="shell showcase" className="object-contain w-full max-h-full" width={1538} height={839}/>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    </div>
    <div id="skills" className="flex flex-col items-center">
        <div className="mb-[50px] text-center">
            <h1 className="text-4xl font-bold text-primary mb-[15px]" style={{ textShadow: "2px 2px 5px #008080" }}>
            Skills
            </h1>
            <p className="text-lg text-secondary">Skills I&apos;ve acquired over the years</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-[100px] mb-[150px]">
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary justify-center">DEV</h2>
                    <div className="flex text-secondary items-center mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            width={22}
                            height={22}
                            fill="#1db8ab"
                            viewBox="0 0 109.19 122.88"
                            className="mr-[9px]"
                            >
                            <path
                            d="M107.81 92.16c.86-1.48 1.39-3.16 1.39-4.66V35.38c0-1.5-.53-3.17-1.39-4.66L54.6 61.44l53.21 30.72z"
                            style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#1db8ab",
                            }}
                            />
                            <path
                            d="m59.33 121.75 45.14-26.06c1.3-.75 2.48-2.05 3.34-3.53L54.6 61.44 1.39 92.16c.86 1.48 2.04 2.78 3.34 3.53l45.14 26.06c2.6 1.5 6.85 1.5 9.46 0z"
                            style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#1db8ab",
                            }}
                            />
                            <path
                            d="M107.81 30.72c-.86-1.48-2.04-2.78-3.34-3.53L59.33 1.13c-2.6-1.5-6.86-1.5-9.46 0L4.73 27.19C2.13 28.69 0 32.38 0 35.38V87.5c0 1.5.53 3.17 1.39 4.66L54.6 61.44l53.21-30.72z"
                            style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#1db8ab",
                            }}
                            />
                            <path
                            d="M54.6 97.84c-20.07 0-36.4-16.33-36.4-36.4s16.33-36.4 36.4-36.4c12.95 0 25.03 6.97 31.52 18.19l-15.75 9.12c-3.25-5.62-9.29-9.1-15.77-9.1-10.04 0-18.2 8.16-18.2 18.2 0 10.03 8.16 18.2 18.2 18.2 6.48 0 12.52-3.49 15.77-9.1l15.75 9.12c-6.49 11.2-18.57 18.17-31.52 18.17z"
                            style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: "#000000",
                            }}
                            />
                        </svg>
                        C
                    </div>
                    <div className="flex items-center text-secondary mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="icon"
                            width={22}
                            height={22}
                            fill="#1db8ab"
                            viewBox="0 0 32 32"
                            className="mr-[9px]"
                            >
                            <g id="SVGRepo_iconCarrier">
                                <defs>
                                    <style>{".cls-1{fill:none}"}</style>
                                </defs>
                                <title>{"logo--python"}</title>
                                <path
                                    id="compound_path"
                                    d="M23.488 9.14v2.966a4.284 4.284 0 0 1-4.173 4.236h-6.672a3.408 3.408 0 0 0-3.34 3.394v6.36c0 1.81 1.574 2.876 3.34 3.395a11.176 11.176 0 0 0 6.672 0c1.682-.487 3.34-1.467 3.34-3.394V23.55h-6.672v-.849h10.012c1.941 0 2.665-1.354 3.34-3.386a11.464 11.464 0 0 0 0-6.79c-.48-1.932-1.396-3.386-3.34-3.386Zm-3.752 16.108a1.273 1.273 0 1 1-1.254 1.269 1.26 1.26 0 0 1 1.254-1.27Z"
                                    data-name="compound path"
                                    />
                                <path
                                    id="inner_path"
                                    d="M19.736 25.248a1.273 1.273 0 1 1-1.254 1.269 1.26 1.26 0 0 1 1.254-1.27Z"
                                    className="cls-1"
                                    data-name="inner path"
                                    />
                                <path
                                    id="compound_path-2"
                                    d="M15.835 2a19.072 19.072 0 0 0-3.192.273c-2.827.499-3.34 1.544-3.34 3.472V8.29h6.68v.849H6.796a4.17 4.17 0 0 0-4.173 3.387 12.486 12.486 0 0 0 0 6.789c.475 1.977 1.609 3.386 3.55 3.386H8.47V19.65a4.245 4.245 0 0 1 4.173-4.15h6.672a3.365 3.365 0 0 0 3.34-3.394V5.745a3.729 3.729 0 0 0-3.34-3.472A20.838 20.838 0 0 0 15.835 2Zm-3.612 2.048a1.273 1.273 0 1 1-1.254 1.277 1.268 1.268 0 0 1 1.254-1.277Z"
                                    data-name="compound path"
                                    />
                                <path
                                    id="inner_path-2"
                                    d="M12.223 4.048a1.273 1.273 0 1 1-1.254 1.277 1.268 1.268 0 0 1 1.254-1.277Z"
                                    className="cls-1"
                                    data-name="inner path"
                                    />
                                <path
                                    id="_Transparent_Rectangle_"
                                    d="M0 0h32v32H0z"
                                    className="cls-1"
                                    data-name="&lt;Transparent Rectangle&gt;"
                                    />
                            </g>
                        </svg>
                        Python
                    </div>
                    <div className="flex text-secondary items-center mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            fill="none"
                            viewBox="0 0 15 15"
                            className="mr-[9px]"
                            >
                            <path
                                fill="#1db8ab"
                                d="m4.5 4.5.405-.293A.5.5 0 0 0 4 4.5h.5Zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15v-1ZM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5h-1ZM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0v1Zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1V0ZM5 12V4.5H4V12h1Zm-.905-7.207 6.5 9 .81-.586-6.5-9-.81.586ZM10 4v6h1V4h-1Z"
                                />
                        </svg>
                        NextJS
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary justify-center">OTHERS</h2>
                    <div className="flex items-center text-secondary mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            fill="#1db8ab"
                            stroke="#1db8ab"
                            viewBox="0 0 256 256"
                            className="mr-[9px]"
                            >
                            <path
                                fillRule="evenodd"
                                stroke="#1db8ab"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.048}
                                d="M90.643 97.44s-4.586 0-5.309-1.005c-.722-1.005-1.558-2.991-1.5-5.913.058-2.921.557-3.22 1.733-5.823 1.177-2.604 1.592-3.593 3.717-6.239 2.124-2.646 2.953-3.544 6.23-6.153 3.28-2.608 3.441-3.037 7.174-4.512 3.734-1.475 5.6-2.2 11.255-2.768 5.655-.566 4.472-.401 8.768.761s5.042 1.18 9.55 4.196c4.508 3.015 8.397 7.81 8.397 7.81l4.82-9.237 7.266-9.53 11.205-11.582 4.332-.101 1.392 4.69-5.677 5.34-8.826 11.27-6.59 12.584s5.965-.458 11.805.587 5.267.322 9.828 3.284c4.56 2.962 6.525 3.368 10.667 10.028 4.141 6.66 4.082 7.188 4.927 15.051.845 7.863.594 8.612-1.781 14.235-2.376 5.623-7.35 7.375-7.35 7.375l-6.042-3.86s-.155 3.837-1.171 7.152c-1.017 3.314-2.294 7.256-5.262 13.832-2.968 6.576-3.867 8.752-8.447 16.545-4.58 7.794-4.533 7.476-9.561 14.097-5.028 6.622-5.52 7.248-11.461 13.59-5.942 6.341-5.408 7.14-11.71 11.142-6.303 4.001-15 5.816-15 5.816s-7.236-.109-13.338-3.998c-6.102-3.888-8.627-10.001-8.627-10.001s-2.973-7.293-4.894-15.16c-1.92-7.865-1.733-7.071-2.316-14.37-.584-7.298-.45-8.579-.2-17.11.251-8.532.012-8.558 1.192-16.743 1.18-8.185 1.214-9.874 3.917-18.698 2.702-8.825 6.887-16.582 6.887-16.582zm6.757-1.13s-4.981 6.523-8.491 16.386c-3.51 9.862-4.865 21.143-4.865 21.143s-1.057 7.613-1.178 16.826c-.122 9.214-.433 9.227.714 18.455 1.147 9.228 2.148 12.589 3.83 18.112 1.683 5.523 4.79 10.185 4.79 10.185s3.491 5.343 8.21 7.325c4.72 1.981 6.69 1.61 10.285.44 3.594-1.17 10.828-5.365 16.947-10.386 6.12-5.02 11.044-12.58 11.044-12.58s7.887-10.361 12.657-18.117c4.77-7.756 5.593-9.93 8.637-16.503 3.043-6.573 4.245-8.834 5.366-13.738 1.12-4.904 1.12-10.98 1.12-10.98l-8.993-10.091-8.248 9.205s-6.31 4.725-11.26 5.854c-4.95 1.129-5.917.617-10.26-.946s-5.084-1.915-8.154-5.68c-3.071-3.765-4.529-9.87-4.529-9.87s-.717-10.799-.777-13.16c-.06-2.36.322-4.717.322-4.717L97.4 96.31z"
                                />
                        </svg>
                        FL Studio
                    </div>
                    <div className="flex items-center text-secondary mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            id="Camada_1"
                            width={24}
                            height={24}
                            fill="#000"
                            viewBox="0 0 32 32"
                            className="mr-[9px]"
                            >
                            <g id="SVGRepo_iconCarrier">
                                <style>{".st0{fill:#1db8ab}"}</style>
                                <path
                                    d="M17.3 24.5c-4.7 0-7.7-1.1-9.6-2.6.4-.1.8-.3 1.2-.6.8-.8 1-1.9.9-2.9 0-.2-.1-.4-.1-.6.2 0 .4.1.6.1.9 0 1.7-.4 2.3-1 .6 1.1 1.8 1.9 3.2 1.9 1.7 0 3.2-1.2 3.5-2.9 0-.2.1-.5.1-.7 0-.4-.1-.8-.2-1.2-.5-1.4-1.8-2.4-3.4-2.4-.9 0-1.8.3-2.4.9-.2.2-.4.4-.6.7-.2-.2-.4-.5-.6-.6-.5-.4-1.2-.7-1.9-.7-1.5 0-2.8 1.1-3 2.6-.3-.2-.5-.4-.8-.5.2-.8.7-1.6 1.3-2.1V8.1c0-.3.3-.4.4-.1v.1c.4.9.9 2.1 2 3 .9 0 1.8.3 2.4.9.8-.7 1.9-1.2 3-1.2 1.2 0 2.3.5 3.1 1.2 3.8-1.1 5.8-3.6 6.8-5.6.1-.3.7-.2.7.1.6 5.9.3 12-2.5 15.4-1-.7-2-1.2-2.7-1.6-.1 0-.1-.1-.2-.1V20c-.2-.6-.7-1.2-1.4-1.4-.2-.1-.5 0-.5.3-.1.2 0 .5.3.5h.1c-1.7 1.1-3.7 1.6-5.8 1.5H13c-.2 0-.4.2-.5.4 0 .2.2.4.4.5h.5c1.8.1 3.7-.2 5.3-1 .1.1.2.3.3.4.2.2.5.5.9.8.5.5 1.2 1 2 1.6-1.2.5-2.7.9-4.6.9z"
                                    className="st0"
                                    />
                                <path
                                    d="M22.5 23c-1.2-.9-2.2-1.7-2.8-2.2l-.2-.2c-.1-.2-.2-.3-.3-.4v-.1s.1-.1.2 0c.1 0 .2.1.3.1.1 0 .1.1.2.1.7.3 2 1 3.3 1.9.2.1.4.3.6.4 1.1.7 2 1.5 2.7 2 1.2-1.3 2.7 2.2 2.7 2.2s-3.8.4-3.1-1.4c-.8-.4-1.8-1.1-2.9-1.8-.2-.2-.5-.4-.7-.6z"
                                    className="st0"
                                    />
                                <path
                                d="m8.5 20.4-.3.3c-1.1 1-3.2.5-4.7-1.2s-1.9-3.8-.8-4.8c.9-.7 2.3-.6 3.6.2.3.2.7.5 1 .8l.3.3c.4.5.8 1 1 1.5.3.7.4 1.4.4 2-.1.3-.2.6-.5.9zm-3.3-4.2c0 .8-.5 1.4-1.2 1.4s-1.2-.6-1.2-1.4c0-.8.5-1.4 1.2-1.4s1.2.6 1.2 1.4z"
                                style={{
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                fill: "#1db8ab",
                                }}
                                />
                                <path
                                    d="M10.9 16.8c1 0 1.7-.8 1.7-1.7 0-1-.8-1.7-1.7-1.7h-.4c.4.1.7.5.7 1 0 .6-.5 1-1 1-.4 0-.8-.3-1-.7v.4c0 .9.8 1.7 1.7 1.7zM16.4 17.6c1.1 0 2-.9 2-2s-.9-2-2-2h-.3c.5.1.9.6.9 1.1 0 .6-.5 1.2-1.2 1.2-.6 0-1.2-.5-1.2-1.2v-.2c-.2.3-.3.7-.3 1.1.1 1.1 1 2 2.1 2z"
                                    className="st0"
                                    />
                            </g>
                        </svg>
                        Gimp
                    </div>
                    <div className="flex items-center text-secondary mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            width={22}
                            height={22}
                            fill="#1db8ab"
                            viewBox="0 0 512 512"
                            className="mr-[9px]"
                            >
                            <path d="M426.333.5H85.667C38.825.5.5 38.825.5 85.667v340.667c0 46.842 38.325 85.167 85.167 85.167h340.667c46.842 0 85.167-38.325 85.167-85.167V85.667C511.5 38.825 473.175.5 426.333.5zM245.329 260.524c-17.736 17.736-45.611 26.065-77.103 26.065-8.326 0-15.927-.365-21.72-1.451v91.945h-44.159v-240.72c15.927-2.895 38.009-5.069 68.05-5.069 32.582 0 56.473 6.878 72.039 19.911 14.48 11.947 23.89 31.131 23.89 53.936-.001 23.168-7.24 42.351-20.997 55.383zm92.652 120.182c-21.358 0-40.542-5.069-53.574-12.31l8.687-32.216c10.135 6.154 29.322 12.671 45.249 12.671 19.545 0 28.236-7.964 28.236-19.549 0-11.943-7.239-18.099-28.96-25.7-34.391-11.947-48.866-30.769-48.505-51.403 0-31.131 25.7-55.383 66.604-55.383 19.549 0 36.562 5.069 46.695 10.496l-8.687 31.493c-7.602-4.342-21.721-10.135-37.285-10.135-15.928 0-24.615 7.602-24.615 18.46 0 11.224 8.326 16.655 30.77 24.618 31.854 11.582 46.696 27.871 47.058 53.937-.001 31.854-24.976 55.021-71.673 55.021zM221.8 206.95c0 28.598-20.273 44.887-53.574 44.887-9.049 0-16.289-.362-21.72-1.809v-82.534c4.708-1.085 13.395-2.171 25.704-2.171 30.769 0 49.59 14.48 49.59 41.627z" />
                        </svg>
                        Photoshop
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<footer className="footer footer-center bg-base-300 text-base-content p-4">
    <aside className="flex flex-col items-center space-y-2">
        <p className="text-lg text-accent font-semibold">Contacts:</p>
        <div className="flex space-x-4">
            <a
                className="flex items-center text-secondary link-hover"
                onClick={() =>
                {
                navigator.clipboard.writeText("paquetsilas@gmail.com");
                toast("Email copied to clipboard !",
                {
                style: {
                borderRadius: "10px",
                background: "#333",
                color: "#1db88e",
                },
                }
                );
                }}
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="none"
                    >
                    <path d="M12 13.5l8-5.5H4l8 5.5zm0 1.5L4 9v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9l-8 6z" />
                </svg>
                paquetsilas@gmail.com
            </a>
            <a
                href="https://www.linkedin.com/in/silas-paquet-a103702b2/"
                className="flex items-center text-secondary link-hover"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="none"
                    >
                    <path
                        d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.25 19h-3v-9h3v9zm-1.5-10.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm12.25 10.25h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.2c.81-.77 1.86-1.2 3-1.2 2.21 0 4 1.79 4 4v5z"
                        />
                </svg>
                LinkedIn
            </a>
        </div>
        <p className="text-primary">Designed & built by Silas PAQUET.</p>
    </aside>
</footer>
</>
)
}
