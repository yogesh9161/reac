function MyApp(){
    return(
    <div className=" bg-cover bg-center w-full h-[640px] bg-[url('/image/main1.webp')]">
         <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center px-4">   
<h1 className="text-white text-4xl font-bold">Let's Learn Something <span className="text-red-500">New and</span> <br />Explore The <span className="text-red-500">Nature</span></h1>
<div className="mt-6">
 <button className="  text-2xl font-serif px-16 py-2 bg-red-300 text-white font-bold rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
Explore More</button>
</div>
  </div>

    </div>
    )
};

export default MyApp;