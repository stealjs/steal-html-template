var weston = require("weston");

function getDocument() {
	if(typeof document !== "undefined")
		return document;
}

function append(load){
	var doc = getDocument();
	var container = doc.createElement("div");
	container.innerHTML = load.source;

	// Collect the elements
	var frag = doc.createDocumentFragment(), node = container.firstChild;
	while(node) {
		frag.appendChild(node);
		node = node.nextSibling;
	}

	// Save the first one as the template's value.
	var element = frag.firstChild;

	doc.body.appendChild(frag);

	return element;
}

exports.instantiate = function(load){
	var doc = getDocument();
	var element;
	if(doc) {
		element = append(load);
	}

	load.metadata.deps = [];
	load.metadata.format = "html";
	load.metadata.execute = function(){
		var renderer = weston(element);
		return renderer;
	};
};

exports.buildType = "html";
