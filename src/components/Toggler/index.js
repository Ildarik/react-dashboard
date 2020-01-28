import React, { useState } from "react";
import Modal from "../Modal";

export default ({ children, ...rest }) => {
  const [isShowing, setIsShowing] = useState(false);

  const show = () => setIsShowing(true);
  const hide = () => setIsShowing(false);

  return (
    <>
      {isShowing && <Modal hide={hide} {...rest} />}
      {React.cloneElement(children, { show })}
    </>
  );
};
