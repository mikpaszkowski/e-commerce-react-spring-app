import React, { useState, useEffect } from "react";
import CollectionOverview from "./CollectionOverview";
import styled from "styled-components";
import { Route } from "react-router-dom";
import CollectionPage from "./CollectionPage";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollection } from "../../stores/shop/shopActions";

const ShopListPageContainer = styled.div`
  display: block;
  margin-top: 15rem;
`;

class ShopListPage extends React.Component {
  unsubscribeFromSnaptshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <ShopListPageContainer>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:id`} component={CollectionPage} />
      </ShopListPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollection(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopListPage);
