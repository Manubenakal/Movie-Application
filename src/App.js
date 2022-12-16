
import { useState,useEffect } from 'react';
import './App.css';
import MBox from './MBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=cc34cc5f53a0166da8e5063db0631b86";



function App() {
  
  const [movie, setMovie] = useState([]);
  const [query, setQuery]=useState('');
  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
      setMovie(data.results)

    })
   
  }, [])
  
  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=cc34cc5f53a0166da8e5063db0631b86&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovie(data.results);
    }
    catch(e){
      console.log(e);
    }
  }
  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <Navbar  expand="lg" >
      <Container fluid>

        <p className='logo'/> 
        
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex border border-dark" onSubmit={searchMovie} autoComplete="on">
            <SearchIcon></SearchIcon>     
              <FormControl
              type="search"
              placeholder="Search for a movie"
             
              
              name="query"
              value={query} onChange={changeHandler}></FormControl>
                 
                 </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      {movie.length > 0 ?(
        <div className="container">
        <p className='main-title'>Most Recent Movies</p>
        <div className="grid">
          {movie.map((movieReq)=>
          <MBox key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>Sorry,No Movies Found</h2>
      )}
    </div>   
    </>
  )
}

export default App;
