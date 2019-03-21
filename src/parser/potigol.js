const antlr4 = require("antlr4/index")
const potigolLexer = require("./potigolLexer.js")
const potigolParser = require("./potigolParser.js")
const JSListener = require("./JSListener.js").JSListener

var input = 'escreva "ta com tudo em cima"'
var chars = new antlr4.InputStream(input)
var lexer = new potigolLexer.potigolLexer(chars)
var tokens  = new antlr4.CommonTokenStream(lexer)
var parser = new potigolParser.potigolParser(tokens)
parser.buildParseTrees = true
var tree = parser.prog()

var extractor = new JSListener()
antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree)
