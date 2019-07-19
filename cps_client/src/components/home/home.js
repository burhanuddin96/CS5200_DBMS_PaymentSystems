import React from 'react';
import './home.css';


class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log('Home component')
    }

    render() {
        return (
          <div className="Home container-fluid">
              <div className="homepage">
                  Hi, {this.props.user.first_name}!
                The homepage for our systems.<br/>
                  Page under development.
              </div>
          </div>
        );
    }
}

export default Home;