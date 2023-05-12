import { useSelector } from 'react-redux';

function ComponentC() {
  const inputValue = useSelector((state) => state);

  return (
    <div style={{fontSize:'20px'}}>
      <p>Input value: {inputValue}</p>
    </div>
  );
}

export default ComponentC;
