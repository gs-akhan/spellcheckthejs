var speller = require("speller"),
	uglify  = require("uglify-js"),
	fs      = require("fs");

// train the speller
var setup = function() {
	speller.train(fs.readFileSync(process.argv[3] || (__dirname + "/big.txt"), "ascii"));
};

// provide suggestions for misspellings
var suggest = function(text) {
	var words = text.toLowerCase().match(/(\w+)/g) || [];
	var suggestions = {};
	
	for (var w in words) {
		var word = words[w];
		var checked = speller.correct(word);
		
		if (word !== checked)
			suggestions[word] = checked;
	}
	
	return suggestions;
};

// fix an arbitrary text
var fix = function(text) {
	var suggestions = suggest(text);
	var fixed = text;
	
	for (var s in suggestions)
		fixed = fixed.replace(s, suggestions[s]);
	
	return fixed;
};

// fix an ast tree node
var fix_ast_node = function(ast_node) {
	if (ast_node && ast_node[0] === "string" && ast_node[1])
		ast_node[1] = fix(ast_node[1]);
};

// simple depth-first tree visitor pattern
var visit_ast = function(tree, visitor) {
	if (Array.isArray(tree))
		for (var t in tree) {
			visitor(tree[t]);
			visit_ast(tree[t], visitor);
		}
};


setup();

var code = fs.readFileSync(process.argv[2], "ascii");
var ast  = uglify.parser.parse(code);

visit_ast(ast, fix_ast_node);

console.log(uglify.uglify.gen_code(ast, { beautify: true }));