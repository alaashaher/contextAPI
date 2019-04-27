
import React from "react";
import LogIn from "./login";
import styled from "styled-components";
import { withUser } from "../lib/withUser";
import { ThemeContext } from "../lib/theme-context";
const Div = styled.div`
text-align: center;
background-color: #eee;
height: 100%;
padding: 2% 0% 28% 0%;
display: inline-grid;
width: 100%;
`;
const user = {
  name : "alaashaher" ,
  pass : "12345"
};
export default function Index() {

  return (
    <Div>
      <ThemeContext.Provider value={{ themeContext: {name:"alaashaher" , pass:"12345" }}}>
      <LogIn/>
      </ThemeContext.Provider>
    </Div>
  )
  
  }