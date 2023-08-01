
import React, { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { collection, getDocs, setDoc,doc,addDoc } from "firebase/firestore";
import { db } from './config/firebase';
import './App.css'
import sha from './Asset/image/sha.png'
import bg from './Asset/image/bg.png'
import User from './component/User';
const App = () => {
  const [userData,setUserData]=useState([])
  const [st,setST]=useState([])
  const [codes,setCodes]=useState([])
  const [num,setNum]=useState({})
  const [candidate,setCandidate]=useState([])
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [handler,setHandler]=useState('home')

    

  // const set=async()=>{
  //   const docRef = await addDoc(collection(db, "users"), {
  //     "Name": "رميس جمان",
  //     "Age": "21",
  //     "Place": "Koothuparamba",
  //     "Address": "Darul Hidaya Dars Mooriyad, Koothuparamba kannur ",
  //     "District": "كنور",
  //     "DOB": "2001-11-24",
  //     "Institution": "درس دار الهداية",
  //     "Email": "rameesjamanomy@gmail.com",
  //     "Phone": "9562334760",
  //     "STNO":"ST23020"
  //   });
  // }
  var data = [
    { option: 'ST23013', style:{ textColor:'#fff'}},
    { option: 'ST23002' , style:{ textColor:'#185260'} },
    { option: 'ST23022',  style:{ textColor:'#fff'}},
    { option: 'ST23026' , style:{ textColor:'#185260'}},
    { option: 'ST23015', style:{ textColor:'#fff'} },
    { option: 'ST23021' , style:{ textColor:'#185260'}},
    { option: 'ST23020', style:{ textColor:'#fff'}},
    { option: 'Al-Shathibi', style:{ textColor:'#185260'}},
   

  ]
  
  
  const bgData = [
    '#185260',
    '#fff'
  ]

 
  useEffect(() => {
    getUserData()
    // set()
  },[])
 

  
  useEffect(() => {
    getCandi()
    
  },[num])


  useEffect(() => {
   
    const allIds = userData.map((item) => item.STNO);
    const arrayOfObjects = allIds.map((option) => ({ option }));
    setCodes(arrayOfObjects);
  },[userData])

  const getnum=(f)=>{
    const num=codes[f]
    setNum(num)
    console.log(num.option,'hjk');
  
  }
    // const filterUser =()=>{
    //   for (let i = 0; i < codes.length; i++) {
    //     const filteredArray = userData.filter((element) => element !== codes[i]);
    //     setFilter(filteredArray);
    //   }
    // }
    const getUserData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const allData = querySnapshot.docs.map((doc) => doc.data());
      console.log(allData[0].STNO);
  
      setUserData(allData)
  
    }
    const getCodes = async () => {
      const querySnapshot = await getDocs(collection(db, "codes"));
      const allData = querySnapshot.docs.map((doc) => doc.data());
      console.log(allData,'fsduihsfih');
        

      setST(allData)
     


    }

  const handleSpinClick = () => {
    if (!mustSpin) {

      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      getnum(newPrizeNumber)
      setMustSpin(true);
    }
  }
  const getCandi = () => {
    console.log(userData,'fda');
    console.log(num,'fa');
    const filteredArray = userData.filter((item) => item.STNO === num.option );
   console.log(filteredArray,'fgsg');
    setCandidate(filteredArray)
    

  }
  
  const handlering=()=>{
   setHandler('user')
  //  set()
   
  }
  // const set=async()=>{
  //   const docRef = await addDoc(collection(db, "codes"), {
  //     code:num.option
  //   });
  // }
 
 
  return (
    
    <div className='spin'>
  {handler ==='user'?<User userProfile={candidate} handler={setHandler}/> :''}

        <img src={bg} className="bg" />

      <div className='spin-container'>
        <img src={sha} className='sha' />
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderColor='#35464a'
          radiusLineColor='#35464a'
          outerBorderWidth="3"
          fontSize='24'
          textColor='#fff'
          backgroundColors={bgData}
          radiusLineWidth='3'
          spinDuration='0.5'
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <div className='buttons'>
        <button onClick={handleSpinClick}>SPIN</button>
        <button onClick={handlering}>Confirm</button>
        </div>
    
      </div>

    </div>
  )
}

export default App



