import {React} from 'react'
import {Link} from 'react-router-dom'
import Logo from "../assets/images/logo.png";
import Fab from "../assets/images/FAB.jpg";
import helloch from "../assets/images/Perons/halima.jpg";
import donttrust from "../assets/images/Perons/donttrustme.jfif";
import mskhot from "../assets/images/Perons/mskhot.png";
import model from "../assets/images/Perons/model.jpeg";
import mehdi from "../assets/images/patient1.jpeg";
import oum from "../assets/images/Perons/oum.jpg";



const Home = () => {

    return (
        <div className="text-gray-700  bg-white antialiased">
            <div className="h-3/4 bg-hero bg-cover bg-center  bg-no-repeat bg-fixed" >
                <nav className="flex items-center  justify-between flex-wrap p-2">
                    <div className="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
                        <a href="/"><img src={Logo} alt="" className=" w-20 h-20 rounded-full " /></a>
                        <span className="font-semibold text-xl tracking-tight hover:text-[#5CB8E4] captetalize pl-2"><a href="/"><span className="text-[#1988cd]">Lung-</span>Link</a></span>
                    </div>
                    <div id="nav-content" className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0  md:text-right">
                        <div className="text-xm lg:flex-grow">
                            <a href="#responsive-header" className="block transition duration-150 border-b-2 border-transparent hover:border-[#3AB4F2] mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-black mr-4">Contact Us</a>
                        </div>
                    </div>
                </nav>

                <div className=" h-screen  " >
                    <div className="container p-64 text-center mx-auto  opacity-100">
                        <h2 className="text-4xl font-bold mb-2 text-white uppercase">Lung Link</h2>
                        <h3 className="text-2xl mb-8 text-gray-200 capitalize">Save your lungs, Save your life before its to late</h3>
                        <Link to ="/Login">
                        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-white hover:bg-[#1988cd] transition-all">access your dashboard </button>
                        </Link>
                        
                    </div>
                </div>
                </div>
                <section className="container mx-auto px-6 p-10" >
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Project</h2>
                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2 pr-10">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3 text-center">Lung Link</h4>
                            <p className="text-gray-600 mb-8 capitalize text-center">Lung Link Is A respirator project to help patients with respiratory issues and had a great impact on covid, it helped an important number of doctors to manage and monitor patients during this pandemic.</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg h-90 w-full" src={Fab} alt="Vortex" />
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg h-90 w-full" src="https://www.thesun.co.uk/wp-content/uploads/2019/06/SWJFO-EAPlay-08-1.jpg" alt="use the force" />
                        </div>
                        <div className="w-full md:w-1/2 pl-10">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3 text-center">Fablab</h4>
                            <p className="text-gray-600 mb-8 text-6xl">Fab-lab</p>
                        </div>
                    </div>

                </section>
                <div className="h-full ">
                    <div>
                        <h1 className="text-4xl font-bold uppercase text-center">Our Team</h1>
                    </div>
                    <div className="h-full flex justify-between p-8">
                        <div className="w-full max-w-sm  rounded-lg ">
                            <div className="flex justify-end px-4 pt-4">
                                <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                                </div>
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={helloch} alt="helloucha" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:gray-600">Hatim Allouch</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">front end dev</span>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-sm rounded-lg ">
                            <div className="flex justify-end px-4 pt-4">
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={donttrust} alt="dont" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:gray-600">Karam Belmoujoud</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">front-end dev</span>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-sm rounded-lg ">
                            <div className="flex justify-end px-4 pt-4">
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={oum} alt="dont" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:gray-600">Oumaima chttane </h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">front-end dev</span>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-sm rounded-lg ">
                            <div className="flex justify-end px-4 pt-4">
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={mehdi} alt="dont" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:gray-600">Elmehdi KIBBOU</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400"></span>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-sm rounded-lg ">
                            <div className="flex justify-end px-4 pt-4">
                                <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                                </div>
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={model} alt="iwantmilf" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:gray-600 ">Oussama Boussaid</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Junior Data Scientist </span>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-sm  rounded-lg ">
                            <div className="flex justify-end px-4 pt-4">
                                <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                                </div>
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={mskhot} alt="mskhot" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:gray-600">Moncef Karmaoui</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">front end dev</span>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
    </div>
    );
}
export default Home
