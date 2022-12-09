import React from 'react';
import Lungs from "../assets/images/Lungs.jpg";
const Home = () => {
    return(
        <div className="h-screen w-full" style={{backgroundImage:`url(${Lungs})`,               backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
            <div className="">
                <h1 className="text-4xl font-bold text-center">Dimitrov is on a secret mission</h1>
            </div>
        </div>
    );
}
export default Home
