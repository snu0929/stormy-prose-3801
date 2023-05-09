import {
  GET_PATIENT_REQ,
  GET_PATIENT_SUCCESS,
  GET_PATIENT_FAIL,
  POST_PATIENT_FAIL,
  POST_PATIENT_REQ,
  POST_PATIENT_SUCCESS,
  UPDATE_STATUS,
} from "./actionType";
import axios from "axios";

const url = "http://localhost:8080/patients";

export const postPatient = (obj) => (dispatch) => {
  dispatch({ type: POST_PATIENT_REQ });
  axios
    .post(url, obj)
    .then((res) => {
      console.log(res);
      return dispatch({ type: POST_PATIENT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      return dispatch({ type: POST_PATIENT_FAIL });
    });
};

export const getPatient = () => (dispatch) => {
  dispatch({ type: GET_PATIENT_REQ });
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      return dispatch({ type: GET_PATIENT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      return dispatch({ type: GET_PATIENT_FAIL });
    });
};

export const updateStatusFn = (id, status) => (dispatch) => {
  dispatch({ type: GET_PATIENT_REQ });
  console.log("-id", id);
  let data;
  let mydata;
  axios
    .get(`http://localhost:8080/patients/${id}`)
    .then((res) => {
      console.log(res.data);
      data = res.data.status;
      mydata = !data;
      console.log("data-=>", mydata);
      dispatch({ type: UPDATE_STATUS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });

  return axios
    .patch(`http://localhost:8080/patients/${id}`, mydata)
    .then((res) => {
      console.log("king", res.data);
      dispatch({ type: UPDATE_STATUS, payload: res.data });
    });
};
