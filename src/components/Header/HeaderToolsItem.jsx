import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleCartVisibility } from "../../stores/cart/cartActions";
import QuantityNumber from "../QuantityNumberSign";
import { selectCartItemsCount } from "../../stores/cart/cartSelectors";
import { createStructuredSelector } from "reselect";


const AccountItemWrapper = styled.div`
  position: relative;
  display: block;
  margin: 0 1rem;
  cursor: pointer;
`;

const IconName = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
`;

const HeaderToolsItem = ({
  icon,
  iconName,
  toggleCartVisibility,
  numberOfItems,
}) => {
  const TheIcon = icon;
  return (
    <AccountItemWrapper
      onClick={iconName === "cart" ? toggleCartVisibility : null}
    >
      <TheIcon />
      <IconName>{iconName}</IconName>
      {iconName === "cart" && numberOfItems > 0 ? (
        <QuantityNumber number={numberOfItems} />
      ) : null}
    </AccountItemWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

const mapStateToProps = createStructuredSelector({
  numberOfItems: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderToolsItem);
