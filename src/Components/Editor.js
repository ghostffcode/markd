import React, { Component } from "react";
import marked from "marked";
import brace from 'brace';

import 'brace/mode/markdown';
import 'brace/theme/monokai';

export default class Editor extends Component {

  shouldComponentUpdate () {
    return false;
  }

  componentDidMount() {
    this.editor = brace.edit("editor");
    this.editor.setTheme("ace/theme/monokai");
    this.editor.session.setMode("ace/mode/markdown");
    this.editor.setFontSize("17px");
    this.editor.getSession().setUseWrapMode(true);
    this.editor.resize();
    this.editor.addEventListener('change', ()=> {
      const value = this.editor.getValue();
      const preview = document.querySelector("#preview");
      preview.innerHTML = marked(value);
    });
    this.editor.resize();
  }

  render() {
    return React.DOM.div({
        id: "editor",
        style: {
          height: "78vh"
        }
    });
  }
};
