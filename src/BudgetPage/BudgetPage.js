import React from 'react';
import ReactDOM from 'react-dom';
//added axios and chartjs
import axios from "axios";


import {Bar, Pie, Doughnut} from 'react-chartjs-2'

class BudgetPage extends React.Component{
         constructor(props) {
        super(props);
        this.chartReference = React.createRef();
        this.state =  { 
          budgetName: '',
          budgetCost: 0,
          chartData:{
            labels: [],
            datasets:[
                {
                    label:'Cost in $',
                    data:[

                    ],
                    backgroundColor:[
                      'rgb(255, 111, 112)',
                      'rgb(54, 132, 215)',
                      'rgb(255, 216, 76)',
                      'rgb(75, 182, 193)',
                      'rgb(153, 112, 235)',
                      'rgb(255, 169, 63)',
                      'rgb(255, 109, 122)',
                      'rgb(255, 111, 112)',
                      'rgb(54, 132, 215)',
                      'rgb(255, 216, 76)',
                      'rgb(75, 182, 193)',
                      'rgb(153, 112, 235)',
                      'rgb(255, 169, 63)',
                      'rgb(255, 109, 122)',
                    ]
                }
            ],
          }
        }
                  
      }
      

      //when form is submitted
      mySubmitHandler = (event) => {
        event.preventDefault();
        this.state.chartData.labels.push(this.state.budgetName);
        this.state.chartData.datasets[0].data.push(parseInt(this.state.budgetCost));

        let barChart = this.reference.chartInstance
          barChart.update();
          let pieChart = this.reference.chartInstance
          pieChart.update();
 ;
      }
      myChangeHandler = (event) => {
        this.setState({budgetName: event.target.value});
      }
      myChangeHandler1 = (event) => {
        this.setState({budgetCost: event.target.value});
      }


      componentDidMount() {
        console.log(this.chartReference); // returns a Chart.js instance reference
      }

      render() {
        return (
          <div>
         
          <section>
            <form onSubmit={this.mySubmitHandler}>
              <p>Enter Bill Name:</p>
              <input
                type='text'
                onChange={this.myChangeHandler}
              />
              <p>Enter Bill cost per month $:</p>
              <input
                type='text'
                onChange={this.myChangeHandler1}
              />
              <br></br>
              <input
                type='submit'
              />
            </form>
          </section>

          
            <div className="chart">
                  <Bar
                      data={this.state.chartData}
                      width={100}
                      height={200}
                      ref = {(reference) => this.reference = reference}
                      options={{
                          maintainAspectRatio: false,
                          title:{
                              display:true,
                              text:'Monthly Budget',
                          },
                          legend:{
                              display:true,
                              position: 'right'
                          },
                          scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                          }

                        
                        }
                  />
              </div>



              {/*
              <div className="chart">
                  <Pie
                      data={this.state.chartData}
                      width={100}
                      height={200}
                      ref = {(reference2) => this.reference = reference2}
                      options={{
                          maintainAspectRatio: false,
                          title:{
                              display:true,
                              text:'Monthly Budget',
                          },
                          legend:{
                              display:true,
                              position: 'right'
                          }
                          }}
                  />
              </div>
              <div className="chart">
                  <Doughnut
                      data={this.state.chartData}
                      width={100}
                      height={200}
                      ref = {(reference3) => this.reference = reference3}
                      options={{
                          maintainAspectRatio: false,
                          title:{
                              display:true,
                              text:'Monthly Budget',
                          },
                          legend:{
                              display:true,
                              position: 'right'
                          }
                          }}
                  />
              </div>
              */}


          </div>

        );
      }

  }
  
  export default BudgetPage;
  







