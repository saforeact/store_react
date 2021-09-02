import { adminAPI } from "../../api/httpService";
import { SET_DATA } from "../actionTypes";
import { checkErrors } from "./commonActions";
import { getAllBrands, getAllCategory } from "./devicesActions";

export const setDataAction = (payload) => {
  return {
    type: SET_DATA,
    payload,
  };
};

export const getAllUsersAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await adminAPI.getAllUsers();
      dispatch(setDataAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};

export const setNewUsersAction = (userList, removeList) => {
  return async (dispatch) => {
    try {
      await adminAPI.deleteUsers({
        removeList,
      });
      await adminAPI.editUsersProfile({ userList });
      dispatch(getAllUsersAction());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};

export const createProductAction = (product, photos) => {
  return async (dispatch) => {
    try {
      const { data } = await adminAPI.createProduct({ product });
      if ([...photos].length) {
        const { _idProd } = data;
        await adminAPI.addPhotoToProduct(photos, _idProd);
      }
      dispatch(getAllBrands());
      dispatch(getAllCategory());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
export const editProductAction = (product, photos, idProduct) => {
  return async (dispatch) => {
    try {
      await adminAPI.editProduct({
        product,
        idProduct,
      });
      if ([...photos].length) {
        await adminAPI.editPhotoProduct(photos, idProduct);
      }
      dispatch(getAllBrands());
      dispatch(getAllCategory());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
