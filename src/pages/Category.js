import React from 'react'
import Grido from '../components/Grido';
import Loading from '../components/Loading';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            noticias: [],
            isLoading: true
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
          this.fetchCategoryNews()
        }
    }

    componentDidMount() {
        this.fetchCategoryNews()
    }

    async fetchCategoryNews(){
        const slug = this.props.match.params.slug
        const categoriesId = {
            politica: '1',
            internacionales: '2',
            tecnologia: '3',
            espectaculos: '4',
            deportes: '5',
        }
        try {
            const response = await fetch(`https://api.canillitapp.com/news/category/${categoriesId[slug]}`);
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
            </Container>
          </React.Fragment>
        );
      }
}

export default Category