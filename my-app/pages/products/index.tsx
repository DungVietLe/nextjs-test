/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  id: string;
  name: string;
  price: string;
  url: string;
  condition: string;
}

const ListProducts = ({ listProducts }: Array<Props | any> | any) => {
  const router = useRouter();
  console.log(listProducts);
  return (
    <div>
      <h1>List products</h1>
      {listProducts.map((item: Props, index: string) => {
        return (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <Link href={`/products/${item.id}`}>

              <img
                src={item.url}
                alt="avatar"
                style={{
                  width: "200px",
                }}
              />
            </Link>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Name : {item.name}</p>
              <p>Price : {item.price}</p>
              <p>Condition : {item.condition}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListProducts;

export async function getStaticProps() {
  const resp = await fetch("http://localhost:3001/products");
  const result = await resp.json();

  return {
    props: {
      listProducts: result,
    },
    revalidate: 1,
  };
}
