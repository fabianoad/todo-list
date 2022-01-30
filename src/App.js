import React from 'react';
import InputBox from './InputBox';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavbarComp from './NavbarComp';
import List from './List'


class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
        list: ['Clean up house', 'Go to supermarket']
    }
    this.handleNewItem = this.handleNewItem.bind(this)
    this.handleDeletion = this.handleDeletion.bind(this);
  }

  handleDeletion(event) {
      
      let itemTobeRemoved = event.target.parentNode.parentNode.firstChild.innerHTML
      let filteredArray = this.state.list.filter(item => item !== itemTobeRemoved);
      
      this.setState({
          list: filteredArray
      })
  }

  handleNewItem(e) {
    e.preventDefault()
    let newItem = e.target.item.value
    this.state.list.push(newItem)
    this.setState({
      list: this.state.list
    })
    e.target.item.value = ''
    
  }




  render() {
    return <Container fluid="md" className="bg-light col-5 mt-2 pb-4 rounded border p-3">
        <Row>
          <Col>
            <NavbarComp />
           <InputBox handleAddItem={this.handleNewItem} />
           <List listItem={this.state.list} deletion={this.handleDeletion} />
          </Col>
        </Row>
      </Container>
  }

}

export default App;
