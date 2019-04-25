import React from 'react';
import { render } from 'react-dom';
import { Component } from './component';
import '../styles/styles.scss';

//New Conflict
render(
    <Component />,
    document.querySelector("#render-target")
)