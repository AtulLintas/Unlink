import React, { useState } from 'react'
import '../Lintas.css'

const Dashboard = () => {

  const [items, setItems] = useState([
    { name: '', price: '' },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...items];
    list[index][name] = value;
    setItems(list);
  };

  const handleAddClick = () => {
    setItems([...items, { name: '', price: '' }]);
  };

  const handleRemoveClick = (index) => {
    const list = [...items];
    list.splice(index, 1);
    setItems(list);
  };

  return (
    <div className='Bbox'> <h5>Dashboard</h5> 
    
    <div>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    value={item.price}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  {items.length !== 1 && (
                    <button onClick={() => handleRemoveClick(index)}>Remove</button>
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

export default Dashboard