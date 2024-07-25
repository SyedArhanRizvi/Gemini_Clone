import React from 'react'
import '../components/Navbar.css'
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { MdCircleNotifications } from "react-icons/md";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { MdAddTask } from "react-icons/md";

function Navbar() {
  return (
    <header>
      <nav>
        <div>
            <div className="logo"><img src="https://cdn2.iconfinder.com/data/icons/mixd/512/22_OLX-512.png" alt="" /></div>
            <div className="location"><input type="text" placeholder='Search Your City here..'/></div>
        </div>
        <div>
            <div className="search"><input type="text" placeholder='Find Cars, Mobile Phones, Laptops and more...'/></div>
            <div className="bg">
            <div className="voice"><FaMicrophoneAlt className='i1'/></div>
            <div className="glass"><FaSearchengin className='i2'/></div></div>
        </div>
        <div>
            <div className="lang"><select name="theme" id="">
                <option value="dark">English</option>
                <option value="light">Hindi</option>
                </select>
            </div>
            <div className="msg"><SiGooglemessages /></div>
            <div className="notification"><MdCircleNotifications /></div>
            <div className="account"><RiAccountPinCircleLine /></div>
            <div className="sell"><button>Sell<MdAddTask /></button></div>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
