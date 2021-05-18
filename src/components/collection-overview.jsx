import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "./collection-preview";
import { selectShopCollections } from "../stores/shop/shopSelector"

const CollectionOverview = ({ collections }) => {

    return (
      <>
           {
            collections.map(({id, ...collectionProps}) => (
              <CollectionPreview key={id} {...collectionProps} numOfItems={4}/>
            ))
          }
      </>  
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
  })


export default connect(mapStateToProps)(CollectionOverview);