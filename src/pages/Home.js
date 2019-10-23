import React from 'react';
import Menu from '../components/Menu';
import Grido from '../components/Grido';
import Loading from '../components/Loading';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import dayjs from 'dayjs'


class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      noticias:[],
      loading:true,
      filter:''
    }
    this.applyFilter = this.applyFilter.bind(this)
  }
  
  async componentDidMount(){
    const date = dayjs()
    const dateFormatted = date.format('YYYY[-]MM[-]DD')
    try {
        const response = await fetch(`https://api.canillitapp.com/latest/${dateFormatted}`);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        this.setState({ 
            noticias: json, 
          loading: false
        });
        console.log (json)


    } catch (error) {
        console.log(error);
    }
}

  applyFilter(e){
    console.log(e.target.value)
    const filtro = this.state.peliculas.filter(pelicula => {
      //return( pelicula.titulo === e.target.value )
      return (pelicula.titulo.includes(e.target.value))
    })
    console.log(filtro)
    // this.setState({
    //   filter:e.target.value
    // })
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          {this.state.loading && <Loading />}
          {!this.state.loading && 
          <Grido noticias={this.state.noticias} />
          }
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
