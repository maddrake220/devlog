
import React, {useState} from "react";
import {FaTrashAlt, FaRegCheckCircle, FaRegCircle} from "react-icons/fa"
import styled from "styled-components"

const Trash = styled.span`
  position: relative;
  float: right;
  &:hover{
    cursor: pointer;
  }
`;

const Text = styled.span`
  position: relative;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  margin-left: 6px;
  max-width: 10px;
`;
const Flag = styled.span`
  position: relative;
  float: left;
  &:hover{
    cursor: pointer;
  }
`;
export const ToDolist = ({id, text, removeItem}) => {

    const [Check, setCheck] = useState(false)
    return (
      <div>
        <Flag>
            {Check ? <FaRegCheckCircle onClick={()=>setCheck(false)}/> 
                   : <FaRegCircle onClick={()=>setCheck(true)}/> }
        </Flag>
        <Text>{text}</Text>
        <Trash>
          <FaTrashAlt onClick={()=>removeItem(id)}/>
        </Trash>
      </div>
    )
  
  }


export default ToDolist;