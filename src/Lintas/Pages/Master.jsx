import React,{useState} from 'react'

export const Master = () => {

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
          {/* First fixed row */}
          <tr>
            <td>
              <input type="text" name="id" id="fixed_row_1_id" value="1" readOnly />
            </td>
            <td>
              <input type="text" name="name" id="fixed_row_1_name" value="Fixed Row 1" readOnly />
            </td>
            <td>
              <input type="number" name="price" id="fixed_row_1_price" value="10" readOnly />
            </td>
            <td></td>
          </tr>
          {/* Second fixed row */}
          <tr>
            <td>
              <input type="text" name="id" id="fixed_row_2_id" value="2" readOnly />
            </td>
            <td>
              <input type="text" name="name" id="fixed_row_2_name" value="Fixed Row 2" readOnly />
            </td>
            <td>
              <input type="number" name="price" id="fixed_row_2_price" value="20" readOnly />
            </td>
            <td></td>
          </tr>
          {/* Dynamic rows */}
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
                  {items.length - 1 === item.id && (
<button onClick={handleAddClick}>Add</button>
)}
</td>
</tr>
);
})}
</tbody>
</table>
</div>
  )
}

export const Master1 = () => {
  return (
    <div><h1>Master1</h1></div>
  )
}
export const Master2 = () => {
  return (
    <div> <h1>Master2</h1> </div>
  )
}
export const Master3 = () => {
  return (
    <div><h1>Master3</h1></div>
  )
}
export const Master4 = () => {
  return (
    <div><h1>Master3</h1></div>
  )
}
