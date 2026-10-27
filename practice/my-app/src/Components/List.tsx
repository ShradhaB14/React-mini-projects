const List = () =>{
  const fruits = ['Apple', 'Mango', 'Banana', 'Kiwi'];
  
  return(<>
  <h1>List and Map example </h1>
  <div>
    <ul>
      {fruits.map((item, index)=><li key={index}>{ item} </li>)}
    </ul>
  </div>
  </>)
}
export default List;