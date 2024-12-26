class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size
    }
    // Adding nodes in the starting position (TC- O(1))
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // Adding nodes in the end  position  (TC- O(n))
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
// insert a node at specified index
    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Enter a valid index to add new Node")
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node
            this.size++
        }
    }
// Remove a node at given index
    removeFrom(index) {
        if (index < 0 || index > this.size) {
            console.log("There is no such index to remove Node")
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

// Remove a node of  value
removeValue(value){
    if(this.isEmpty()){
        console.log("Linked list is empty, can't delete");
        return null
    }
    if(this.head.value===value){
        this.head=this.head.next
        this.size--
        console.log(`Node with head value ${value} is deleted`);
        return value
    }else{
        let prev= this.head
        while (prev.next && prev.next.value !== value) {
            prev=prev.next
        }
        if(prev.next){
            const removedNode= prev.next
            prev.next=removedNode.next
            this.size--
            console.log(`Node with value ${value} is deleted`);
            return value
        }
        console.log(`Node with value ${value} is not found`);
        return null
    }
}

// search a value in Node
search(value){
    if(list.isEmpty()){
        console.log("Linked list is empty, can't search");
        return null
    }
    // if(this.head.value===value){
    //     console.log(`Node with value ${value} is found and it is head`);
    //     return value
    // }
    let i=0
    let curr=this.head
    while (curr) {
        if(curr.value=== value){
            console.log(`value is found,at index ${i}`);
            return i
        }
        curr= curr.next
        i++
    }
    console.log(`value ${value} not found in Linked list`);
    return null
}

//Reverse the list
reverse(){
    
}


// Function to proint the linked list
    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head
            let listValues = ""
            while (curr) {
                listValues += ` ${curr.value} ->`
                curr = curr.next
            }
            console.log(listValues);

        }
    }
}

const list = new LinkedList()

//console.log("list is empty", list.isEmpty());
//console.log("List size", list.getSize());
//list.print()

list.insert(10,0)
list.print()

list.insert(50,1)
list.print()

list.insert(30,2)
list.print()

list.insert(60,2) 
list.print()

list.insert(40,2)
list.print()

console.log(list.removeValue(50));
list.print()


console.log(list.search(40));
list.print()

console.log(list.search(30));
list.print()
