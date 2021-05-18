import React from "react";
import CollectionOverview from "../components/collection-overview";
import styled from "styled-components";
import { Route } from "react-router-dom";
import CollectionPage from "./collection-page";

const ShopListPageContainer = styled.div`
  display: block;
  margin-top: 15rem;
`;

const ShopListPage = ({ match }) => {
  console.log(match)
      return (
        <ShopListPageContainer>
          <Route exact path={`${match.path}`} component={CollectionOverview}/>
          <Route exact path={`${match.path}/:id`} component={CollectionPage}/>
        </ShopListPageContainer> 
      )
  }

export default ShopListPage;