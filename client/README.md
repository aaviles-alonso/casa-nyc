# Casa-nyc
Casa-nyc is a website that helps individuals who have recently immigrated to the US, specifically New York City navigate the different resources that are available to them. Users can find these resources in this website that serves as a hub and can filter based on preferences. 

This project was bootstrapped with [Casa-nyc](https://github.com/aaviles-alonso/casa-nyc).

Description
Relocating to a new country can be a an amazing experience but it also comes with it challenges too, including loneliness. Many nomads struggle to meet new people when they reach their new location, leading to feeling lonely. SALUT was created to solve this problem by providing a platform for nomads to connect with others who share similar interests.

Table of Contents
Features and user Flow
Installation
End Points
Conclusion
Features
Select resource user wants to view
Filter list of resource based on soecific preference tailored to that resource
User Flow
Installation
Clone the repository: git clone https://github.com/aaviles-alonso/casa-nyc
Install the dependencies: npm install
Set up the database: mysql -u root -p
Create database CREATE DATABASE casa_nyc
Once you have a database to use, update the knexfile.js with your user, password, and database information.
Create a .env file based on .env.example, and update your password information
Start the client: npm start
Start the server: npx nodemon

Endpoints
Seed: 01_organizations
GET api/organizations
Functionality: Get a list of all the organizations that serve immigrants in New York City
Response body example
[
    {
      id: '56983724',
      name: '100 Hispanic Women National, Inc.',
      languages: 'English,Spanish',
      address: '413 E. 120th St. Suite 314 New York, NY 10035',
      phone: '(646) 689-2260',
      zipcode: '10035',
      description: 'Seeks to empower Latinas through personal and professional advancement initiatives, networks, and events.',
      link: 'https://www.100hispanicwomen.org/',
    },
    {
      id: '78462591',
      name: "Advocates for Children of New York",
      languages: "Arabic, Bengali, Chinese, English, French, Haitian Creole, Korean, Russian, Spanish, Urdu",
      address: "151 West 30th St. 5th Floor, New York, NY 10001",
      zipcode: "10001",
      phone: "(212) 947-9779",
      description: "Seeks to promote access to the best education New York can provide for all students. Provides services with education specialists and attorneys for free legal counsel and representation at school-related hearings and appeals, and informative workshops and free resources.",
      link: "http://www.advocatesforchildren.org/",
    },
]

Seed 2: 02_legal_inventory
GET api/legal
Functionality: Get a list of all legal providers in New York City 
Response body example 
[
     {
      id: "61824793",
      name: "Rasoulpour Torregoza PLLC",
      address: "276 5th Ave Suite 704, New York, NY 10001",
      phone: "(888) 445-7066",
      zipcode: "10001",
      link: "https://www.rasoulpourtorregoza.com/",
    },
    {
      id: "93485176",
      name: "J & K Law",
      address: "30 Broad Street 14th Floor, New York, NY 10004",
      phone: " (212) 390-1024",
      zipcode: "10004",
      link: "https://www.jklaw.com/",
    },
]
Seed 3: 03_healthcare_inventory
GET api/healthcare
Functionality: Get a list of medical providers in New York City that serve immigrants in New York City
Response body example
[
   {
      borough: "Bronx",
      name: "NYC Health + Hospitals/Gotham Health, Morissania",
      address: "1225 Gerard Avenue, Bronx, NY 10452",
      phone: "(718) 960-2616",
      zipcode: "10461",
    },
    {
      borough: "Brooklyn",
      name: "NYC Health + Hospitals/Coney Island",
      address: "2601 Ocean Parkway, Brooklyn, NY 11235",
      phone: "(718) 616-3001",
      zipcode: "11235",
    },
]
Seed 4: 04_education_inventory
GET api/education
Functionality: Get list of classes offered to immigrants in the US
Response body example when retrieving data 
[
    {
      id: "41769253",
      name: "Columbia University in the City of New York",
      address: "3078 Broadway · New York, NY 10027",
      phone: "(212) 854-1492",
      zipcode: "10027",
      description: "Columbia University offers classes for free to all residents living in the five boroughs. Depending on the level of your English, the classes are available in different levels that range from beginning to advanced. You can also choose to participate in courses to improve your pronunciation.",
      class_type: "ESOL, TASC, CAT preparation Courses",
      link: "https://undergrad.admissions.columbia.edu/studentgroup/jobs-and-education-empowerment-project-tasc-esol-and-cat-prep",
    },

    {
      id: "32657418",
      name: "Hostos Community College:Adult Learning Center",
      address: "560 Exterior Street, Bronx, NY 10451",
      phone: "(718) 514-7534",
      zipcode: "10451",
      description: "The mission of the Hostos Adult Learning Center (ALC) is to provide the academic skills, job training and support services needed for adults and young adults to achieve more productive lives for themselves and their families.We invite you to join the thousands of others who have enjoyed the supportive atmosphere and academic excellence that have made the ALC such a special place to learn.",
      class_type: "ESOL, TASC",
      link: "https://www.hostos.cuny.edu/Administrative-Offices/Division-of-Continuing-Education-Workforce-Develop",

    },
]


Errors
This API may return a 400 or 404 error
Example error body
{
  "message": "Error retrieving "given resource""
}
Conclusion
Tech Stack used
Front end:
React
SASS
Axios

Back End :
Node
Express
cors
knex
mySQL
mySQL Workbench
Lessons learned and next steps
In creating this website, creating my own API was the most time consuming aspect of the project, therefore I may have not put as much dedication to functinality ie:more filter options in each resource. I had difficulty being able to have the back-end data show on the front-end of the website as well. 
My next steps, would be creating a provider side to the website and a user side. This would make it so that people who add resources to the website are not spam users and are people who want to advertise their organization or service. Another next-step would be to add a filter by zip code so that users can find resource closest to the zipcode they enter into the website, A final next step would be finding an API that could translate the entire website into any given language that the user so chooses. 