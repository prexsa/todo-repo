import { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /*background: #ced5e0;*/
  color: black;
  font-size: 16px;
  padding: 15px 5px;
  margin: auto;
  width: 85%;
  border-bottom: 1px solid #ccc;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  &:hover {
    cursor: pointer;
  }
`

const ListItem = styled.div`
  width: 90%;
  display: flex;
  column-gap: 6px;
`

const ItemPTag = styled.p`
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  line-height: 1.1em;
  text-align: left;
  text-decoration: ${props => props.complete ? 'line-through' : ''}
`

const ItemControl = styled.div`
  color: #4A5568;
  margin: 0 2px;
  border-radius: 3px;
  height: fit-content;
  font-size: 11px;
  padding: 2px 5px;
  &:hover {
    border: 1px solid #4A5568;
    cursor: pointer;
  }
`

const DeleteTxt = styled(ItemControl)`
  background: #f8fafc;
  border: 1px solid #ced5e0;
`

const EditTxt = styled(ItemControl)`
  // background: #f8fafc;
  border: 1px solid transparent;
`

const Item = ({ id, content, complete, deleteItem, onToggle, onEditSelect }) => {

  const handleDelete = useCallback(() => {
    deleteItem(id);
  }, [id, deleteItem]);

  const handleOnToggle = useCallback(() => {
    onToggle(id)
  }, [id, onToggle])

  const handleTaskEdit = useCallback(() => {
    onEditSelect(id)
  }, [id, onEditSelect])

  return (
    <ItemArea>
      <ListItem key={id}>
        <Checkbox type="checkbox" checked={complete} onChange={handleOnToggle} />
        <ItemPTag complete={complete}>{content}</ItemPTag>
      </ListItem>
      <EditTxt onClick={handleTaskEdit}>edit</EditTxt>
      <DeleteTxt onClick={handleDelete}>del</DeleteTxt>
    </ItemArea>
  )
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEditSelect: PropTypes.func.isRequired,
}

export default Item;