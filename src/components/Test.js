import React, { Component } from 'react'

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a:10
    }
    console.log('Constructor')
  }
  componentDidMount() {
    console.log('cdd')
    // API istekleri burda gerceklestirilir
    this.setState({
      a:20
    })
  }

  shouldComponentUpdate() {
    console.log('shu')
    return false
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('cdup')
  }
  
  
  render() {
    console.log('Render')

    return (
      <div>
        
      </div>
    )
  }
}

export default Test;
