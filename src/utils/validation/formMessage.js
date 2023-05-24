const formMessage = (message) => {
    const errors = {};

    if(!message.name){
        errors.name = "Name is required."
    };

    if(!/\S+@\S+\.\S+/.test(message.email)){
        errors.email = 'Please check your email.'
    };
    if(!message.email){
        errors.email = "Email is required"
    };
    if(message.email.length > 35){
        errors.email = "The email exceeds 35 characters."
    };

    if(!message.message){
        errors.message = "Message is required."
    };
    if(message.message.length > 255){
        errors.message = "Exceeded characters"
    };

    return errors;
};

export default formMessage;