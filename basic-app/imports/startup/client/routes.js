import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

import MainLayout from '../../ui/layouts/MainLayout';

import Home from '../../ui/pages/home';
import About from '../../ui/pages/about';
import Contact from '../../ui/pages/contact';

FlowRouter.route("/", {
  action() {
    mount(MainLayout, {
      content: <Home />
    })
  }
});

FlowRouter.route("/about", {
  action() {
    mount(MainLayout, {
      content: <About />
    })
  }
});

FlowRouter.route("/contact", {
  action() {
    mount(MainLayout, {
      content: <Contact />
    })
  }
});