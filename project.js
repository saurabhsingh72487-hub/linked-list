class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.list = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.list) {
      this.list = newNode;
      return;
    }
    let current = this.list;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    this.list = new Node(value, this.list);
  }

  size() {
    let count = 0;
    let current = this.list;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.list ? this.list.value : undefined;
  }

  tail() {
    if (!this.list) return undefined;
    let current = this.list;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    let current = this.list;
    let i = 0;
    while (current) {
      if (i === index) return current.value;
      current = current.nextNode;
      i++;
    }
    return undefined;
  }

  pop() {
    if (!this.list) return undefined;
    const value = this.list.value;
    this.list = this.list.nextNode;
    return value;
  }

  contains(value) {
    let current = this.list;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.list;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return -1;
  }

  toString() {
    if (!this.list) return "";
    let result = "";
    let current = this.list;
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) throw new RangeError();

    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }
      return;
    }

    let current = this.list;
    let i = 0;
    while (i < index - 1) {
      current = current.nextNode;
      i++;
    }

    let next = current.nextNode;

    values.forEach(value => {
      const newNode = new Node(value);
      current.nextNode = newNode;
      current = newNode;
    });

    current.nextNode = next;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) throw new RangeError();

    if (index === 0) {
      this.list = this.list.nextNode;
      return;
    }

    let current = this.list;
    let i = 0;
    while (i < index - 1) {
      current = current.nextNode;
      i++;
    }

    current.nextNode = current.nextNode.nextNode;
  }
}