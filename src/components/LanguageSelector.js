import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a language:
        <i className="flag uk" onClick={() => this.context.languageChange("english")}></i>
        <i className="flag ru" onClick={() => this.context.languageChange("russian")}></i>
        <i className="flag il" onClick={() => this.context.languageChange("hebrew")}></i>
      </div>
    );
  }
}
export default LanguageSelector;
