/**
 *
 * Events
 *
 * - Handle events in JSX
 * - Write inline and named handlers
 * - Pass arguments to handlers
 * - Pass handlers through props
 *
 * What is an Event?
 *
 * - An event is an action that happens in the user interface - something the user does that our app can respond to.
 *
 * - Every interaction the user makes is captured by React as an event.
 *
 * - Click, Submit, Input, Change, Mouse and Keyboard Interaction
 *
 * User Action => Event => Event Handler => UI Response
 *
 * User Action => Event => Event Handler => State changes => React re-renders => UI changes
 *
 * - React event names use camelCase
 *
 *
 *
 *
 * How React Handles Events
 *
 * function App () {
 *   const handleClick = () => {
 *     condole.log("Button Clicked");
 *   };
 *
 *   return (
 *     <button onClick={handleClick}>
 *       Click Me
 *     </button>
 *   );
 * }
 *
 * - onClick={handleClick}
 * - Pass the function reference - not a function call.
 *
 * Step:
 * - React event handlers are just function.
 * - Handlers are passed to JSX event props like onClick.
 * - React calls the function only when the event happens.
 * - Never call the function immediately - pass the reference.
 *
 * User clicks => React detects click => handleClick() runs
 *
 *
 *
 * Passing Arguments
 *
 * function App () {
 *   const handleDelete = (id: number) => {
 *     condole.log("Deleted", id);
 *   };
 *
 *   return (
 *     <button onClick={() => handleDelete(101)}>
 *       Delete
 *     </button>
 *   );
 * }
 *
 * Click => Arrow callback => handleDelete(101)
 *
 * - The arrow function creates a callback - it lets React call the handler later, at call time, with the required argument.
 *
 */

/**
 *
 * useState()
 *
 * Array Destructuring:
 * - const [first, second] = [2, 45];
 *
 * - const items = [85, 96];
 * - const [num1, num2] = items;
 *
 * - When a function returns array, we can also destructuring it.
 *
 * function getTwoThing () {
 *   return [99, 23];
 * }
 *
 * getTwoThing();
 * const [firstNum, secondNum] = getTwoThing();
 *
 * Now, understand how React engine works behind:
 *
 * function useState(initialValue) {
 *   let state = initialValue;
 *   function setState(newUpdate) {
 *     state = newUpdate;
 *   }
 *   return [state, setState];
 * }
 * const [counter, setCounter] = useState(0);
 *
 *
 *
 *
 */

import "./App.css";

function App() {
  // function handleClick() {
  //   alert("button clicked");
  // }

  const handleClick = () => {
    alert("button click");
  };

  const handleAddToCart = (id: number) => {
    // alert("Buying items", id);
    alert("Buying items " + id);
  };

  return (
    <>
      {/* Normal JavaScript - DOM Manipulation in HTML */}
      {/* <button onclick="handleClick()">Click Me</button> */}

      {/* In react means JSX, {} = Active JavaScript..do not add () when call function handleClick inside curly braces {}.

      If add handleClick() => it call immediately and then click on button, does not react or not show alert or nothing happen.
      */}

      {/* <button onClick={handleClick()}>Click Me2</button> */}

      {/* Must call function - Dynamic JavaScript 
      Here, handleClick => function reference
      
      */}
      <button onClick={handleClick}>Click Me3</button>

      {/* Inline Arrow Function 
      Here, () => alert("Button Click 04") => Event Handler
      
      */}
      <button onClick={() => alert("Button Click 04")}>Click me4</button>

      <button
        onClick={() => {
          alert("Button click 05");
        }}
      >
        Click Me5
      </button>

      {/* Passing Arguments or data to function for dynamically fetch something. */}

      {/* Why do we use an arrow function?
      Here, see directly call the function with argument and open or render or execute that function handleAddToCart() immediately when browser start and refresh  */}
      {/* <button onClick={handleAddToCart(65)}>Buy This</button> */}

      {/* Don't call it now. Call it when the button is clicked.
      But we want when click then call this function.

      Here, sees it is arrow function and then inside, it call that function when user click. 
      */}
      <button onClick={() => handleAddToCart(65)}>Buy this</button>
    </>
  );
}

export default App;
