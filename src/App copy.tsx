import "./App.css";
import Book from "./Conditional Rendering/Book";
import Dashboard, { Cart, Profile } from "./Conditional Rendering/If";
import { UserList } from "./Conditional Rendering/MAP";
import Sports from "./Conditional Rendering/Sports";
import Task from "./Conditional Rendering/Task";
import Users from "./Conditional Rendering/Users";
import Todo from "./Props/todo";

function App() {
  // map method - rendering list
  const books: string[] = [
    "Physics",
    "Chemistry",
    "Math",
    "Biology",
    "English",
    "Bangla",
  ];

  // books.map(book => )

  return (
    <>
      <h1>My React</h1>
      <UserList />

      <Sports />

      <Users />

      {/* Dynamic input/arguments push through props to child component - Book and use map method to render list  */}
      {books.map((book) => {
        // console.log(book);
        // return <Book name="book" />;

        return <Book name={book} />;
      })}

      {/* {books.map((book) => (
        <li>{book}</li>
      ))} */}

      {/* Props and hard-coded string */}
      <Todo task="Practice Coding" time="5.00" />
      <Todo task="Take a shower" time="10.00" />
      <Todo task="No social media today" />

      {/* Conditional Rendering */}
      <Task name="Finished Module" isDone={false} />
      <Task name="Facebook wasting time" isDone={true} />
      <Task name="Mobile charge" isDone={false} />

      <Profile isLoggedIn={true} />
      <Profile isLoggedIn={false} />

      <Cart items={[5, 5]} />

      <Dashboard />
      <Dashboard user={{ isVerified: true, isAdmin: false }} />
      <Dashboard user={{ isVerified: true, isAdmin: true }} />
      <Dashboard user={{ isVerified: false }} />
      <Dashboard user={{ isVerified: true }} />

      <Person></Person>
      <Gadgets />

      <button disabled></button>
      <img src="" width="" alt="" />
      <User name="Deep" />

      {/* Now give it different props and its hard-coded string */}
      <FoodCard name="Burger" price={5} />
      <FoodCard name="Pizza" price={10} />
      <FoodCard name="Pasta" price={8} />

      <TShirt color="Blue" size="L" name="Sufian" />
      <TShirt color="Red" size="XL" name="Marley" />

      <Student name="Subidha badhi" gpa="3.51"></Student>
      <Student name="Dip Akand"></Student>
      <Student></Student>

      <Developer language="JS" experience="10" />
      <Developer language="Python" experience="5" />
      <Developer language="Java" experience="2" />
    </>
  );
}

// Create one reusable FoodCard.
// function FoodCard({ name, price }: { name: string; price: number }) {
function FoodCard(props: { name: string; price: number }) {
  // console.log("The Food name is", name, "The price is", price);
  // The Food name is Burger The price is 5
  // The Food name is Pizza The price is 10
  // The Food name is Pasta The price is 8

  console.log("The full props is", props);
  // The full props is {name: 'Burger', price: 5}
  // The full props is {name: 'Pizza', price: 10}
  // The full props is {name: 'Pasta', price: 8}

  return (
    <div className="m-3">
      <h2>Name: {props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  );
}

/* Now give it different props 
<FoodCard name="Burger" price={5} />
<FoodCard name="Pizza" price={10} />
<FoodCard name="Pasta" price={8} /> */

function TShirt({
  color,
  size,
  name,
}: {
  color: string;
  size: string;
  name: string;
}) {
  console.log("The color is", color, "The size is", size, "The name is", name);

  return (
    <div className="m-5">
      <p>Color: {color}</p>
      <p>Size: {size}</p>
      <p>Name: {name}</p>
    </div>
  );
}

// function Developer(props) {
function Developer(props: { language: string; experience: string }) {
  console.log(props);

  return (
    <div className="student py-5">
      <h4>Programming Language: {props.language} </h4>
      <p>Years of Experience: {props.experience}</p>
    </div>
  );
}

// Here, name -> parameter and "Sufian" -> argument
function greet(name: string): void {
  console.log(`Hello ${name}`);
}

greet("Sufian");
greet("Deep");

// React works similarly but here function name start with capital letter
// Here, name="Deep" => prop => User component => Hello Deep
function User({ name }: { name: string }) {
  return <h2>Hello {name}</h2>;
}

// <User name="Deep" />;

function Person() {
  return <p>I am here.</p>;

  /* return <p>I am here.</p>
  <h3>Myself</h3> */
}

// function Student({ name }: { name?: string }) {

function Student(props: { name?: string; gpa?: string }) {
  console.log("Inside the student component", props);

  const studentStyle = {
    border: "2px dotted red",
    margin: "10px",
    borderRadius: "15px",
  };

  return (
    <>
      {/* <div className="student"> */}

      {/* <div
        style={{
          border: "2px dashed green",
          margin: "6px",
          borderRadius: "12px",
        }} 
      */}

      <div style={studentStyle}>
        <h3 className="p-2">Name: {props.name}</h3>
        <p className="p-1.5">GPA: {props.gpa} </p>
      </div>
    </>
  );
}

function Gadgets() {
  // This is logic part before return
  const money = 56;

  // without parenthesis, it autocomplete semicolon and think finished and return undefined.
  // return;
  // 33;

  // Always use fragment <></> for multiple element
  return (
    <>
      <p>Some {3 + 9}</p>
      <p>Sum {money}</p>
      <p>Something</p>
    </>
  );

  return (
    <div>
      <p>Some</p>
      <p>Sum</p>
      <p>Something</p>
    </div>
  );
}

export default App;
