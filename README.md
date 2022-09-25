
# STUDENT ENTRY UI PROJECT

This project is a student entry user interface which allows an administrator to add students to a table in which they can see the student's details, i.e first name, middle name, last name, student id, student email(school assigned), and the email password(for if the student forgets their password).

Note: The UI was done using material UI

This project uses API, it makes post requests(so that the data is secure).
Once you enter the data, the applicatin will make a post request using axios to send the data to a backend. I'm using ExpressJS as a backend to create the post request paths. Once the data reaches the backend, it will directly be put into the database, i'm using MongoDB as a database for this project. And then it will automatically call another post request to another url which will return the data, this data will be put into the table automatically too.

# How to install and run the project

Installing it is pretty easy, and so is running it. For installing it, you can just simply install it from my github:

https://github.com/blue-revan

or

https://github.com/Srivasudev-Nandigam/

# Run react part

Running it isn't as easy as installing it though, for running it, here are the steps:

1. Open the command prompt, go to the file path in which the project is located at.

2. CD to the react project, it should be named: StudentEntryUI_Frontend. 

3. Then install serve for a static server using (npm install -g serve), or (yarn install -g serve), depending on what you're using, use that. After that just serve the project using the (serve -s build) this will serve the project and you will be good to go, also make sure that this is all done on localhost:3000, if you want to change this you have to change the Express project, which is very easy to do.

# Run Express JS server

This step is SUPER easy, all you have to do is just go to the file directry of the project, cd into the express project, then just type (npm run dev). This will run the server.

# Run MongoDB server

This step is also pretty simple.

1. Create the DB (react-student-ui1), make sure you call it this exactly, this also has to be on port 27107. If you want a different DB name, make sure that it is changed in the "db/mongoodb.js" file in the express project, just replace (react-student-ui1) with (newName), and that will work.

# Credits

Thanks to material UI for making my life 10x easier, facebook too for making react, and express js is super easy to use and is super lightweight compared to frameworks like django or flask, 1000% recommend that you take a look at those stuff.

# License 

If you want to use the project, or at least some of it, please make sure to credit me.

# Bye

Please comment ANY questions of the project.