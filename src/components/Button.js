import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  renderSubmit = (language) => {
    console.log(language);
    if (language === "english") {
      return "Submit";
    } else if (language === "hebrew") {
      return "לשלוח";
    } else if (language === "russian") {
      return "Отправить";
    }
  };
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({language}) => this.renderSubmit(language)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
