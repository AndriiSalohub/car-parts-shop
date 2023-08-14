import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyAmJ5dn52bpvywPuiafAMKW1QNHrAeoC24',
    authDomain: 'car-parts-shop-751a4.firebaseapp.com',
    databaseURL: 'https://car-parts-shop-751a4-default-rtdb.firebaseio.com',
    projectId: 'car-parts-shop-751a4',
    storageBucket: 'car-parts-shop-751a4.appspot.com',
    messagingSenderId: '204188304408',
    appId: '1:204188304408:web:1bdec8433af98b329c2f6d',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
