import * as React from "react";
import CollectionPreview from "./CollectionPreview";
import { connect } from "react-redux";
import { selectCollection } from "../../stores/shop/shopSelector"
import NotFound from "../NotFound";


const CollectionPage = ({ collection }) => {
    return(
        <div>
            {
                collection ? (
                    <CollectionPreview title={collection.title} items={collection.items}/>
                ) : (
                    <NotFound />
                )
            }
        </div>
    );
};


const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.id)(state)
})


export default connect(mapStateToProps)(CollectionPage);
