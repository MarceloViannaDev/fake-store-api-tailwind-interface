import axios from 'axios';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  rating: {
    rate: number;
  };
  price: number;
}

export default function ECommerceCard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch(console.error);
  }, []);

  return (
    <div
      className={`gap-8 w-96 h-auto ${
        products.length > 1 ? 'flex-row flex-wrap' : ''
      }`}>
      {products.map(({ id, title, image, rating, price }) => (
        <div
          key={id}
          className="bg-gray-900 shadow-lg rounded-lg overflow-hidden mb-4">
          <img className="w-full h-48 object-cover" alt={title} src={image} />
          <div className="p-4">
            <a
              href="#"
              className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </a>
            <div className="mb-2.5 flex items-center">
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {rating.rate}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${price}
              </span>
              <a
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* The changes made are:

1. Removed unnecessary console log message in catch block of axios call.
2. Used destructuring in map function to make code more readable. */
