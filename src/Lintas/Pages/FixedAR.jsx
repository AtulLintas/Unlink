import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FixedAR = () => {

  const [items, setItems] = useState([{ id: 1, name: '', price: '' }]);

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const list = [...items];
    const itemIndex = list.findIndex((item) => item.id === id);
    list[itemIndex][name] = value;
    setItems(list);
  };

  const handleAddClick = () => {
    const lastId = items[items.length - 1].id;
    setItems([...items, { id: lastId + 1, name: '', price: '' }]);
  };

  const handleRemoveClick = (id) => {
    const list = [...items];
    const itemIndex = list.findIndex((item) => item.id === id);
    list.splice(itemIndex, 1);
    setItems(list);
  };

  return (
    <div><h1>FixedAR</h1> 
    
    <div>
      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const idName = (columnName, rowIndex) => `${columnName}_${item.id}`;
            return (
              <tr key={item.id}>
                <td>
                  <input
                    type="text"
                    name="id"
                    id={idName('id', item.id)}
                    value={item.id}
                    readOnly
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    id={idName('name', item.id)}
                    value={item.name}
                    onChange={(e) => handleInputChange(e, item.id)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    id={idName('price', item.id)}
                    value={item.price}
                    onChange={(e) => handleInputChange(e, item.id)}
                  />
                </td>
                <td>
                  {items.length !== 1 && (
                    <button onClick={() => handleRemoveClick(item.id)}>Remove</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleAddClick}>Add Item</button>
    </div>
    </div>
  )
}

export default FixedAR