export const emailValidation=((email)=>{
    const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
});

export const passwordValidation=((password)=>{
    const pattern=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return pattern.test(password);
});