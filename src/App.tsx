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
  return <></>;
}

export default App;
