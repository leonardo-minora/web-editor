import React, { Component } from 'react';

// assets
import Img_logo from '../../assets/imgs/logo.jpg';

// components
import Jerimum from '../Jerimum'
import Terminal from '../Terminal'

class Navbar extends Component {
	render() {
		return (
			<div className="output-side">
				<Jerimum />
				<Terminal />
			</div>
		);
	}
}

export default Navbar;
