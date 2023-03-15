import { createAction } from "@reduxjs/toolkit";

const varKeys = [75, 50, 25, 10, 5];

const updateColor = createAction("UPDATE_COLOR", function prepare(key) {
  //any time theme color is updated, so are variants so pass those in
});

module.exports = { updateColor };
