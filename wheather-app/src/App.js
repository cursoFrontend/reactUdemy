import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  'Caracas,ve',
  'Merida,ve',
  'Curitiba,br',
  'Bogotá,col'
];

class App extends Component {

constructor() {
  super ();
  
  this.state = { city: 'NUeva Ciudad'};
}

  handleSeletionLocation = city => {
    this.setState({ city });//tienen el mismo nombre city : city
    //console.log(`handleSeletionLocation ${city}`);

  };
  render() {
    const { city } = this.state;
    return (

      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities ={cities}
              onSeletedLocation ={this.handleSeletionLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtended city={city}></ForecastExtended>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
