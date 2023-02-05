import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './Item';

const ListArea = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

const TodoList = ({ todoItems, deleteItem, onToggle }) => {
  // console.log('todoItems: ', todoItems)
  return (
    <ListArea>
      {
        todoItems.map(({id, content, complete }) => (
          <Item
            key={id}
            id={id}
            content={content}
            complete={complete}
            deleteItem={deleteItem}
            onToggle={onToggle}
          />
        ))
      }
    </ListArea>
  )
}

TodoList.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired
    })
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;