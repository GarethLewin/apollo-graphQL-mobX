import React from 'react';
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL';
import gql from 'graphql-tag';

/* Fetch Query */
const contactsViewQuery = gql`
   query contactsViewQuery {
    contacts {
      id,
      name
    }
   }
 `;

@withGraphQL(contactsViewQuery)
export default class ContactViewer extends React.Component {
    render() {
        return (
            <div>
                {this.props.error &&
                    <p>Error ...</p>
                }
                {this.props.loading &&
                    <p>Loading ...</p>
                }
                <div>Component 2 (GraphQL)</div>
                <ul>
                    {this.props.contacts.map(c => <li key={c.id}>{c.name}</li>)}
                </ul>
            </div>
        )
    }
}