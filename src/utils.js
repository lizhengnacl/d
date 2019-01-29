/**
 * * Created by lee on 2019/1/29
 */

class Store {
    constructor (props = {}) {
        this.key = props.key || '_sd';
    }

    read () {
        return localStorage.getItem(this.key);
    }

    write (str) {
        return localStorage.setItem(this.key, str);
    }
}

let store = new Store();

export {
    store
};
