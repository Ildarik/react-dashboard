import React from "react";
import PropTypes from "prop-types";

export default class ClickOutside extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onClickOutside: PropTypes.func.isRequired
  };

  isClickedInside = false;

  componentDidMount() {
    document.addEventListener("click", this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick);
  }

  handleDocumentClick = e => {
    if (this.isClickedInside) {
      this.isClickedInside = false;
      return;
    }

    this.props.onClickOutside(e);
  };

  handleClick = () => {
    this.isClickedInside = true;
  };

  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      onClickCapture: this.handleClick
    });
  }
}
