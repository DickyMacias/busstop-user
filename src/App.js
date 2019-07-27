import React, { Component } from 'react';
import Rutas from './components/rutas';
import Clock from 'react-live-clock';
import { estacion } from '../public/index.html'

    class App extends Component {
      state = {
        rutas: []
      }
      componentDidMount() {
        console.log("este es el nombre " + estacion)
        let beacon_url = "https://busstop-ble.herokuapp.com/rutas?estacion="+estacion+"&hora=8:00"
        console.log(beacon_url)
        fetch(beacon_url)
        .then(res => res.json())
        .then((data) => {
          this.setState({ rutas: data })
        })
        .catch(console.log)
      }

      render() {
        return (
          <div>
           <Rutas rutas={this.state.rutas} />
           <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
          </div> 
        );
      }

    }

    export default App;