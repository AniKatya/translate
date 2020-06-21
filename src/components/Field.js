import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    let text;
    if (this.context === "english") {
      text = "Name";
    } else if (this.context === "hebrew") {
      text = "שם";
    } else if (this.context === "russian") {
      text = "Имя";
    }
    return (
      <div className="ui field">
        <label>{text}</label>
        <input></input>
      </div>
    );
  }
}

export default Field;
