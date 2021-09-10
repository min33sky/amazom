import React from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="flex flex-grow mt-2 items-center sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt="logo img"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center rounded-md bg-yellow-400 cursor-pointer hover:bg-yellow-500 h-10 outline-none flex-grow">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello min</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 text-center bg-yellow-400 rounded-full items-center text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white font-bold">
        <p className="flex link items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
