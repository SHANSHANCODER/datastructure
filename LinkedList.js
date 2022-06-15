//set up new node class first
//linkedList methods:
//push
//pop
//shift
//unshift
//get
//set
//insert
//remove
//reverse 

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    //create a new node with extend the node class
    //if this is a empty list, then set the tail and head to the new node
    //else find the tail, set the tail.next to the newly created node
    //set this.tail to the new node
    //increase the link length by 1
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    //if there is no node, then return undefined
    //else, find the tail and the node pointing to tail(the second last node)
    // set the second to last as tail
    //decrease the length by one
    //** important: return the removed node not only node value
    if (!this.head) {
      return undefined;
    } else {
      var current = this.head;
      let secondToLast = current;

      while (current.next) {
        secondToLast = current;
        current = current.next;
      }
      this.tail = secondToLast;
      this.tail.next = null;
      this.length--;
      //edge case of 1 node in the list
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }
  shift() {
    // there is no node, return undefined
    if (!this.head) {
      return undefined;
    } else {
      let removed = this.head;
      let temp = this.head.next;
      this.head = temp;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
    return removed;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    let current = this.head;
    let counter = 0;
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }

  set(index, val) {
    //return true or false
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === 0) {
      this.length++;
      let result = this.unshift(val);
      return true;
    } else if (index === this.length - 1) {
      this.length++;
      let result = this.push(val);
      return true;
    } else {
      let newNode = new Node(val);
      let prevNode = this.get(index - 1);
      let current = this.get(index);
      prevNode.next = newNode;
      newNode.next = current;
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null
    } else if (index === 0) {
      this.length--;
      return this.shift();
    } else if (index === this.length - 1) {
      this.length--;
      return this.pop();
  
    } else {
      let prevNode = this.get(index - 1);
    //not using get again to save time 
      let removed =prevNode.next
      let nextNode = removed.next
      prevNode.next = nextNode;
      this.length--;
      return removed
    }
  }
  reverse() {
  //swap the head and tail
  //start from the new tail and build up the new list 
  //looping over the original list ( from index =0 ) 
  //set the current node point to the new list last node 
  let originalTail= this.tail;
  this.tail=this.head;
  let current=this.tail;
  this.head=originalTail;
  let prev=null
  this.tail.next=prev

  for (var i=0;i<this.length;i++){
      let next = current.next
   current.next=prev
   prev=current
   current=next
  }

  }
}
