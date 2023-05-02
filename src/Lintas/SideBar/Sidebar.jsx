import React, { useState, } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaXbox,  } from 'react-icons/fa';
import { SidebarItem } from './Menus_Subitems';
import Dropdown from './Dropdown';


const Nav = styled.div`
background: blue;
height:3rem;
display:flex;
`;

const NavIcon = styled(Link)`
  margin-left:2rem;
  display: flex;
  justify-content:flex-start;
  align-items:center;
  font-size:3rem;
 
  color:red;
`;
const SidebarNav = styled.nav`
background:navy;
width:20rem;
height:100vh;
display: flex;
justify-content:center;
position:fixed;
top:0;
left:  ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition:1.5s;
z-index:999;
`;
const SidebarWrap = styled.div`
width:100%;

${'' /* background:green; */}
`;

const Sidebar = () => {

  const [sidebar, setSidebar]= useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  
 const History = useNavigate()
 


  return (
    <>
    <Nav >
      <NavIcon to="#" className='Headerbar'>
        <FaBars onClick={showSidebar}/>
       
        <button onClick={() => History(-1)}>Back</button>
      
      </NavIcon>
    </Nav>
    <SidebarNav sidebar={sidebar}>
      <SidebarWrap >
      <NavIcon to="#">
        <FaXbox onClick={showSidebar}/>
      </NavIcon>
      {SidebarItem.map((item) => {
          return <Dropdown item={item} key={item.id}/>
      })}

      </SidebarWrap>
    </SidebarNav>
    </>
  )
}

export default Sidebar 