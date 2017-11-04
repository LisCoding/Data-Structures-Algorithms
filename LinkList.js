// SLL contructor
function SLL(){
	this.head = null;
}

//SLLNode contructor
function SLLNode(val){
	this.val = val;
	this.next = null;
}

//creating an instance of SLL  this our single Link List
var mySLL = new SLL();
console.log(mySLL)

//unshift : add value to the front of the link List :
SLL.prototype.unshift = function(val) {
	var newNode = new SLLNode(val);
	if(!this.head){
		this.head = newNode;
		return this;
	}
	newNode.next = this.head;
	this.head  = newNode;
	return this;
}
mySLL.unshift(5)
console.log("My current SLL-->", mySLL)

//insert: given a val and pos insert the val in the given position

SLL.prototype.insert = function (val, pos) {
	var newNode = new SLLNode(val);
	//if pos is 0
	if(pos === 0){
		newNode.next = this.head;
		this.head = newNode;
		return this;
	}
	if(!this.head && pos !== 0) {
		return false;
	}
	if(!this.head ){
		this.head = newNode;
	}

	var count = 1 ;
	var runner = this.head;
	console.log("my runner", runner)
	while ( count < pos ){
		if(runner.next === null){
			return false;
		}
		count += 1;
		runner = runner.next;
	}
	console.log("next",runner.next)
	newNode.next = runner.next;
	runner.next = newNode;
	return this;
}

// console.log(mySLL.insert(2, 100))
// console.log(mySLL.insert(5, 1))
// console.log(mySLL.insert(10, 1))
// console.log("My SLL after inserting-->", mySLL)

SLL.prototype.removeAt = function (pos) {
	if(!this.head) {
		return false;
	}
	if (pos === 0) {
		// let temp = this.head.next.val;
		this.head = this.head.next;
		return this;
	}
	// if(!this.head.next && pos === 0) {
	// 	let temp = this.head.next.val;
	// 	this.head = null;
	// 	return temp;
	// }
	var count = 1;
	var runner = this.head;
	while (runner) {
		if (count === pos) {
			let temp = runner.next.val;
			runner.next = runner.next.next;
			return this;
		}
		runner = runner.next;
		count++
	}
	return false;
}

console.log(mySLL.removeAt(4));
console.log(mySLL);
