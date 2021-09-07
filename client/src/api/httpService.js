import axios from "axios";
import {
  ADD_PHOTO_TO_PROD,
  ADMIN,
  API,
  AUTH,
  BASKET,
  BRAND,
  BUY,
  CHANGE_PHOTOS_FROM_PRODUCT,
  CREATE_PRODUCT,
  DELETE_USERS,
  DEVICES,
  EDIT,
  EDIT_PHOTO,
  EDIT_PRODUCT,
  GET_ALL_USERS,
  LOGIN,
  REGISTER,
  SET_NEW_USERS,
  TYPE,
  USER,
} from "../utils/constants";
import { instance } from "./axios";

export const request = ({ url, method = "get", props = {} }) => {
  return instance[method](url, props);
};
export const requestCancel = ({
  url,
  method = "get",
  cancelToken,
  props = {},
}) => {
  return instance[method](url, {
    cancelToken: cancelToken.token,
    ...props,
  });
};
const createCancelToken = () => {
  let cancelToken = new axios.CancelToken.source();
  return () => {
    if (cancelToken) cancelToken.cancel("");
    cancelToken = new axios.CancelToken.source();
    return cancelToken;
  };
};

//deviceAPI
const getAllDevices = () => request({ url: API + DEVICES });

const getOneDevices = (idDevice) =>
  request({ url: API + DEVICES + `/?idDevice=${idDevice}` });

const getAllBrandsApiCToken = createCancelToken();
const getAllBrands = (search = "") =>
  requestCancel({
    url: search.length ? API + BRAND + `?search=${search}` : API + BRAND,
    cancelToken: getAllBrandsApiCToken(),
  });

const getAllCategoryApiCToken = createCancelToken();
const getAllCategory = (search = "") =>
  requestCancel({
    url: search.length ? API + TYPE + `?search=${search}` : API + TYPE,
    cancelToken: getAllCategoryApiCToken(),
  });

const getDevicesAfterSearchApiCToken = createCancelToken();
const getDevicesAfterSearch = (props) => {
  const defaultUrl = API + DEVICES;
  let url = defaultUrl;
  for (const key in props) {
    if (props[key].length && props[key] !== "None") {
      if (url === defaultUrl) {
        url = url + "?";
      } else {
        url = url + "&";
      }
      url = url + `${key}=${props[key]}`;
    }
  }
  return requestCancel({
    url,
    cancelToken: getDevicesAfterSearchApiCToken(),
  });
};
//adminAPI

const getAllUsers = () => request({ url: API + ADMIN + GET_ALL_USERS });

const deleteUsers = (props) =>
  request({ url: API + ADMIN + DELETE_USERS, method: "post", props });

const editUsersProfile = (props) =>
  request({ url: API + ADMIN + SET_NEW_USERS, method: "post", props });
const createProduct = (props) =>
  request({ url: API + ADMIN + CREATE_PRODUCT, method: "post", props });

const addPhotoToProduct = (photos, _idProd) => {
  const resPhoto = new FormData();
  [...photos].map((item, idx) => resPhoto.append(`photo ${idx}`, item));
  return request({
    url: API + ADMIN + ADD_PHOTO_TO_PROD + `?_idProd=${_idProd}`,
    method: "post",
    props: resPhoto,
  });
};

const editProduct = (props) =>
  request({ url: API + ADMIN + EDIT_PRODUCT, method: "put", props });

const editPhotoProduct = (photos, idProduct) => {
  const resPhoto = new FormData();
  [...photos].map((item, idx) => resPhoto.append(`photo ${idx}`, item));
  return request({
    url: API + ADMIN + CHANGE_PHOTOS_FROM_PRODUCT + `?_idProd=${idProduct}`,
    method: "post",
    props: resPhoto,
  });
};

//authAPI

const signIn = (props) =>
  request({ url: API + AUTH + LOGIN, method: "post", props });
const signUp = (props) =>
  request({ url: API + AUTH + REGISTER, method: "post", props });

//userAPI

const getUser = () => request({ url: USER + AUTH });

const editUser = (props) =>
  request({ url: USER + EDIT, method: "post", props });

const editPhotoUser = (avatar) => {
  const photo = new FormData();
  photo.append("photo", avatar);
  return request({
    url: USER + EDIT_PHOTO,
    method: "post",
    props: photo,
  });
};

//basketAPI

const getBasket = () => request({ url: API + BASKET });
const addDeviceToBasket = (props) =>
  request({ url: API + BASKET, method: "post", props });
const removeItemFromBasket = (props) =>
  request({ url: API + BASKET, method: "delete", props });
const buyDevicesFromBasket = () => request({ url: API + BASKET + BUY });

const changeCounterInDeviceCToken = createCancelToken();
const changeCounterInDevice = (props) =>
  requestCancel({
    url: API + BASKET,
    method: "put",
    cancelToken: changeCounterInDeviceCToken(),
    props,
  });

export const deviceAPI = {
  getAllDevices,
  getOneDevices,
  getDevicesAfterSearch,
  getAllBrands,
  getAllCategory,
};
export const adminAPI = {
  getAllUsers,
  deleteUsers,
  editUsersProfile,
  createProduct,
  addPhotoToProduct,
  editProduct,
  editPhotoProduct,
};
export const authAPI = {
  signIn,
  signUp,
};
export const userAPI = {
  getUser,
  editUser,
  editPhotoUser,
};
export const basketAPI = {
  getBasket,
  addDeviceToBasket,
  changeCounterInDevice,
  removeItemFromBasket,
  buyDevicesFromBasket,
};
