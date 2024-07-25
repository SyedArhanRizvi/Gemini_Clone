import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./API";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Addvetisement from "./components/Addvetisement";
import Card1 from "./components/Card1";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
function App() {
  // useEffect(()=>{
  //   getData().then((prod)=>{
  //     console.log(prod);
  //   })
  // }, [])

  return (
    <>
      <section>
        <Navbar></Navbar>
        <Navbar2></Navbar2>
        <Addvetisement></Addvetisement>
      </section>
      <section className="s2">
        <div className="main1">
          <Card1
            img={
              "https://live.staticflickr.com/8467/8427391833_c3bfebb5c7_b.jpg"
            }
            rate={"$250"}
            name={"Five Seater Sofa Set"}
            timing={"5 Days Ago"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.S-5fNx3GYBF431cM8gatGwHaFj?rs=1&pid=ImgDetMain"
            }
            rate={"$500"}
            name={"Refurbrish IPhones"}
            timing={"Yesterday"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.IWftxWGLzrW2luoADnpOqAHaFj?rs=1&pid=ImgDetMain"
            }
            rate={"$2500"}
            name={"Second Hand Bike"}
            timing={"3 Days Ago"}
          ></Card1>

          <Card1
            img={
              "https://i.pinimg.com/originals/7d/d0/e7/7dd0e725b8c296c3e6414a3307168cf3.jpg"
            }
            rate={"$8000"}
            name={"Hyundai i10"}
            timing={"Today"}
          ></Card1>
        </div>

        <div className="main2">
          <div className="heading">
            <h1>Fresh recommendations</h1>
          </div>
          <Card1
            img={
              "https://th.bing.com/th/id/OIP.1i_rPZa9kJ6CoYUYoJD1VAHaFj?rs=1&pid=ImgDetMain"
            }
            rate={"$150"}
            name={"Bicycle"}
            timing={"Yesterday"}
          ></Card1>

          <Card1
            img={
              "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/jHYAAOSwqKFdG11m/$_86.JPG"
            }
            rate={"$850"}
            name={"Jupiter Scooty"}
            timing={"Today"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.MIHeMkidkIJ0LDGjoyA48AHaE1?rs=1&pid=ImgDetMain"
            }
            rate={"$2000"}
            name={"Iphone 11 Pro"}
            timing={"3 Days Ago"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.tlmRVH00_GehF5phjDN9CwHaFj?rs=1&pid=ImgDetMain"
            }
            rate={"$90000"}
            name={"Volkswagen Version 12"}
            timing={"Today"}
          ></Card1>
          <Card1
            img={
              "https://live.staticflickr.com/8467/8427391833_c3bfebb5c7_b.jpg"
            }
            rate={"$250"}
            name={"Five Seater Sofa Set"}
            timing={"5 Days Ago"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.rY2LHuQchiq4o-JxjcLwmQAAAA?rs=1&pid=ImgDetMain"
            }
            rate={"$5500"}
            name={"KTM"}
            timing={"Yesterday"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.laMsc_XePGL3W1K1yDK5ZwHaE8?rs=1&pid=ImgDetMain"
            }
            rate={"$500"}
            name={"Five Seater Sofa"}
            timing={"10 Days Ago"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.MNRd2cQZrlicoDn_pF7djwHaFH?rs=1&pid=ImgDetMain"
            }
            rate={"$100"}
            name={"90s Redio"}
            timing={"Today"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.Eavse6YzjLI-LNhkWdB13gHaFj?w=1024&h=768&rs=1&pid=ImgDetMain"
            }
            rate={"$1250"}
            name={"Dining Table"}
            timing={"6 Days Ago"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.WjC0__BEemrALblAYWRysQAAAA?rs=1&pid=ImgDetMain"
            }
            rate={"$7800"}
            name={"Royal Enfield Bullet"}
            timing={"Yesterday"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.1gMUFcAGh8IcDeqU26vA2AAAAA?rs=1&pid=ImgDetMain"
            }
            rate={"$2500"}
            name={"Honda Shine"}
            timing={"13 Days Ago"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.ss-uNFJdG2EyNP7kXQiCjwHaE8?w=768&h=512&rs=1&pid=ImgDetMain"
            }
            rate={"$800"}
            name={"Realme 12 Pro"}
            timing={"Today"}
          ></Card1>
          <Card1
            img={
              "https://i.pinimg.com/originals/f6/f1/3a/f6f13a0da2247c8663301a2b913b6c3c.jpg"
            }
            rate={"$13250"}
            name={"Ford Endevor Raptor"}
            timing={"3 Days Ago"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.jADZID9ZiMRbnSNU_WauIQHaE5?rs=1&pid=ImgDetMain"
            }
            rate={"$122500"}
            name={"Ford Eco Sport"}
            timing={"Yesterday"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.ltjQrkLRMXne7Oc1HhHDNwHaEw?rs=1&pid=ImgDetMain"
            }
            rate={"$2500"}
            name={"Electric Scooty"}
            timing={"3 Days Ago"}
          ></Card1>

          <Card1
            img={"https://i.ytimg.com/vi/Qzt-2VNgvao/maxresdefault.jpg"}
            rate={"$8000"}
            name={"Pulsor ZX-15"}
            timing={"Today"}
          ></Card1>

          <Card1
            img={
              "https://i.pinimg.com/originals/7d/d0/e7/7dd0e725b8c296c3e6414a3307168cf3.jpg"
            }
            rate={"$8000"}
            name={"Hyundai i10"}
            timing={"Today"}
          ></Card1>
          <Card1
            img={
              "https://live.staticflickr.com/8467/8427391833_c3bfebb5c7_b.jpg"
            }
            rate={"$250"}
            name={"Five Seater Sofa Set"}
            timing={"5 Days Ago"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.T0C7kIhW5MhEoCFzcj7-VgHaFj?rs=1&pid=ImgDetMain"
            }
            rate={"$12500"}
            name={"Hyundai Grand i-10"}
            timing={"Yesterday"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.gwudWmvmhWFZubgu9Ys-5AHaFj?w=1024&h=768&rs=1&pid=ImgDetMain"
            }
            rate={"$500"}
            name={"Real,e 10"}
            timing={"3 Days Ago"}
          ></Card1>

          <Card1
            img={
              "https://th.bing.com/th/id/OIP.2k7b_-4Z2kltMJYIIoeBggHaFT?rs=1&pid=ImgDetMain"
            }
            rate={"$88000"}
            name={"Swift"}
            timing={"Today"}
          ></Card1>
        </div>
      </section>
      <footer className="footer">
        <section className="footer1">
          <div className="olxImg">
            <div className="img">
              <img
                src="https://statics.olx.in/external/base/img/phone-app.png"
                alt=""
              />
            </div>
            <div className="heading1">
              <h1>TRY THE OLX APP</h1>
              <p>
                Buy, sell and find just about anything using the app on your
                mobile.
              </p>
            </div>
          </div>
          <div className="olxPlay">
            <div className="btns">
              <h3>GET YOUR APP TODAY</h3>
              <button>Google Play</button>
              <button>App Store</button>
            </div>
          </div>
        </section>

        <section className="footer2">
          <div className="fdiv">
            <h3>POPULAR LOCATIONS</h3>
            <br />
            <p>Kolkata</p>
            <p> Mumbai</p>
            <p> Chennai</p>
            <p> Pune</p>
          </div>
          <div className="fdiv">
          <h3>TRENDING LOCATIONS</h3>
            <br />
            <p>Bhubaneshwar</p>
            <p> Hyderabad</p>
            <p> Chandigarh</p>
            <p> Nashik</p>
          </div>
          <div className="fdiv">
          <h3>ABOUT US</h3>
            <br />
            <p>Contact Us</p>
            <p> Tech@OLX</p>
            
          </div>
          <div className="fdiv">
          <h3>OLX</h3>
            <br />
            <p>Blog</p>
            <p> Help</p>
            <p> Sitemap</p>
            <p> Legal & Privacy information</p>
            <p> Vulnerability Disclosure Program</p>
          </div>
          <div className="fdiv">
          <h3>FOLLOW US</h3>
            <br />
            <span><IoLogoYoutube /></span>
            <span><FaInstagramSquare /></span>
            <span><FaTwitter /></span>
            <span><FaFacebook /></span>
          </div>
        </section>

        <section className="footer3">
          <div className="f5div">
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1" alt="" />
          </div>
          <div className="f4div"><img src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="" /></div>
          <div className="f3div">
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1" alt="" />
          </div>
          <div className="f3div">
            <img src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1" alt="" />
          </div>
          <div className="f3div"><img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1" alt="" /></div>
          <div className="f3div"><img src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1" alt="" /></div>
          <div className="copyRigt">
            <p>All rights reserved © 2006-2024 OLX</p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
