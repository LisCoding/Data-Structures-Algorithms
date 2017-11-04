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

BST.prototype.add = function(val){
	if(!this.root){
		this.root = new BTNode(val)
		return this;
	}
	var runner = this.root;
	while(runner){
		if(val < runner.val){
			if(!runner.left){
				runner.left = new BTNode(val)
				return this;
			}
			runner = runner.left
		} else {

			if(!runner.right) {
				runner.right = new BTNode(val)
				return this;
			}
				runner = runner.right
		}
	}
}

myBST = new BST();
// console.log(myBST)
myBST.add(49).add(46).add(65).add(47).add(35).add(100).add(200).add(300)
myBST.add(5)
console.log(myBST)

BST.prototype.height = function (node = this.root)
	if(!this.root){
		return 0;
	}

	var height = 1;
	// if(!node){
	// 	node = this.root;
	// }

	if(!node.left && !node.right){
		return 1 ;
	}

	var leftHeight;
	var rightHeight;

	if (node.left){
		leftHeight = this.height(node.left) + 1;
	}

	if (node.right){
		rightHeight =  this.height(node.right) + 1;
	}

	if( leftHeight > rightHeight){
		return leftHeight;

	} else {
		return rightHeight;
	}



}


console.log(myBST.height())
