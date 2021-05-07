import React from "react";
import styled from "styled-components";
import MenuDashboardItem from "./menu-dashboard-item";
import SECTIONS_DATA from "../assets/sections.list";

const DirectoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin-top: 15rem;
`;

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
        sections: SECTIONS_DATA
    }
  };

  render() {
     return (
        <DirectoryWrapper>
          {
              this.state.sections.map(({id, ...sectionProps}) => (
                  <MenuDashboardItem key={id} {...sectionProps}/>
              ))}
        </DirectoryWrapper>
     )
  }
}


export default Directory;