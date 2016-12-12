import login from './login';
import ko from 'knockout';
import Person from './person';
import '../styles/app.scss';

const person = new Person('Foo Bario');

console.log(login(person.firstName()));

ko.applyBindings(person, document.getElementById('app'));