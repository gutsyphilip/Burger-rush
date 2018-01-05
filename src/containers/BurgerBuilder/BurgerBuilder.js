import  React, { Component } from 'react'; 
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


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
  addIngredientHandler= (type)=>{
    let oldCount = this.state.ingredients[type];
    oldCount++;
    let oldState = {
      ...this.state.ingredients
    };
    oldState[type]= oldCount;
    this.setState({ingredients:oldState})
  }
  render() {
    return (
      <div>
        <Wrapper>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls addIngredient={this.addIngredientHandler}/>
        </Wrapper>
      </div>
    )
  }
}
