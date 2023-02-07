import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './Item';

const ListArea = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

const Div = styled.div`
  margin-top: 15px;
`

const TodoList = ({ todoItems, deleteItem, onToggle, onEditSelect }) => {
  // console.log('todoItems: ', todoItems)

  return todoItems.length <= 0 ? <Div>You don't have any tasks</Div>
  :
  (
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
            onEditSelect={onEditSelect}
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
  onEditSelect: PropTypes.func.isRequired,
};

export default TodoList;