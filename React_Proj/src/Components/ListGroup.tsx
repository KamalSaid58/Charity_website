import { useState } from "react";

interface ListGroupProps {
  names: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
//Function returns only one element
function ListGroup({ names, heading, onSelectItem }: ListGroupProps) {
  names.map((name) => <li>{name}</li>);
  // Iterattes over array convert each element to li elemeent on webpage
  //To render data dynamically onto webpage
  //Assign keyid to each li element for webpage error#

  let message = names.length === 0 && <p>No items</p>;

  let getMessage = () => {
    return names.length === 0 && <p>No items</p>;
  };

  let [selectedIndex, setSelectedIndex] = useState(-1);
  //Hook to tell react that component has variable changing over time
  //Returns array of 2 elements (variable,method setting variable) initially variable=-1
  return (
    <>
      <h1>{heading}</h1>
      {/* {names.length === 0 ? <p>No items</p> : null}
      {names.length === 0 && <p>No items</p>} */}
      {/* {message} */}
      {/* {getMessage()} */}
      {/* 4 ways to write if statement when rendering dynamic */}
      <ul className="list-group">
        {names.map((name, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={name}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(name);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
