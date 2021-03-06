import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

// components
import Editor from '../components/Editor';
import Navbar from '../components/Navbar';
import Output from '../components/Output';

// editor themes
import 'brace/mode/javascript';
import '../modules/ace/potigol';
import 'brace/theme/tomorrow_night';

class EditorFUll extends Component {
	render() {
		return (
      <div>
        <Navbar />
        <div className="wrapper">
  			   	<Editor />
					 	<Output />
        </div>
      </div>
		);
	}
}

export default EditorFUll;
