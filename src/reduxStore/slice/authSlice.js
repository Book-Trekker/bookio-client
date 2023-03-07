import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_API } from "../../config";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    startRequestForUser(state, action) {
      state.loading = true;
      state.error = null;
    },
    startSuccessForUser(state, action) {
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    startFailureForUser(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = {};
    },
    clearAuthError(state, action) {
      state.error = null;
    },
    userLogOut(state, action) {
      state.error = null;
      state.loading = null;
      state.user = {};
      state.isAuthenticated = false;
      localStorage.removeItem("id");
      localStorage.removeItem("token");
    },
  },
});

export const {
  startRequestForUser,
  startSuccessForUser,
  startFailureForUser,
  clearAuthError,
  userLogOut,
} = authSlice.actions;

export default authSlice.reducer;

// Thunk  for Signup
export const registerThunk = (user) => async (dispatch) => {
  try {
    console.log(user);
    dispatch(startRequestForUser());
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      `${BASE_API}/api/v1/register`,
      user,
      config
    );
    dispatch(startSuccessForUser(data.user));
    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data.user._id);
  } catch (error) {
    dispatch(startFailureForUser(error.response.data.message));
  }
};

// Thunk  for Signup
export const loginThunk = (user) => async (dispatch) => {
  try {
    dispatch(startRequestForUser());
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(`${BASE_API}/api/v1/login`, user, config);
    dispatch(startSuccessForUser(data.user));
    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data.user._id);
  } catch (error) {
    dispatch(startFailureForUser(error.response.data.message));
  }
};

// load user
export const loadUserThunk = (id) => async (dispatch) => {
  try {
    dispatch(startRequestForUser());
    const { data } = await axios.get(`${BASE_API}/api/v1/loadUser/${id}`);
    dispatch(startSuccessForUser(data.user));
  } catch (error) {
    dispatch(startFailureForUser(error.response.data.message));
  }
};

// logout  user
export const userLogoutThunk = () => async (dispatch) => {
  try {
    dispatch(startRequestForUser());
    dispatch(userLogOut());
  } catch (error) {
    dispatch(startFailureForUser(error.response.data.message));
  }
};
