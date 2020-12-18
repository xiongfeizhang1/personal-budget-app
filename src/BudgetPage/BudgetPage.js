import React from 'react';
import ReactDOM from 'react-dom';
//added axios and chartjs
import axios from "axios";



class BudgetPage extends React.Component{
         constructor(props) {
        super(props);
        this.state = { budgetName: '',
                        budgetCost: 0};
      }


      //when form is submitted
      mySubmitHandler = (event) => {
        event.preventDefault();
  
    
      }
      myChangeHandler = (event) => {
        this.setState({budgetName: event.target.value});
      }
      myChangeHandler1 = (event) => {
        this.setState({budgetCost: event.target.value});
      }
      render() {
        return (
          <form onSubmit={this.mySubmitHandler}>

          <h1>Hello {this.state.budgetName}</h1>
          <h1>hello {this.state.budgetCost}</h1>
          <p>Enter the name of your monthly cost:</p>
          <input
            type='text'
            onChange={this.myChangeHandler}
          />
          <p>Enter the monthly cost in dollars:</p>
           <input
            type='text'
            onChange={this.myChangeHandler1}
          />
          <br></br>
          <input
            type='submit'
          />
          </form>



        );
      }

  }
  
  export default BudgetPage;
  







