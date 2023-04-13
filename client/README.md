# Casa-nyc
Casa-nyc is a website that helps individuals who have recently immigrated to the US, specifically New York City navigate the different resources that are available to them. Users can find these resources in this website that serves as a hub and can filter based on preferences. 

This project was bootstrapped with [Casa-nyc](https://github.com/aaviles-alonso/casa-nyc).

Description
Relocating to a new country can be a an amazing experience but it also comes with it challenges too, including loneliness. Many nomads struggle to meet new people when they reach their new location, leading to feeling lonely. SALUT was created to solve this problem by providing a platform for nomads to connect with others who share similar interests.


Features and user Flow
Installation
End Points
Conclusion
Features
Create an account and build new profile
Select location
Select hobbies
Select languages
Join groups based on user's interests
Search for groups by interest
Look at a group member's profile page
User Flow
Installation
Clone the repository: git clone https://github.com/aaviles-alonso/casa-nyc
Install the dependencies: npm install
Set up the database: mysql -u root -p
Create database CREATE DATABASE casa_nyc
Once you have a database to use, update the knexfile.js with your user, password, and database information.
Create a .env file based on .env.example, and update your password information
Start the client: npm start
Start the server: node --watch index.js
Endpoints
Table 2: 02-hobbies
GET api/organizations
Functionality: Get a list of all the organizations that serve immigrants in New York City
Response body example
[
     {
        "id": 1,
        "hobby": "Photography",
        "icon": "U+1F4F8"
    },
    {
        "id": 2,
        "hobby": "Hiking",
        "icon": "U+1F97E"
    },
    {
        "id": 3,
        "hobby": "Cooking",
        "icon": "U+1F373"
    },
]
Table 3: 03-user_hobbies
GET api/user_hobbies/:user_id
Functionality: Get a list of each users' hobbies
Response body example retrieving hobbies for user 3
[
    {
        "user_id": 3,
        "hobby_id": 3,
        "hobby": "Cooking",
        "icon": "U+1F373",
        "avatar": "http://localhost:8080/user3.png",
        "name": "Alex",
        "bio": "こんにちは！",
        "language1": "Japanese",
        "language2": "English",
        "language3": "Spanish",
        "location": "Tokyo"
    },
    {
        "user_id": 3,
        "hobby_id": 7,
        "hobby": "Music",
        "icon": "U+1F3A7",
        "avatar": "http://localhost:8080/user3.png",
        "name": "Alex",
        "bio": "こんにちは！",
        "language1": "Japanese",
        "language2": "English",
        "language3": "Spanish",
        "location": "Tokyo"
    },
    {
        "user_id": 3,
        "hobby_id": 8,
        "hobby": "Dancing",
        "icon": "U+1F57A",
        "avatar": "http://localhost:8080/user3.png",
        "name": "Alex",
        "bio": "こんにちは！",
        "language1": "Japanese",
        "language2": "English",
        "language3": "Spanish",
        "location": "Tokyo"
    }
]
Table 4: 04-group_details
GET api/groups
Functionality: Get a list of groups
Response body example
[
    {
        "groupId": 1,
        "group_name": "Paris Photography Club",
        "group_image": "http://localhost:8080/group1.png",
        "group_location": "Paris",
        "group_bio": "We are a group of photography enthusiasts who love exploring the streets of Paris with our cameras.",
        "group_language": "French",
        "group_hobby": "Photography"
    },
    {
        "groupId": 2,
        "group_name": "New York Hiking Club",
        "group_image": "http://localhost:8080/group2.png",
        "group_location": "New York",
        "group_bio": "We love to explore the great outdoors and discover new hiking trails in and around New York City.",
        "group_language": "English",
        "group_hobby": "Hiking"
    },
]
GET api/groups/:id
Functionality: Get information of a single group
Response body example when retrieving data for group 9
[
    {
    "groupId": 9,
    "group_name": "Tokyo Board Game Society",
    "group_bio": "We are a group of board game enthusiasts who love to play and discuss all kinds of board games in Tokyo.",
    "group_image": "http://localhost:8080/group9.png"
}
]
GET api/user_groups/:group_id
Functionality: Get information of a group's user's name and photo
Response body example when retrieving data for group 3
[
    {
        "user_id": 3,
        "group_id": 3,
        "groupId": 3,
        "group_image": "http://localhost:8080/group3.png",
        "group_name": "Tokyo Cooking Class",
        "group_location": "Tokyo",
        "group_bio": "We are a group of foodies who love to cook and share our favorite Japanese recipes with others.",
        "group_language": "Japanese",
        "group_hobby": "Cooking",
        "name": "Alex",
        "avatar": "http://localhost:8080/user3.png"
    },
    {
        "user_id": 14,
        "group_id": 3,
        "groupId": 3,
        "group_image": "http://localhost:8080/group3.png",
        "group_name": "Tokyo Cooking Class",
        "group_location": "Tokyo",
        "group_bio": "We are a group of foodies who love to cook and share our favorite Japanese recipes with others.",
        "group_language": "Japanese",
        "group_hobby": "Cooking",
        "name": "Akiko",
        "avatar": "http://localhost:8080/user14.png"
    }
]
Errors
This API may return a 400 or 404 error
Example error body
{
  "message": "Error retrieving data"
}
Conclusion
Tech Stack used
Front end:
React
SAAS
Axios
Back End :
Node
Express
cors
knex
mySQL
mySQL Workbench
Lessons learned and next steps
As I developed this project, I encountered a number of challenges that allowed me to strengthen the new skills I have learned over the past three months. I also learned the importance of staying flexible and adaptable. I faced undexpected challenges for this project and, by being flexible, I was better equipped to overcome these challenges and find creative solutions to problems.
Next steps for this project would be to add the possibility to message a group as well as creating new groups and events.