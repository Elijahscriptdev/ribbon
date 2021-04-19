import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

const FormContainer = () => {
  return (
    <div className='my-3'>
      <div className='form-header'>
        <h3>Select Currency:</h3>
      </div>
      <Form className='p'>
        <FormGroup className='row'>
          <Input
            type='select'
            name='select'
            id='exampleSelect'
            className='col-3 ml-3 select'
          >
            <option>AFYA</option>
            <option>ZAR</option>
          </Input>
          <Input
            type='text'
            name='text'
            id='exampleSearch'
            placeholder='0.000000000001'
            className='col-8 input'
          />
        </FormGroup>

        <div className='button'>
          <Button>SEND</Button>
          <Button>RECEIVE</Button>
        </div>
      </Form>
    </div>
  );
};

export default FormContainer;
