import React, { Component } from 'react';
import './App.css';
import First from './first';
import Second from './second'; // Import your second component here

class MyComponent extends Component {
  state = {
    ans: '', // Will hold 'Yes...' or 'NO...'
  };

  handleclick = () => {
    const confirmed = window.confirm('Are you sure you want to Exit?');

    if (confirmed) {
      // Perform the action when "Yes" is clicked
      this.setState({ ans: 'Quiting...' });
      // You can navigate to the first component here
      // window.location.href = 'http://www.amazon.in';
    } else {
      // Perform the action when "No" is clicked
      this.setState({ ans: 'Exit canceled...' });
      // Render the second component here
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleclick}>Exit</button>
        {this.state.ans === 'Quiting...' ? <First /> : <Second />}
      </div>
    );
  }
}

export default MyComponent;
