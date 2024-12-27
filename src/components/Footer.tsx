import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='bg-[#2A254B] text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='mb-6 w-full md:w-1/4'>
            <h3 className='font-semibold text-lg'>Menu</h3>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:under-line'>New Arrivals</a></li>
              <li><a href="#" className='hover:under-line'>Best Sellers</a></li>
              <li><a href="#" className='hover:under-line'>Recently Viewed</a></li>
              <li><a href="#" className='hover:under-line'>Popular This Week</a></li>
              <li><a href="#" className='hover:under-line'>All Products</a></li>
            </ul>
          </div>

          <div className='mb-6 w-full md:w-1/4'>
            <h3 className='font-semibold text-lg'>Categories</h3>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:under-line'>Grocery</a></li>
              <li><a href="#" className='hover:under-line'>Furniture</a></li>
              <li><a href="#" className='hover:under-line'>Homeware</a></li>
              <li><a href="#" className='hover:under-line'>Plan Pots</a></li>
              <li><a href="#" className='hover:under-line'>Chairs</a></li>
              <li><a href="#" className='hover:under-line'>Grocery</a></li>
            </ul>
          </div>

          <div className='mb-6 w-full md:w-1/4'>
            <h3 className='font-semibold text-lg'>Our company</h3>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:under-line'>About us</a></li>
              <li><a href="#" className='hover:under-line'>Vacancies</a></li>
              <li><a href="#" className='hover:under-line'>Contact us</a></li>
              <li><a href="#" className='hover:under-line'>Privacy</a></li>
              <li><a href="#" className='hover:under-line'>Returns policy</a></li>
            </ul>
          </div>

          <div className='mb-6 w-full md:w-1/4'>
            <h3 className='font-semibold text-lg mb-4'>Join Our Mailing List</h3>
            <form>
              <input 
                type='email'
                placeholder='your@email.com'
                className='w-full p-2 rounded text-black'             
              />
              <button 
                type='submit'
                className='mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded'>
                Sign Up
              </button>
            </form>
          </div>

          <div className='mt-8 flex flex-wrap justify-between items-center border-t border-gray-700 pt-4'>
            <p className='text-sm'>
              copyright 2022 Avion LTD
            </p>
            <div className='flex space-x-4 text-2xl'>
              <a href="#" className='hover:text-blue-600' aria-label='facebook'>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className='hover:text-blue-500' aria-label='linkedin'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className='hover:text-pink-500' aria-label='Instagram'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className='hover:text-blue-300' aria-label='Twitter'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className='hover:text-red-500' aria-label='Pinterest'>
                <FontAwesomeIcon icon={faPinterest} />
              </a>
              <a href="#" className='hover:text-pink-500' aria-label='Skype'>
                <FontAwesomeIcon icon={faSkype} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;