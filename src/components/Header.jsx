import React, { useContext, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { DebounceContext, SearchContext, ThemeContext } from '../App';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, settheme } = useContext(ThemeContext);
  const { searchval, setsearchval } = useContext(SearchContext);
  const { setdebounce } = useContext(DebounceContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setdebounce(searchval);
    }, 500);
    return () => { clearTimeout(timer); };
  }, [searchval, setdebounce]);

  return (
    <nav className='w-full h-16 bg-gray-900 text-white flex justify-between items-center px-4 md:px-8 sticky top-0 z-50 shadow-md'>
      {/* Logo Section */}
      <div className='flex-shrink-0'>
        <Link to={'/home'}>
          <p className='text-xl md:text-2xl font-bold tracking-wide flex items-center'>
            <span className='mr-1'>🎬</span>
            <span className='hidden sm:inline'>Movie</span>
            <span className='text-amber-400'>HuB</span>
          </p>
        </Link>
      </div>

      <div className='flex items-center justify-end flex-1 max-w-md ml-4'>
        <button 
          aria-label="Toggle Theme"
          className='mr-3 md:mr-5 cursor-pointer text-xl hover:scale-110 transition-transform' 
          onClick={() => settheme(!theme)}
        >
          {!theme ? "☀️" : "🌙"}
        </button>

        <div className='relative flex items-center w-full'>
          <input 
            type="text" 
            className='w-full bg-white text-black rounded-full px-4 py-1.5 outline-none text-sm md:text-base focus:ring-2 focus:ring-amber-400 transition-all' 
            placeholder='Search...' 
            onChange={(e) => setsearchval(e.target.value)} 
            value={searchval}
          />
          <FaSearch className='absolute right-3 text-gray-900 text-lg md:text-xl pointer-events-none sm:text-amber-600'/>
        </div>
      </div>
    </nav>
  );
}

export default Header;