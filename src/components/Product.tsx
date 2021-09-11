import React, { useCallback, useState } from 'react';
import { IProduct } from 'typings/amazom';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket } from 'slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, category, description, image, price, title }: IProduct) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);

  const handleAddItemToBasket = useCallback(() => {
    const product: IProduct = {
      id,
      category,
      description,
      image,
      price,
      title,
      rating,
      hasPrime,
    };
    dispatch(addToBasket(product));
  }, [category, description, dispatch, hasPrime, id, image, price, rating, title]);

  return (
    <div className="relative z-30 flex flex-col p-10 m-5 bg-white">
      <p className="absolute text-xs italic text-gray-400 right-2 top-2">{category}</p>
      <Image src={image} width={200} height={200} alt="product_image" objectFit="contain" />
      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill(0)
          .map((_, idx) => (
            <StarIcon key={`${id}-star-${idx}`} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <p className="mb-5">${price}</p>

      {hasPrime && (
        <div className="flex items-center -mt-5 space-x-2 ">
          <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
          <p className="text-xs text-gray-500">FREE Next-day Delevery</p>
        </div>
      )}

      <button onClick={handleAddItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
