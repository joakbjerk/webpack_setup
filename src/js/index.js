import React from 'react';
import { render } from 'react-dom';
import { Component } from './component';
import '../styles/styles.scss';

//CONFLICT!
render(
    <Component />,
    document.querySelector("#render-target")
)