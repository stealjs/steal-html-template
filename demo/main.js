var DefineMap = require("can-define/map/map");
var view = require("./template.html");

var ViewModel = DefineMap.extend({
	name: "string"
});

var vm = new ViewModel({name: "Wilbur"});
var frag = view(vm);

document.body.appendChild(frag);
