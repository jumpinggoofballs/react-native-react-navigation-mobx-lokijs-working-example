import Loki from 'lokijs';
import LokiReactNativeAdapter from 'loki-react-native-adapter';

import { observable } from 'mobx';

class Friend {
    @observable nickname;

    constructor(nickname) {
        this.nickname = nickname
    }
}

class Store {

    @observable loading = true;
    @observable friendsList = [{ nickname: 'error loading list of friends' }];
    
    
    db = new Loki('squishes', {
        autoload: true,
        autoloadCallback: this.autoloadCallback,    // async function call to populate the data from local storage
        autosave: true,
        autosaveInterval: 1000,     // 1 sec
        adapter: new LokiReactNativeAdapter()
    });

    autoloadCallback() {
        const db = this.appStore.db;
        var chats = db.getCollection("chats");
        // if database did not exist it will be empty so I will intitialize here
        if (chats === null) {
            chats = db.addCollection("chats", {
                unique: ["$key"],
                autoupdate: true
            });
        };
        db.saveDatabase();
        this.appStore.loading = false;
        this.appStore.friendsList = chats.data;
    }

    addFriend(nickname) {
        var chats = this.db.getCollection('chats');
        chats.insert(new Friend(nickname));
        this.db.saveDatabase();
        this.friendsList = chats.data;
    }

    removeFriend(obj) {
        var chats = this.db.getCollection('chats');
        chats.remove(obj);
        this.db.saveDatabase();
        this.friendsList = chats.data; // put this in the callback for saveDatabase()?
    }

}

export default appStore = new Store;
