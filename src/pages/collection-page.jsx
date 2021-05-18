import * as React from "react";
import CollectionPreview from "../components/collection-preview";
import { connect } from "react-redux";
import { selectCollection } from "../stores/shop/shopSelector"



const CollectionPage = ({ collection }) => {
    console.log(collection);
    return(
        <div>
            <CollectionPreview title={collection.title} items={collection.items}/>
        </div>
    );
};


const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.id)(state)
})


export default connect(mapStateToProps)(CollectionPage);
