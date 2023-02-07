import { useState, useCallback } from 'react';
import { getItemsFromLS, saveItemsToLS } from './service/Service';
import Input from './components/Input';
import Filters from './components/Filters';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState(getItemsFromLS('item') || []);
  const [editTask, setEditTask] = useState({});

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

  const handleFilters = useCallback(complete => {
    const todoItems = getItemsFromLS('item');
    let updatedTodoItems;
    if(complete === null) {
      updatedTodoItems = todoItems;
    } else {
      updatedTodoItems = todoItems.filter(item => item.complete === complete);
    }
    setTodoItems(updatedTodoItems)
  }, [])

  const handleOnEditSelect = useCallback((id) => {
    const task = todoItems.filter(item => item.id === id);
    setEditTask(task[0])
  }, [todoItems])

  const handleUpdateTask = useCallback((id, content) => {
    todoItems.forEach(item => {
      if(item.id === id) {
        item.content = content;
      }
      return item;
    })
    setEditTask({});
    setTodoItems([...todoItems]);
    saveItemsToLS('item', todoItems);
  }, [todoItems])

  const handleClearAll = useCallback(() => {
    setTodoItems([]);
    saveItemsToLS('item', [])
  }, [])

  return (
    <div className="app">
      {/*<header>
        Todo List App
      </header>*/}
      <main>
        <h3>Todo List App</h3>
        <Input
          addItem={handleAddItem}
          task={editTask}
          updateTask={handleUpdateTask}
        />
        <Filters
          filterItems={handleFilters}
          clearAll={handleClearAll}
        />
        <TodoList
          todoItems={todoItems}
          deleteItem={handleDeleteItem}
          onToggle={handleToggleComplete}
          onEditSelect={handleOnEditSelect}
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
