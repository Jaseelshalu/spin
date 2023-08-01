import React from 'react'
import photo from '../Asset/image/sha.png'
import dip from '../Asset/image/deologo.png'
import dhdc from '../Asset/image/dhdclogo.png'
import bg from '../Asset/image/bg.png'
import ST23002 from '../Asset/userImages/ST23002.jpg'
import ST23013 from '../Asset/userImages/ST23013.jpg'
import ST23015 from '../Asset/userImages/ST23015.jpg'
import ST23020 from '../Asset/userImages/ST23020.jpg'
import ST23021 from '../Asset/userImages/ST23021.jpg'
import ST23022 from '../Asset/userImages/ST23022.jpg'
import ST23026 from '../Asset/userImages/ST23026.jpg'

import './user.css'
const User = ({userProfile,handler}) => {
    // console.log(data,'ffffff');
  return (
    // <div className='user'>
    //     <div className="profile-container">
    //     <img src={photo}  />

        
    //     {/* <p class="turn">{{data.Turn}} <br><span>Turn</span> </p>
      
    //     <p class="sub"> {{subject.Program}}</p>  */}
    //     <div class="user-details">

    //         <p><strong>Name:</strong> {userProfile[0].Name}</p>
    //         <p><strong>Email:</strong> {userProfile[0].Email}</p>
    //         <p><strong>Address:</strong> {userProfile[0].Address}</p>
    //         <p><strong>Age:</strong> {userProfile[0].Age}</p>
    //         <p><strong>Phone:</strong> {userProfile[0].Phone}</p>
    //         <p><strong>Place:</strong> {userProfile[0].Place}</p>
    //         <p><strong>District:</strong> {userProfile[0].District}</p>
    //         <p><strong>Date of Birth:</strong> {userProfile[0].DOB}</p>
    //         <p><strong>Institution:</strong> {userProfile[0].Institution}</p>
    //         <p><strong>code:</strong> {userProfile[0].STNO}</p>
           
    //     </div>
    //     <div class="buttons">
    //      <button className="btn logout " onClick={()=>handler('')}> go</button>
    //     </div>

    // </div>
    // </div>
    <div className="view">
    <img src={bg} className="bg" alt="" />
    <div class="header">
        <img src={dhdc} alt="" />

        <img className="dip" src={dip} alt="" />

    </div>
    <div className="view-container">

        <div className="left">
            <img src='https://alshathibi.onrender.com/images/user-images/64c37b8c19f92c34eb8f068d.jpg' className="dhdclogo" alt="" />
            <p className="name">{userProfile[0].Name}</p>
            <p className="sub">{userProfile[0].Program}</p>
        </div>
        <div className="right">
            <div className="right-img">
            <img src= {photo} alt="" />
           
                <p className="round">الدورة النهائية</p>

            </div>

            <div className="info" dir="rtl">
                <p className="institution"><strong>الكلية:</strong> {userProfile[0].Institution}</p>
                <p className="place"> <strong>المكان:</strong> {userProfile[0].District}</p>
                <p className="email"><strong>الرموز:</strong> {userProfile[0].STNO}</p>
                <p className="district"><strong>الرواية:</strong> {userProfile[0].Program}</p>
                <p className="email" ><strong>النوبة:</strong> {userProfile[0].Turn} </p>

            </div>

        </div>
    </div>
    <div class="footer">
        <span onClick={()=>handler('')}>back</span>
    </div>
</div>
    
  )
}

export default User