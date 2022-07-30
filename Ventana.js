import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';

export default class Ventana extends Component {
  state = {
    numero1: '',
    numero2: '',
    codigo: '',
    nip: '',
    result: '0',
    datos: '',
    datos1: '',
  };
  render() {
    const login = () => {
      //console.log(this.state.numero1, this.state.numero2);
      //var resultado =
      //parseFloat(this.state.numero1) + parseFloat(this.state.numero2);
      //console.log(resultado);
      //this.setState({result:'Resultado:' + resultado});
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          var datoS = xhttp.responseText;
          var datosSeparados = datoS.split(',');
          _this.setState({datos: datosSeparados[2]});
          _this.setState({datos1: datosSeparados[1]});
          //_this.setState({datos: xhttp.responseText});
        }
      };
      xhttp.open(
        'GET',
        'https://cuceimobile.tech/Escuela/datosudeg.php?codigo=' +
          this.state.codigo +
          '&nip=' +
          this.state.nip,
        true,
      );
      xhttp.send();
    };
    const btnmas = () => {
      //console.log(this.state.numero1, this.state.numero2);
      //var resultado =
      //parseFloat(this.state.numero1) - parseFloat(this.state.numero2);
      //console.log(resultado);
      //this.setState({result:'Resultado:' + resultado});
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          _this.setState({result: xhttp.responseText});
        }
      };
      xhttp.open(
        'GET',
        'https://josess.000webhostapp.com/datos.php?numerando1=' +
          this.state.numero1 +
          '&numerando2=' +
          this.state.numero2 +
          '&operacion=1',
        true,
      );
      xhttp.send();
    };
    const btnmenos = () => {
      //console.log(this.state.numero1, this.state.numero2);
      //var resultado =
      //parseFloat(this.state.numero1) - parseFloat(this.state.numero2);
      //console.log(resultado);
      //this.setState({result:'Resultado:' + resultado});
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          _this.setState({result: xhttp.responseText});
        }
      };
      xhttp.open(
        'GET',
        'https://josess.000webhostapp.com/datos.php?numerando1=' +
          this.state.numero1 +
          '&numerando2=' +
          this.state.numero2 +
          '&operacion=2',
        true,
      );
      xhttp.send();
    };
    const btnmul = () => {
      //console.log(this.state.numero1, this.state.numero2);
      //var resultado =
      //parseFloat(this.state.numero1) * parseFloat(this.state.numero2);
      //console.log(resultado);
      //this.setState({result:'Resultado:' + resultado});
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          _this.setState({result: xhttp.responseText});
        }
      };
      xhttp.open(
        'GET',
        'https://josess.000webhostapp.com/datos.php?numerando1=' +
          this.state.numero1 +
          '&numerando2=' +
          this.state.numero2 +
          '&operacion=3',
        true,
      );
      xhttp.send();
    };
    const btndiv = () => {
      //console.log(this.state.numero1, this.state.numero2);
      //var resultado =
      //parseFloat(this.state.numero1) / parseFloat(this.state.numero2);
      //console.log(resultado);
      //this.setState({result:'Resultado:' + resultado});
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          _this.setState({result: xhttp.responseText});
        }
      };
      xhttp.open(
        'GET',
        'https://josess.000webhostapp.com/datos.php?numerando1=' +
          this.state.numero1 +
          '&numerando2=' +
          this.state.numero2 +
          '&operacion=4',
        true,
      );
      xhttp.send();
    };

    return (
      <SafeAreaView style={stylesSAV.container}>
        <View style={stylesT.container}>
          <TextInput
            placeholder="codigo"
            keyboardType="number-pad"
            onChangeText={(codigo) => this.setState({codigo})}
            value={this.state.codigo}
            style={{
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
            }}
          />
          <TextInput
            placeholder="nip"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={(nip) => this.setState({nip})}
            value={this.state.nip}
            style={{
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
            }}
          />
          <Text style={{backgroundColor: '#ffffe0'}}>{this.state.datos1}</Text>
          <Text style={{backgroundColor: '#ffffe0'}}>{this.state.datos}</Text>
          <View style={stylesT.custombtn}>
            <View style={{borderColor: 'black', borderWidth: 1}}>
              <Button title="login" onPress={login}>
                {' '}
              </Button>
            </View>
          </View>

          <Text style={stylesT.text}> Calculadora </Text>

          <TextInput
            placeholder="0"
            keyboardType="number-pad"
            onChangeText={(numero1) => this.setState({numero1})}
            value={this.state.numero1}
            style={{
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
            }}
          />

          <TextInput
            placeholder="0"
            keyboardType="number-pad"
            onChangeText={(numero2) => this.setState({numero2})}
            value={this.state.numero2}
            style={{
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
            }}
          />

          <Text style={{backgroundColor: '#ffffe0'}}>{this.state.result}</Text>

          <View style={stylesT.custombtn}>
            <View style={{borderColor: 'black', borderWidth: 1}}>
              <Button title="+" onPress={btnmas}>
                {' '}
              </Button>
            </View>
            <View style={{borderColor: 'black', borderWidth: 1}}>
              <Button title="-" onPress={btnmenos}>
                {' '}
              </Button>
            </View>
            <View style={{borderColor: 'black', borderWidth: 1}}>
              <Button title="*" onPress={btnmul}>
                {' '}
              </Button>
            </View>
            <View style={{borderColor: 'black', borderWidth: 1}}>
              <Button title="/" onPress={btndiv}>
                {' '}
              </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const stylesT = StyleSheet.create({
  container: {
    backgroundColor: '#b0c4de',
    padding: 50,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  custombtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 50,
    paddingVertical: 5,
    borderRadius: 30,
    borderColor: 'red',
    borderWidth: 1,
  },
});

const stylesSAV = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});
