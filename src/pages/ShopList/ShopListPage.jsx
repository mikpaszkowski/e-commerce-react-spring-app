import React from "react";
import CollectionOverview from "./CollectionOverview";
import styled from "styled-components";
import { Route } from "react-router-dom";
import CollectionPage from "./CollectionPage";

const ShopListPageContainer = styled.div`
  display: block;
  margin-top: 15rem;
`;

const ShopListPage = ({ match }) => {
      return (
        <ShopListPageContainer>
          <Route exact path={`${match.path}`} component={CollectionOverview}/>
          <Route exact path={`${match.path}/:id`} component={CollectionPage}/>
        </ShopListPageContainer> 
      )
  }

export default ShopListPage;