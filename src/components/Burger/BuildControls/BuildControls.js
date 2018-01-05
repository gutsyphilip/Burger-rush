import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls= [
    {label:'Salad', type:'salad'},
    {label:'Babon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
]; 

const buildControls = (props) =>{
    return (
        <div className={classes.BuildControls} >
            {
                controls.map((ctrl)=>{
               return( 
                    <BuildControl addIngredient={this.props.addIngredient} key={ctrl.label} label={ctrl.label} type={ctrl.type}/>
               )
                })
            }
        </div>
    );
}

export default buildControls;