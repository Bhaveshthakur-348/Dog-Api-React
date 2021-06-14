import React from "react";

const Dog = (props) => {
  return <img src={props.url} key={props.counter} alt="dog" />;
};

export default Dog;
