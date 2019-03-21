const antlr4 = require('antlr4/index');
const potigolListener = require('./potigolListener.js').potigolListener
const env = require('./exits/env.js')

class JSListener extends potigolListener {
	constructor(){
		super();
	}

	exitProg(ctx){
		console.log('exiting')
	}

	exitEscreva(ctx){
		console.log('escreva')
	}
}

exports.JSListener = JSListener;
