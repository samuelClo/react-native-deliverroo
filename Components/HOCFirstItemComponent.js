import React from "react";
import { MARGIN_LEFT_BODY } from "../Screens/DeliverooHomePage";

export const HOCFirstItemComponent = (WrappedComponent) => (
  (props) => {
    const { index } = props;
    const firstItemPadding = {
      marginLeft: MARGIN_LEFT_BODY,
    };

    const newProps = {
      ...props,
      style: index !== 0 ? {} : firstItemPadding,
    };

    return (
      <WrappedComponent {...newProps} />
    );
  }
);


