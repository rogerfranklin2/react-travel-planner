import React from 'react';

import Map from '../Map/Map.js'


var ExampleGoogleMap = React.createClass({

    render: function () {
        return (
            <div className="container">
                <div className="map">
                    <Map />
                </div>
                <div className="other">
                    OTHER
                </div>
            </div>

        );
    }
});

module.exports = ExampleGoogleMap;