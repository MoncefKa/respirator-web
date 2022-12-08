import React from 'react'
import Logo from "../assets/images/logo.png";

const Home = () => {

    return (
        <div>

            <body class="text-gray-700  bg-white antialiased" >

                <nav class="flex items-center  justify-between flex-wrap p-2">

                    <div class="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
                        
                        <a href="/"><img src={Logo} alt="" className=" w-16 h-16" /></a>
                        <span class="font-semibold text-xl tracking-tight hover:text-[#5CB8E4]"><a href="/">FABLAB</a></span>

                    </div>




                    <div id="nav-content" class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0  md:text-right">
                        <div class="text-xm lg:flex-grow">
                            <a href="#responsive-header" class="block transition duration-150 border-b-2 border-transparent hover:border-[#3AB4F2] mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-black mr-4">Contact Us</a>
                        </div>
                    </div>

                </nav>


                <div class=" h-screen  bg-hero bg-cover bg-center  bg-no-repeat bg-fixed" >
                    <div class="container p-64 text-center  opacity-100">
                        <h2 class="text-4xl font-bold mb-2 text-white">RESFAB</h2>
                        <h3 class="text-2xl mb-8 text-gray-200">Not much, but it could be a life form. This is Rouge Two. this is Rouge Two. Captain Solo, so you copy?</h3>
                        <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all">get accessed to your Dashboard  </button>
                    </div>
                </div>

                {/* <section class="container mx-auto px-6 p-10" >
                    
                    <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">Artoo!</h2>
                    <div class="flex items-center flex-wrap mb-20">
                        <div class="w-full md:w-1/2 pr-10">
                            <h4 class="text-3xl text-gray-800 font-bold mb-3">Vortex</h4>
                            <p class="text-gray-600 mb-8">Their primary target will be the power generators. Prepare to open the shield. Sir, Rebel ships are coming into our sector. Good. Our first catch of the day. Stand by, ion control....Fire! The first transport is away.</p>
                        </div>
                        <div class="w-full md:w-1/2">
                            <img class="rounded-lg" src="https://pbs.twimg.com/media/CR45LOXVEAADG5E.jpg" alt="Vortex" />
                        </div>
                    </div>
                    <div class="flex items-center flex-wrap mb-20">
                        <div class="w-full md:w-1/2">
                            <img class="rounded-lg" src="https://www.thesun.co.uk/wp-content/uploads/2019/06/SWJFO-EAPlay-08-1.jpg" alt="use the force" />
                        </div>
                        <div class="w-full md:w-1/2 pl-10">
                            <h4 class="text-3xl text-gray-800 font-bold mb-3">Use the Force!</h4>
                            <p class="text-gray-600 mb-8">We'll never get it out now. So certain are you. Always with you it cannot be done. Hear you nothing that I say? Master, moving stones around is one thing. This is totally different. No! No different!</p>
                        </div>
                    </div>
                    
                </section> */}





                {/* <footer class="bg-gray-100 ">
                    <div class="container mx-auto px-6 pt-10 pb-6">
                        <div class="flex flex-wrap">
                            <div class="w-full md:w-1/4 text-center md:text-left ">
                                <h5 class="uppercase mb-6 font-bold">Links</h5>
                                <ul class="mb-4">
                                    <li class="mt-2">
                                        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">I'll return</a>
                                    </li>
                                    <li class="mt-2">
                                        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">I promise</a>
                                    </li>
                                    <li class="mt-2">
                                        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Reckless is he</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full md:w-1/4 text-center md:text-left ">
                                <h5 class="uppercase mb-6 font-bold">Legal</h5>
                                <ul class="mb-4">
                                    <li class="mt-2">
                                        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Emperor's Terms</a>
                                    </li>
                                    <li class="mt-2">
                                        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Pulverized?</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full md:w-1/4 text-center md:text-left ">
                                <h5 class="uppercase mb-6 font-bold">Social</h5>
                                <ul class="mb-4">
                                    <li class="mt-2">
                                        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Corellia</a>
                                    </li>
                                    <li class="mt-2">
                                        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Bilbringi</a>
                                    </li>
                                    <li class="mt-2">
                                        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Fondor</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full md:w-1/4 text-center md:text-left ">
                                <h5 class="uppercase mb-6 font-bold">Through the Force</h5>
                                <ul class="mb-4">
                                    <li class="mt-2">
                                        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Journey to the Emperor</a>
                                    </li>
                                    <li class="mt-2">
                                        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Lord Vader ship approaching?</a>
                                    </li>
                                    <li class="mt-2">
                                        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">X-wing class</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer> */}
            </body>


        </div>
    );
}
export default Home
