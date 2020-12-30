/*
  Ini constant Url, buat ngedefine Url rest API biasa
*/

const BASE_URL = "http://localhost:8000/api";

export const GET_ACCOUNT = `${BASE_URL}/authUser`;
export const GET_PARTNER = `${BASE_URL}/partner`;
export const SEARCH_PARTNER = `${BASE_URL}/searchPartner`;
//export const GET_FILMS = `${BASE_URL}/films`;
export const GET_PRODUCT = `${BASE_URL}/product`;
export const GET_INVOICE = `${BASE_URL}/invoice`;
export const GET_ORDERITEM = `${BASE_URL}/orderitem`;
export const SEARCH_PRODUCT = `${BASE_URL}/searchProduct`;
//export const PRODUCT_DETAIL = `${BASE_URL}/productDetail`
export const PRODUCT_DETAIL = `${BASE_URL}/productDetailByProductID`
//export const GET_FILMS = `${BASE_URL}/films`;
export const LOGIN = `${BASE_URL}/login`;
