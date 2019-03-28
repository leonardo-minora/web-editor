import React, { Component } from "react";
import { Terminal as XTerm } from "xterm";

class Terminal extends Component {
  constructor(props) {
    super(props);
    // this.term = new XTerm({ cursorBlink: true });
    // this.term.prompt = function() {
    //   term.write("\r\n\x1B[1;3;31m$\x1B[0m ");
    // };
    // this.term.on("key", (key, event) => {
    //   var printable =
    //     !event.altKey && !event.altGraphKey && !event.ctrlKey && !event.metaKey;

    //   if (event.keyCode == 13) {
    //     term.prompt();
    //   } else if (event.keyCode == 8) {
    //     // Do not delete the prompt
    //     if (term.x > 2) {
    //       term.write("\b \b");
    //     }
    //   } else if (printable) {
    //     term.write(key);
    //   }
    // });
  }

  componentDidMount() {
    // this.term.open(document.getElementById("terminal"));
    // this.term.writeln("Welcome to xterm.js example");
    // this.term.prompt();
  }

  render() {
    return <div id="terminal" />;
  }
}

export default Terminal;
