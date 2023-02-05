import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const InputForm = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: inherit
`

const SubmitButton = styled.button`
  width: 100%;
  /*background-color: #4299e1;
  color: white;
  font-size: 18px;
  padding: 4px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;*/
  visibility: hidden
`

const FormArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  color: white;
  text-align: center;
`

const Form = styled.form`
  width: 100%;
`

const Input = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if(inputValue.trim() === '') return;
    const item = {
      id: uuidv4(),
      content: inputValue,
      complete: false
    }
    addItem(item);
    setInputValue('');
    e.target.reset();
  }

  const handleChange = e => setInputValue(e.target.value);

  return (
    <FormArea>
      <Form onSubmit={handleSubmit}>
        <InputForm
          onChange={handleChange}
          input={inputValue}
          placeholder="Add a task"
        />
          <SubmitButton type="submit">Add</SubmitButton>
      </Form>
    </FormArea>
  )
}

Input.propTypes = {
  addItem: PropTypes.func.isRequired,
}

export default Input;