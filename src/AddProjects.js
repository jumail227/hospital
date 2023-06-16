import React, { useState } from 'react'
import './all.css'
import { useSelector, useDispatch } from 'react-redux'
import { change } from './Store/DataSlice';
import { useNavigate } from 'react-router-dom';
import { MdOutlineLibraryAddCheck } from 'react-icons/md';

import FileBase64 from 'react-file-base64'



const AddProjects = () => {

  const Navigate = useNavigate()
  const result = useSelector((state) => state.dataSlicing.viewdata)
  console.log(result, '........sd........');
  const dispatch = useDispatch()
  const [viewdata, setViewdata] = useState({})
  console.log(viewdata, 'viewdata');
  const [error, setError] = useState(true);

  const handlechange = (event) => {
    event.preventDefault()
    setViewdata({ ...viewdata, [event.target.name]: event.target.value })
    console.log(viewdata);
    setSelectedYear(event.target.value);
    setError(false)
  }
  const handlesubmit = (event) => {
    event.preventDefault()
  //   dispath(change(viewdata))
  //   Navigate('/')
  if (!error) {
    dispatch(change(viewdata));
    Navigate('/');
  } else {
    // Set error message
    setError(true)
  console.log('error');
  }

     }
  
  const [selectedYear, setSelectedYear] = useState('');
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const options = [];
    for (let year = startYear; year <= currentYear; year++) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return options;
  };
  return (
    <div className='backrount'>
      <form onSubmit={handlesubmit}>
        <h1 className='head' id='adproj'>Add Projects</h1>
        <div class="cardpro" id='cardap'>
          <div class="card-content">
            <input placeholder='Title' id='inputty' type='text' onChange={handlechange} name='title' required value={viewdata.title} />
            <select onChange={handlechange} id='inputty' name='year' value={viewdata.year} required >
              <option value="" >Select a year</option>
              {generateYearOptions()}
            </select>
            {/* <input id='inputty' placeholder='image link   ' onChange={handlechange} name='img' value={viewdata.img} required ></input><br /> */}
<div className='brows'>
            <FileBase64
multiple={ false }
onDone={(res)=>{
console.log(res.base64);
setViewdata({...viewdata,image:res.base64})
}} 
/>
</div>
            {/* {error && <p>Enter valid data</p>} */}
            <button className='sub' type='submit'><MdOutlineLibraryAddCheck/></button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddProjects
