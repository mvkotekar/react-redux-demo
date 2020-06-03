import React from "react";
import { buyCake, giveCake, resetCake, buyIce } from "../redux/index";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Numer Of Cakes: {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.giveCake}>Give Cake</button>
      <button onClick={props.resetCake}>Reset Cake</button>
      <hr></hr>
      <h2>Numer Of Ice: {props.numberOfIce}</h2>
      <button onClick={props.buyIce}>Buy Cake</button>
    </div>
  );
}

//step#1 to map state to props. function name can be anything
//When you want to access redux store state data we define this function
//This function will help see state values as props to current component
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
    numberOfIce: state.ice.numberOfIce,
  };
};

//step#2 define mapDispatchToProps and call action creator
//buyCake is from cakeActions -> index -> here
//Similar to mapStateToProps, this function is to get dispatchfunction as
//props to current component
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    giveCake: () => dispatch(giveCake()),
    resetCake: () => dispatch(resetCake()),
    buyIce: () => dispatch(buyIce()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
