import  React, { Component } from 'react'; 
import Wrapper from '../../hoc/Wrapper';


export default class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Wrapper>
            <div>Burger</div>
            <div>Build Controls</div>
        </Wrapper>
      </div>
    )
  }
}
