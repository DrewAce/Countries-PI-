import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_COUNTRIES_BY_CONTINENTS = "GET_COUNTRIES_BY_CONTINENTS";
export const ORDER_ASC_DES = "ORDER_ASC_DES";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRIES_BY_ACTIVITIES = "GET_COUNTRIES_BY_ACTIVITIES";
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
export const GET_ACTIVITY_BY_ID= "GET_ACTIVITY_BY_ID";


//Bring all the countries here

export const getCountries = ()=>{
    return async function (dispatch) {
        const response= await axios.get(`/countries/`)
        return dispatch({
            type:GET_COUNTRIES,
            payload: response.data
        })
    }
}

export const getActivities = ()=>{
    return async function(dispatch){
        const response = await axios.get(`/activities`)
        return dispatch({
            type:GET_ACTIVITIES,
            payload: response.data
        })
    }
}

export const getCountriesByName = (name)=>{
    return async function(dispatch){
        try {
            const response = await axios.get(`/countries?name=${name}`);
             return dispatch({
                type:GET_COUNTRIES_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getCountriesByContinents = (continent) =>{
    return {
        type: GET_COUNTRIES_BY_CONTINENTS,
        payload: continent
    }
}

export const getCountriesByActivities = (activity) =>{
    return{
        type: GET_COUNTRIES_BY_ACTIVITIES,
        payload: activity
    }
}

export const orderAsdDes= (order)=>{
    return{
        type:ORDER_ASC_DES,
        payload:order,
    }
}

export const orderPopulation= (order)=>{
    return{
        type:ORDER_POPULATION,
        payload: order,
    }
}

export const getCountryById= (id) =>{
    return async function(dispatch){
        try {
            const response= await axios.get(`/countries/${id}`)
            return dispatch({
                type: GET_COUNTRIES_BY_ID,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const createActivity = (activity)=>{
    return async function(dispatch){
        try {
            const response= await axios.post("/activities", activity)
            alert(response.data.message)
            return dispatch({
                type:CREATE_ACTIVITY,
                payload: response.data,
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const deleteActivity =(id)=>{
    return async function(dispatch){
        try {
            const response= await axios.delete(`/activities/${id}`)
            return dispatch({
                type: DELETE_ACTIVITY,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const updateActivity = (activity) => {
    return async function (dispatch) {
      try {
        const response = await axios.put(`/activities/${activity.id}`, activity);
        console.log(response.data);
        alert(response.data);
        return dispatch({
          type: UPDATE_ACTIVITY,
        });
      } catch (error) {
        alert("No Changes Done");
      }
    };
  };
  
  export const getActivityById = (id) => {
    return async function (dispatch) {
      try {
        const response = await axios.get(`/activities/${id}`);
        dispatch({ 
            type: GET_ACTIVITY_BY_ID,
             payload: response.data });
      } catch (error) {
        alert(error.message);
      }
    };
  };