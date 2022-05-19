const body = document.querySelector('body');

const msgDiv = document.querySelector('#msgDiv');
const loginA = document.querySelector('#login-a');
const signupA = document.querySelector('#signup-a');
const logoutA = document.querySelector('#logout-a');

const msgArray = [];

class Message {
    constructor(text,style){
        this.text= text;
        this.style= style;
        this.popup();
    }
    popup(){
        this.msgBox = document.createElement('div');
        this.msgBox.className = this.style;
        this.msg = document.createElement('p');
        this.xBtn = document.createElement('a');

        this.msg.innerHTML = this.text;

        this.xBtn.className = "xBtn rounded pad-mar";
        this.xBtn.setAttribute("title","Click to close.");
        this.xBtn.innerHTML = "x";

        this.msgBox.appendChild(this.msg);
        this.msgBox.appendChild(this.xBtn);
        msgDiv.appendChild(this.msgBox);
        msgArray.push(this.msgBox);

        this.xBtn.onclick=()=>{this.delete()}
    }
    delete(){
        msgArray.splice(msgArray.indexOf(this.msgBox),1);
        msgDiv.removeChild(this.msgBox);
    }
}

let yt = new Message("This is a testing message box.", "msg-container-rounded bg-violet SS fg-white activeC");
logoutA.style.display='none';
auth.onAuthStateChanged(user => {
	if(user){
        loginA.style.display='none';
        signupA.style.display='none';
        logoutA.style.display='flex';
    }else{
        logoutA.style.display='none';
    }
})