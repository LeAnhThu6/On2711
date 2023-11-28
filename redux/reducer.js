// reducers.js

import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAILURE,
  EDIT_DATA_REQUEST,
  EDIT_DATA_SUCCESS,
  EDIT_DATA_FAILURE,
  DELETE_DATA_REQUEST,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAILURE,
} from "./actions";

interface State {
  data: any[]; // Update this type according to your data structure
  loading: boolean;
  error: null | any; // Update this type according to your error structure
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const dataReducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      };
    case ADD_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case EDIT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_DATA_SUCCESS:
      const updatedData = action.payload;
      const updatedDataIndex = state.data.findIndex(
        (item) => item.id === updatedData.id
      );
      const newDataArray = [...state.data];
      newDataArray[updatedDataIndex] = updatedData;
      return {
        ...state,
        loading: false,
        data: newDataArray,
      };
    case EDIT_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_DATA_SUCCESS:
      const deletedDataId = action.payload;
      const filteredData = state.data.filter(
        (item) => item.id !== deletedDataId
      );
      return {
        ...state,
        loading: false,
        data: filteredData,
      };
    case DELETE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
