// interface BookProps {
//   name: string;
// }

type BookProps = {
  name: string;
};

// const Book = ({ name }: { name: string }) => {};

const Book = ({ name }: BookProps) => {
  // console.log(name);

  return <li className="m-2 text-lg">Book Name: {name}</li>;
};

export default Book;
