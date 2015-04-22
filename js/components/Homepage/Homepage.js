import React from 'react';

import Map from '../Map/Map.js'

export default class ExampleGoogleMap extends React.Component{

    render() {
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
}
