import React, { Component } from 'react';
import Rutas from './components/rutas';
import Clock from 'react-live-clock';
// import { estacion } from '../public/index.html'

    class App extends Component {
      state = {
        rutas: []
      }
      componentDidMount() {
      // Cargar parametros desde URL
        var url_params=getParam();
        var hora = timeReader();
        if(url_params)
        {
          var estacion = url_params['estacion'];
            // for(var index in url_params)
            // {
            //   console.log(" clave: "+index+" - valor: "+url_params[index]);
            // }
              console.log("La estacion es: " + estacion);
        }else{
            console.log("No se ha recibido ningún parámetro");
        }
        // Pasamos parametros a la URL del GET
        console.log("este es el nombre " + estacion)
        let beacon_url = "https://busstop-api.herokuapp.com/rutas?estacion="+estacion+"&hora="+hora+":00"
        // "&hora="+parseInt(hora)-1+":00"+
        // "&hora="+parseInt(hora)-1+":00"+
        // "&hora="+parseInt(hora)-1+":00"+
        // "&hora="+parseInt(hora)-1+":00"+
        // "&hora="+parseInt(hora)-1+":00"+
        // "&hora="+parseInt(hora)+":00"+
        // "&hora="+parseInt(hora)+":00"+
        // "&hora="+parseInt(hora)+":00"+
        // "&hora="+parseInt(hora)+":00"+
        // "&hora="+parseInt(hora)+":00"+
        // "&hora="+parseInt(hora)+":00"+
        // "&hora="+parseInt(hora)+1+":00"+
        // "&hora="+parseInt(hora)+1+":00"+
        // "&hora="+parseInt(hora)+1+":00"+
        // "&hora="+parseInt(hora)+1+":00"+
        // "&hora="+parseInt(hora)+1+":00"+
        // "&hora="+parseInt(hora)+1+":00"
        console.log(beacon_url)
        fetch(beacon_url)
        .then(res => res.json())
        .then((data) => {
          this.setState({ rutas: data })
        })
        .catch(console.log)
        this.forceUpdate();

        
      }

      render() {
        return (
          <div>
            <div><center><h1>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Chihuahua'} />
           </h1></center></div>
            <div>
           <Rutas rutas={this.state.rutas} /></div>

          </div> 
        );
      }

    }

    function getParam()
    {
        // capturamos la url
        var loc = document.location.href;
        // si existe el interrogante
        if(loc.indexOf('?')>0)
        {
            // cogemos la parte de la url que hay despues del interrogante
            var getString = loc.split('?')[1];
            // obtenemos un array con cada clave=valor
            var GET = getString.split('&');
            var get = {};
            // recorremos todo el array de url_params
            for(var i = 0, l = GET.length; i < l; i++){
                var tmp = GET[i].split('=');
                get[tmp[0]] = unescape(decodeURI(tmp[1]));
            }
            return get;
        }
    }

    function timeReader() 
    {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      m = checkTime(m);
      var hora = h + ":" + m;
      console.log("la hora es " + hora);
      var t = setTimeout(timeReader, 500);
      return h;
    }
    function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }

    export default App;