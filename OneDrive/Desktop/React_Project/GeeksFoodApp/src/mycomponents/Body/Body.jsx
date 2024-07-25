import './Body.css'
import Card from './Card.jsx';

export default function Body() {
    return (
        <div className="body">
            <div className="hero-section">
                <div className="content">

                    <h1 id='hfirst'>Let us find you</h1>
                    <h1 id='hsecond'>Forever Food</h1>
                    <p id='textp'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br></br> Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    <div className="btn-group">
                        <button className='btn'>Serarch Now</button>
                        <button className='btn'>Know More </button>
                    </div>
                </div>
            </div>
            <div className="demo-section">
                <div className="demo-item item1">
                    <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="demo" />
                </div>
                <div className="demo-item item2">
                    <div className="item2-content">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                            Get in Touch</p>
                        <button id='gettouchbtn'>Get in Touch</button>
                    </div>
                </div>
            </div>
            <div className="card-section">
                <Card
                    Message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque perspiciatis iure! Animi quaerat earum libero quos vitae, nam dolorum labore porro facere facilis ipsa! Repellat asperiores facere incidunt modi Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque perspiciatis iure! Animi quaerat earum libero quos vitae, nam dolorum labore porro facere facilis ipsa! Repellat asperiores facere incidunt modi..'
                
                    image="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    name="John Doe"
                    designation="Software Engineer"
                />
                <Card
                    Message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque perspiciatis iure! Animi quaerat earum libero quos vitae, nam dolorum labore porro facere facilis ipsa! Repellat asperiores facere incidunt modi.'
                    image="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    name="Jane Smith"
                    designation="SEO"
                />
                <Card
                    Message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque perspiciatis iure! Animi quaerat earum libero quos vitae, nam dolorum labore porro facere facilis ipsa! Repellat asperiores facere incidunt modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque perspiciatis iure! Animi quaerat earum libero quos vitae, nam dolorum labore porro facere facilis ipsa! Repellat asperiores facere incidunt modi.'
                    image="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    name="John Doe"
                    designation="Software Engineer"
                />
                <Card
                    Message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque perspiciatis iure! Animi quaerat earum libero quos vitae, nam dolorum labore porro facere facilis ipsa! Repellat asperiores facere incidunt modi.'
                    image="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    name="Jane Smith"
                    designation="QA"
                />
                <Card
                    Message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque perspiciatis iure! Animi quaerat earum libero quos vitae, nam dolorum labore porro facere facilis ipsa! Repellat asperiores facere incidunt modi.'
                    image="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    name="John Doe"
                    designation="Software Engineer"
                />
                <Card
                    Message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque perspiciatis iure! Animi quaerat earum libero quos vitae, nam dolorum labore porro facere facilis ipsa! Repellat asperiores facere incidunt modi.'
                    image="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    name="Jane Smith"
                    designation="Product Manager"
                />
                <Card
                    Message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque perspiciatis iure! Animi quaerat earum libero quos vitae, nam dolorum labore porro facere facilis ipsa! Repellat asperiores facere incidunt modi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque perspiciatis iure! Animi quaerat earum libero quos vitae, nam dolorum labore porro facere facilis ipsa! Repellat asperiores facere incidunt modi.'
                    image="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    name="John Doe"
                    designation="Software Engineer"
                />
                <Card
                    Message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque perspiciatis iure! Animi quaerat earum libero quos vitae, nam dolorum labore porro facere facilis ipsa! Repellat asperiores facere incidunt modi.'
                    image="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    name="Jane Smith"
                    designation="Product Manager"
                />

            </div>

        </div>
    )
}