import { get } from "lodash";
export const userSelector = (state) => state.user;
export const isAdminSelector = (state) =>
  get(state, "user.data.role", "") === "ADMIN";
export const userRoleSelector = (state) => state.user.data.role;
export const isAuthSelector = (state) => state.auth.isAuth;
export const adminka = (state) => state.admin;
export const brandsSelector = (state) => state.device.brands;
export const categorysSelector = (state) => state.device.category;
export const devicesSelector = (state) => state.device.devices;
export const activeDeviceSelector = (state) =>
  get(state, "device.activeDevice", {
    _id: "",
    img: [],
    name: "",
    price: null,
    type: "",
    brand: "",
    description: [],
  });
