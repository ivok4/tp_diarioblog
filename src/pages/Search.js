import React from 'react'
import Grido from '../components/Grido';
import Loading from '../components/Loading';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Duplicado from '../components/Duplicado';
import Cardo from '../components/Cardo';


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            noticias: [],
            isLoading: true
        }
    }


    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
            this.getPost(this.props.match.params.slug);
        }
    }

    componentDidMount() {
        this.getPost()
    }

    async getPost(){
        const slug = this.props.match.params.slug
        const categoriesId = {
           
        }
        try {
            const getPost = this.props.match.params.slug
            const response = await fetch(`https://api.canillitapp.com/search/${slug}`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            console.log(json)
            this.setState({
                noticias: json,
                isLoading: false
            });

        } catch (error) {
            console.log(error);
        }
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
                 <h2>{this.props.match.params.slug}</h2>

            </Container>
          </React.Fragment>
        );
      }
}

export default Search