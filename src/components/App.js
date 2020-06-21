import React from "react";
import UserCreate from "./UserCreate";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  languageChange = (newLanguage) => {
    this.setState({ language: newLanguage });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag uk" onClick={() => this.languageChange("english")}></i>
          <i className="flag ru" onClick={() => this.languageChange("russian")}></i>
          <i className="flag il" onClick={() => this.languageChange("hebrew")}></i>
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
