import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  static contextType = LanguageContext; //= Button.contextType=LanguageContext

  render() {
    let text;
    if (this.context === "english") {
      text = "Submit";
    } else if (this.context === "hebrew") {
      text = "לשלוח";
    } else if (this.context === "russian") {
      text = "Отправить";
    }
    return <button className="ui button primary">{text}</button>;
  }
}
export default Button;
