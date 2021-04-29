import React from "react";
import SHOP_LIST_DATA from "../assets/shop.list.data";
import CollectionPreview from "../components/collection-preview";
import styled from "styled-components";

const ShopListPageContainer = styled.div`
  display: block;
`;


class ShopListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_LIST_DATA,
    };
  }


  render() {
    const {collections} = this.state;
      return (
        <ShopListPageContainer>
          {
            collections.map(({id, ...collectionProps}) => (
              <CollectionPreview key={id} {...collectionProps}/>
            ))
          }
        </ShopListPageContainer>
      )
  }
}


export default ShopListPage;