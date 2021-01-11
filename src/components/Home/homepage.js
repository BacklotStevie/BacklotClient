import React from 'react';
import Reviews from '../../components/ReviewPage/reviews';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Logo from '.././/Images/backlot-logo.png'
import Disney from '../../components/Images/Disney Investory Day.jpg'
import Mando from '../../components/Images/mando.jpg'
import './homepage.css'

const HomePage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="jumbotron d-flex col-12 align-items-center bg-medium mt-4">
                    <div className="mb-5">
                        <img className="featured-jumbo" src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/6210937530001/a5814f4b-5bea-4879-a34b-b57989377adb/00b3c7bc-40f0-48ba-94de-3516dc250297/1280x720/match/image.jpg" />
                    </div>
                    <div className="">
                        <h1 className="display-5 text-black ml-4">Disney Investor Day Mayhem</h1>
                        <p className="lead text-black ml-4">John and Steven discuss the madness of Disney Investor Day.<br /><br /><a href='https://podcasts.apple.com/us/podcast/disney-investor-day-mayhem/id1460214563?i=1000502128805'>Listen on Apple Podcasts</a><br /><a href='https://open.spotify.com/episode/1DePsWGat43dXBHpJ6Lvlt?si=0fH73pHKS7GRMLWKVCEnDw'>Listen on Spotify</a></p>
                    </div>
                </div>
            </div>

            <div className="container section-divider pt-5">
                <button className="divider-button bg-dark" disabled></button>
            </div>

            <h3 className="text-center sections">PODCASTS</h3>

            <CardDeck className="podcasts pb-5">
                <Card className='podcast-card'>
                    <Card.Img variant="top" src={Disney} />
                    <Card.Body className="card-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Disney Investor Day Madness</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John convene to dicuss (mostly) everything announced at Disney Investor Day
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='//linktr.ee/insidethebacklot/'>Listen Now</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src={Mando} />
                    <Card.Body className="card-body">
                        <Card.Title style={{ fontSize: "2rem" }}>HBO Max & <i>The Mandalorian</i></Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss the latest HBO Max news, the last two episodes of <i>The Mandalorian</i> and Cameron Crowe's <i>Almost Famous.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='//linktr.ee/insidethebacklot/'>Listen Now</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://cdn.onebauer.media/one/media/5f3f/a5cc/4074/8e61/f349/288d/tenet-rev-main.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg" />
                    <Card.Body className="card-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Swolelock Holmes, Meth Damon and More!</Card.Title>
                        <Card.Text className="podcast-text">
                            JP fills in for John as he and Steven discuss <i>Tenet</i> and Netflix's <i>Enola Holmes</i> & <i>The Devil All the Time.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='//linktr.ee/insidethebacklot/'>Listen Now</a></h6>
                    </Card.Footer>
                </Card>
            </CardDeck>

            <div className="container section-divider">
                <button className="divider-button bg-dark" disabled></button>
            </div>

            <h3 className="text-center sections">BLOG POSTS</h3>

            <Reviews />

        </div>
    );
};

export default HomePage;