/*
  Ini constant Url, buat ngedefine Url rest API biasa
*/

const BASE_URL = "http://api.guwudangin.me/api";

export const GET_ACCOUNT = `${BASE_URL}/authUser`;
export const GET_PARTNER = `${BASE_URL}/partner`;
export const SEARCH_PARTNER = `${BASE_URL}/searchPartner`;
export const GET_PRODUCT = `${BASE_URL}/product/`;
export const GET_PRODUCT_STOCK = `${BASE_URL}/productStock/`;
//export const SEARCH_PRODUCT = `${BASE_URL}/searchProductByUserID/`;
export const GET_PRODUCT_TYPE = `${BASE_URL}/productType/`
export const GET_INVOICE = `${BASE_URL}/invoice`;
export const GET_ORDERITEM = `${BASE_URL}/orderitem`;
export const GET_WEEKLY_ORDERITEM = `${BASE_URL}/weeklyOrderItem`;
export const SEARCH_PRODUCT = `${BASE_URL}/searchProduct`;
export const PRODUCT_DETAIL = `${BASE_URL}/productDetailByProductID`
export const LOGIN = `${BASE_URL}/login`;