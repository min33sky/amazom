import React from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems, selectTotalQuantity } from 'slices/basketSlice';

function Header() {
  const [session] = useSession();
  const items = useSelector(selectItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const router = useRouter();

  const onClickCredentials = () => {
    if (session?.user) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center flex-grow p-1 py-2 bg-amazon_blue">
        <div className="flex items-center flex-grow mt-2 sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt="logo img"
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push('/')}
          />
        </div>

        {/* search */}
        <div className="items-center flex-grow hidden h-10 bg-yellow-400 rounded-md outline-none cursor-pointer sm:flex hover:bg-yellow-500">
          <input
            type="text"
            className="flex-grow flex-shrink w-6 h-full p-2 rounded-l-md focus:outline-none"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* right */}
        <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
          <div onClick={onClickCredentials} className="link">
            <p>{session?.user ? session.user.name : 'Sign In'}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div onClick={() => router.push('/checkout')} className="relative flex items-center link">
            <span className="absolute top-0 right-0 items-center w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full md:right-10">
              {totalQuantity}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden font-extrabold md:inline md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center p-2 pl-6 space-x-3 font-bold text-white bg-amazon_blue-light">
        <p className="flex items-center link">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="hidden link lg:inline-flex">Electronics</p>
        <p className="hidden link lg:inline-flex">Food & Grocery</p>
        <p className="hidden link lg:inline-flex">Prime</p>
        <p className="hidden link lg:inline-flex">Buy Again</p>
        <p className="hidden link lg:inline-flex">Shopper Toolkit</p>
        <p className="hidden link lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
