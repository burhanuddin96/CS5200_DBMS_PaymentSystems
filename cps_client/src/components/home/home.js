import React from 'react';
import './home.css';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="Home container-fluid">
              <div className="homepage">
                The homepage for our consolidated payment systems.<br/>
                  Page under development.
              </div>
          </div>
        );
    }
}

export default Home;