import { observable, action } from 'mobx';

export default class SyncStore {
    @observable selectedContact = {};

    @action setSelectedContact = (contactInfo) => {
        this.selectedContact = contactInfo;
    };
}