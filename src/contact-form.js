import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('syncStore') @observer
export default class ContactViewer extends React.Component {
    render() {
        return (
            <div>
                <div>Component 3 (MobX)</div>
                <input type="text" value={this.props.syncStore.selectedContact.name} />
            </div>
        )
    }
}

ContactViewer.propTypes = {
    syncStore: React.PropTypes.object
};