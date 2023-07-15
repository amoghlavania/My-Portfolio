//  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script> 
  var typed = new Typed(".auto", {
    strings: ["Web Developer", "Web Designer", "An Engineer!"],
    typeSpeed: 60,
    backSpeed: 70,
    loop: true,
  });

  function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_m9lrrdf";
    const templateID = "template_gqk9pcj";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }