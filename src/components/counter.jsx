import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  const formatCount = () => {
    return count === 0 ? "empty" : count;
  };
  const getBagesClasses = () => {
    let classes = "badge m-2 ";
    classes += count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1); //? откуда реакт берет значение prevState. оно записано в переменную? зачем тогда в колбек его передавать
  };
  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const handleTagChange = (id) => {
    setTags((prevState) => prevState.filter((tag) => tag !== id));
  };

  const renderTags = () => {
    if (tags.length === 0) return "No tags";

    return tags.map((tag) => (
      <li
        key={tag}
        className="btn btn-primary btn-sm m-2"
        onClick={() => handleTagChange(tag)} // колбэк ф вызовется только тогда когда совершится клик
      >
        {tag}
      </li>
    ));
  };

  return (
    <>
      <ul>{renderTags()}</ul>
      <span className={getBagesClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
    </>
  );
};

export default Counter;
