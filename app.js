// Event Listener

const form = document.querySelector(".contactForm");

form.addEventListener("submit", submitForm);


function submitForm(e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

    console.log(name, email, subject, message);
    sendEmail(name, email, subject, message);
    form.reset();
}




function sendEmail(name, email, subject, message) {
    Email.send({
        SecureToken: '396a2cae-aa2c-4c3e-be46-9094321e0a32',
        To: 'nicolaslluesa17@gmail.com',
        From: "nicolaslluesa17@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br> Email: ${email} <br> Subject: ${subject} <br> Message: ${message}`,
    }).then((message) => alert("Mail sent successfully!"))
}