import React from 'react';

import { Button, Form } from 'react-bootstrap';


class InputBox extends React.Component { 
    
 
    render() {
        return <React.Fragment>
                    <Form onSubmit={this.props.handleAddItem} method="POST" autocomplete="off">
                        <Form.Group>
                            <Form.Label className="text-light">Item</Form.Label>
                            <Form.Control type="text" name="item" placeholder="Enter item" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Form>
                </React.Fragment>
    }

}

export default InputBox;