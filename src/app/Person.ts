@sealed  
export class Person {  
    msg: string  
    constructor(message: string) {  
        this.msg = message;  
    }   
}  

function sealed(constructor2: Function) {
    Object.seal(constructor2);
    Object.seal(constructor2.prototype);
}