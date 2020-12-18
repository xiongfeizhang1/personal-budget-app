import React, {Component} from 'react';

import {Bar, Pie, Donut} from 'react-chartjs-2'

class Chart extends Component{
    constructor(props){
        super(props);



            
    /*
    let budgetName = [];
    let budgetCost = [];

    axios.get(http://64.227.4.228.xip.io:3001/)
        .then(res =>) {
            for (const dataObj of res.data.data){
                budgetName.push(dataObj.name)
                budgetCost.push(parseInt(dataObj.cost))
            }
        }
     */


        this.state = {
            chartData:{
                labels: ['Electricity','Netflix','Gas', 'Rent'],
                datasets:[
                    {
                        label:'Cost in $',
                        data:[
                            40,
                            20,
                            60,
                            400
                        ],

                    }
                ],

            }
        }
    }
   

   
   
    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={200}
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
        )
    }
}

export default Chart;