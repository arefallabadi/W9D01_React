import React from "react";


const ListItem = ({todo,id}) => {
    const print =(e)=>{
        console.log(e.target.id);
    }
    
  return (
      <li onClick={print} id={id}>{todo}</li>
  );
};

export default ListItem;

