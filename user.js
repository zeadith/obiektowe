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