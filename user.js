var User = function (email, password, avatarUrl) {
    this.email = email;
    this.password = password;
    this.avatarUrl = avatarUrl;
    this.krzycz = function () {
        alert(this.email.toUpperCase() + '!!!!!!1111oneone');
    };
};

var userList = {
    allUsers: [],
    addUser: function (user) {
        if (user instanceof User) {
            this.allUsers.push(user);
        }
    },
    login: function (email, password) {
        var i,
            currentUser;
        for (i = 0; i < this.allUsers.length; i++) {
            currentUser = this.allUsers[i];
            if (
                currentUser.email === email &&
                currentUser.password === password
            ) {
                return true;
            }
        }

        return false;
    }
};

var form = document.forms[0];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (userList.login(form.email.value, form.password.value)) {
        alert('Zalogowales sie, siema!');
    } else {
        alert('Bledny email lub haslo!');
    }
});

var zosia = new User('zosia.samosia@protonmail.ch', '123456', 'http://awatary.com/2.jpg');
var michal = new User('michal.matulka@protonmail.ch', 'lla123', 'http://awatary.com/1.jpg');

userList.addUser(zosia);
userList.addUser(michal);


//zadanie2
/*Stwórz nowy konstruktor "UserView", którego argumentem będzie instancja User
W konstruktorze UserView wygeneruj element li, zawierający obrazek z awatarem użytkownika, oraz jego adres e-mail umieszczony jako link z protokołem "mailto:" (nadaj tym elementom jakieś ładne style :) ). Przypisz element dom oraz obiekt User jako własności tworzonego obiektu.
W prototypie UserView utwórz metodę refresh odświeżającą dane użytkownika w elemencie dom.*/


var UserView = function (user) { //konstruktor
//tworzony element listy li, 
//element img, element p, przypisujemy jako dzieci li

this.elem = document.createElement('li');
this.avatarImg = document.createElement('img');
this.mailLink = document.createElement('a');
//nie 'var lista'bo to wlasnosc mojego obiektu
this.user = user;  // przypisujemy naszego usera do wlasnosci konstruktora
this.elem.appendChild(this.avatarImg);
this.elem.appendChild(this.mailLink);
};

//w metodzie refresh wrzucamy to dopiero. 

var showUsers = new UserView (user); //nowy obiekt

UserView.prorotype.refresh = function (){
  this.avatarImg.src = this.user.avatarUrl;
  this.mailLink.href = this.user.email;
  this.mailLink.innerHTML = //
}; 

var list = document.getElementsByTagName('ul')[0];
for (var i = 0; i < userList.allUsers.length; i++) {
    var userView = new UserView(userList.allUsers[i]);
    list.appendChild(userView)
}

//ZADANIE 3
//Rozszerz standardową tablicę JavaScript o metodę sum(), 
//która zwróci wynik dodawania wszystkich elementów tablicy.

Array.prototype.sum = function(){
    var suma = 0;
    for (var i =0; i< this.length; i++){
      suma = suma + this[i];
    }
    return suma;
};

//metoda sum jest dostepna dla kazdego tworzonego arraya