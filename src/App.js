// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TableOfContents from './components/TableOfContents';
import LegalPage from './components/LegalPage';
import Page3 from './components/Page3'; // Import the new component
import lawRegulations from './components/data/LawRegulations';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <TableOfContents regulations={lawRegulations} />
        </Route>
        <Route path="/law/:id" render={({ match }) => (
          <LegalPage lawRegulation={lawRegulations[match.params.id - 1]} />
        )} />
        <Route path="/ap2024/" component={Page3} /> {/* Add the new route for Page 3 */}
      </Switch>
    </Router>
  );
};

export default App;
