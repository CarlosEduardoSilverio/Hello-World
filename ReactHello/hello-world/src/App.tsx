import './App.css';
import Home from './paginas/home/Home';
import { Grid } from '@material-ui/core';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';

function App() {
  return (
    //  <>
    //   <Home />  
    //  </>
    <>
      {/* <Grid container spacing={3}>
        <Grid item xs={12} >
          <Home />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
      </Grid> */}

      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
