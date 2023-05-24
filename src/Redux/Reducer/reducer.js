import { SEARCH_COUNTRY_ERROR, SEARCH_COUNTRY_REQUEST, SEARCH_COUNTRY_SUCCESS,
        COUNTRY_REQUEST, COUNTRY_SUCCESS, COUNTRY_ERROR, 
        ORDER_BY_LETTER, ORDER_BY_POPULATION,
        POST_ACTIVITY_ERROR, POST_ACTIVITY_REQUEST, POST_ACTIVITY_SUCCESS, 
        POST_FAVORITE_COUNTRY_REQUEST, POST_FAVORITE_COUNTRY_SUCCESS, POST_FAVORITE_COUNTRY_ERROR, 
        DELETE_FAVORITE_COUNTRY_REQUEST, DELETE_FAVORITE_COUNTRY_SUCCESS, DELETE_FAVORITE_COUNTRY_ERROR, POST_FAVORITE_ACTIVITY_REQUEST, POST_FAVORITE_ACTIVITY_SUCCESS, POST_FAVORITE_ACTIVITY_ERROR,
        DELETE_FAVORITE_ACTIVITY_REQUEST, DELETE_FAVORITE_ACTIVITY_SUCCESS, DELETE_FAVORITE_ACTIVITY_ERROR,
        MESSAGE_REQUEST,
        MESSAGE_SUCCESS,
        MESSAGE_ERROR,
    } from "../Action-Types/action-types";

const initialState = {
    errors: {},
    loading: false,
    success: false,
    searchResults: [],
    allCountries: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case SEARCH_COUNTRY_REQUEST: 
        return{
            ...state,
            loading: true,
            errors: null,
            success: false,
        };
        case SEARCH_COUNTRY_SUCCESS: 
        return{
            ...state,
            searchResults: [...state.searchResults, action.payload],
            loading: false,
            errors: null,
            success: true,
        };
        case SEARCH_COUNTRY_ERROR:
            return{
                ...state,
                loading: false,
                error: { ...state.errors, searchCountry: action.payload},
                success: false,
            };

        case  COUNTRY_REQUEST:
            return{
                ...state,
                loading: true,
                error: false,
                success: false,
            };
        case COUNTRY_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                success: true,
                allCountries: action.payload,
            };
        case COUNTRY_ERROR:
            return{
                ...state,
                loading: false,
                error: { ...state.errors, country: action.payload},
                success: false,
            }

            case ORDER_BY_LETTER:
                const copyAllCountries = [...state.allCountries];
                return {
                    ...state,
                    allCountries: action.payload === "A"
                        ? copyAllCountries.sort((a, b) => a.name.localeCompare(b.name))
                        : copyAllCountries.sort((a,b) => b.name.localeCompare(a.name))
                };
            case ORDER_BY_POPULATION:
                const copyAllCountriesPopulation = [...state.allCountries];
                return {
                    ...state,
                    allCountries: action.payload === "D"
                        ? copyAllCountriesPopulation.sort((a, b) => a.population - b.population)
                        : copyAllCountriesPopulation.sort((a,b) => b.population - a.population)
                };
            
            case POST_ACTIVITY_REQUEST:
                return {
                    ...state,
                    loading: true,
                    error: false,
                    success: false,
                };
            case POST_ACTIVITY_SUCCESS:
                return {
                    ...state,
                    success: true,
                    loading: false,
                    error: false,
                };
            case POST_ACTIVITY_ERROR:
                return {
                    ...state,
                    error: { ...state.errors, postActivity: action.payload},
                    loading: false,
                    success: false,
                };

            case POST_FAVORITE_COUNTRY_REQUEST:
                return {
                    ...state,
                    error: false,
                    success: false,
                };
            case POST_FAVORITE_COUNTRY_SUCCESS:
                return {
                    ...state,
                    success: true,
                    loading: false,
                    error: false,
                }
            case POST_FAVORITE_COUNTRY_ERROR:
                return {
                    ...state,
                    error: { ...state.errors, postFavoriteCountry: action.payload},
                    loading: false,
                    success: false,
                };

            case DELETE_FAVORITE_COUNTRY_REQUEST:
                return {
                    ...state,
                    error: false,
                    success: false,
                };
            case DELETE_FAVORITE_COUNTRY_SUCCESS:
                return {
                    ...state,
                    success: true,
                    loading: false,
                    error: false,
                };
            case DELETE_FAVORITE_COUNTRY_ERROR:
                return {
                    ...state,
                    error: { ...state.errors, deleteFavoriteCountry: action.payload},
                    loading: false,
                    success: false,
                }


            case POST_FAVORITE_ACTIVITY_REQUEST:
                return {
                    ...state,
                    loading: true,
                    error: false,
                    success: false,
                };
            case POST_FAVORITE_ACTIVITY_SUCCESS:
                return {
                    ...state,
                    success: true,
                    loading: false,
                    error: false,
                }
            case POST_FAVORITE_ACTIVITY_ERROR:
                return {
                    ...state,
                    error: { ...state.errors, postFavoriteActivity: action.payload},
                    loading: false,
                    success: false,
                };
                case DELETE_FAVORITE_ACTIVITY_REQUEST:
                    return {
                        ...state,
                        error: false,
                        success: false,
                    };
                case DELETE_FAVORITE_ACTIVITY_SUCCESS:
                    return {
                        ...state,
                        success: true,
                        loading: false,
                        error: false,
                    };
                case DELETE_FAVORITE_ACTIVITY_ERROR:
                    return {
                        ...state,
                        error: { ...state.errors, deleteFavoriteActivity: action.payload},
                        loading: false,
                        success: false,
                    }
            
            case MESSAGE_REQUEST:
                return {
                    ...state,
                    loading: true,
                    error: false,
                    success: false,
                };
            case MESSAGE_SUCCESS:
                return {
                    ...state,
                    success: true,
                    loading: false,
                    error: false,
                };
            case MESSAGE_ERROR:
                return {
                    ...state,
                    error: { ...state.errors, message: action.payload},
                    loading: false,
                    success: false,
                };
                
        default: 
        return{...state};
    };
};

export default rootReducer;