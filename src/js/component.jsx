import React from 'react';
import placeholderImage from '../../assets/350x150.png';

export class Component extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>My Component!</h2>
                <img src={placeholderImage} alt="placeholder image" />
            </div>
        );
    }
}
