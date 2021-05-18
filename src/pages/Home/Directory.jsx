import React from "react";
import styled from "styled-components";
import MenuDashboardItem from "./MenuDashboardItem";
import SECTIONS_DATA from "../../assets/sections.list";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../stores/directory/directorySelector"
import { createStructuredSelector } from "reselect";


const DirectoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin-top: 15rem;
`;

const Directory = ({ sections }) => {
  
     return (
        <DirectoryWrapper>
          {
              sections.map(({id, ...sectionProps}) => (
                  <MenuDashboardItem key={id} {...sectionProps}/>
              ))}
        </DirectoryWrapper>
     )
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory);