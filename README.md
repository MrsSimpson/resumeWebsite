resumeWebsite
 =============
 
 CSS 405 Term Project- Summer 2018
 -----------
 This website is intended to be a learning tool for me to learn webdevelopment. 
 The contents will display my personal resume. After completing my resume website, I plan
 to use it to apply for future employment opportunities. 
 
 tools used:
 -------------
 * HTML5
 * CSS3
 * JavaScript/jQuery
 * PHP

 Project Contents
 -------------  
 The website contains and index.php page (the home page), aboutme.php, portfolio.php, and contact.php files.
 Originally these files were html files, but later converted to PHP so that the header and footer could be placed
 in a seperate file and then included in each of the sites pages. Having this functionality enables me to edit the 
 header or footer in one file and have the changes be displayed uniformly across all pages. 

 The aboutme page contains personal information about myself that would not normally be included in a typical
 resume. I used jQuery on the about me page to make my profile image change when the user hovers over the image, and
 then change back to the original image when the user's mouse leaves the image. This functionality was placed in a 
 seperate javaScript file and is called in the footer.php file. I placed it in the footer.php file so that this 
 functionality is the last to load as recommended. 

 The portfolio page contains a link to my PDF resume. The page also includes my resume content, special projects, and
 community service. 

 The contact page contains a link to my linkedIn profile, and a link to send me an email. I have plans to add a contact 
 html form for the user to send me a message via email.

 The stylesheet.css file is external and contains all of the code to style different elements on each of my pages. 

 At a later date, I plan to make the site live using AWS to host. 
