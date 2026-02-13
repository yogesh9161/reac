function MyApp(){
    return(

<div className="bg-gray-100">
    <div className="text-3xl font-serif font-bold">
    <span className="flex justify-center font-serif mt-5 font-2xl"> OUR MENU</span></div>
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-340">
        <ul className="flex justify-center space-x-8 font-semibold text-gray-700">
            <li  className="hover:text-orange-500 cursor-pointer transition">All Dishes</li>
             <li  className="hover:text-orange-500 cursor-pointer transition">Appetizers</li>
              <li  className="hover:text-orange-500 cursor-pointer transition">Entress</li>
               <li  className="hover:text-orange-500 cursor-pointer transition">Sweet Treats</li>
                <li  className="hover:text-orange-500 cursor-pointer transition">Beverages</li>
        </ul>
    </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-98 mt-5">
        <img src="/image/img1.webp"/>
    <h2 className="text-xl font-serif mb-2">Prosciutto-Wrapped<span className="text-red-600 p-2">Asparagus</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
  </div>

   <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-98 mt-5">
        <img src="/image/img7.webp"/>
    <h2 className="text-xl font-serif mb-2">Elderflower Gin<span className="text-red-600 p-2">Fizz</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
  </div>

   <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-98 mt-5">
        <img src="/image/img8.webp"/>
    <h2 className="text-xl font-serif mb-2">Tropical Green<span className="text-red-600 p-2">Smoothie</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
  </div>

   <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-98 mt-5">
        <img src="/image/img2.webp"/>
    <h2 className="text-xl font-serif mb-2">Seared Scallops with<span className="text-red-600 p-2">Cauliflower</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
  </div>

   <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-98 mt-5">
        <img src="/image/img3.webp"/>
    <h2 className="text-xl font-serif mb-2">Herb-Crusted Rack of<span className="text-red-600 p-2">Lamb</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
  </div>

   <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-98 mt-5">
        <img src="/image/img4.webp"/>
    <h2 className="text-xl font-serif mb-2">Quinoa Stuffed Bell<span className="text-red-600 p-2">Peppers</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
  </div>

   <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-98 mt-5">
        <img src="/image/img5.webp"/>
    <h2 className="text-xl font-serif mb-2">Salted Caramel<span className="text-red-600 p-2">Cheesecake</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
  </div>

   <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-98 mt-5">
        <img src="/image/img6.webp"/>
    <h2 className="text-xl font-serif mb-2">Dark Chocolate Avocado<span className="text-red-600 p-2">Mousse</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
  </div>

   <div className="bg-white shadow-lg rounded-lg p-4 max-w-lg w-98 mt-5">
        <img src="/image/img7.webp"/>
    <h2 className="text-xl font-serif mb-2">Elderflower Gin<span className="text-red-600 p-2 ">Fizz</span></h2>
    <p className="text-gray-600">
      We provide healthy food to people in need across different countries.
      Carefully curated dishes featuring the finest seasonal ingredients
    </p>
  </div>

</div>

<div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto mt-10">
<div className="flex justify-between items-center">
<p className="font-semibold text-gray-700">
 Our seasonal menu changes quarterly. Some items may vary based on ingredient availability.</p>
<button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-orange-600  hover:bg-white hover:text-orange-600 transition">Download Full Menu PDF</button>

  </div>

</div>



</div>
    )
};

export default MyApp;