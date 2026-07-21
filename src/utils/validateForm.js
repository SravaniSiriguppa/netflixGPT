export const checkValidData = (name, email, password) => {
    const isValidName = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ '.-]{1,49}$/.test(name);
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(name && !isValidName) return "Name is not valid.";
    if(!isValidEmail) return "Email ID is not valid.";
    if(!isValidPassword) return "Password is not valid.";

    return null;
}