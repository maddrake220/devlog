import React, {useState} from "react"
import styled from "styled-components"
import {v4 as uuid} from "uuid"
import ToDolist from "../components/ToDolist"
const Container = styled.div`
  height: calc(100vh);
  width: 100%;
  text-align: center;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("images/background.jpg");
  background-position: center center;
  background-size: cover;
  z-index: 0;
`;
const Content = styled.div`
  position: relative;
  padding-top: 5rem;
  width: 100%;
  height: 40%;
  z-index: 1;
`;

const Hello = styled.div`
  font-size: 64px;
  font-weight: 900;
`;

const SInput = styled.input`
  padding-top: 2rem;
  font-size : 40px;
  border: none;
  border-bottom: 2px solid green;
  background: transparent;
  &:focus{
            outline:none;
}`;

const Todolist = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  padding-top: 1.5rem;
`;
const Ul = styled.ul`
  list-style: none;
  text-align: justify;
  display: inline-block;
  padding: 0px 5px 6px 0px;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 200px;
`;

const Li = styled.li`
    margin-bottom: 5px;
    border-bottom: 1px solid blueviolet;
    &:last-child{
      border-bottom: 0px;
    }
`;

export default function Home() {
  const [NewToDo, setNewToDo] = useState("")
  const [ToDo, setToDo] = useState([])

  const onSubmit = e => {
    e.preventDefault();
    if(ToDo.length >10) {
      alert("ToDo list Limit")
      return false
    } else {
      setToDo([...ToDo, [NewToDo, uuid()]])
    }
    setNewToDo("");
  };

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };

  const removeHandler = (id) => {
    
    setToDo(ToDo.filter(item=> item[1] !== id))
  }
  return (
    <Container>
      <Backdrop />
      <Content>
          <Hello>Hello, Jaewon.</Hello>
          <Hello>What are you up to today?</Hello>
          <form onSubmit={onSubmit}>
            <SInput 
                value={NewToDo}
                type="text"
                placeholder="Write to do"
                onChange={onChange}/>
          </form>
      </Content>
      <Todolist>
        {ToDo.length === 0 ? "" : <Hello> ToDo List</Hello>}
        
          <Ul>
            {ToDo.length > 0 ? ToDo.map(item => (
              <Li> <ToDolist id={item[1]} text={item[0]} removeItem={removeHandler} /></Li>
            ))
            : ""}
          </Ul>
      </Todolist>
    </Container>
  )
}
