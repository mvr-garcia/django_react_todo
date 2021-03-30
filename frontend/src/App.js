import React, { Component } from 'react';

const list = [
    {
        "id":1,
        "title":"My 1st ToDo",
        "body":"This is an example ToDo to my app."
    },
    {
        "id":2,
        "title":"Learn Containers",
        "body":"I have to learn about Containers and how to use Docker and Kubernets."
    },
    {
        "id":3,
        "title":"30' Exercise",
        "body":"Don't foget the exercise"
    }
]

class App extends Component {
    constructor(props)  {
        super(props);
        this.state = { list };
    }

    render()    {
        return (
            <div>
                {this.state.list.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
