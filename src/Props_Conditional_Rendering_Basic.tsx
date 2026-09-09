/**
 *
 * What is React?
 * - A JavaScript library for building modern user interface (UI).
 * - It is declarative, efficient, flexible, and component-based means you build complex UIs by composing small, isolated, reusable pieces of code.
 *
 * - Reusable -> Write once, drop everywhere.
 * - Isolated -> bugs stay local.
 * - Composable -> nest as deep as needed.
 *
 *
 * What is Component-Based Architecture?
 * - React breaks web interfaces down into small, reusable building blocks called components.
 * - A component is a self-contained piece of UI that manages its own structure, style, and behavior - making complex applications much easier to reason about, test, and scale.
 * - Component can be nested, composed, and reused across pages.
 *
 *
 */

/**
 *
 * React Component
 *
 * A reusable function or class that contains logic and state. Its are the building block of UI.
 *
 * A Component is a TypeScript Function that returns JSX.
 * - It's a JavaScript function that returns React elements.
 *
 *
 * JSX => JavaScript XML (Extensible Markup Language)
 * JSX is a syntax extension for JS
 * Write HTML like Markup inside JS
 *
 * JSX transformed into regular or plain JS using compiler like babel or TypeScript compiler before the browser runs it
 *
 * JSX / TSX
 *    ↓
 * JSX Transformation (Babel, TypeScript Compiler)
 *    ↓
 * JavaScript
 *    ↓
 * Virtual DOM
 *    ↓
 * Browser DOM
 *
 *
 * Component => Logic & Markup
 * JSX / TSX is combination of HTML and JS
 *
 * In React, Rendering Logic, Markup and Component Behavior Live Together
 *
 *
 *
 * JSX Rule
 * 1. Return a Single Root Element
 * Multiple Elements => single root
 * Used <div></div> or empty fragment <></>
 *
 * 2. Close All JSX Tags - <img />
 *
 * 3. Use camelCase for attributes - onClick, tabIndex etc
 * - class is special keyword in js. So used className for style css
 *
 *
 * 4. Use {} for JS Expressions
 * JS in JSX with Curly Braces - embed JS Expressions directly inside JSX
 * - Dynamic UI => JSX + { JS Expression }
 *
 * 5. Use {{ }} when passing object literals
 * Using double curly braces - JS Objects
 *
 * const person = {
 *   name: "Deep",
 *   age: 50
 * }
 *
 * <Component
 *   person = {{
 *     name: "Peter",
 *     age: 50
 *   }}
 * />
 *
 * Here, Outer { } -> JS Expression (JSX curly braces)
 * Inner { } -> object literal (object curly braces)
 *
 *
 * 6. Use a style object for inline styles
 * Inline CSS with Curly Braces
 * - The style properties accepts a JS object
 *
 * <div
 *   style = {{
 *     color: "red",
 *     backgroundColor: "yellow"
 *   }}
 * >
 *   Hello
 * </div>
 *
 *
 * */

/**
 *
 * Difference between React Element and React Component
 *
 * - This is an important distinction in React, and once you understand it, JSX, components, props, and rendering become much easier.
 *
 * The simplest definition is:
 * - React Element => what you want React to render.
 * - React Component => a reusable function/blueprint that produces React elements.
 *
 *
 *
 *
 * 1. What is a React Element?
 * - A React Element is a JavaScript object that describes what should appear in the UI.
 *
 * const element = <h1>Hello Sufian</h1>
 * - Here, <h1>Hello Sufian</h1> is a React element.
 * - It describes: "React, i want an h1 containing Hello Sufian"
 *
 * You can also write the same thing using createElement:
 * const element = React.createElement(
 *   "h1",
 *   null,
 *   "Hello Sufian"
 * );
 * JSX is essentially a more convenient way of creating React elements.
 *
 *
 *
 *
 * 2. Think of an Element as a UI description
 * Suppose:
 * const element = (
 *   <div>
 *     <h1>Hello</h1>
 *     <p>Welcome to React</p>
 *   </div>
 * );
 *
 * You're describing a UI tree:
 * React Element
 *      │
 *      ▼
 *    <div>
 *     ├── <h1>
 *     │     └── "Hello"
 *     │
 *     └── <p>
 *           └── "Welcome to React"
 *
 * - React takes this description and uses it to determine what should be rendered.
 *
 *
 *
 *
 *
 *
 * 3. What is a React Component?
 * - A React Component is a reusable piece of UI logic.
 *
 * Most commonly, you'll create one using a function:
 * function UserCard() {
 *   return (
 *     <div>
 *       <h2>Sufian</h2>
 *       <p>Web Developer</p>
 *     </div>
 *   );
 * }
 * - UserCard is a React component.
 *
 * function UserCard () {
 *   ...
 * }
 *- It's a JavaScript function that returns React elements.
 *
 *
 *
 *
 *
 *
 *
 * 4. Component produces Elements
 * This is the relationship you should remember:
 * Component
 *     │
 *     │ renders/returns
 *     ↓
 * React Element
 *     │
 *     ↓
 * React uses it to update the UI
 *
 * For example:
 * function UserCard() {
 *   return <h2>Sufian</h2>;
 * }
 *
 * Here:
 * UserCard
 *    ↓
 * Component
 *
 * <h2>Sufian</h2>
 *    ↓
 * React Element
 *
 *
 *
 *
 * 5. Real-life analogy 🏭
 * Imagine a cookie factory.
 *
 * Component = cookie mold
 *
 *         Component
 *        ┌───────────┐
 *        │ UserCard  │
 *        │   mold    │
 *        └───────────┘
 *
 * - It defines how the cookie should be made.
 *
 * Element = one specific cookie
 * UserCard
 *    ↓
 * Cookie
 *
 * If you use the same mold multiple times:
 * UserCard
 *    ↓
 * 🍪 Sufian
 *
 * UserCard
 *    ↓
 * 🍪 Rahim
 *
 * UserCard
 *    ↓
 * 🍪 Karim
 *
 * - The component is reusable.
 *
 * - The elements are the specific UI descriptions created when React renders the component.
 *
 *
 *
 *
 *
 * 6. Component with Props
 * This makes the difference even clearer.
 *
 * function UserCard({ name, role }) {
 *   return (
 *     <div>
 *       <h2>{name}</h2>
 *       <p>{role}</p>
 *     </div>
 *   );
 * }
 *
 * Now:
 * <UserCard name="Sufian" role="Admin" />
 * <UserCard name="Rahim" role="User" />
 *
 * - UserCard is the component.
 * - Each usage asks React to render that component with different props.
 *
 * Conceptually:
 *              UserCard Component
 *                     │
 *           ┌─────────┴─────────┐
 *           ↓                   ↓
 *      name="Sufian"       name="Rahim"
 *      role="Admin"        role="User"
 *           ↓                   ↓
 *        UI result            UI result
 *
 *
 *
 *
 *
 * 7. Element vs Component
 * Here's the key comparison:
 *
 * React Element	             React Component
 * Describes UI	               Defines/reuses UI
 * Usually created with JSX	   Usually a function/class
 * Immutable description	     Reusable logic/blueprint
 * Example: <h1>Hello</h1>	   Example: function UserCard() {...}
 * What React should render	   How a piece of UI is produced
 *
 *
 *
 *
 * 8. A very important difference
 * Look carefully:
 *
 * const element = <UserCard />;
 *
 * Here:
 * UserCard
 *    ↓
 * Component
 *
 * <UserCard />
 *    ↓
 * Element
 *
 * This is extremely important.
 * UserCard => is the component function.
 *
 * <UserCard /> => is a React element describing that you want React to render the UserCard component.
 *
 *
 *
 *
 *
 * HTML Element
 * Block-Level Elements: html, body, div, h1, p
 * Inline Elements: a, span, strong, b, em, i
 * Void (Empty) Elements: img, br, hr, input
 *
 * 9. HTML elements vs React elements
 *
 * <h1>Hello world</h1> => is a React element describing a native HTML element.
 *
 * <UserCard /> => is also a react element, but it describes a React component.
 *
 * The difference is what they represent.
 *
 * <h1>Hello</h1>
 *        ↓
 * React Element
 *        ↓
 * Native DOM element
 *
 *
 * <UserCard />
 *        ↓
 * React Element
 *        ↓
 * React Component
 *        ↓
 * More React Elements
 *
 *
 *
 *
 * 10. Components can return many elements
 *
 * function UserCard() {
 *   return (
 *     <div>
 *       <h2>Sufian</h2>
 *       <p>Web Developer</p>
 *       <button>Follow</button>
 *     </div>
 *   );
 * }
 *
 * - UserCard is one component.
 *
 * But it returns a tree of elements:
 * UserCard Component
 *        │
 *        ↓  Single Root
 *      <div>
 *       │
 *       ├── <h2>
 *       │
 *       ├── <p>
 *       │
 *       └── <button>
 *
 * - Component => reusable UI Logic / blueprint.
 * - Element => description of a particular UI node / tree.
 *
 *
 * The easiest way to remember
 *
 * Component => How to build this UI.
 * Element => What UI should be rendered.
 *
 * Component => reusable function.
 * Element => result / description created bby JSX.
 *
 * function Greeting({ name }) {
 *   return <h1>Hello {name}</h1>;
 * }
 *
 * Greeting
 *    ↑
 * Component
 *
 * <h1>Hello Sufian</h1>
 *    ↑
 * React Element
 *
 *
 * One subtle but important point:
 * - A React component returns elements.
 * - But <Greeting name="Sufian" /> itself is also a React element that tells React to invoke or render that component.
 *
 *
 */

/*  
App Component
     │
     │ props
     ↓
UserList Component
     │
     │ map()
     ↓
<UserCard />
<UserCard />
<UserCard />
     │
     ↓
UserCard Component
     │
     │ props
     ↓
React Elements
     │
     ├── <div>
     ├── <h2>
     ├── <p>
     └── <button>

For example:

function UserCard({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>

      {user.isPremium && (
        <span>⭐ Premium</span>
      )}
    </div>
  );
}

Here:

  UserCard → Component
  <div> → React Element
  <h2> → React Element
  <span> → React Element
  {user.name} → dynamic value
  {user.isPremium && ...} → conditional rendering
  user → prop

*/

/**
 *
 * JSX - JavaScript XML
 *
 * What is JSX?
 *
 * - JSX stands for JavaScript XML.
 * - It is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript.
 *
 *
 * - JSX is a JavaScript syntax extension that lets you write HTML-like UI descriptions inside JavaScript, while still being able to use JavaScript expressions such as variables, conditions, and map().
 *
 *
 *
 * const element = <h1>Hello Sufian</h1>;
 *
 * At first glance, it looks like HTML: <h1>Hello Sufian</h1>
 * But it's actually JSX written inside JavaScript.
 *
 *
 *
 * Why was JSX created?
 * Without JSX, creating React elements would look like this:
 * const element = React.createElement(
 *   "h1",
 *   null,
 *   "Hello Sufian"
 * );
 * That's harder to read.
 *
 * With JSX:
 * const element = <h1>Hello Sufian</h1>;
 * Much easier.
 *
 * - So JSX mainly gives us a more readable way to describe UI.
 *
 *
 * JSX is NOT HTML
 * This is an important point.
 * JSX looks like HTML, but it isn't HTML.
 *
 * For example:
 * const element = (
 *   <div>
 *     <h1>Hello</h1>
 *     <p>Welcome</p>
 *   </div>
 * );
 * This is JavaScript containing JSX syntax.
 *
 * A compiler such as Babel or the tooling used by your React setup transforms JSX into JavaScript that React can work with.
 *
 * Conceptually:
 * JSX
 *  ↓
 * Transformation
 *  ↓
 * JavaScript
 *  ↓
 * React elements
 *  ↓
 * UI
 *
 *
 *
 * JSX + JavaScript
 * One of JSX's biggest advantages is that you can put JavaScript expressions inside {}.
 *
 * For example:
 * const name = "Sufian";
 * const element = <h1>Hello {name}</h1>;
 *
 * Result:
 * Hello Sufian
 *
 * Remember what we discussed about dynamic values: {name}
 * means: Evaluate the JavaScript expression name and put its result here.
 *
 * JavaScript
 * ├── variables
 * ├── expressions
 * ├── ternary
 * ├── &&
 * ├── ||
 * ├── map()
 * └── function calls
 *           ↓
 *         JSX
 *
 *
 *
 *
 *
 *
 * JSX can use React Components
 * This is where JSX becomes really powerful.
 *
 * Suppose you have:
 * function UserCard() {
 *   return <h2>Sufian</h2>;
 * }
 *
 * You can use the component inside JSX:
 * function App() {
 *   return (
 *     <div>
 *       <UserCard />
 *     </div>
 *   );
 * }
 *
 * Notice the difference:
 * <h1>Hello</h1>
 * - Here "h1" is a native HTML element.
 *
 * <UserCard />
 * - Here "UserCard" is a React component.
 *
 *
 *
 *
 *
 * JSX + Props
 * You can also pass props through JSX:
 *
 * <UserCard
 *   name="Sufian"
 *   age={25}
 * />
 *
 * Then:
 * function UserCard({ name, age }) {
 *   return (
 *     <div>
 *       <h2>{name}</h2>
 *       <p>{age}</p>
 *     </div>
 *   );
 * }
 *
 * Notice how all your previous concepts connect:
 *                  JSX
 *                   │
 *        ┌──────────┼──────────┐
 *        ↓          ↓          ↓
 *     Props     Dynamic     Components
 *                values
 *        │          │
 *        ↓          ↓
 * <UserCard>    {name}
 *        │
 *        ↓
 * Conditional rendering
 *        │
 *        ↓
 *      map()
 *
 *
 *
 * JSX vs HTML
 * HTML	                            JSX
 * Markup language	                JavaScript syntax extension
 * Used directly by browser	        Transformed into JavaScript
 * class	                          className
 * for	                            htmlFor
 * JavaScript needs <script>	      JavaScript expressions use {}
 * Doesn't create React components	Can use React components
 *
 *
 *
 * The most important mental model
 * Don't think:
 * "JSX is HTML inside React."
 *
 * Instead think:
 * "JSX is a JavaScript syntax that lets me describe UI using
 * HTML-like syntax."
 *
 * For example:
 * function App() {
 *   const name = "Sufian";
 *   return (
 *     <div>
 *       <h1>Hello {name}</h1>
 *       <p>Welcome to React!</p>
 *     </div>
 *   );
 * }
 *
 * Conceptually:
 * JavaScript
 *     │
 *     ├── const name = "Sufian"
 *     │
 *     └── JSX
 *          │
 *          ├── <div>
 *          ├── <h1>
 *          │     └── {name}
 *          └── <p>
 *
 * - And React uses that JSX to create React elements, which are then rendered into the UI.
 *
 *
 */

/**
 *
 * Rendering Dynamic Values
 *
 * What is rendering a dynamic value?
 * - Dynamic value means a value that comes from a variable, prop, state, calculation, API, etc., rather being hardcoded.
 *
 * In React, we use curly braces {} to put or embed JavaScript expressions directly inside JSX.
 *
 *
 *
 * Static value
 * <h1>Hello Sufian</h1>
 * Here, "Sufian" is hardcoded.
 *
 * Dynamic value
 * const name = "Sufian";
 * <h1>Hello {name}</h1>
 *
 * React evaluates:
 * {name}
 *    ↓
 * "Sufian"
 *    ↓
 * Hello Sufian
 *
 * {} tells JSX: "Evaluate this as JavaScript."
 * - The values are dynamic.
 *
 *
 * You can use expressions
 * Inside {}, you can use JavaScript expressions.
 *
 * Calculation
 * <p>{10 + 20}</p>
 *
 * Variable Calculation
 * const price = 30;
 * const quantity = 3;
 *
 * <p>Total: {price * quantity}</p>
 *
 * Method
 * const name = "Sufian";
 * <h1>{name.toUpperCase()}</h1>
 *
 * Ternary
 * const isLoggedIn = true;
 * <p>{isLoggedIn ? "Welcome" : "Please login"}</p>
 *
 * map()
 * const users = ["Sufian", "Rahim", "Karim"];
 *
 * <div>
 *   {users.map((user)=> (
 *     <p key={user}>{user}</p>
 *   ))}
 * </div>
 *
 * So {} isn't only for variables.
 * It can contain JavaScript expressions:
 *
 *  { variable }
 *  { calculation }
 *  { functionCall() }
 *  { condition ? A : B }
 *  { array.map(...) }
 *
 *
 *
 * Why can't we just write JavaScript directly?
 *
 * <h1>name</h1>
 * - It displays: name
 * - because JSX treats it as text.
 *
 * <h1>{name}</h1>
 * - "Give me the value stored inside the JavaScript variable name"
 *
 *
 *
 * const user = {
 *   name: "Sufian",
 *   age: 25,
 *   city: "Dhaka",
 * };
 *
 * function UserCard() {
 *   return (
 *     <div>
 *       <h2>{user.name}</h2>
 *       <p>Age: {user.age}</p>
 *       <p>City: {user.city}</p>
 *     </div>
 *   );
 * }
 *
 * The UI is dynamic because if the object change:
 * user.name = "Rahim"
 *
 * - The rendered value can change accordingly when React renders with the new data.
 *
 *
 *
 * What can React render?
 *
 * React can directly render:
 * - string
 * - number
 * - React elements
 * - Arrays of renderable elements
 *
 * But generally cannot render an object directly.
 *
 * const user = {
 *   name: "Sufian",
 *   age: 25,
 * };
 *
 * <p>{user}</p> ❌
 * <p>{user.name}</p> ✅
 *
 * for debugging:
 * <pre>{JSON.stringify(user)}</pre>
 *
 *
 * {} = JavaScript expression inside JSX.
 *
 */

/**
 *
 * What is Single Root?
 * - A React component must return one root JSX element.
 * - Single root = A component must return one JSX tree, often using <div> or <>...</>.
 *
 * This is invalid:
 * function App() {
 *   return (
 *     <h1>Hello</h1>
 *     <p>Welcome</p>
 *   );
 * }
 *
 * Because React sees:
 * return
 *  ├── h1
 *  └── p
 *
 * There are two sibling root elements.
 * React needs one root structure.
 *
 *
 * Solution: Use a <div>
 *
 * You can wrap them:
 * function App() {
 *   return (
 *     <div>
 *       <h1>Hello</h1>
 *       <p>Welcome</p>
 *     </div>
 *   );
 * }
 *
 * Now React sees:
 * return
 *   │
 *   └── div
 *        ├── h1
 *        └── p
 * There's one root: <div>
 *
 *
 * But we don't always want a <div>
 *
 * That's where Fragment comes in.
 * function App() {
 *   return (
 *     <>
 *       <h1>Hello</h1>
 *       <p>Welcome</p>
 *     </>
 *   );
 * }
 * This gives React a single root without creating an actual HTML wrapper.
 *
 * React
 *  │
 *  └── Fragment
 *        ├── h1
 *        └── p
 * But the Fragment itself doesn't appear in the DOM.
 *
 * The browser effectively gets:
 * <h1>Hello</h1>
 * <p>Welcome</p>
 *
 * - "These multiple JSX elements belong to one React tree."
 *
 *
 * Why does React require a single root?
 * - Think of the return value like a function returning one value.
 *
 * function getUser () {
 *   return user;
 * }
 *
 * React component:
 * function App() {
 *   return (
 *     <div>
 *       ...
 *     </div>
 *   );
 * }
 *
 * - The JSX represents one React element / tree.
 *
 */

/* Think:
          Component
              ↓
          returns
              ↓
          one React tree
              ↓
          React renders it

      
                App()
                  │
                  ↓
             Single Root
             Fragment <></>
                  │
          ┌───────┴────────┐
          ↓                ↓
        <h1>              <p>
          │
       {name}
          │
          ↓
       "Sufian"
*/

/* Write function in JS for reused it when we need

Here, num1, num2 are parameter and 10, 20 are arguments
function add (num1, num2) {
  return num1 + num2;
}

const total = add(10, 20);
const total2 = add(100, 200);

Component is also function. So we pass argument.

props comes from properties object
Props are read only and come from parent component. It is not editable.
We also destructuring props in parameter.
 
*/

/**
 *
 * Props
 *
 * props -> pass, read, reuse, any JS value
 * One directional -> Parent Component ==== props ===== Child Component
 *
 * Props are unidirectional - Data flows down only
 *
 * Props are outside, state is inside
 *
 * What are Props?
 * - React components use props to communicate with each other - the way a function receives its arguments.
 *
 * - Props = Properties
 * - Props are a way to pass data from a parent component to a child component.
 * - Think of props as arguments passed to a function.
 *
 *
 *
 *
 * Real-life example 🏠
 * Imagine you own a restaurant.
 *
 * You have one standard Food Card design:
 * ┌─────────────────────┐
 * │ 🍔 Burger           │
 * │ Delicious burger    │
 * │ Price: $5           │
 * └─────────────────────┘
 *
 * You don't want to create separate components for:
 * Burger
 * Pizza
 * Pasta
 * Chicken
 *
 * React essentially gives the component:
 *
 * FoodCard
 *    │
 *    ├── name → "Burger"
 *    └── price → 5
 *
 * Then:
 *
 * FoodCard
 *    │
 *    ├── name → "Pizza"
 *    └── price → 10
 *
 * One component → many different results.
 *
 *
 * Another real-life analogy 📦
 *
 * Think about ordering a custom T-shirt.
 *
 * The T-shirt design is the same:
 *         👕
 *
 * But you provide different information:
 * Color: Blue
 * Size: L
 * Name: Sufian
 *
 * The factory uses those properties to produce your particular shirt.
 *
 *
 *
 *
 *
 * Props flow from Parent → Child
 *
 * Parent Component
 *        │
 *        │ props
 *        ↓
 * Child Component
 *
 *
 * function App() {
 *   return <User name="Sufian" age={25} />;
 * }
 *
 * App is the parent.
 * User is the child.
 *
 * App
 *  │
 *  │ name="Sufian"
 *  │ age={25}
 *  ↓
 * User
 *
 * The child receives them:
 * function User({ name, age }) {
 *   return (
 *     <div>
 *       <h2>{name}</h2>
 *       <p>{age}</p>
 *     </div>
 *   );
 * }
 *
 *
 *
 * Props can contain different types
 *
 * Props aren't limited to strings.
 *
 * String
 * <User name="Sufian" />
 *
 * Number
 * Notice the {}:
 * <User age={25} />
 *
 * Boolean
 * <User isAdmin={true} />
 *
 * Array
 * <User hobbies={["Coding", "Gaming"]} />
 *
 * Object
 * <User
 *   user={{
 *     name: "Sufian",
 *     age: 25,
 *     city: "Dhaka"
 *   }}
 * />
 *
 * Function
 * This is especially important:
 * <Button onClick={handleClick} />
 *
 * You can even pass React components/elements as props.
 *
 *
 *
 *
 * Why are Props useful?
 * Imagine you have 100 products.
 *
 * Without props, you might create:
 * BurgerCard
 * PizzaCard
 * PastaCard
 * ChickenCard
 * ...
 * That's terrible.
 *
 * One component handles everything.
 * That's the real power of props: Reusable components + different data.
 *
 *
 *
 *
 *
 * Props are read-only
 * This is another very important rule.
 *
 * A child should not modify its props.
 * function User({ name }) {
 *   name = "Rahim"; // ❌ Don't do this
 * }
 *
 * Props should be treated as read-only.
 *
 * If the parent sends: <User name="Sufian" />
 *
 * the child should use that value, not change it.
 *
 * If you need data that the child itself can change, that's where state comes in.
 *
 * Props
 *  ↓
 * Data received from parent
 *  ↓
 * Read-only
 *
 * State
 *  ↓
 * Data managed by component
 *  ↓
 * Can change
 *
 *
 *
 * Props vs State
 *
 * Props	                     State
 * Comes from parent	         Managed by component
 * Read-only	                 Can be changed
 * Used to pass data	         Used for changing data
 * Makes components reusable	 Makes components interactive
 *
 *
 * Example:
 * function Counter({ initialCount }) {
 *   const [count, setCount] = useState(initialCount);
 *
 *   return (
 *     <button onClick={() => setCount(count + 1)}>
 *       {count}
 *     </button>
 *   );
 * }
 *
 * Here:
 * initialCount → prop
 * count        → state
 *
 *
 * Think of a React component as a function.
 * = Props are basically inputs/arguments for React components.
 *
 * Parent
 *   │
 *   │  props
 *   ↓
 * Child
 *
 * Parent gives data → Child receives and uses it.
 *
 *
 * Once this is clear, the next concept you should learn is State, because the natural question after Props is:
 *
 * “If props are read-only, how does a component change its own data?”
 *
 *
 */

/**
 *
 *
 * What is Conditional Rendering?
 * - Conditional rendering is how a component decides what to display based on data, state, or user actions - wired directly into JSX.
 *
 *
 * - Conditional rendering means displaying different JSX depending on whether a condition is true or false.
 *
 *
 */

/*  

             Condition
                 ↓
        ┌────────┼────────┐
        ↓        ↓        ↓
       if      ternary    &&
        │        │        │
   complex     A or B   only if
   logic                  true

                 ↓
                ||
             fallback

*/

/**
 *
 * Rendering lists with map()
 *
 * The basic idea is: You have an array of data -> map() coverts each item into JSX -> React renders the JSX.
 *
 */

/* 
users array
     ↓
   map()
     ↓
each user
     ↓
   JSX
     ↓
React renders the list



Why use map()?

Imagine you have 100 users.

Without map():

<p>Sufian</p>
<p>Rahim</p>
<p>Karim</p>
<p>Hasan</p>
...

You obviously don't want to manually write 100 elements.

Instead:

{users.map((user) => (
  <p>{user}</p>
))}

Now React generates one <p> for every user.
*/

/*  
The 4 concepts you've learned now connect together

You started with Props, then Conditional Rendering, and now List Rendering.

They work together like this:

                Parent
                  │
              users data
                  │
                  ↓
                map()
                  │
        ┌─────────┼─────────┐
        ↓         ↓         ↓
     UserCard  UserCard  UserCard
        │         │         │
      props     props     props
        │         │         │
        ↓         ↓         ↓
   conditional rendering
        │
        ↓
       UI

Remember these rules:

   => map() → render multiple items ->> users.map(user => <UserCard />)
   
   => key → uniquely identify each list item ->> key={user.id}
   
   => Props → send data to the child ->> <UserCard user={user} />
   
   => Conditional rendering → decide what to show ->> {user.isAdmin && <AdminBadge />}

*/
