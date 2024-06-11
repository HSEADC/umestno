// import './A_MainMenu.scss'
import React from "react";
import classNames from "classnames";

export default class A_menubutton_default extends React.Component {
  render() {
    const { text, current, url, type } = this.props;

    const classes = classNames({
      A_menubutton_default: true,
      current: current,
      [`${type}`]: true,
    });

    return (
      <a className={classes} href={url}>
        {text}
      </a>
    );
  }
}