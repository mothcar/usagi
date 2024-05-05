import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const productId = useParams().productId;
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyWords = searchParams;
  const keyWord = searchParams.get("search");
  const navigate = useNavigate();
  // http://localhost:5173/product/001?search=productName&q=demo#test

  return (
    <>
      <h3>{productId}번 상품 페이지 입니다.</h3>
      <ul>
        <li>hash : {location.hash}</li>
        <li>pathname : {location.pathname}</li>
        <li>search : {location.search}</li>
        <li>state : {location.state}</li>
        <li>key : {location.key}</li>
        <li>keyWords : {keyWords}</li>
        <li>keyWord : {keyWord}</li>
        <li><button onClick={() => navigate('/', {replace: true})}>Go Root</button></li>
        
      </ul>
    </>
  );
}
