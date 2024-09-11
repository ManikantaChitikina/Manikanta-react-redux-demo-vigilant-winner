import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'
function IteamContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>buyItem</button>
    </div>
  )
}
  const mapStateToProps=(state,ownProps)=>{
    const iteamState=ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIceCreams
    return{
        item:iteamState
    }
  }
  const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchFuction=ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyIceCream())
    return{
        buyItem:dispatchFuction
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(IteamContainer)
