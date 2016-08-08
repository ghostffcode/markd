import React, { Component } from 'react';

import Editor from "./Components/Editor";

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Markdown Previewer</h2>
        </div>
        <div className="cont col-md-12">
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-body">
                <Editor />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div id="preview"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
