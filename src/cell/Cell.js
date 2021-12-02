import React from "react";

export const GUTTER_SIZE = 5;
export const COLUMN_WIDTH = 100;
export const ROW_HEIGHT = 35;

export const Cell = ({ columnIndex, rowIndex, style }) => (
  <div
    className={"GridItem"}
    style={{
      ...style,
      left: style.left + GUTTER_SIZE,
      top: style.top + GUTTER_SIZE,
      width: style.width - GUTTER_SIZE,
      height: style.height - GUTTER_SIZE
    }}
  >
    r{rowIndex}, c{columnIndex}
  </div>
);