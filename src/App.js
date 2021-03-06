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
import ReviewPage from './Pages/ReviewPage/ReviewPage.js';
import LoginPage from './Pages/LoginPage/LoginPage';
import IndividualReview from './components/IndividualReview/individualreview';
import BacklotTeam from './Pages/TeamPage/TeamPage'
import AddReview from './components/AddReview/addreview'
import EditReview from './components/EditReview/editreview'

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route exact path="/reviews/addreview" render={(props) => <AddReview  {...props} />} />
      <Route exact path="/home" render={(props) => <LandingPage {...props} />} />
      {/* <Switch> */}
      <Route exact path="/reviews/:id" render={(props) => <IndividualReview {...props} />} />
      <Route exact path="/reviews/edit/:id" render={(props) => <EditReview {...props} />} />
      <Route exact path="/reviews" render={(props) => <ReviewPage {...props} />} />
      <Route exact path="/podcastpage" render={(props) => <PodcastPage {...props} />} />
      <Route exact path="/videospage" render={(props) => <VideosPage {...props} />} />
      <Route exact path="/aboutus" render={(props) => <AboutUsPage {...props} />} />
      <Route exact path="/signup" render={(props) => <Signup {...props} />} />
      <Route exact path="/login" render={(props) => <LoginPage {...props} />} />
      <Route exact path="/teampage" render={(props) => <BacklotTeam {...props} />} />
      {/* </Switch> */}
      <Footer />

    </div>
  );
}

export default App;
