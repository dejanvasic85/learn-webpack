import ko from 'knockout';

export default class Person{
    constructor(fullName, imgSrc){
        const nameComponents = fullName.split(' ');
        this.firstName = ko.observable(nameComponents[0]);
        this.lastName = ko.observable(nameComponents[1]);
        this.imgSrc = ko.observable(imgSrc);
    }
}