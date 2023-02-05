import { useState, useCallback } from 'react';
import { getItemsFromLS, saveItemsToLS } from './service/Service';
import Input from './components/Input';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState(getItemsFromLS('item') || []);

  const handleAddItem = useCallback(item => {
    const items = [
      {
        id: item.id,
        content: item.content,
        complete: item.complete
      },
      ...todoItems
    ]
    setTodoItems(items);
    saveItemsToLS('item', items)
  }, [todoItems])

  const handleDeleteItem = useCallback(id => {
    const updatedTodoItems = todoItems.filter(item => item.id !== id);
    setTodoItems(updatedTodoItems);
    saveItemsToLS('item', updatedTodoItems)
  }, [todoItems])

  const handleToggleComplete = useCallback(id => {
    const item = todoItems.find(item => item.id === id)
    item.complete = !item.complete;
    setTodoItems([...todoItems])
    saveItemsToLS('item', todoItems)
  }, [todoItems])

  return (
    <div className="app">
      <header>
        Todo List App
      </header>
      <main>
        <Input addItem={handleAddItem} />
        <TodoList
          todoItems={todoItems}
          deleteItem={handleDeleteItem}
          onToggle={handleToggleComplete}
        />
      </main>
      <footer>
        <img alt="foot-clan-logo" src="./footclan_logo.png" />
        the foot clan is here
      </footer>
    </div>
  );
}

export default App;
