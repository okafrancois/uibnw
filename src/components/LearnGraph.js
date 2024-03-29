import React, {Component} from 'react';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

class LearnGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "name": "Mon",
                    "uv": 0,
                    "amt": 2400
                },
                {
                    "name": "Tue",
                    "uv": 1.5,
                    "amt": 2210
                },
                {
                    "name": "Wed",
                    "uv": 2.5,
                    "amt": 2290
                },
                {
                    "name": "Thu",
                    "uv": 1,
                    "amt": 2000
                },
                {
                    "name": "Fri",
                    "uv": 4,
                    "amt": 2181
                },
                {
                    "name": "Sat",
                    "uv": 3,
                    "amt": 2500
                },
                {
                    "name": "Sun",
                    "uv": 2,
                    "amt": 2100
                }
            ]
        }
    }
    render() {
        return (
           <div>
               <LineChart
                   width={450}
                   height={250}
                   data= {this.state.data}
                   margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
               >
                   <XAxis dataKey="name" />
                   <YAxis />
                   <Tooltip />
                   <CartesianGrid stroke="#f5f5f5" vertical={false}/>
                   <Line type="monotone" dataKey="uv" stroke="#000" yAxisId={0} />
               </LineChart>
           </div>

        );
    }
}

export default LearnGraph;
