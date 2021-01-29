import { Dashboard } from '@material-ui/icons'
import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import { LanguageProvider } from '../../contexts/LanguageContext';

class DashboardRoute extends Component {
  render() {
    return (
      <LanguageProvider>
        <section className=''>
          <Dashboard/>
        </section>
      </LanguageProvider>
    );
  }
}

export default DashboardRoute
