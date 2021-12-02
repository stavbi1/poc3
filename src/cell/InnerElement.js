import React, { forwardRef } from "react";
import { GUTTER_SIZE } from "./Cell";

export const innerElementType = forwardRef(({ style, ...rest }, ref) => (
    <div
      ref={ref}
      style={{
        ...style,
        paddingLeft: GUTTER_SIZE,
        paddingTop: GUTTER_SIZE
      }}
      {...rest}
    />
  ));