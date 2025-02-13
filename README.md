# Conference Ticket Generator

A **React-based** web application that allows users to generate a conference ticket with their **full name, email, and avatar**. The form includes **validation, state persistence, accessibility features, and responsive design**.

## 🚀 Features

- ✅ **Form Validation:**  
  - All fields are required.  
  - Email must be in a valid format.  
  - Avatar must be a valid image URL.  
  - Displays **error messages** when validation fails.  

- ✅ **State Persistence:**  
  - User inputs are saved using **localStorage**, so data remains intact even after a page refresh.

- ✅ **Ticket Generation:**  
  - Displays **Full Name, Email, and Avatar** only when the form passes validation.  

- ✅ **Accessibility:**  
  - Fully keyboard-navigable.  
  - Error messages are screen-reader friendly.  

- ✅ **Responsive Design:**  
  - Fully optimized for **mobile, tablet, and desktop**.  

## 📷 **Demo Screenshot**
![Screenshot](https://res.cloudinary.com/demo/image/upload/sample.jpg)

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/ojijoebrain/conference-ticket-generator.git
cd conference-ticket-generator

# Install dependencies
npm install

# Start the development server
npm start

## Tech Stack
React.js – Frontend framework
CSS – Styling
Toastify – Notifications (react-toastify)
LocalStorage – State Persistence

🎯 How to Use
1️⃣ Fill in your details – Name, Email, and Avatar URL.
2️⃣ Click "Generate Ticket" – If all validations pass, a ticket will be generated.
3️⃣ View Your Ticket – Your name, email, and avatar appear on the ticket.