import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import cx from "classnames";

const Todo = () => {
  const [todoItem, setTodoItem] = useState("");
  const [items, setItems] = useState([
    {
      id: 1234,
      message: "Buy Milk",
      done: false,
    },
  ]);

  const handleAdd = () => {
    if (todoItem) {
      setItems([
        {
          id: uuidv4(),
          message: todoItem,
          done: false,
        },
        ...items,
      ]);
      setTodoItem("");
    }
  };

  console.log(items);

  const handleToggle = (id) => {
    const _items = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });
    setItems(_items);
  };

  const handleDelete = (id) => {
    const updatedTodo = [...items].filter((item) => item.id !== id);
    setItems(updatedTodo);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Todo App</h1>

      <div>
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button type="button" onClick={() => handleAdd()}>
          Add
        </button>
      </div>
      <div className="text-lg font-bold">Not Completed</div>
      <ul>
        {items
          .filter(({ done }) => !done)
          .map(({ id, message, done }) => (
            <li key={id} className={cx("item", { done })}>
              <button onClick={() => handleToggle(id)}>DONE</button>
              {message}
              <button onClick={() => handleDelete(id)}>DELETE</button>
            </li>
          ))}
      </ul>
      <div className="text-lg font-bold">Completed</div>
      <ul>
        {items
          .filter(({ done }) => done)
          .map(({ id, message, done }) => (
            <li key={id} className={cx("item", { done })}>
              <button onClick={() => handleToggle(id)}>DONE</button>
              {message}
              <button onClick={() => handleDelete(id)}>DELETE</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Todo;
