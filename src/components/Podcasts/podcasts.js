import React from 'react';
import './podcasts.css'

const Podcasts = () => {
    return (
        <div>
            <div className="ml-5 mr-5 mt-4">
                <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="450" width="100%" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563"></iframe>
            </div>
            <div className="podcast-player">
                <iframe src="https://open.spotify.com/embed-podcast/show/4qRzBpNjTMGSKWTixYZQtY" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>
    );
};

export default Podcasts;