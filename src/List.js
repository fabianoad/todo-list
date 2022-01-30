import React from 'react';
import { Container, ListGroup, Button, Table} from 'react-bootstrap';



class List extends React.Component {


    render() {
        
        return <Container fluid="text-dark bg-light rounded mt-4">

                    <ListGroup as="ul">
                        
                        {
                            this.props.listItem.map((item, i) => { 
                                return <Table striped key={i}>
                                            <tbody className="bg-dark text-light">
                                                <tr>
                                                    <td className="col-12 p-0 pt-3 pl-4 font-weight-bold" key={i}>{item}</td>
                                                    <td> <Button onClick={this.props.deletion} variant="danger" className="ml-0 col-12">Delete</Button>{' '}</td>
                                                </tr>
                                            </tbody>
                                
                               
                                </Table>
                            })

                        }
                        
                    </ListGroup>

           
        </Container>
    }


}

export default List;