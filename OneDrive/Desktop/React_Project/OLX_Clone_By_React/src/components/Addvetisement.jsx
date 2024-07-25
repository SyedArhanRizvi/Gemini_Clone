import React from 'react'
import { RxCross2 } from "react-icons/rx";
import '../components/Addvetisement.css'
function Addvetisement() {
  return (
    <div className='addTi'>
      <p>Advertisement</p>
      <div className="addBody">
        <div className="title">
            <h3>Sponsored Content</h3>
            <h3>Adds by Panjetani Buildwells <RxCross2 className='cut'/></h3>
        </div> <hr />
        <div className="cards">
            <div className="c1">
                <div className="img"><img src="https://th.bing.com/th/id/OIP.N1-DWwU_7btGTjZBNbRehgHaFj?rs=1&pid=ImgDetMain" alt="" /></div>
                <div className="details">
                    <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit Nostrum  et ipsa eaque dolor.</b></p>
                </div>
                <div className="cardBtns">
                    <div><p>Part Time Jobs</p></div>
                    <div className="btn"><button>Know More</button></div>
                </div>
            </div>
            <div className="c1">
                <div className="img"><img src="https://th.bing.com/th/id/OIP.DUAuBFbKRQTtI4DUkVe-5AHaE7?rs=1&pid=ImgDetMain" alt="" /></div>
                <div className="details">
                    <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et ipsa eaque dolor.</b></p>
                </div>
                <div className="cardBtns">
                    <div><p>Part Time Jobs</p></div>
                    <div className="btn"><button>Know More</button></div>
                </div>
            </div>
            <div className="c1">
                <div className="img"><img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/9C50/production/_118961004_mediaitem118965808.jpg" alt="" /></div>
                <div className="details">
                    <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et ipsa eaque dolor.</b></p>
                </div>
                <div className="cardBtns">
                    <div><p>Part Time Jobs</p></div>
                    <div className="btn"><button>Know More</button></div>
                </div>
            </div>
            <div className="c1">
                <div className="img"><img src="https://th.bing.com/th/id/OIP.hlhC0L07E6Zfiek0L_kcAAHaFj?rs=1&pid=ImgDetMain" alt="" /></div>
                <div className="details">
                    <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et ipsa eaque dolor.</b></p>
                </div>
                <div className="cardBtns">
                    <div><p>Part Time Jobs</p></div>
                    <div className="btn"><button>Know More</button></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Addvetisement
