import React, { Component } from 'react';
import Paper from '@material-ui/core/paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';


import './App.css';

const cities = [
  'Reus,es',
  'Roma,it',
  'London,uk',
  'Madrid,es',
  'Lima,pe',
  'Bogota,col',
]

// no cal que sigui un class component ja... 
class App extends Component{
  render () {
    return (
      <Grid>
          <Row>
            <Col xs={12}>
              <AppBar position='sticky'>
                    <ToolBar>
                        <Typography color='inherit'> 
                            Weather App
                        </Typography>
                    </ToolBar>
                </AppBar>
            </Col>
              
          </Row>
          <Row>
              <Col xs={12} md={6}>
                  <div className="App">
                    <LocationListContainer cities={cities}/>
                  </div>
              </Col>
                <Col xs={12} md={6}>
                  <Paper elevation={4}>
                    <div className="details">
                        <ForecastExtendedContainer></ForecastExtendedContainer>
                    </div>
                  </Paper>
                  
                </Col>
          </Row>
      </Grid>
      
    );
  }
}

export default App;
