import React, { Component } from 'react'
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    LineChart
  } from "recharts";
class Rechart extends Component{
    state = 
    {
       data : [
        { name: "Page A", pv: 2400, amt: 2400 },
        { name: "Page B", pv: 1398, amt: 2210 },
        { name: "Page C", pv: 9800, amt: 2290 },
        { name: "Page D", pv: 3908, amt: 2000 },
        { name: "Page E", pv: 4800, amt: 2181 },
        { name: "Page F", pv: 3800, amt: 2500 },
        { name: "Page G", pv: 4300, amt: 2100 }
      ] }
    render(){
        var item = this.state.data.name;
        

        return(
            <div>
                <center>
                <LineChart width={700} height={600} data={this.state.data}>
                        <XAxis dataKey="name"/> <YAxis/> <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" /> <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                    </LineChart>
                </center>
            </div>
        );
        }
    }
export default Rechart;