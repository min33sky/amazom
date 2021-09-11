import Header from 'components/Header';
import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from 'slices/basketSlice';
import CheckoutProduct from 'components/CheckoutProduct';

function Checkout() {
  const items = useSelector(selectItems);

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="mx-auto lg:flex max-w-screen-2xl">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
            alt=""
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="pb-4 text-3xl border-b">
              {items.length === 0 ? 'Shopping Basket is Empty.' : 'Shopping Basket'}
            </h1>

            {items.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                category={item.category}
                description={item.description}
                image={item.image}
                price={item.price}
                title={item.title}
                hasPrime={item.hasPrime}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div>
          <p>오른쪽 메뉴</p>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
