export const formRegister = (userData) => {
    const errors = {};
    
    if (!userData.firstName) {
    errors.firstName = 'FirstName is required.';
    }
    if (userData.firstName && userData.firstName.length < 3) {
        errors.firstName = 'FirstName must be at least 3 characters long.';
    }    
    if(userData.firstName.length > 35){
        errors.firstName = "The firstName exceeds 35 characters."
    }
    

    if (!userData.lastName) {
    errors.lastName = 'LastName is required.';
    }
    if (userData.lastName && userData.lastName.length < 3) {
        errors.lastName = 'LastName must be at least 3 characters long.';
    }    
    if(userData.lastName.length > 35){
        errors.lastName = "The lastName exceeds 35 characters."
    }


    if(!userData.email){
        errors.email = "Email is required."   
    }
    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = 'Please check your email.'
    }
    if(userData.email.length > 35){
        errors.email = "The email exceeds 35 characters."
    }
    if (/[^a-zA-Z0-9@._-]/.test(userData.email)) {
        errors.email = 'The email contains invalid characters.';
    }
    if (userData.email.length < 6) {
        errors.email = 'Email must be at least 6 characters.';
    }


    if(!userData.password){
        errors.password = 'Password is required.'
    }
    if(!/[A-Z]/.test(userData.password)){
        errors.password = 'Must contain at least one capital letter.';
    }    
    if(!/[!@#$%^&*]/.test(userData.password)){
        errors.password = 'Must contain at least one special character.';
    }
    if(/\s/.test(userData.password)){
        errors.password = 'It cannot contain blank spaces.';
    }
        

    return errors;
};
