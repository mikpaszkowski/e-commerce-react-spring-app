import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "./CollectionPreview";
import { selectCollectionsForPreview } from "../../stores/shop/shopSelector"

const CollectionOverview = ({ collections }) => (
      <>
           {
            collections.map(({id, ...collectionProps}) => (
              <CollectionPreview key={id} {...collectionProps} numOfItems={4}/>
            ))
          }
      </>  
    );

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  })


export default connect(mapStateToProps)(CollectionOverview);