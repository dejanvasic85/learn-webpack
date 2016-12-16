import login from './login';
import ko from 'knockout';
import Person from './person';
import '../styles/app.scss';
import img from '../images/gandalf.png';

const person = new Person('Foo Bario', img);

console.log('knockout is here! ');
console.log(login(person.firstName()));

ko.applyBindings(person, document.getElementById('app'));