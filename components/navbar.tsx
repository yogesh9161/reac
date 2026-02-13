function MyApp( ) {
  return ( 
    // <div className="">
   <div className=" bg-cover bg-center w-full h-[65px] bg-gray-300 sticky top-0 z-50 ">
      <div className="absolute top-0 left-4 w-full h-full">
    <nav className="w-full p-4">
        <div className="flex justify-center items-center ">

          <div className="text-red-400 absolute left-4">
        <h1 className="  text-serif text-4xl font-bold">Kutty Kid</h1>
        </div>
    
        <ul className="bg-blur-400">
          <li className="text-orange-400 font-serif font-bold">
                <a  className="text-white p-3 hover:text-blue-600"href="#">Home</a>
                <a  className="text-white p-3 hover:text-blue-600"href="#">About</a>
                <a  className="text-white  p-3 hover:text-blue-600"href="#">Menu</a>
                <a  className="text-white  p-3 hover:text-blue-600"href="#"> Chefs</a>
                <a  className="text-white  p-3 hover:text-blue-600"href="#">Gallery</a>
                 <a  className="text-white  p-3 hover:text-blue-600"href="#">Events</a>
                  <a  className="text-white  p-3 hover:text-blue-600"href="#">Contact</a>

            </li>
        </ul>
        {/* </div> */}
    <div className="flex ">    
  <button className=" font-serif px-16 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700
   transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 
   focus:ring-opacity-50 hover:bg-orange-500">
  Book Table</button></div>
</div>
  </nav>
    </div>
    </div>



  );

  }


export default MyApp;