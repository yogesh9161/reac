function MyApp(){
    return(
    <div className="bg-gray-50 ">
<span className=" flex justify-center items-center text-font text-2xl font-serif font-bold mt-5 border-2 border-pink-200 ">ABOUT</span>
   
<div className="flex items-center justify-center mt-10">
   <div className="w-1/3 relative left-0">
    <img src="/image/img10.webp" alt="pic9" className=" w-full h-auto rounded-lg" />
  </div>

<div className="w-1/2 flex flex-col items-center justify-center gap-6">
   <h1 className="text-4xl font-bold text-orange-500 text-center">
    Experience Our Unique Approach <br></br> In The Life
  </h1>
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg">
    <h2 className="text-xl font-serif mb-2">Healthy<span className="text-red-400">Food</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
  </div>
  <div className="text-bold font-serif text-3xl  text-orange-500">
    {/* <h1>Next.js includes a custom TypeScript which VSCode and other 
        code editors can use for.</h1> */}
       <button className="bg-orange-400 text-white px-4 py-3 rounded-lg font-semibold shadow-md mt-8
               hover:bg-white hover:shadow-lg transition transform hover:scale-105 hover:text-orange-400
                border-2 border-solid-orange">Join Us</button>  
        
  </div>

</div>

</div>


    </div>

    );
}

export default MyApp;