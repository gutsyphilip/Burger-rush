import  React, { Component } from 'react'; 
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger'


export default class BurgerBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients:{
        salad: 1,
        bacon: 1,
        meat: 1,
        cheese: 2
      }
    }
  }
  render() {
    return (
      <div>
        <Wrapper>
            <Burger ingredients={this.state.ingredients} />
            <div>Build Controls</div>
        </Wrapper>
      </div>
    )
  }
}
