# Linked List Implementation (JavaScript)

This project contains a basic implementation of a **Singly Linked List** in JavaScript.

## 🚀 Features

* Append nodes to the end
* Prepend nodes to the start
* Get size of the list
* Access head and tail
* Get value at specific index
* Remove head node (pop)
* Check if value exists
* Find index of value
* Convert list to string

### ⭐ Extra Features

* Insert at specific index
* Remove at specific index

---

## 📂 Project Structure

```
.
├── LinkedList.js
├── main.js
└── README.md
```

---

## 🧪 Usage

```js
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
```

---

## ✅ Output

```
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```

---

## 🛠 Methods

* `append(value)`
* `prepend(value)`
* `size()`
* `head()`
* `tail()`
* `at(index)`
* `pop()`
* `contains(value)`
* `findIndex(value)`
* `toString()`
* `insertAt(index, ...values)`
* `removeAt(index)`

---

## ⚠️ Notes

* `pop()` removes the **head node**
* Index starts from `0`
* Out of bounds operations throw errors (extra methods)

---

## 👨‍💻 Author

Saurabh Singh
