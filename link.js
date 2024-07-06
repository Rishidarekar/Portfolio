function sendMail(){
    let params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    if(params.email != "" && params.message !=""){
    emailjs.send("service_wpd066s","template_e2vbctf",params).then(alert("Email sent!!"));
    }
}