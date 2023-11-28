export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const ADD_DATA_REQUEST = "ADD_DATA_REQUEST";
export const ADD_DATA_SUCCESS = "ADD_DATA_SUCCESS";
export const ADD_DATA_FAILURE = "ADD_DATA_FAILURE";

export const EDIT_DATA_REQUEST = "EDIT_DATA_REQUEST";
export const EDIT_DATA_SUCCESS = "EDIT_DATA_SUCCESS";
export const EDIT_DATA_FAILURE = "EDIT_DATA_FAILURE";

export const DELETE_DATA_REQUEST = "DELETE_DATA_REQUEST";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const DELETE_DATA_FAILURE = "DELETE_DATA_FAILURE";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
export const addDataRequest = () => ({
  type: ADD_DATA_REQUEST,
});
export const addDataSuccess = (data) => ({
  type: ADD_DATA_SUCCESS,
  payload: data,
});
export const addDataFailure = (error) => ({
  type: ADD_DATA_FAILURE,
  payload: error,
});
export const editDataRequest = () => ({
  type: EDIT_DATA_REQUEST,
});
export const editDataSuccess = (data) => ({
  type: EDIT_DATA_SUCCESS,
  payload: data,
});
export const editDataFailure = (error) => ({
  type: EDIT_DATA_FAILURE,
  payload: error,
});
export const deleteDataRequest = () => ({
  type: DELETE_DATA_REQUEST,
});
export const deleteDataSuccess = (id) => ({
  type: DELETE_DATA_SUCCESS,
  payload: id,
});
export const deleteDataFailure = (error) => ({
  type: DELETE_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch(
        "https://653f48f29e8bd3be29e029cd.mockapi.io/fake"
      );
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const addData = (newData) => {
  return async (dispatch) => {
    dispatch(addDataRequest());
    try {
      const response = await fetch(
        "https://653f48f29e8bd3be29e029cd.mockapi.io/fake",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        }
      );
      const data = await response.json();
      dispatch(addDataSuccess(data));
    } catch (error) {
      dispatch(addDataFailure(error.message));
    }
  };
};

export const editData = (id, updatedData) => {
  return async (dispatch) => {
    dispatch(editDataRequest());
    try {
      const response = await fetch(
        `https://653f48f29e8bd3be29e029cd.mockapi.io/fake/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!response.ok) {
        // Log or handle the error response
        console.error("Edit Data Error:", response.status, response.statusText);
        dispatch(editDataFailure("Edit data request failed"));
        return;
      }

      const data = await response.json();
      dispatch(editDataSuccess(data));
    } catch (error) {
      console.error("Edit Data Error:", error.message);
      dispatch(editDataFailure(error.message));
    }
  };
};

export const deleteData = (id) => {
  return async (dispatch) => {
    dispatch(deleteDataRequest());
    try {
      const response = await fetch(
        `https://653f48f29e8bd3be29e029cd.mockapi.io/fake/${id}`,
        {
          method: "DELETE",
        }
      );
      dispatch(deleteDataSuccess(id));
    } catch (error) {
      dispatch(deleteDataFailure(error.message));
    }
  };
};
