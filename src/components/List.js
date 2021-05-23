import React from "react";
import ListItems from "./ListItem "


const List = ({list}) => {
    return (
        <>
        <ul>
            {
            list.map((elm,i)=>{
            return <ListItems key={i} id={elm.id} todo={elm.todo} />
            })       
            }
         </ul>
      </>
    );
  };
  
  export default List;
  