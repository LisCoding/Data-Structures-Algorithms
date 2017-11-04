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
myBST.add(49).add(46).add(43)
// myBST.add(4).add(10).add(2).add(7)
// myBST.add(4).add(2).add(1)
// myBST.add(5).add(1).add(3)
console.log(myBST)

BST.prototype.remove = function (val) {
	if(!this.root) {
		return null;
	}

	var runner1 = this.root;
	//if the node we enat to delete is the root
	if(runner1.val === val){
		if(runner1.right){
			var runner2 = runner1.right;
			if(runner2.left){
				while(runner2.left.left){
					runner2 = runner2.left
				}
				runner2.left.left = runner1.left
				runner2.left.right = runner1.right
				this.root = runner2.left;
				console.log("this is new root", runner2.left)
				runner2.left = null;


				return this;
			} else {
				runner2.left = runner1.left
				this.root = runner2
				return this;
			}
		//if we dont have a right then we set to left node the node
		} else {
			this.root = runner1.left
		}

	//if the value does not equal the root  then we do this
	} else {
		while(runner1){
			if(val < runner1.val){
				if(runner1.left.val == val){
					if(runner1.left.right) {
						runner2 = runner1.left.right;
						if(runner2.left) {
							while(runner2.left.left){
								runner2 = runner2.left
							}
							runner1.left = runner2.left
							return this;
						} else {
							runner1.left = runner2
							return this;
						}
					}
				}
			}
		}
	}



}

//testing remove
myBST.remove(46)
// myBST.remove(7).remove(10)
console.log("#######")
console.log(myBST)
