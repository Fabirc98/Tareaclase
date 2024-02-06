`use strcit`


class User{
     constructor(username,password,email){
     this.username= username;
     this.password = password;
     this.email =email
    }
    login(username,password){
        //validar usuario y contraseña if (var1 ===var && va1 ===var)
         if(username ===this.username && this.password ===password){
            alert("Bienvenido");
         }else{
            alert("OOOps !!!");
         }    
    }
    resetPassword(newPassword){
        this.password = newPassword;
    }
    updateInfo(newEmail){
        this.email = newEmail;
    }
    showInfo(){
        alert(`Usuario:${this.username}${this.email}`)
    }
}

// instarciar
let user= new User('magb','1234','m@g.com');
user.login('magb','admin');
user.resetPassword('admin');
user.login('magb','admin');
user.updateInfo('f@g.com')
