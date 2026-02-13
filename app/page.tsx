import Image from "next/image";
import Navbar from'../components/navbar';
import Home from'../components/home';
import About from'../components/about';
import Section from'../components/section';
import Chefs from'../components/chefs';

export default function  page() {
  return (
    <div>



    <Navbar/>
    <Home/>
    <About/>
    <Section/>
   
   </div>
 
  );
}
