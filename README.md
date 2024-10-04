# Simple Book Shop Website

This project is a responsive multi-page book shop website built with **React.js** and **React Router**. The website allows users to browse books, view book details, and explore various sections like FAQ, Blog, and About. The site features dynamic routing, a functional navigation system, and a visually modern UI/UX experience.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Folder Structure](#folder-structure)
- [Key Components](#key-components)
- [FAQ Page](#faq-page)
- [Book Data](#book-data)
- [Customizations](#customizations)

---

## Features

- **Responsive Navbar**: A dynamic navigation bar that includes menu items like Home, About, Blog, FAQ, Buy Book, and Sign In. In mobile view, the navbar collapses into a hamburger menu.
- **Responsive Slider**: A carousel banner that auto-slides and adjusts based on screen size.
- **Book List Section**: Displays book cards with details like name, author, rating, and more.
- **Book Details Page**: Dynamic routing to view individual book details like author, category, review, rating, and more. Users can also add books to the cart or wishlist.
- **Modern UI**: The layout adapts to mobile, tablet, and desktop views, ensuring a seamless experience across devices.
- **404 Page**: A custom error page that appears for any invalid URLs.
- **FAQ Page**: Frequently asked questions with answers rendered dynamically using an accordion format.

---

## Technologies Used

- **React.js**: For building the interactive UI.
- **React Router**: For managing navigation and dynamic routing.
- **React Icons**: For adding icons to buttons and other UI components.
- **CSS/SCSS**: Custom styling for a modern and responsive layout.
- **Vibrant.js**: Extract color palette from book images.
- **SweetAlert2**: For adding alerts like "added to cart/wishlist" notifications.
- **Google Drive**: For hosting downloadable books.

---

## Project Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/book-shop-website.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd book-shop-website
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Run the project**:
   ```bash
   npm start
   ```

5. **Open the browser**: 
   Visit `http://localhost:3000/` in your browser to see the application running.

---

## Folder Structure

```
├── src
│   ├── assets               # Static assets like images and icons
│   ├── components           # Reusable components like Navbar, BookCard, etc.
│   ├── pages                # Pages like Home, BookDetails, FAQ, Blog, About
│   ├── data                 # JSON file with book data
│   ├── App.js               # Main component with routing
│   ├── index.js             # Entry point for the application
│   └── styles               # Global CSS and component-specific styles
```

---

## Key Components

### 1. **Navbar**
- A responsive navigation bar.
- In mobile view, it collapses into a hamburger menu and animates open/close with a cross icon.
- Includes the website logo, navigation links, and action buttons (Buy Book, Sign In).
  
### 2. **Slider/Banner**
- A carousel with auto-slide functionality.
- Displays up to three banners, one visible at a time in mobile view.
- Contains a call-to-action button to buy books.

### 3. **Book List Section**
- Book cards are displayed in a responsive grid layout.
- Each card contains an image, book title, author, category, rating, and tags.
- A button to view book details takes users to the dynamic Book Details page.

### 4. **Book Details Page**
- Detailed information about each book is displayed.
- Includes buttons for adding books to wishlist or cart, each triggering a toast notification.
  
### 5. **FAQ Page**
- Uses an accordion to show and hide answers to frequently asked questions.
- Data is generated dynamically using an array of FAQs.

---

## FAQ Page

The FAQ page answers common questions about React.js and how it works. Questions include:

1. What is React.js and explain the concept of "components" in React?
2. What is JSX in React, and how does it work?
3. What is the Virtual DOM, and how does React use it to optimize performance?
4. Explain the concept of "props" in React and how they are used.
5. What is "state" in React, and how does it differ from props?
6. Explain the `useState` hook and provide an example of how it is used.
7. What is the purpose of the `useEffect` hook in React, and when would you use it?

---

## Book Data

Books are stored in a JSON format. An example book object looks like this:

```json
{
  "bookId": 9,
  "bookName": "The Alchemist",
  "author": "Paulo Coelho",
  "image": "https://images.example.com/alchemist.jpg",
  "review": "A timeless tale about following one's dreams and listening to the heart.",
  "totalPages": 208,
  "rating": 4.3,
  "category": "Fiction",
  "tags": ["Spiritual", "Adventure", "Philosophical"],
  "publisher": "HarperOne",
  "yearOfPublishing": 1988
}
```

---

## Customizations

### Email Subscription:
- The footer includes an email subscription option for visitors.

### Download Books:
- Users can download books by clicking the **Download** button, which fetches files hosted on Google Drive.

### Review Section:
- A review section allows users to add and view reviews for each book on the Book Details page.

---

Feel free to contribute or suggest features by opening an issue or a pull request.

---

### License

This project is licensed under the MIT License.

---

By using this structure, your README provides clear instructions and documentation for anyone who wants to use or contribute to the project.
