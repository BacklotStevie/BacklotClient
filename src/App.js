import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../src/components/Header/header';
import Footer from '../src/components/Footer/footer';
import Signup from './Signup/adduser';
import PodcastPage from './Pages/PodcastPage/PodcastPage';
import VideosPage from './Pages/VideosPage/VideosPage';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import IndividualReviewPage from './Pages/IndividualReview/IndvidualReviewPage.jsx'
import LandingPage from './Pages/LandingPage/LandingPage';
import ReviewPage from './Pages/ReviewPage/ReviewPage.js'

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route exact path="/home" render={(props) => <LandingPage {...props} />} />
      {/* <Switch> */}
      <Route exact path="/reviews/:id" render={(props) => <IndividualReviewPage {...props} />} />
      <Route exact path="/reviews" render={(props) => <ReviewPage {...props} />} />
      <Route exact path="/podcastpage" render={(props) => <PodcastPage {...props} />} />
      <Route exact path="/videospage" render={(props) => <VideosPage {...props} />} />
      <Route exact path="/aboutus" render={(props) => <AboutUsPage {...props} />} />
      <Route exact path="/signup" render={(props) => <Signup {...props} />} />
      {/* </Switch> */}
      <Footer />

    </div>
  );
}

export default App;
