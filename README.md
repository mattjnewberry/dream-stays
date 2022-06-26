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

   1.1 TODO: get this working https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

### Lesson 3: React

1. TODO Exercises to update the react card images, description etc.try adding a price field to the data and displaying it on the react card component

Try adding a lat/long field and displaying a map on the stay page https://github.com/google-map-react/google-map-react

### Lesson 4: Final additions and deployment

1. TODO This time is theirs to work on whatever piece they want. addmore content, tidy it up, add some more sections on the location such as climate etc.

## Student sites

Add links to student sites here!
