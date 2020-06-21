import React from "react";
import UserCreate from "./UserCreate";

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
          <i className="flag uk" onClick={()=>this.languageChange("english")}></i>
          <i className="flag ru" onClick={()=>this.languageChange("russian")}></i>
          <i className="flag il" onClick={()=>this.languageChange("hebrew")}></i>
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
