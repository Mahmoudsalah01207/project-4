import React, { Component } from 'react'
import Child from '../productChlid/Child'

export default class Parent extends Component {
    state ={
        allprodact:[
            { name:"mahmoud",age:10},
            { name:"adam",age:20},
            { name:"ali",age:30}
        ]
    }
  render() {
    return (
      <>Parent
      
      
    { this.state.allprodact.map(function(ele){return <Child pro={ele} />})}
      </>
    )
  }
}
