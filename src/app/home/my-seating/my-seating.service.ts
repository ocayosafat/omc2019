import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

const db = firebase.database();

@Injectable({
  providedIn: 'root'
})
export class SeatingService {


  constructor() {

  }

  snapshotToArray(snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.id = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
}

  addSeating(user, seating) {
    return new Promise((resolve, reject) => {
      db.ref().child('seatings').push({
        user: user,
        seating: seating
      }).then(() => {
        console.log("Save to Firebase was successful");
        resolve();
      }).catch((error) => {
        console.log(error);
        reject();
      });
    });
  }

  getSeatingByUser(user) {
    return new Promise((resolve, reject) => {
      db.ref().child('seatings').orderByChild('user').equalTo(user).once('value').then(snapshot => {
        resolve(this.snapshotToArray(snapshot));
      }, error => {
        console.log("Error " + error.code);
        reject(error);
      });
    });
  }

  removeAllSeating() {
    return new Promise((resolve, reject) => {
      db.ref().child('seatings').remove().then(() => {
        console.log("Delete seatings to Firebase was successful");
        resolve();
      }, error => {
        console.log("Error " + error.code);
        reject(error);
      });
    });
  }
}
