import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Navber = () => {
    const Navber = <>
        <li><Link to="/"> Project</Link> </li>
        <li><Link to="/help"> Technologies</Link> </li>
        <li><Link to="/duplic"> About me</Link> </li>
    </>
    return (


        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Frontend-Web-Developer-Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            {/* This is the menu section stard */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navber}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"> Portfolio</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navber}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Github</a>
                    <a className="btn">Linked</a>
                    <a className="btn">Figma</a>
                </div>
            </div>
            {/* This is the menu section end */}

            {/* This is the Banner section stard */}
            {/* <div className="  p-10  bg-base-200 ">
                <div className=" ml-40 w-2/3 ">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hi Bro I am Taifur</h1>
                        <p className="py-6 pb-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary rounded-2xl">Lts's Begin</button>
                    </div>
                </div>
            </div> */}

            <div className="hero  " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hi Bro I am Taifur</h1>
                        <p className="py-6 pb-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary rounded-2xl">Lts's Begin</button>
                    </div>
                </div>
            </div>
            {/* This is the menu section End */}
            <div className="p-10 text-center ">
                <img className="mask mask-heart w-10/12 m-16" src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />

                <p className="text-7xl font-bold sm:text-3xl">এই  শালার পুত কি দেখতে আইসিস এখানে।</p>
                <p>গালি শর্ত প্রযোজ্য </p>
            </div>
            {/* This is the Project section End */}
            <div className="py-10">
                <div className="py-10 text-6xl font-bold " >Project</div>
                <div className="  flex flex-row gap-4">
                    <div className="card w-3/6 bg-base-100 shadow-xl border">
                        <figure><img src="https://i.ibb.co/6NBw84J/image-1.png" alt="Shoes" /></figure>

                        <div className=" p-4">
                            <h2 className="card-title text-center m-auto text-4xl">
                                Project 1
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className=" text-lime-300 py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quod, quo facere laboriosam exercitationem fugiat molestiae amet voluptatum reiciendis debitis error quam voluptas saepe totam aliquam quos, recusandae, porro sequi voluptates perspiciatis aliquid. Nihil placeat officia illum aspernatur? Veritatis, officiis.</p>
                            <div className="card-actions justify-start">
                                <div className="badge   border-green-200">Look it Up</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-3/6 bg-base-100 shadow-xl border">
                        <figure><img src="https://i.ibb.co/6NBw84J/image-1.png" alt="Shoes" /></figure>

                        <div className=" p-4">
                            <h2 className="card-title text-center m-auto text-4xl">
                                Project 2
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className=" text-lime-300 py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quod, quo facere laboriosam exercitationem fugiat molestiae amet voluptatum reiciendis debitis error quam voluptas saepe totam aliquam quos, recusandae, porro sequi voluptates perspiciatis aliquid. Nihil placeat officia illum aspernatur? Veritatis, officiis.</p>
                            <div className="card-actions justify-start">
                                <div className="badge   border-green-200">Look it Up</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-3/6 bg-base-100 shadow-xl border">
                        <figure><img src="https://i.ibb.co/6NBw84J/image-1.png" alt="Shoes" /></figure>

                        <div className=" p-4">
                            <h2 className="card-title text-center m-auto text-4xl">
                                Project 3
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className=" text-lime-300 py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quod, quo facere laboriosam exercitationem fugiat molestiae amet voluptatum reiciendis debitis error quam voluptas saepe totam aliquam quos, recusandae, porro sequi voluptates perspiciatis aliquid. Nihil placeat officia illum aspernatur? Veritatis, officiis.</p>
                            <div className="card-actions justify-start">
                                <div className="badge   border-green-200">Look it Up</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-3/6 bg-base-100 shadow-xl border">
                        <figure><img src="https://i.ibb.co/6NBw84J/image-1.png" alt="Shoes" /></figure>

                        <div className=" p-4">
                            <h2 className="card-title text-center m-auto text-4xl">
                                Project 4
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className=" text-lime-300 py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quod, quo facere laboriosam exercitationem fugiat molestiae amet voluptatum reiciendis debitis error quam voluptas saepe totam aliquam quos, recusandae, porro sequi voluptates perspiciatis aliquid. Nihil placeat officia illum aspernatur? Veritatis, officiis.</p>
                            <div className="card-actions justify-start">
                                <div className="badge   border-green-200">Look it Up</div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            {/* This is the Project section End */}
            {/* This is the Project section End */}
            <div>
                <div className="py-10 text-6xl font-bold " >Technologles</div>
                <div className=" ">
                    <div className="py-4">
                        <div className="flex justify-between font-bold text-2xl">
                            <h1 className="">Html</h1>
                            <h1>Advanced</h1>
                        </div>
                        <progress className="progress progress-success w-full " value="50" max="100"></progress>
                    </div>
                    <div className="py-4">
                        <div className="flex justify-between font-bold text-2xl">
                            <h1 className="">CSS,Sass & Bootstrap</h1>
                            <h1>Advanced</h1>
                        </div>
                        <progress className="progress progress-success w-full " value="70" max="100"></progress>
                    </div>
                    <div className="py-4">
                        <div className="flex justify-between font-bold text-2xl">
                            <h1 className="">JavaScript, TypeScript, JQuery</h1>
                            <h1>Advanced</h1>
                        </div>
                        <progress className="progress progress-success w-full " value="90" max="100"></progress>
                    </div>
                    <div className="py-4">
                        <div className="flex justify-between font-bold text-2xl">
                            <h1 className="">UI Design In Figma</h1>
                            <h1>Advanced</h1>
                        </div>
                        <progress className="progress progress-success w-full " value="90" max="100"></progress>
                    </div>
                    <div className="py-4">
                        <div className="flex justify-between font-bold text-2xl">
                            <h1 className="">Angular</h1>
                            <h1>Advanced</h1>
                        </div>
                        <progress className="progress progress-success w-full " value="60" max="100"></progress>
                    </div>
                    <div className="py-4">
                        <div className="flex justify-between font-bold text-2xl">
                            <h1 className="">React</h1>
                            <h1>Advanced</h1>
                        </div>
                        <progress className="progress progress-success w-full " value="60" max="100"></progress>
                    </div>
                    <div className="py-4">
                        <div className="flex justify-between font-bold text-2xl">
                            <h1 className="">React Native</h1>
                            <h1>Beginner</h1>
                        </div>
                        <progress className="progress progress-success w-full " value="60" max="100"></progress>
                    </div>

                </div>
            </div>
            {/* This is the Project section End */}
            {/* This is the Additional Technologies section stard */}
            <div>
                <div className="py-10 text-6xl font-bold " >Additional Technologies and Skills</div>
                <div>
                    <ul className=" grid grid-cols-3 text-3xl text-center ">
                        <li className="list-disc font-bold p-4 w-3/6"> Git </li>
                        <li className="list-disc font-bold p-4 w-3/6"> WordPress </li>
                        <li className="list-disc font-bold p-4 w-3/6"> Quick Learning </li>
                        <li className="list-disc font-bold p-4 w-3/6"> Wordpress </li>
                        <li className="list-disc font-bold p-4 w-3/6"> RWD </li>
                        <li className="list-disc font-bold p-4 w-3/6"> Team Work </li>
                        <li className="list-disc font-bold p-4 w-3/6"> B2 English </li>
                    </ul>
                </div>
            </div>

            {/* This is the Additional Technologies section End */}
            {/* This is the About section Stard */}
            <div>
                <div className="py-10 text-6xl font-bold " >About</div>
                <div></div>
            </div>
            {/* This is the About section End */}


            {/* This is the Footer section Stard */}
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            {/* This is the Footer section End */}




        </div>
    );
};

export default Navber;