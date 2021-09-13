import Header from 'components/Header';
import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems, selectTotalPrice, selectTotalQuantity } from 'slices/basketSlice';
import CheckoutProduct from 'components/CheckoutProduct';
import { useSession } from 'next-auth/client';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
const stripePromise = loadStripe(process.env.stripe_public_key!);

function Checkout() {
  const [session] = useSession();
  const items = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantity = useSelector(selectTotalQuantity);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    console.log('머야');
    // call the backend to create a checkout session...
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items,
      email: session?.user?.email,
    });

    // Redirect user/customer to Stripe Checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result?.error) alert(result.error.message);
  };

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
        <div className="flex flex-col p-10 bg-white shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({totalQuantity} items):{' '}
                <span className="font-bold">$ {totalPrice.toFixed(2)}</span>
              </h2>

              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`mt-2 button ${
                  !session &&
                  `from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed`
                } `}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
