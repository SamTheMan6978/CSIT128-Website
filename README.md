
# CSIT128 Website

This repository contains the implementation of a web-based application developed as part of the CSIT128 course. The application includes features for managing user accounts, services, and personal training sessions, and is designed with a focus on sustainability and user experience.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **User Management:** Includes registration, login, and profile management functionalities.
- **Service Management:** Allows users to view, add, and manage services.
- **Personal Training Sessions:** Features to book and manage personal training sessions.
- **Sustainability Focus:** Incorporates eco-friendly practices in the design and functionality.

## Project Structure

```
├── css/                                      # CSS stylesheets for different pages
│   ├── add_services.css
│   ├── existinguserclasses.css
│   ├── index.css
│   ├── login.css
│   ├── memberships.css
│   ├── newuserclasses.css
│   ├── ptfile.css
│   ├── register.css
│   ├── servicespage.css
│   └── userprofile.css
├── images/                                   # Images used in the application
│   ├── PT.png
│   ├── PT2.png
│   ├── PT3.png
│   ├── Sustain.webp
│   ├── duo_plan.png
│   ├── facility.jpg
│   ├── family_plan.png
│   ├── gym1.jpg
│   ├── location.jpg
│   ├── personicon.png
│   └── solo_plan.png
├── js/                                       # JavaScript files for various functionalities
│   ├── EcoFitness_Connect.js
│   ├── EcoFitness_Create_Table.js
│   ├── EcoFitness_Insert.js
│   ├── EcoFitness_Login.js
│   ├── EcoFitness_Tables.js
│   ├── Services_Database.js
│   ├── Services_Insert.js
│   ├── Services_Insert2.js
│   ├── Services_Login.js
│   ├── Services_Server.js
│   ├── Services_Tables.js
│   ├── Services_Users.js
│   ├── User_DB_Table_Creation.js
│   ├── User_Db_Creation.js
│   ├── app.js
│   ├── json.js
│   ├── myModule.js
│   ├── mySession.js
│   ├── sc.js
│   ├── script.js
│   └── file_server/
│       └── files_server.js
├── json/                                     # JSON data files
│   └── coaches.json
├── src/                                      # HTML files for the web pages
│   ├── PT.html
│   ├── add_services.html
│   ├── existinguserclasses.html
│   ├── index.html
│   ├── login.html
│   ├── memberships.html
│   ├── newuserclasses.html
│   ├── register.html
│   └── userprofile.html
├── LICENSE                                   # License file
└── README.md                                 # Project README file
```

## Dependencies
- **HTML/CSS:** For structuring and styling the web pages.
- **JavaScript:** For adding interactivity and functionality.
- **Node.js:** Required for running the backend services.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/CSIT128-Website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CSIT128-Website
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the application:
   ```bash
   node js/app.js
   ```
2. Access the application in your browser at `http://localhost:3000`.

## Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any questions or contributions, please open an issue on this repository or contact the repository maintainer.
