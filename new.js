var li_elements = document.querySelectorAll(".navbar .container-fluid .navbar-nav li");
var item_elements = document.querySelectorAll(".item");

    for (var i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function() {
        li_elements.forEach(function(li) {
            li.classList.remove("active");
        });
        this.classList.add("active");
        var li_value = this.getAttribute("data-li");
        item_elements.forEach(function(item) {
        item.style.display = "none";
        });
        if (li_value == "about") {
        document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "resume-me") {
        document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "work") {
        document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "contact") {
        document.querySelector("." + li_value).style.display = "block";
        } else {
        console.log("");
        }
    });
    }
    


    function message(){
        var Name = document.querySelector(".sms .mb-3 #name").value
        var email = document.querySelector(".sms .mb-3 #email").value;
        var msg = document.querySelector(".sms .mb-3 #msg").value;
        const success = document.getElementById('success');
        const danger = document.getElementById('danger');
    
        if(Name === '' || email === '' || msg === ''){
            danger.style.display = 'block';
        }
        else{
            setTimeout(() => {
                Name = '';
                email = '';
                msg = '';
            }, 2000);
    
            success.style.display = 'block';
        }
    
    
        setTimeout(() => {
            danger.style.display = 'none';
            success.style.display = 'none';
        }, 4000);
    
    }


    /*
    function sendEmail(){
        var Name = document.querySelector(".sms .mb-3 #name").value;
        console.log(Name)
        var email = document.querySelector(".sms .mb-3 #email").value;
        console.log(email)
        var msg = document.querySelector(".sms .mb-3 #msg").value;
        console.log(msg)


        Email.send({
            SecureToken : "9762b286-8e81-42bf-bae7-2743379a461a",


            To : 'kavinkumarthirumoorthy2429@gmail.com',
            From : email,
            Subject : "This is the subject",
            Body : "Name: " + Name 
                + "<br> Email: " + email
                + "<br> Message: " + msg

        }).then(
            message => alert("Message Send Successfully")
        );
    }
    /*
     */
    
