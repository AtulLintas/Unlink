import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./SidebarStyle.css";
import { IconContext } from "react-icons/lib";

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0.5rem;
  list-style: none;
  height: 50px;
  font-size: 1.3rem;
  text-decoration: none;
 

  &:hover {
    background-color: yellow;
    color: navy;
    border-left: 10px solid tomato;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 1rem;
`;
const DropdownLink = styled(Link)`
    background:aqua;
    height:50px;
    padding-left: 3rem;
    display:flex;
    align-items:center;
    text-decoration:none;
    color:pink;
    font-size:1.2rem;

    &:hover {
      background:yellow;
      cursor:pointer;
    }
`;


const Dropdown = ({ item }) => {

const [subItems, setSubItems]= useState(false);
const showsubItems = () => setSubItems(!subItems)

  return (
    <>
    <IconContext.Provider value={{color:"#fff"}}> 
          <SidebarLink to={item.path} onClick={item.subItems && showsubItems}>
        <div className="dibba">
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subItems && subItems
            ? item.iconOpen
            : item.subItems
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subItems && item.subItems.map((item) => {
        return(
          <DropdownLink to={item.path} key={item.id}>
                        <SidebarLabel>{item.title}</SidebarLabel>

          </DropdownLink>
        )
      })}
      </IconContext.Provider>

    </>
  );
};
export default Dropdown;
