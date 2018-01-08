import React from 'react';
import { render } from 'react-dom';
import { Component } from './component';
import '../css/styles';

render(
    <Component />,
    document.querySelector("#render-target")
)