// In JavaScript, an ES module can only have one "default" export, but it can have multiple "named" exports.
// With default, it is possible to export everything as an Object.

// In JavaScript and React, you cannot declare a variable and export default in the same line.
// Attempting to write export default const MyComponent = () => {} will throw a syntax error.

export const MyComponent = () => {};
// export default const MyComponent = () => {};

// To use a default export with an arrow function component, you must choose one of the two approaches below:

// i. Declare First, Export Separately (Recommended)
// This is the most common pattern. You declare your component as a named variable first, then export it at the bottom of the file.

// 1. Declare the arrow function components
const WelcomeMessage = () => {
  return <h1>Hello, Dip</h1>;
};

// 2. Export it as default
// export default WelcomeMessage;

// Combining Default and Named Exports
// If you want one component to be the "main" component (using a default export) and the others to be secondary, you can combine them at the bottom like this:
const MainApp = () => {
  return <main>Main Content</main>;
};

const Sidebar = () => {
  return <aside>Sidebar Content</aside>;
};

export const Card = () => {};

// Export one default and one named at the bottom
export { Sidebar };
// export default MainApp;

// Import this combination
// import MainApp, { Sidebar } from "./";

// ii. Export Inline as an Anonymous Function
// You can export the arrow function directly without assigning it to a variable name first.

// Export an anonymous arrow function directly
export default () => {
  return <h1>Hello, Dip</h1>;
};

// Warning: While this is valid syntax, it is generally discouraged. Anonymous exports make debugging harder because the component will show up as Unknown or Anonymous in the React DevTools.

// Alternative: Use Named Exports
// If you prefer to export everything in a single line at the top of your function, many modern React styling guides recommend switching from a default export to a named export:

// Explicitly named export in a single line
export const WelcomeMessage1 = () => {
  return <h1>Hello, Dip</h1>;
};

const Header = () => {
  return <header>Header Content</header>;
};

const Footer = () => {
  return <footer>Footer Content</footer>;
};

// 2. Export them together at the bottom
// export { Footer, Header };
// export default WelcomeMessage1;

// When you use a named export, you must import it using curly braces:
// import WelcomeMessage1, { Footer, Header } from "./FilePath";

// Declare components using regular function
// Regular functions use the "function" keyword
function MyComponent1() {}

function MyComponent2() {}

export function MyComponent8() {}

// export default function MyComponent() {}

// function MyComponent() {}
// export default MyComponent;

export { MyComponent1, MyComponent2 };

// Declare components using function expression
// Function expressions involve creating a function and assigning it to a variable ("const" or "let"). Anonymous functions typical here.
const MyComponent3 = function () {};

const MyComponent4 = function () {};

export const MyComponent7 = function () {};

export { MyComponent3, MyComponent4 };

const MyComponent5 = function () {};
const MyComponent6 = function () {};

// export default MyComponent5;

// Direct default export of an anonymous function expression
// export default function() {}

// While valid, your React DevTools will show this component as <Anonymous>, which can make debugging harder.

// Export Everything as an Object
// export default { MyComponent5, MyComponent6 };

// Import the default object
// import Components from "./";

// Use them with dot notation
/* function App() {
  return (
    <div>
      <Components.MyComponent5 />
      <Components.MyComponent6 />
    </div>
  );
} */

// It is generally discouraged in modern React development because it prevents tools like Webpack and Vite from performing "tree-shaking" (removing unused code).
