import React from 'react';
import { render } from 'react-dom';
import { Component } from './component';
import '../styles/styles.scss';

//Coolest Master Conflict
render(
    <Component />,
    document.querySelector("#render-target")
)