import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../db/customFetch";
import ItemList from "./main/items/ItemList";
import data from "../db/data";

const ItemListContainer = () => {
  const [dt, setDt] = useState([])
  const {idCategory} = useParams();
  useEffect(() => {
    customFetch(data, 2000, data.filter(product => {
      if(idCategory === undefined) return product;
      return product.category === idCategory
    })) //para simular un fallo en la llamada debe cambiar el valor a !data
      .then((res)=>setDt(res))
      .catch((err)=>console.log(err))
  },[dt])
  return (
    <>
      <ItemList content={dt}/>
    </>
  )};
export default ItemListContainer;