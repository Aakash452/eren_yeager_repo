import { useDispatch } from 'react-redux';
import { setInputValue } from '../redux/store';

function ComponentB() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setInputValue(value));
  };

  return (
    <div>
      <label style={{fontSize:'20px'}} htmlFor="input">
        Input : 
      </label>
      <input style={{height:'3vh', width:'10vw', border:'1px solid white' , padding:'10px', borderRadius:'5px', margin:'10px' , fontSize:'20px'}} type="text" placeholder="Enter text here.." id="input" onChange={handleChange} />
    </div>
  );
}

export default ComponentB;
