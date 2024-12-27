    import { FiSearch, FiShoppingCart } from "react-icons/fi";

    
export default function Navbar() {
  return (
    <div className="relative w-full bg-gray-50">
      
      <header className="flex justify-center px-4 py-4 bg-white shadow">
        
        <div className="flex mx-auto px-4 sm:px-6 lg:px-8">
          <FiSearch className="text-gray-600 text-xl cursor-pointer" />
        </div>

        <div className="relative w-full bg-gray-50 p-4">
  
  <div className="text-center text-2xl font-bold text-gray-800 mb-4">
    Avion
  </div>

 
  <nav className="flex flex-wrap justify-center space-x-8 text-gray-800 text-lg">
    <a href="#" className="hover:text-gray-900">Plant pots</a>
    <a href="#" className="hover:text-gray-900">Ceramics</a>
    <a href="#" className="hover:text-gray-900">Tables</a>
    <a href="#" className="hover:text-gray-900">Chairs</a>
    <a href="#" className="hover:text-gray-900">Crockery</a>
    <a href="#" className="hover:text-gray-900">Tableware</a>
    <a href="#" className="hover:text-gray-900">Cutlery</a>
  </nav>
</div>

       
        <div className="flex mx-auto px-4 sm:px-6 lg:px-8 gap-2">
          <FiShoppingCart className="text-gray-600 text-xl cursor-pointer" />
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-800">
            2 
          </div>
        </div>
      </header>
      </div>

      
  );
};
  
