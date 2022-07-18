import { useRouter } from "next/dist/client/router";
import React from "react";

type Props = {};

const DetailProduct = ({ detailProduct }: any) => {
  const router = useRouter();
  console.log(router)
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Detail Product</h1>
      <p>Name : {detailProduct.name}</p>
      <p>Price : {detailProduct.price}</p>
      <p>Condition: {detailProduct.condition}</p>
    </div>
  );
};

export default DetailProduct;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { idProduct: "1" },
      },
      {
        params: { idProduct: "2" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const resp = await fetch(
    `http://localhost:3001/products/${context.params.idProduct}`
  );
  const results = await resp.json();

  return {
    props: {
      detailProduct: results,
    },
    revalidate: 1,
  };
}
