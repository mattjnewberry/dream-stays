### Introduction :wave:

A local travel agent is building a websites to show off a selection of hotels in their area. They want their website to encouragage people to visit a destnation and stay at one of the travel agents "dream stays"

For example, your destination may be London and your dream stays may be The London Grand Hotel, Camping in Crystal Palace and a Thames canal boat.

Remember the local travle agent really wants to market the location and "Dream stays" to our customers so they'll book a holiday, so try to encourage people to visit. Perhaps the weather is exceptionally nice, or there is a range of local wildlife to see. Think about the type of content that would persuade YOU to travel to a specific destination. BE CREATIVE! We want a website that stands out, not a boring website.

Remember to use the knowledge shared in the slide deck to complete these activities and ask the assistents for help. We will walk through the exercises together but you'll have time to after each to go back through and update the content.

There are also a million ways to design and implement a website, we're not worried about using best practices here, let's just get it working!

### Exercise 0: Picking a location [15 minutes]

:information_source: Info for workshop lead, if codesandbox is not working, we may have to use codepen and use the html and css in the /alt directory. Most of the HTML and CSS exercises will still work but they cannot save their work without creating an account. 

1. First, pick a location. This can be any location you like. Perhaps there's a place you've always wanted to visit or just random town from google maps!

2. Next, we want to actually start working on our website! 
    1. For codesandbox do:
      1. Go to http://codesandbox.io/
      2. Click `Start coding for free` at the bottom of the page
      3. Click `Import project` on the left
      4. Copy and paste `https://github.com/mattjnewberry/dream-stays-2022` into the Github Repository Url Box
      5. Click `Import to projects`
      6. This should open up a new window with the code and the website running. (Don't close this window
    2. For codepen do:
      1. Go to https://codepen.io/
      2. Click on `Start Coding` in the top left
      3. Copy the contents from alt/index.html to the html section in codepen
      4. Whilst you're doing this, pay attention to how adding the css changes the site. 
      5. Copy the contents from styles.css to the css section of codepen 

2. Next, we need to update your website title to include your new location. Update the `<h1>` tag in the html and change the title to include your location.

3. Great. Now let's start adding content to our website using html and css!

### Exercise 1: HTML and CSS :pencil2: [1 hour]

1. First, we need a slogan for our location. Think of a catchy slogan for your location, for example "Explore London's iconic sights and create a life long memory!" (I'm sure you can think of a better one than that).

2. Now let's add this to our site underneath our location title. Try making the slogan italic and bold so it stands out.

    Add the following to your html under the header section. Play around with placing it on different areas of the page

    ```
    <p class=app-slogan>my slogan</p>
    ```

    Then we want to style this element, so add the following to the css

    ```
    .app-slogan {
        font-size: 30px;
        font-weight: bold; 
        font-style: italic;
    }
    ```
    
3. The travel agent has asked that the slogan stands out on the page, and to do this he wants to change the color.

    Go to https://www.w3schools.com/colors/colors_picker.asp and select pick a color for your slogan. Copy the 7 digit code, it should look something like `#ffffff`. THis is a hex code.
    
    Update the css element we just created to include your hex code.
   
      ```
    .app-slogan {
        font-size: 30px;
        font-weight: bold; 
        font-style: italic;
        color: <INSERT COLOR HERE>
    }
    ```

4. Next, we need to update the stays to be relevant to your location. We'll do the first card together.

    Think of a stay you'd like to advertise that would encourage travellers to visit your destination. 
    
    Update the first "Card" with the title of this stay
    
    Go to https://unsplash.com/ and find a relevant picture for your stay
    
    Click on an image and right click, select `Copy image address`
    
    Paste this URL into the `src` attribrute of the `img` tag for the card. 
    
    e.g 
    ```
    <img class="card-header-img" alt="alt2" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"/>
    ```
    
    Give the stay a short description
    
5. Finally, let's add a footer to the page with the name of the author and the year

    Add a div to the bottom of the page with
    
    ```
    	<div class="footer">
        </div>
    ```
    
    Add a CSS element to style the footer with
    
    ```
    .footer {
        width: 100%;
        height: 100px;
        color: #f8f5f4;
        background-color: #3662d8;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
    }
    ```
    
6. Now, let's apply what we've learnt and make the webstie our own!

    Update the colors of the site to make it your own. See what components you can change the color of.
    
    Add the remaining stays with titles, pictures and a description.
    
    Add any additional marketing content to the webstie using `<div>` and styling it as we've done previously, or you can update the existing sections on climate and history
    
    Have a look at all the CSS properties we can use https://www.w3schools.com/cssref/. You could try updating the background of the website.
    

### Exercise 2: Javascript :computer: [30 minutes]

1. Let's add a button that can change the color of the header

    First add a Javascript function that will update the header colour. Paste this into your JS section
    
    ```
    function updateHeaderColor() {
        var x = document.getElementById("header");
        x.style.background-color = "#ff0000";
    }
    ```
    
    Next, let's add a button to call this function. Add this to somewhere in the html section.
    
    ```
    <button type="button" onclick="updateHeaderColor()">Click me!</button>
    ```
    
    
2. Let's add a clock to the footer

    We're going to write a function that can update an element with the current time
    
    ```
    function startTime() {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        document.getElementById('clock').innerHTML=h+":"+m+":"+s;
        t=setTimeout(function(){startTime()},500);
    }
    ```
    
    Now let's add an element to the footer with the `clock` ID inside the footer.
    
    ```
    <div id="clock"></div>
    ```
    
    Finally, let's have the Javascript function run when the webpage is loaded. Wrap the entire html in body tags to call the function when it's loaded. Paste at the top
    
    ```
    <body onload="startTime()">
    ```
    
    and the closing tag at the bottom
    
    ```
    </body>
    ```
    
    If you want the clock to be more readable, you can add a function that formats the variables.
    
    ```
    function checkTime(i) {
        if (i<10) {
            i="0" + i;
        }
        return i;
    }
    ```
    
    And update the variables in your clock display to use this formatting function. Add these to your startTime function.
    
    ```
        m=checkTime(m);
        s=checkTime(s);
    ```
    
    

#### Congratulations

You've reached the end of the exercises. Now's the time to go back and update any areas you didn't get time to do earlier and add any additional content you think would encouragage a traveller to visit (Potentially a video?)

If you want to save your work, you can make a free account.

You can search more example codepens here https://codepen.io/search/pens?q= 
