import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  value: [
    {
      comment: "Coco looks nice. Excellent work amigo!",
      username: "Saitama",
    },
    {
      comment: "Coco is the bomb!",
      username: "Kiko",
    },
  ],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    //action to add a comment
    addComment: (state, action) => {
      state.value = [...state.value, action.payload];
    },

    //special reducer for hydrating state (from server)
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.comments,
        };
      },
    },
  },
});
