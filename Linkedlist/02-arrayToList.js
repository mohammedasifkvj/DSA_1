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

// Convert array to linked list
arrayToLinkedList(arr) {
    if (!arr.length) {
      console.log("Arrray is empty")
      return;
    }
    this.head = new Node(arr[0]);
    let current = this.head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new Node(arr[i]);
      current = current.next;
    }
  }

  // Delete even numbers from the linked list
  deleteEvenNumbers() {
    // Handle the head separately if it's an even number
    while (this.head && this.head.value % 2 === 0) {
      this.head = this.head.next;
    }

    let current = this.head;

    // Traverse the list and remove even numbers
    while (current && current.next) {
      if (current.next.value % 2 === 0) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  // Remove duplicates from a sorted list
  removeDuplicatesFromSorted() {
    let current = this.head;
    while (current && current.next) {
      if (current.value === current.next.value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  // Remove duplicates from an unsorted list
  removeDuplicatesFromUnsorted() {
    if (!this.head) return null;
    let seen = new Set();
    let current = this.head;
    seen.add(current.value);
    while (current.next) {
      if (seen.has(current.next.value)) {
        current.next = current.next.next;
      } else {
        seen.add(current.next.value);
        current = current.next;
      }
    }
  }

  // Find the middle of the list
  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }

// Reverse the linked list
reverseList() {
    let prev = null;
    let current = this.head;
    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }

}