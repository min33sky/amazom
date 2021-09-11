import React, { useCallback } from 'react';
import { IProduct } from 'typings/amazom';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, selectItems, addToBasket, selectItemQuantity } from 'slices/basketSlice';

function CheckoutProduct({
  id,
  rating,
  category,
  description,
  image,
  price,
  title,
  hasPrime,
}: IProduct) {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const quantity = useSelector(selectItemQuantity);

  const handleAddItemToBasket = useCallback(() => {
    const product: IProduct = {
      id,
      category,
      description,
      image,
      price,
      title,
      hasPrime,
      rating,
    };
    dispatch(addToBasket(product));
  }, [category, description, dispatch, hasPrime, id, image, price, rating, title]);

  const handleremoveFromBasket = useCallback(() => {
    //* 장바구니에서 제거하기
    dispatch(removeFromBasket(id));
  }, [dispatch, id]);

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" alt="" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill(0)
            .map((_, idx) => (
              <StarIcon key={`${id}-star-${idx}`} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="my-2 text-xs line-clamp-3">{description}</p>
        <p className="font-bold">${price}</p>
        <p className="text-xs">quantity: {quantity[id]}</p>

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="" />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right add/remove buttons */}
      <div className="flex flex-col my-auto space-y-2 justify-self-end">
        <button onClick={handleAddItemToBasket} className="button">
          Add to Basket
        </button>
        <button onClick={handleremoveFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
