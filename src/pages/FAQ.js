import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Questions and Answers Array
  const faqData = [
    {
      question: '1. What is React.js and explain the concept of "components" in React?',
      answer:
        'React.js is a JavaScript library for building user interfaces. "Components" are reusable, self-contained building blocks in React that define how a UI should look and behave. Each component can manage its own state and render UI based on that state.',
    },
    {
      question: '2. What is JSX in React, and how does it work?',
      answer:
        'JSX is a syntax extension for JavaScript that looks similar to HTML. In React, JSX is used to describe what the UI should look like. It gets transpiled into regular JavaScript objects that React can understand and render into the DOM.',
    },
    {
      question: '3. What is the Virtual DOM, and how does React use it to optimize performance?',
      answer:
        'The Virtual DOM is a lightweight copy of the actual DOM. React keeps this in memory to track changes in components. When updates occur, React compares the new Virtual DOM with the old one and efficiently updates only the necessary parts of the real DOM, improving performance.',
    },
    {
      question: '4. Explain the concept of "props" in React and how they are used.',
      answer:
        '"Props" are arguments passed into React components. They allow you to pass data from parent components to child components. Props are read-only and cannot be modified by the child component.',
    },
    {
      question: '5. What is "state" in React, and how does it differ from props?',
      answer:
        'State is an internal object managed by a component that stores dynamic values affecting the component\'s behavior or appearance. Unlike props, which are passed from a parent component, state is managed within the component and can be updated by the component itself using hooks like `useState`.',
    },
    {
      question: '6. Explain the useState hook and provide an example of how it is used.',
      answer:
        '`useState` is a React hook that allows functional components to manage local state. It returns an array with two values: the current state and a function to update it. Example: `const [count, setCount] = useState(0);` Here, `count` is the state variable, and `setCount` is used to update its value.',
    },
    {
      question: '7. What is the purpose of the useEffect hook in React, and when would you use it?',
      answer:
        '`useEffect` is a React hook used for handling side effects in functional components, such as data fetching, subscriptions, or DOM manipulation. It runs after the component renders and can optionally clean up after itself by returning a function.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-page-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-title" onClick={() => toggleAccordion(index)}>
            <h2>{faq.question}</h2>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
     
    </div>
  );
};

export default FAQ;
