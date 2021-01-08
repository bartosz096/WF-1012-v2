const alerts = (message:string) => {
    switch(message){
        case "WrongPassword":
            return alert('niepoprawne haslo');
        case "UserCreated":
            return alert('stworzono uzytkownika');
        case "UserAlreadyExist":
            return alert('uzytkownik juz istnieje');
        case "CorrectLogin":
            return alert('zalogowano poprawnie');
        case "EmailNotExist":
            return alert('email nie istnieje');

        default:
            return false
    }
}

export default alerts;
