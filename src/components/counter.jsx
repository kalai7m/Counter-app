import React, { Component } from 'react';

class Counter extends Component {
   
    state = {
        count: 0,
        tags: []
    }
    renderTags() {
        //conditional rendering
        const {tags} =this.state;
        if(tags.length === 0)
            return <p>No Tags in list</p>
        return <ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    render() {
        return (
            <React.Fragment>
                {this.state.tags.length===0 && "Please create new tag"}
                {this.renderTags()}
            </React.Fragment>
        );
    }
}
 
export default Counter;