import React from 'react';
import Header from 'components/Header';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Banner from 'components/Banner';
import ProductFeed from 'components/ProductFeed';
import axios from 'axios';
import { IProduct } from 'typings/amazom';

interface HomeProps {
  products: IProduct[];
}

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazom</title>
      </Head>

      <Header />

      <main className="mx-auto max-w-screen-2xl">
        {/* Banner */}
        <Banner />
        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await axios.get('https://fakestoreapi.com/products');

  return {
    props: {
      products: data,
    },
  };
};

export default Home;
