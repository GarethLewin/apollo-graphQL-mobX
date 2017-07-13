import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import ContactList from './contact-list';
import ContactViewer from './contact-viewer';
import ContactForm from './contact-form';
import SyncStore from './stores/sync-store';
import {Provider} from 'mobx-react';

injectTapEventPlugin();

const syncStore = new SyncStore();
const rootStore = {syncStore};

const client = new ApolloClient({
  dataIdFromObject: obj => {
    return obj.__typename + ':' + obj.id;
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider {...rootStore}>
    <MuiThemeProvider>
      <div>
        <AppBar title="Apollo Client & MobX Demo" showMenuIconButton={false} />
        <div style={{ display: 'flex', flex: '1' }}>
          <ContactList />
          <ContactViewer />
          <ContactForm />
        </div>
      </div>
    </MuiThemeProvider>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);