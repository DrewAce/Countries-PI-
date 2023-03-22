import {GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRIES_BY_CONTINENTS, ORDER_ASC_DES, ORDER_POPULATION, GET_ACTIVITIES, GET_COUNTRIES_BY_ACTIVITIES, GET_COUNTRIES_BY_ID
, CREATE_ACTIVITY, DELETE_ACTIVITY, UPDATE_ACTIVITY, GET_ACTIVITY_BY_ID} from "./actions"


const initialState ={
    allCountries: [],
    countries: [],
    activities: [],
    countryDetail:{},
    activityUpdate:{},
}

const rootReducer = (state= initialState, action) =>{
    switch(action.type){

        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            }
            case GET_COUNTRIES_BY_NAME:
            return {
             ...state,
             countries: action.payload,
            };    

        case GET_COUNTRIES_BY_CONTINENTS:
            return{
                ...state,
                countries: state.allCountries.filter((country)=> country.continents === action.payload)
            }  

        case GET_COUNTRIES_BY_ACTIVITIES:
            return{
                ...state,
                countries: state.allCountries.filter(
                    (country)=> country.activities && country.activities.map((activity) => activity.name).includes(action.payload)
                )
            }
            
            case ORDER_ASC_DES: {
                action.payload === "A-Z"
                  ? state.countries.sort((a, b) => {
                      if (a.name > b.name) return 1;
                      if (a.name < b.name) return -1;
                      return 0;
                    })
                  : state.countries.sort((a, b) => {
                      if (a.name < b.name) return 1;
                      if (a.name > b.name) return -1;
                      return 0;
                    });
                return {
                  ...state,
                  countries: [...state.countries],
                };
              }
              case ORDER_POPULATION: {
                action.payload === "↥ population"
                  ? state.countries.sort((a, b) => {
                      if (parseInt(a.population) < parseInt(b.population)) return 1;
                      if (parseInt(a.population) > parseInt(b.population)) return -1;
                      return 0;
                    })
                  : state.countries.sort((a, b) => {
                      if (parseInt(a.population)  > parseInt(b.population)) return 1;
                      if (parseInt(a.population)  < parseInt(b.population)) return -1;
                      return 0;
                    });
                return {
                  ...state,
                  countries: [...state.countries],
                };
              }
             
            case GET_ACTIVITIES:
                return{
                    ...state,
                    activities: action.payload
                }

            case GET_COUNTRIES_BY_ID:
                return{
                    ...state,
                    countryDetail: action.payload
                } 
                
            case CREATE_ACTIVITY:
                return{
                    ...state,
                }    

            case DELETE_ACTIVITY:
                return{
                    ...state,
                    activities: action.payload,
                }
                
            case UPDATE_ACTIVITY:
                return {
                    ...state,
                }
                
            case GET_ACTIVITY_BY_ID:
                return{
                    ...state,
                    activityUpdate: action.payload
                }
                
             default:
                return {...state}   

        }

    }



export default rootReducer;