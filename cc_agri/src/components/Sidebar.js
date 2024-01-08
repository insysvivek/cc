// Filename - components/Sidebar.js
import { useEffect,useState } from "react";
//import { useState,useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Languageoption from "./Language";

const Nav = styled.div`
	background: #15171c;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SidebarNav = styled.nav`
	background: #15171c;
	width: 250px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	transition: 350ms;
	z-index: 10;
`;

const SidebarWrap = styled.div`
	width: 100%;
`;



function getDate() {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    
    return `${date}/${month}/${year}`;
  }

  const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);
    const [currentDate, setCurrentDate] = useState(getDate());
	const showSidebar = () => setSidebar(!sidebar);

	

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
           
				<Nav style={{backgroundColor:'teal'}}>
					<NavIcon to="#">
						<FaIcons.FaBars
							onClick={showSidebar}
                            
						/>
                        
                        <img src="logo512.png" style={{height:'3rem', width:'3rem',marginLeft:'14rem'}}/>
                       
					</NavIcon>
                    
                   
					<h1
						style={{
							textAlign: "center",
							marginLeft: "50px",
							color: "white",
                            paddingBottom:"1rem"
						}}
					>
                         
						Cane Management System
					</h1>
					<div style={{ marginTop: "25px" }} id="google_t_element "> </div>
				</Nav>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap style={{backgroundColor:'teal' , width:'100%'}}>
						<NavIcon to="#" style={{backgroundColor:'teal'}}>
							<AiIcons.AiOutlineClose
								onClick={showSidebar}
							/>
                            <div> <p style={{fontSize:'16px',color:'white',marginLeft:'1rem'}}>{currentDate}</p>
                            <p style={{fontSize:'16px',color:'white',marginLeft:'1rem',paddingTop:'0px'}}> {showTime}</p></div>
						</NavIcon>
						{SidebarData.map((item, index) => {
							return (
								<SubMenu
									item={item}
									key={index}
								/>
							);
						})}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>
		</>
	);
};

export default Sidebar;
