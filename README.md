# CSIT128-Website
A gym website with basic functionality made with a group for CSIT128
<!DOCTYPE html>
<html>
<head>
    <title>UOW Gym - Classes Available</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style> 
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
        * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
            font-family: "Poppins", sans-serif; 
        }   
            
        body {
            min-height: 100vh;
            background-color: white;
        }     
             
        .section-main {
            position: relative; 
            width: 100%;
            min-height: 50vh; 
            background: url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80) no-repeat; 
            background-size: cover; 
            background-position: center; 
            display: flex; 
            justify-content: center; 
            align-items: center;
            background-color: white;    
        }   

        .section-main h1 {
            color: #0F1840(255, 255, 255, 1);
            font-size: 60px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            line-height: 80px;
            text-shadow: -2px -2px 0 #FFF, 2px -2px 0 #FFF, -2px 2px 0 #FFF, 2px 2px 0 #FFF;

        }   
             
        .section-two h2 {
            color: white;
            font-size: 50px;
            text-align: center;
        }   
            
        .section-two .class-card {
            width: 50px;
            height: 50px;
            background: #ffffff; /* Set class-card background color to white */
            margin: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            transition: 0.4s;
            margin-top: 20px; /* Add margin-top to create a 2px gap below the image */
        }
        
        .gym-description {
            text-align: center;
        }
        

        .black-and-white {
            filter: grayscale(100%);}

            .section-classes {
      background-color: white;
      padding: 20px;
      text-align: center;
    }

    .helvetica-light {
  font-family: "Helvetica Light", Arial, sans-serif;
  font-weight: normal;
}

.helvetica--light {
  font-family: "Helvetica", Arial, sans-serif;
  font-weight: normal;
  size: 40px;
}

    .classes-title {
      font-size: 24px;
      font-weight: bold;
      color: #0F1840;
      margin-bottom: 20px;
    }
    
    .register-now {
        background-color: #E72519;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 4px;
        text-transform: uppercase;
        cursor: pointer;
        display: inline-block;
        margin-top: 10px;
        text-decoration: none;
    }
    
    .register-now:hover {
        background-color: darkred;
    }
    header {
            z-index: 900;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 100px;
            transition: 0.6s;
            background: #0F1840;
            padding: 15px 100px;
        }

        header .brand {
            color: white;
            font-size: 30px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 2px;
            align-items: left;
        }

        header .menu {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        header .menu a {
            color: white;
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;
            margin: 0 30px;
            padding: 0 10px;
            border-radius: 20px;
        }

        header .menu a:hover {
            color: black;
            background: white;
        }

        header .btn {
            color: white;
            font-size: 25px;
            cursor: pointer;
            display: none;
        }

        .section-two {
            min-height: 100vh;
            background: white;
            padding: 20px 100px;
        }

        /* This part of the css style is for the cards */
        .program {
            padding: 2%;
            text-align: right;
        }

        .title {
            font-size: 56px;
            font-weight: 700;
            letter-spacing: 1;
            margin-bottom: 0.5rem;
            color: white;
        }

        .program-wrapper {
            width: 100%;
            display: flex;
            padding: 0 5%;
            margin: 2% 0;
            gap: 2rem;
            overflow-x: visible;
            margin-left: auto;
        }

        .program-card {
            position: relative;
            height: 60vh;
            width: 60vh;
            min-width: 200px;
            background-color: #0F1840;
            
        }

        .program-img {
            width: 100%;
            height: 100%;
            opacity: 0.5;
            object-fit: cover;
        }

        .program-title {
            position: absolute;
            top: 5%;
            text-align: center;
            color: white;
            padding: 10px 20px;
            letter-spacing: 1;
            font-weight: 700;
            font-size: 24px;
            cursor: pointer;
        }

        .program-detail {display: none; position: absolute; 
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            width: 100%;
            height: 40%;
            padding: 5%;
            bottom: 0;
            left: 0;
            text-align: center;
            font-size: 15px;
            transition: all 0.5s ease;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .program-detail h3, .program-detail p {
            margin-bottom: 10px;
        }

        .program-card:hover .program-img {
            opacity: 0.8;
            cursor: pointer;
            transition: all 0.5s ease;
        }

        .program-card:hover .program-detail {
            position: absolute;
            display: block;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            width: 100%;
            height: 40%;
            padding: 5%;
            bottom: 0;
            left: 0;
            text-align: center;
            font-size: 15px;
            transition: all 0.5s ease;
        }

        .signup-box {
      background-color: red;
      color: white;
      text-align: center;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 20px;
    }

        @media (max-width: 1123px) {
            header .btn {
                display: block;
            }

            header .menu {
                position: fixed;
                background: darkblue;
                flex-direction: column;
                min-width: 400px;
                height: 100vh;
                top: 0;
                right: -100%;
                padding: 80px 50px;
                transition: 0.5s;
                transition-property: right;
            }

            header .menu.active {
                right: 0;
            }

            header .menu .close-btn {
                position: absolute;
                top: 0;
                left: 0;
                margin: 25px;
            }

            header .menu a {
                display: block;
                font-size: 20px;
                margin: 20px;
                padding: 0 15px;
            }
        }

        /* Footer CSS */

        .container {
            max-width: 1170px;
            margin: auto;
        }

        .row {
            display: flex;
            flex-wrap: wrap;
        }

        ul {
            list-style: none;
        }

        .footer {
            background-color: #24262b;
            padding: 70px 0;
        }

        .footer-col {
            width: 25%;
            padding: 0 15px;
        }

        .footer-col h4 {
            font-size: 18px;
            color: #ffffff;
            text-transform: capitalize;
            margin-bottom: 35px;
            font-weight: 500;
            position: relative;
        }

        .footer-col h4::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -10px;
            background-color: #e91e63;
            height: 2px;
            box-sizing: border-box;
            width: 50px;
        }

        .footer-col ul li:not(:last-child) {
            margin-bottom: 10px;
        }

        .footer-col ul li a {
            font-size: 16px;
            text-transform: capitalize;
            color: #ffffff;
            text-decoration: none;
            font-weight: 300;
            color: #bbbbbb;
            display: block;
            transition: all 0.3s ease;
        }

        .footer-col ul li a:hover {
            color: #ffffff;
            padding-left: 8px;
        }

        .footer-col .social-links a {
            display: inline-block;
            height: 40px;
            width: 40px;
            background-color: rgba(255, 255, 255, 0.2);
            margin: 0 10px 10px 0;
            text-align: center;
            line-height: 40px;
            border-radius: 50%;
            color: #ffffff;
            transition: all 0.5s ease;
        }

        .footer-col .social-links a:hover {
            color: #24262b;
            background-color: #ffffff;
        }

        .lighten-image {
            filter: brightness(150%);
        }

        /* Responsive part for footer */
        @media (max-width: 767px) {
            .footer-col {
                width: 50%;
                margin-bottom: 30px;
            }
        }

        @media (max-width: 574px) {
            .footer-col {
                width: 100%;
            }
        }

        /* End of footer CSS */

        @media (max-width: 630px) {
            .section-main h1 {
                font-size: 50px;
                line-height: 60px;
            }
        }

        @media (max-width: 755px) {
            .program-card:hover .program-detail {
                font-size: 14px; /* Adjust font size for smaller screens */
            }
        }

        @media (max-width: 1024px) {
            .program-card:hover .program-detail {
                font-size: 12px; /* Adjust font size for smaller screens */
            }
        }

        @media (max-width: 450px) {
            .program-card:hover .program-detail {
                font-size: 14px; /* Adjust font size for smaller screens */
            }
        }
    </style>
</head>

<body>
    <header>
        <a href="#" class="brand">UOW Gym</a>
        <div class="menu">
            <a href="#">Home</a>
            <a href="#">Classes</a>
            <a href="#">Membership</a>
            <a href="#">Contact</a>
        </div>
        <div class="btn"></div>
    </header>

    

    <div class="section-main">
        <h1>Classes We Offer</h1>
    </div>

    <div class="gym-description">
        <p>
          <br>
          <br>
          <h2 class="helvetica-light">THE UNIVERSITY OF WOLLONGONG IN DUBAI</h2>          
          <br>
          <h2 class="helvetica--light">NEW CLASSES OFFERED IN THE GYM</h2>   
          <br>
          The UOW Gym is a state-of-the-art fitness facility located for students of the University of Wollongong.
          <br>
          <br>
          With its modern equipment and dedicated staff, the UOW Gym provides an excellent environment for students, faculty, and staff to prioritize their health and fitness goals.
          <br>The gym offers a wide range of fitness classes, including yoga, aerobics, strength training, and spin classes, catering to individuals of all fitness levels.
          <br>
          <br>
          Additionally, the UOW Gym provides personal training services for those seeking individualized guidance and support. With its spacious workout areas, 
          <br>cardio machines, weightlifting equipment, and indoor track, the UOW Gym offers a comprehensive fitness experience.
          <br>
          <br>
          Whether you are a beginner or an experienced fitness enthusiast, the UOW Gym is the perfect place to stay active and maintain a healthy lifestyle on campus.
          <br>
          <br>
          <br>
        </p>
      </div>

    <div class="section-classes">
        <div class="program-wrapper">
          <div class="program-card">
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZGlvdmFzY3VsYXIlMjBmaXRuZXNzfGVufDB8fDB8fHww&w=1000&q=80" alt="Cardio Class" class="program-img">
            <div class="program-detail">
              <p>These classes focus on improving cardiovascular health and fitness through activities such as aerobic exercises, spinning, or dance-based workouts.</p>
            </div>
            <h3 class="program-title">CARDIOVASCULAR FITNESS</h3>
            <a href="#" class="register-now">Register Now</a>
          </div>

          <div class="program-card">
            <img src="https://media.istockphoto.com/id/1307360297/photo/dumbbells-and-kettlebells-on-a-floor-bodybuilding-equipment-fitness-or-bodybuilding-concept.jpg?s=170667a&w=0&k=20&c=OywqyEbPKIFjgcjo_AfOvcuTp5GYax8bSFenfPuDWJg=" alt="STRENGTH TRAINING" class="program-img">
            <div class="program-detail">
              <p>These classes aim to enhance muscular strength, tone, and endurance through various exercises using weights, resistance bands, or bodyweight exercises.</p>
            </div>
            <h3 class="program-title">STRENGTH TRAINING</h3>
            <a href="#" class="register-now">Register Now</a>
          </div>

          <div class="program-card">
            <img src="https://images.squarespace-cdn.com/content/v1/52540926e4b0d49865bee20d/1488992914145-23R7HSJVFINUF7WDLX9V/Yoga+photography+London" alt="Yoga Class" class="program-img">
            <div class="program-detail">
              <h3>YOGA</h3>
              <p>These classes focus on flexibility, balance, and relaxation through different yoga poses, breathing exercises, and meditation techniques.</p>
            </div>

            <h3 class="program-title">YOGA</h3>
            <a href="#" class="register-now">Register Now</a>
          </div>
          
          <div class="program-card">
            <img src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGl0dCUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="HIIT Class" class="program-img">
            <div class="program-detail">
              <h3>HIIT</h3>
              <p>High-Intensity Interval Training (HIIT) classes involve short bursts of intense exercises followed by brief recovery periods, designed to boost calorie burn and improve overall fitness.</p>
            </div>
            <h3 class="program-title">HIIT Classes</h3>
            <a href="#" class="register-now">Register Now</a>
          </div>
        </div>
      </div>

    <div class="gym-description">
        <p>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          Not a member yet?
          <br>
          <br>
        </p>
      </div>

      <div class="container">
        <div class="signup-box">
          <h2>Sign Up</h2>
        </div>

    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>    
                        <li><a href="#">About</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>   
                <div class="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Payment Options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <script>
        const btn = document.querySelector(".btn");
        const menu = document.querySelector(".menu");
        const closeBtn = document.querySelector(".close-btn");

        btn.addEventListener("click", () => {
            menu.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    </script>

</body>
</html>


