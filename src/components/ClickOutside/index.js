import React, { useEffect } from "react";
import PropTypes from "prop-types";

const ClickOutside = ({ onClickOutside, children }) => {
  let isClickedInside = false;

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = e => {
    if (isClickedInside) {
      isClickedInside = false;
      return;
    }

    onClickOutside(e);
  };

  const handleClick = () => {
    isClickedInside = true;
  };

  return React.cloneElement(React.Children.only(children), {
    onClickCapture: handleClick
  });
};

ClickOutside.propTypes = {
  children: PropTypes.element.isRequired,
  onClickOutside: PropTypes.func.isRequired
};

export default ClickOutside;
