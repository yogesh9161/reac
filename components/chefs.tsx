function MyApp(){
    return(
<div>
 <h1 className=" bg-pink-50 h-full flex justify-center font-bold text-3xl mt-10"> Top Chefs</h1>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> 

 <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-78 mt-5">
     <img src="/image/img11.webp"/>
    <h2 className="text-xl font-serif mb-2">Elderflower Gin<span className="text-red-600 p-2">Fizz</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
    <span className="border-1 p-1 rounded bg-orange-100 text-sm ">Street Food Fest</span>
</div>

 <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-78 mt-5">
     <img src="/image/img12.webp"/>
    <h2 className="text-xl font-serif mb-2">Elderflower Gin<span className="text-red-600 p-2">Fizz</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
    <span className="border-1 p-1 rounded bg-orange-100 text-sm ">Cocoa Summit</span>
 </div>

 <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-78 mt-5">
     <img src="/image/img13.webp"/>
    <h2 className="text-xl font-serif mb-2">Elderflower Gin<span className="text-red-600 p-2">Fizz</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
    <span className="border-1 p-1 rounded bg-orange-100 text-sm ">Smoke Off</span>
 </div>

  <div className="bg-white shadow-lg rounded-circle p-4 max-w-lg w-78 mt-5">
     <img src="/image/img14.webp"/>
    <h2 className="text-xl font-serif mb-2">Elderflower Gin<span className="text-red-600 p-2">Fizz</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
    <span className="border-1 p-1 rounded bg-orange-100 text-sm ">Guest Favorite</span>
 </div>


 </div>
</div>
    )
};

export default MyApp;