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

/*const DeleteButton = styled.button`
  background: #ced5e0;
  border: 1px solid #ced5e0;
  color: #4A5568;
  // width: 10%;
  // padding: 10px;
  // margin-left: 15px;
  border-radius: 3px;
  height: fit-content;
`*/

const DeleteTxt = styled.div`
  background: #f8fafc;
  border: 1px solid #ced5e0;
  color: #4A5568;
  border-radius: 3px;
  height: fit-content;
  font-size: 11px;
  padding: 2px 5px;
  &:hover {
    border: 1px solid #4A5568;
    cursor: pointer;
  }
`

const Item = ({ id, content, complete, deleteItem, onToggle }) => {

  const handleDelete = useCallback(() => {
    deleteItem(id);
  }, [id, deleteItem]);

  const handleOnToggle = useCallback(() => {
    onToggle(id)
  }, [id, onToggle])

  return (
    <ItemArea>
      <ListItem key={id}>
        <input type="checkbox" checked={complete} onChange={handleOnToggle} />
        <ItemPTag complete={complete}>{content}</ItemPTag>
        {/*<p
          style={{textDecoration: complete ? "line-through": ""}}
          onClick={handleOnToggle}
        >{content}</p>*/}
      </ListItem>
      <DeleteTxt onClick={handleDelete}>delete</DeleteTxt>
    </ItemArea>
  )
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default Item;