import React, { useState } from "react";
import Modal from "../Modal";
import useModal from "../../hooks/useModal";

export default ({ children, ...rest }) => {
  const { isShowing, toggle } = useModal(false);

  const onClick = () => toggle();

  return (
    <>
      {<Modal hide={toggle} isShowing={isShowing} {...rest} />}
      {React.cloneElement(children, { onClick })}
    </>
  );
};
