//Binary trees
//the tree constructor
function BST(){
	this.root = null;
}

//Node constructor
function BTNode(value) {
	this.val = value;
	this.left = null;
	this.right = null;
}

var myBST = new BST();
console.log(myBST)

//add new node to the Binary search tree:
BST.prototype.add = function (val ) {
	if(!this.root){
		this.root = new BTNode(val);
		return this;
	}
	var runner = this.root;
	while(runner){
		if(runner.val > val) {
			if(!runner.left){
				runner.left = new BTNode(val);
				return this;
			}
			runner = runner.left;
		}
		else {
			if(!runner.right){
				runner.right = new BTNode(val);
				return this;
			}
			runner = runner.right;
		}
	}
}
//testing
myBST.add(5).add(10).add(4).add(10);
console.log("My BSt", myBST)
