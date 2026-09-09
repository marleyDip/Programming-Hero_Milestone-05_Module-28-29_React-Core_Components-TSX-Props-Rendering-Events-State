// For object type, we used always interface; Here we also used type
interface todoPropType {
  task: string;
  time?: string;
}

// function Todo(props: { task: string; time: string }) {

/* function Todo(props: todoPropType) {
  console.log(props);

  return (
    <li>
      Do this work: {props.task} - at: {props.time}
    </li>
  );
} */

// function Todo({ task, time }: { task: string; time?: string }) {
function Todo({ task, time }: todoPropType) {
  console.log(task, time);

  return (
    <li>
      Do this work: {task} - at: {time}
    </li>
  );
}

export default Todo;

// Destructuring Object and value store in variable that are exact same name as property.
// { task, time } => variable name and
// const { task, time } = { task: "Practice Coding", time: "5.00" };
