# dream-stays-2022

This is a starter repository for the work experience week (27-01 June/July 2022) at Expedia Group. Use this repo to create a super simple react app about some dream stays.

## Pre-requisite

- [npm](https://phoenixnap.com/kb/install-node-js-npm-on-windows)

## Installing Depedencies

Install the dependencies by running `npm install`

## Deploying the website

Create the static files for our website by running `npm run build` (If your on windows run `npm run build-windows`).

Ensure your static files have been created in `/docs` directory

Commit the files and push to your main branch.

Update your repository settings to Github pages hosting by going to the repository in Github -> Settings -> Pages -> Set the source to 'main' and the folder to 'docs' -> Save

Your website show now be available on the URL provided!

## Development

View the app locally by running `npm start`

## Building a website tutorial

Use the knowledge shared in the slide deck to complete these activities, eventually building your own dream stays website :grin:

The exercises may not line up exactly with the sessions. If we get to the end of a session quickly, it may be worth just having a play with some different css/html/js/react and seeing what happens. You'll have the assistants on hand to help.

### Introduction

We're building a collection of websites, each site is dedicated to inspiring customers to visit location with a collection of "Dream Stays" in the local area For example, your location may be London and your dream stays may be The Ritz, Camping in Crystal Palace and the Mandarin Oriental Hotel.

We'll add content as we move through the exercises. Don't worry about the content being perfect, the final session is dedicated to adding any final touches to the site.

There are also a million ways to design and implement a website, we're not worried about using best practices here, let's just get it working!

### Setup

1. To begin with, let's pick a location we want to focus on. Throughout the exercises we'll need to do some research and provide some information about the general area. Be creative! Pick a location you've always wanted to visit or that you might think would be an interesting location to visit with some cool dream stays.
2. When templating the repository, you can cal your repository anything you think makes sense (Remember it's public!), maybe something like "<your_location>-dream-stays" e.g "London-dream-stays"

:information_source: Remeber to save the file after each change, otherwise it won't be shown in the site locally!

### Lesson 1: HTML and CSS

1. First, let's add our location to the top of the page undeaneath the header. What html tag do you think is a good choice here, considering the page already has a `<h1>`?. Add the tag with you location as the content undeaneath the header in `App.js`<details open><summary>Hint</summary><br>Try adding "&lt;h2>London&lt;h2>"</details>

2. Okay great, our page has our location as the title, but it looks a little small, why not try increasing the font size of your title using some css.<details open><summary>Hint</summary><br>You can either change the font size of all &lt;h2> tags using
   "h2 {
   font-size: 24px;
   }" or add a custom css class or ID to your title </details>

3. That looks better! Now to add some content. We need a slogan for our location. Think of a catchy slogain for your location, for example "Explore London's iconic sights and create a life long memory"

4. Now let's add this to our site underneath our location title. Try making the slogan italic and bold so it stand out.<details open><summary>Hint</summary><br>Add your slogan using a "&lt;p className=location-slogan>" tag undeaneath your location title. Add ".location-slogan{font-weight: bold;
   font-style: italic;}" to your App.css</details>

5. Next, section that has an un-ordered list of local activities your traveller can experience, for example "Thames river boat tour", "England playing at wembley" etc. The section should include a title such as "Local Acitivities"<details open><summary>Hint</summary><br>Try using &lt;h3 for the section title and &lt;ul>&lt;li>my activity&lt;/i>&lt;/ul> for the list</details>

6. Let's personalise your site a little. We're going update the colour scheme used. Go to https://htmlcolorcodes.com/color-picker/ and pick your site colour, make sure you copy the hex code.

7. Set the colour of your different elements using the "background-colour" css attribute. Explore setting the background colour of the app.

8. Now let's add another section title above the "card" html element (This is a react component, but we'll cover this in a later session). This section title could be something like "Stays" <details open><summary>Hint</summary><br>Try using the &lt;h3> tag for the section title</details>

9. Finally, let's add a footer. Try thinking how you can create a "division" at the bottom page. Set the colour of the footer to something different to the main page so we can see this division! Add some content to the footer if you feel like it. <details open><summary>Hint</summary><br>Try using the &lt;div className="footer"> tag at the bottom of App.js and add .footer{background-colour: #3662d8; width: 100%; height: 100px} to the App.css </details>

### Lesson 2: Javascript

1. We're going to create a small welcome message to the page that will greet the user and remember if a user has already visited the page! This will be quite a long exercise...

2. Let's start by adding a button for updating the user's name. Add a button to the page <details open><summary>Hint</summary><br>Try using the &lt;button> html tag</details>

3. Now let's add a simple javacript function with no parameters that outputs a message to the console, you can use console.log. The function has to go in App function before the return. <details open><summary>Hint</summary><br>`function setUserName() { console.log("You clicked the button!"); }`</details>

4. Add an onClick event to the button created earlier that calls the function. <details open><summary>Hint</summary><br> `<button onclick="setUserName()">Click me</button> `</details>

5. Open your site in the browser and right click -> inspect. Open the console tab on the right and click the button. You should see the output of your function! :grin:

6. Let's add a HTML tag for holding the welcome message, Something simple like a `<p>` tag. Add an id attribute to the element <details open><summary>Hint</summary><br> `<p id="welcomeMessage"></p>`</details>

7. Time to update the function to set the username to actually do something useful! Update the content of the function to the following. Try to understand what each line could be doing...

```
    let welcomeMessage = document.getElementById("welcomeMessage");
    let username = prompt("Please enter your name.");
    localStorage.setItem("name", username);
    welcomeMessage.textContent = "Welcome, " + username;
```

8. Try running the site and checking it works, when we click the button we should be asked for a username, which sets the welcome message. Try refreshing the site, what happens?

9. Finally, we need want a function to check the local storage after loading the page so that it "remembers" the username we set. To mak this easier we're going to use a tiny bit of React. The `userEffect` hook allows us to do side effects. Add the following to the App function in App.js:

```
  useEffect(() => {
    let welcomeMessage = document.getElementById("welcomeMessage");
    if (!localStorage.getItem("name")) {
      setUserName();
    } else {
      let storedName = localStorage.getItem("name");
      welcomeMessage.textContent = "Welcome, " + storedName;
    }
  });
```

Run the site, set the username again and click refresh. You should see the username is still set!

### Lesson 3: React

1. TODO Exercises to update the react card images, description etc.try adding a price field to the data and displaying it on the react card component

Try adding a lat/long field and displaying a map on the stay page https://github.com/google-map-react/google-map-react

### Lesson 4: Final additions and deployment

1. TODO This time is theirs to work on whatever piece they want. addmore content, tidy it up, add some more sections on the location such as climate etc.

## Student sites

Add links to student sites here!
