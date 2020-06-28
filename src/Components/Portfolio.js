import React, { Component } from 'react';
import Rodal from 'rodal';
import Gallery from './Gallery';

// include styles
import 'rodal/lib/rodal.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      rodalvisible: false,
      rodalindex: 0,
      rodalwidth: window.innerWidth < 500 ? 300 : 700, // Device modification
      rodalheight: 700 // Device modification
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show(index) {
      this.setState({ 
        rodalvisible: true,
        rodalindex: index
      });
  }

  hide() {
      this.setState({ rodalvisible: false });
  }

  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map((project, index) => {
        return <div key={project.title} className="columns portfolio-item">
           <div className="item-wrap">
           <button onClick={() => this.show(index)}>
              <img alt={project.title} src={project.image} style={{height:100, width:200}}/>
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{project.title}</h5>
                     <p>{project.category}</p>
                  </div>
                </div>
              {/* <div className="link-icon"><i className="fa fa-link"></i></div> */}
           </button>
          </div>

          <Rodal 
            visible={this.state.rodalvisible} 
            onClose={this.hide} 
            animation="fade" 
            width={this.state.rodalwidth} 
            height={this.state.rodalheight}>
            <div><Gallery images={this.props.data.projects[this.state.rodalindex].images} description={this.props.data.projects[this.state.rodalindex].description} refs={this.props.data.projects[this.state.rodalindex].refs}/></div>
          </Rodal>
        </div>
      })
    }

    return (
    <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>

    </section>
    );
  }
}

export default Portfolio;
