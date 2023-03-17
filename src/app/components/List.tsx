import React, { useEffect } from "react";
import { fetchProducts } from "../../features/productSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log("Products", products);

  return <div>List will be here</div>;
};

export { List };
