import React from "react";
import useModal from "../../hooks/useModal";

export default ({ renderTrigger, renderContent }) => {
  const { isShowing, toggle } = useModal(false);

  return (
    <>
      {renderTrigger({ onClick: toggle })}
      {isShowing && renderContent()}
    </>
  );
};
