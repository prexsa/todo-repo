import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  padding: 5px 30px 15px;
  display: flex;
  column-gap: 10px;
  border-bottom: 1px solid #ccc;
`

const SpanElement = styled.span`
  color: ${props => props.active ?  '#3C87FF' : 'inherit'};
  border-bottom: ${props => props.active ?  '1px solid #3C87FF' : '1px solid transparent'};
  &:hover {
    cursor: pointer;
  }
`

const ClearButton = styled.button`
  margin-left: auto;
  border: none;
  opacity: 0.6;
  outline: none;
  color: #fff;
  border-radius: 4px;
  transition: transform 0.25s ease;
  background: linear-gradient(135deg, #1798fb 0%, #2d5cfe 100%);
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.93);
  }
`

const Filters = ({ filterItems, clearAll }) => {
  const [active, setActive] = useState("all");

  const handleSelect = (name) => {
    setActive(name)
    let isTaskCompleted = null;
    if(name === 'pending') {
      isTaskCompleted = false;
    } else if (name === 'complete') {
      isTaskCompleted = true;
    } else {
      isTaskCompleted = null;
    }
    filterItems(isTaskCompleted);
  }

  return (
    <FilterWrapper>
      <SpanElement onClick={() => handleSelect('all')} active={active === 'all' ? true : false}>All</SpanElement>
      <SpanElement onClick={() => handleSelect('pending')} active={active === 'pending' ? true : false}>Pending</SpanElement>
      <SpanElement onClick={() => handleSelect('complete')} active={active === 'complete' ? true : false}>Complete</SpanElement>
      <ClearButton onClick={clearAll}>Clear all</ClearButton>
    </FilterWrapper>
  )
}

Filters.propTypes = {
  filterItems: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired,
}

export default Filters;
