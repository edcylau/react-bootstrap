import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home';
import { NoMatch } from './components/no_match';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Layout } from './containers/layout';
import { NavigationBar } from './containers/navigation_bar';
import { Jumbotron } from './containers/jumbotron'

function App() {
  return (
    <React.Fragment>
      < NavigationBar />
      < Jumbotron />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>

    </React.Fragment>
  );
}

export default App;
