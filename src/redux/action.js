import axios from "axios";
import { SEARCH_DATA } from "./actionType";

export const addData = (payload) => ({
  type: SEARCH_DATA,
  payload,
});

export const getdata = (data) => (dispatch) => {
  axios
    .get(`https://fast-reef-22226.herokuapp.com/data?q=${data}`)
    .then((res) => {
      console.log(res.data);
      dispatch(addData(res.data));
    });
};
