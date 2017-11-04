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


// //push method: this add  a node to list instance
// SLL.prototype.push = function(val) {
// 	var newNode = new SLLNode(val);
// 	if(!this.head) {
// 		this.head = newNode;
// 		return this;
// 	}
// 	var runner = this.head;
// 	while(runner.next){
// 		runner = runner.next
// 	}
// 	runner.next = newNode
// 	return this;
// }

// //head is null calling push
// console.log(mySLL.push(4))
// //now we have one node in our list! now we add 8;
// console.log(mySLL.push(8))
// console.log(mySLL.push(10))

// //pop method: remove a node from the end of the list:

// SLL.prototype.pop = function () {
// 	if(!this.head) {
// 		return this;
// 	}
// 	if(!this.head.next) {
// 		this.head = null;
// 		return this;
// 	}
// 	var runner = this.head;
// 	//thej version:
// 	// while(runner.next.next) {
// 	// 	runner = runner.next
// 	// }
// 	// runner.next = null;
// 	// return this;

// 	//Havisha version
// 	while(runner.next){
// 		if(!runner.next.next){
// 			runner.next = null;
// 			return this;
// 		}
// 		runner = runner.next;
// 	}
// }
// //popping two values fron the back
// mySLL.pop().pop()
// // mySLL.pop()

// console.log(mySLL)

// //shift  remove a node from the front

// SLL.prototype.shift = function (){
// 		if(!this.head) {
// 		return this;
// 	}
// 	this.head = this.head.next;
// 	return this;

// }

// console.log(mySLL)
// console.log(mySLL.push(10))
// console.log(mySLL.push(8))
// console.log(mySLL.push(9))
// console.log(mySLL.push(2))
// console.log(mySLL)
// mySLL.shift()
// mySLL.shift()
// // console.log(mySLL)
//unshift : add value to the front of the link List :
mySLL.prototype.unshift = function (val) {
	var newNode = new SLLNode(val);
	if(!this.head){
		this.head = newNode;
		return this;
	}
	newNode.next = this.head;
	this.head  = newNode;
	return this;
}
