# .Net 6 + Angular application to manage create and contacts

# Why .Net 6 and Angular?

- They are both really fast modern web app technologies. .Net has improved performance and new features, Angular is a SPA JS framework for faster development and highly scalable and secure as so is .Net 6.

- .NET 6 brings a ton of new features to C# languages. It continues down the road of language simplification, a vision that started with C# 9. Some of the features added to C# 10 include:

global using directives,
enhanced #line pragma,
record structs,
improved lambda syntax,
improvement of structure types,
extended property patterns.

Additionally, most of the .NET 6 project templates are based on C# 10 changes. The new templates are much cleaner and simpler than before, making it easier for new developers to write programs.

- Angular is used to build complex enterprise apps like progressive web apps and single-page apps. Angular ensures easy development as it eliminates the need for unnecessary code. It has a simplified MVC architecture, which makes writing getters and setters needless. Directives can be managed by some other team as these are not part of the app code. Simplified MVC Pattern, Modular Structure, Code Consistency and Easy Testing and it uses Plain Old JavaScript Object which enables object manipulation by providing all the conventional JavaScript functionalities.

# Project run instruction

- After unzipping/extracting the project,
- You'll find two folders, "ContactListApi" which is a .Net 6 server-side project/application and "ContactListClient" which is an Angular client-side project/application.
- Open ContactListApi in Visual Studio 2022 and ContactListCLient in Visual Studio Code.
- Make sure that mongoDB is installed on your system and that it's running.
- Open your mongoDB compass to connect to the mongoDB database on "http://localhost:27017".

- Now because these sub-projects come in a zip file, you don't have to run any special commands to run the project as all dependencies are there,
  but in case of any runtime errors, for the ContactListApi opened in Visual Studio, go to 'Manage NuGet Packages' and install/add Microsoft.Extensions.Options and MongoDB.Driver which is the official .Net 6 driver for mongoDB to your project. Then run your project using the play button in Visual Studio 2022 then navigate to http://localhost:5289 on your browser, You should see "Manage Contacts API!" to know that the project is running successfully.

- Now that you have your server running, open ContactListClient Angular project in Visual Studio Code then run 'npm install' to install all packages and dependencies needed to run the application. That should be all you need to do, then run 'ng serve' to serve the application on the browser. When compiled successfully, navigate to 'http:localhost:4200' on your browser to see the application running.

- Thank you so much for the opportunity to take this assessment. I have enjoyed working on it.
