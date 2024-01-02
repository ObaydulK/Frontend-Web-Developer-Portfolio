import { Link } from "react-router-dom";

const Navber = () => {

    const Navber = <>
        <li><Link to="/"> Project</Link> </li>
        <li><Link to="/help"> Technologies</Link> </li>
        <li><Link to="/duplic"> About me</Link> </li>
    </>
    return (
        <div>
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
            <div className="  p-10  bg-base-200 ">
                <div className=" ml-40 w-2/3 ">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hi Bro I am Taifur</h1>
                        <p className="py-6 pb-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary rounded-2xl">Lts's Begin</button>
                    </div>
                </div>
            </div>
            {/* This is the menu section End */}
            {/* This is the Project section End */}
            <div className="py-10  flex flex-row gap-4">
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


            {/* This is the Project section End */}

        </div>
    );
};

export default Navber;