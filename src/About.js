import React, { useState } from 'react'
import './all.css'
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiDotsHorizontal } from 'react-icons/bi';
import { change, dele } from './Store/DataSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { GrChapterAdd } from 'react-icons/gr';




const About = () => {
  const result = useSelector((state) => state.dataSlicing.viewdata);
  const [data, setdata] = useState(true)

  // console.log(result, '------------------------');

  const Navigate = useNavigate()
  const addpro = () => {
    Navigate('/addpro')
  }

  // const dispatch = useDispatch()
  // const handledelete = () => {
  //   dispatch(dele())
  //   setdata(false)
  //   console.log(change,'/////////////');
  // }
  return (
    <div className='backrount'>
      <h1 className='hedabout' >Projects</h1>
      <button onClick={addpro} className='adproject' ><GrChapterAdd id='icnav' /></button>
      <div className='myborder'>
        <img className='mypic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0S4Amg1beJEUhhsORR3HyraO9-5GWYtvHB2QDfPR_DHUXaqBQWFsgP0Dcg2MNm4gC4Kc&usqp=CAU'></img>
        {/* <BsFillPersonFill  /> */}
        <div> <FaReact id='icons' /> <SiJavascript id='icons' /> <IoLogoNodejs id='icons' /></div>
      </div>
      <div className='myname'>
        <p className='im'>i'm</p><br />
        <p className='imj'>jumail</p>
        <h3>im a web developer</h3>
      </div>
      {/* { data && */}
      <div className='carddiv' >
        {result.map((val) => {
          console.log(val, 'val...................');
          return (
            <div class="cardout" id='cardid'  >
              <img src={val.image} alt='' className='cardimg' />
              <form class="card-content">
                <p>{val.year}</p>
                <h2>{val.title}</h2>
                {/* <button className='delbt' onClick={handledelete} >Delete</button> */}
              </form>
            </div>
          )
        })}
      </div>
      {/* } */}
    </div>


  )
}

export default About
