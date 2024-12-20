#Logbook
3.11.2024  Link to the Git repo + Logbook
Submission:

Link to the GitHub repository: https://github.com/Nikos-Eliassi/shiny-dollop

Logbook:

The task has been completed successfully according to the instructions. The GitHub repository has been updated and is accessible to the teacher. 

https://portswigger.net/users/youraccount/licenses
| Name                  | date/time      | Type     |  Solved  |
| :---                  |      :---:     |     ---: |   ---:   |
| SQL injection         | Nov/10h        | table    | done     |
| Topic Authenticatio   | Nov/10         | table    | done     |
| Topic Access control  | Nov/10         | table    | done     |


### 17 November 2024 Introduction to the portswigger environment


Progress:
Completed 3 labs using PortSwigger and ZAP:
SQL Injection (e.g., bypassing WHERE clause constraints).
Authentication (e.g., username enumeration).
Access Control (e.g., accessing admin functionalities).
Reflection:
I used PortSwigger and ZAP to capture and modify HTTP requests. In exploring SQL injection vulnerabilities, I learned the importance of precision in crafting queries. ZAP proved particularly helpful in automating security testing processes. The main challenges were managing syntax and integrating tools, but the instructions were clear. I successfully completed all tasks, gaining insights into identifying and exploiting common vulnerabilities in web applications. This experience enhanced my skills and motivated me to continue testing.




https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US

Introduction to Cybersecurity
Here's a clear table to organize the information:

| Section                                            | Progress | Action  |
|----------------------------------------------------|----------|---------|
| My Knowledge Check (beta)**                      |100%      |         |
| My Knowledge Check History                       |100%      |         |
| Reset and retake the test                        |          |         |
| Course Navigation Tutorial                       | 100%     | expand  |
| Module 1: Introduction to Cybersecurity          | 53%      | expand  |
| Module 2: Attacks, Concepts and Techniques       | 61%      | expand  |
| Module 3: Protecting your Data and Privacy       | 72%      | expand  |
| Module 4: Protecting the Organization            | 55%      | expand  |
| Module 5: Will Your Future Be in Cybersecurity?  | 100%     | expand  |
| Introduction to Cybersecurity: Course Final Exam | 80%      | expand  |


24.Nov,2024 
The Booking system project → Phase 1

Development of the Registration Page: Created and tested a registration page using Docker and Deno environments. The goal was to ensure a fully functional and tested registration page as part of the booking system.

Analysis of SQL Injection Vulnerabilities: Used PortSwigger and ZAP to explore how SQL injections can bypass query constraints and reveal data. For example, +OR+1=1-- was used to simulate an attack.

Authentication and Access Control: Investigated vulnerabilities in login systems, such as username enumeration through error messages, and analyzed access control issues.

Automated Security Testing: Performed automated scans on the server (localhost:8000) using ZAP. This identified security issues, such as missing HTTP headers ).

GitHub Documentation: Updated all findings and test results in the logbook and the GitHub repository. I got help from classmate.





1.Dec.2024 Submission: The Booking system project → Phase 2

Summary:

This phase of the project was completed according to the instructions, and all progress has been documented in the GitHub logbook.

The work on Phase 1 of the Booking System Project provided a strong foundation for this assignment, especially in setting up the development environment and understanding core functionalities.

The registration page (localhost:8000/register) was successfully implemented and tested. However, I encountered issues with the login functionality and was unable to log in as expected. Despite this, I followed all other steps, including functionality and vulnerability tests for the login page and the entire system (index, login, register). Reports were generated using Checkmarx ZAP, converted to MD format, and added to the repository.

Next, I will focus on debugging the login feature and improving it in the upcoming test cycle. The assignment has been submitted with the required updates and documentation. I have asked of my classmade.


I apdate my logbook better SOON.

In this Grade 2 project, The Booking System Project → Phase 2 Accepted, I focused on the login page on localhost:8000. Everything worked perfectly both from Docker and in Visual Studio Code. By watching tutorial videos, I corrected commands and succeeded. After a long effort, I got guidance from a friend, and the fixes were actually made quite quickly. After that, I accessed ZAP. I performed a couple of attacks and printed a report. In one of the reports, there was the entry: "User Agent Fuzzer | Informational | 24 |". Then, I printed a HAR report. Initially, I faced challenges with Chrome, but I managed to get VAR results using Microsoft Edge.
The tasks were challenging and required a lot of effort, but I learned more effectively by fixing errors along the way.



Task: The Booking System Project → Phase 3 (8.12.2024)

I started by watching the lecture on 25.11.2024.
I read the handouts and followed the videos. I didn’t manage to complete the reservation all the way to the end. I had forgotten to download the file TheBookingSystemVer1.zip because I had downloaded my own version, which didn’t support reservations. Eventually, I deleted the content in Visual Studio Code and started completely from scratch.

Steps:

I downloaded Postgres in Docker as booking_system_db_ver2 with port 5432:5432.
I moved to app.js and started it with deno run.
I logged in to localhost:8000.
I went back to Docker login_logs; the booking system → the updated index page.
I uploaded sessionservice.js session file and added it → commit. The database didn’t need to be reloaded with sessionservice.js.
On localhost:8000 → I opened Developer Tools and found the application session:id.
I uploaded index.page.js, reservation.js, resource.js.
I downloaded TheBookingSystemVer1.zip from the teacher.
I opened it and ran it in Docker as booking_system_db_ver2.
I moved back to Visual Studio Code. The localhost now looked different, allowing me to make reservations.
At first, 
I had to register again. It didn’t accept identical passwords, and age had to be over 18 years.
I added a new resource, then added a new reservation.

It took me 35 hours to complete this task. My neck and shoulders are stiff, and I got a migraine. I felt frustrated because small mistakes turned into bigger ones. Only today did I fully utilize the teacher’s video and materials. I learned how to complete the task perfectly.



The 5 most important points

Weak password management → Fix hashing.
Insufficient access control → RBAC must be implemented.
Lack of input validation → Add XSS protection.
Session vulnerability → Add a timeout and flags.
Open API → Authentication must be added.

The Booking system project → Phase 4 (15.12.2024)

4. Answer to the Questions
Is the lack of consent a problem?
Yes, the lack of consent is problematic because GDPR requires clear and unambiguous user consent for processing personal data. Simply accepting the terms of service does not cover all situations, such as collecting data for analytics or marketing purposes. Consent gives users control over their data and enhances trust in the system. Its absence can lead to legal violations and a poor user experience, as user rights remain unprotected.

Example of a page where consent is required:
I chose the BBC cookies management page (https://www.bbc.com/usingthebbc/cookies/). On this page, users are asked to consent to the use of cookies because they collect personal information such as browsing activity and IP addresses. Cookies are used for analytics, personalization, and advertising, so user rights require obtaining consent.


AddedTheBookingSystemVer2. I have forgatten to link this. 
https://github.com/Nikos-Eliassi/TheBookingSystemVer2/blob/main/README.md