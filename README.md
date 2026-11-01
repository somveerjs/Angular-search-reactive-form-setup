# Angular Modern Smart Reactive Search Setup

A production-ready, highly optimized search implementation in Angular using **Reactive Forms** and **RxJS asynchronous data streams**. This repository showcases how to handle user inputs efficiently, preventing redundant API calls and unnecessary server load.

---
👤 **Author**
* **Somveer Singh** - [@somveerjs](https://github.com) | [LinkedIn Profile](https://linkedin.com/in/somveer-singh-ng)
---

## 🚀 Key Features
* **Standalone Architecture:** Built using Angular's modern standalone components setup (`standalone: true`).
* **Optimized Search Streams:** Uses `valueChanges` coupled with powerful RxJS operators to handle asynchronous user input.
* **Debouncing Implementation:** Prevents API spamming by waiting for a user to pause typing.
* **Duplicate Request Filter:** Avoids sending the same query twice if the text hasn't changed.

## ⚙️ RxJS Operators Used
* **`debounceTime(400)`**: Delays execution until the user stops typing for 400ms, protecting the backend from constant requests on every keystroke.
* **`distinctUntilChanged()`**: Ensures a request is only triggered if the current search term is different from the last emitted value.
* **`filter()`**: Discards empty spaces or strings that don't meet minimum length requirements.
* **`map()`**: Transforms the incoming stream data (e.g., trimming whitespace) before sending it to the service layer.

## 🛠️ Tech Stack & Requirements
* **Local Machine Environment:** Angular 17
* **Project Framework Version:** **Angular 22** (Scaffolded using `npx` to leverage the modern Angular CLI features)
* **Language:** TypeScript

## 🏃‍♂️ How to Run Locally

Follow these steps to clone and run the project on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/angular-reactive-search.git
cd angular-reactive-search
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the application
Since this project uses a newer global Angular CLI version managed via `npx`, execute the application using the following command:
```bash
npx ng serve -o
```
*The `-o` flag will automatically open the application in your default browser at `http://localhost:4200/`.*

---
📄 **License**
This project is open-source and available under the MIT License.
