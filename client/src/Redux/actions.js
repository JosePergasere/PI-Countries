import axios from "axios";
import {
  GET_COUNTRIES,
  GET_COUNTRY,
  CLEAN_COUNTRY,
  ORDER_COUNTRIES,
  SEARCH_COUNTRIES,
  FILTER_CONTINENT,
  ORDER_POPULATION,
  FILTER_ACTIVITY,
  GET_ACTIVITIES,
  DELETE_ACTIVITY,
} from "./action-types";

export const getCountries = () => {
  return async function (dispatch) {
    const dbData = await axios.get("http://localhost:3001/countries");
    const countries = dbData.data.allCountries;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

export const getCountry = (id) => {
  return async function (dispatch) {
    const dbData = await axios.get(`http://localhost:3001/countries/${id}`);
    const country = dbData.data;
    dispatch({ type: GET_COUNTRY, payload: country });
  };
};

export const cleanCountry = () => {
  return { type: CLEAN_COUNTRY };
};

export const orderCountries = (value) => {
  return {
    type: ORDER_COUNTRIES,
    payload: value,
  };
};

export const searchCountries = (search) => {
  return async function (dispatch) {
    try {
      const dbData = await axios.get(
        `http://localhost:3001/countries/name?name=${search}`
      );

      return dispatch({
        type: SEARCH_COUNTRIES,
        payload: dbData.data.countriesFind,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const filterContinent = (continent) => {
  return {
    type: FILTER_CONTINENT,
    payload: continent,
  };
};

export const orderPopulation = (value) => {
  return {
    type: ORDER_POPULATION,
    payload: value,
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const dbData = await axios.get("http://localhost:3001/activities");
    const activities = dbData.data.actividadTuristica;

    dispatch({ type: GET_ACTIVITIES, payload: activities });
  };
};

export const filterActivity = (value) => {
  return {
    type: FILTER_ACTIVITY,
    payload: value,
  };
};

export const deleteAcitivty = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(`http://localhost:3001/activities/${id}`);
    alert(res.data);
    return dispatch({
      type: DELETE_ACTIVITY,
      payload: id,
    });
  };
};
