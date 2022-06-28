# dream-stays-2022 :hotel::airplane:

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

## Building a website tutorial :computer::rocket:

### Introduction :wave:

A fictional travel agent is building a collection of websites for a new travel brand to use in their marketing material. Each site is dedicated to inspiring customers to visit a destination with a collection of "Dream Stays" in the local area. The travel agent wants their customers to be inspired to travel so that they book holidays via them!

For example, your destination may be London and your dream stays may be The Ritz, Camping in Crystal Palace and the Mandarin Oriental Hotel.

Remember we want to really sell this location and "Dream stays" to our customers so they'll book a holiday, so try to market it as best as you can. Think about the type of content that would persuade YOU to travel to a specific destination.

We'll add content as we move through the exercises. Don't worry about the content being perfect, the final session is dedicated to adding any final touches to the site.

Remember to use the knowledge shared in the slide deck to complete these activities and ask the assitants for help.

The exercises may not line up exactly with the sessions. If we get to the end of a session quickly, it may be worth just having a play with some different css/html/js/react and seeing what happens

There are also a million ways to design and implement a website, we're not worried about using best practices here, let's just get it working!

### Setup :wrench:

1. To begin with, let's pick a destination we want to focus on. Throughout the exercises we'll need to do some research and provide some information about the general area. Be creative! Pick a destination you've always wanted to visit or that you might think would be an interesting destination to visit with some cool dream stays.

2. When templating the repository, you can cal your repository anything you think makes sense (Remember it's public!), maybe something like "<your_location>-dream-stays" e.g "London-dream-stays"

#### File Structure

We only need to be concerned with the src folder for the exercises!

- src
  - components/ (This is for our React components)
  - routes/ (This has the pages for our dream stays)
  - App.css (This has the styling for the homepage, so if you want to style something on the homepage, add it here!)
  - App.js (This has the HTML for the homepage, so if you want to add something to the homepage, add it here!)
  - data.js (This is where we store information about our dream stays)
  - index.css (We can ignore this for now)
  - index.js (We can ignore this for now)

#### Tips & Tricks :information_source:

- Remember to save the file after each change, otherwise it won't be shown in the site locally!
- Deploy it locally whilst your working, this will mean any changes to the code are immediately displayed

### Lesson 1: HTML and CSS :one:

1. First, let's add our location to the top of the page undeaneath the header. What html tag do you think is a good choice here, considering the page already has a `<h1>`?. Add the tag with you location as the content undeaneath the header in `App.js`<details closed><summary>Hint</summary><br>`<h2>London<h2>`</details>

2. Okay great, our page has our destination as the title, but it looks a little small, why not try increasing the font size of your title using some css.<details closed><summary>Hint</summary><br>You can either change the font size of all &lt;h2> tags using ` h2 { font-size: 64px; }`</details>

3. That looks better! Now to add some content. We need a slogan for our location. Think of a catchy slogan for your location, for example "Explore London's iconic sights and create a life long memory!" (I'm sure you can think of a better one than that)

4. Now let's add this to our site underneath our location title. Try making the slogan italic and bold so it stands out.<details closed><summary>Hint</summary><br>HTML: `<p className=location-slogan>my slogan</p>`CSS:`.location-slogan{font-weight: bold; font-style: italic;}`</details>

5. Next, section that has an un-ordered list of local activities your traveller can experience, for example "Thames river boat tour", "England playing at wembley" etc. The section should include a title such as "Local Acitivities"<details closed><summary>Hint</summary><br>`<h3>Activites</h3>` for the section title and `<ul><li>my activity</i></ul>` for the list</details>

6. Let's personalise your site a little. We're going update the colour scheme used. Go to https://htmlcolorcodes.com/color-picker/ and pick your site colour, make sure you copy the hex code.

7. Set the colour of your different elements using the "background-colour" css attribute. Explore setting the background colour of the app and other elements.

8. Now let's add another section title above the "card" html element (This is a react component, but we'll cover this in a later session). This section title could be something like "Stays" <details closed><summary>Hint</summary><br>`<h3>Stays</h3>`</details>

9. Finally, let's add a footer. Try thinking how you can create a "division" at the bottom page. Set the colour of the footer to something different to the main page so we can see this division! Add some content to the footer if you feel like it. <details closed><summary>Hint</summary><br>HTML: `<div className="footer"></div>`

   CSS: `.footer{background-colour: #3662d8; width: 100%;height: 100px}`</details>

### Lesson 2: Javascript :two:

1. We're going to create a small welcome message to the page that will greet the user and remember if a user has already visited the page! This will be quite a long exercise...

2. Let's start by adding a button for updating the user's name. Add a button to the page <details closed><summary>Hint</summary><br>`<button>Change user</button>`</details>

3. Now let's add a simple javacript function with no parameters that outputs a message to the console, you can use console.log. The function has to go in App function before the return. <details closed><summary>Hint</summary><br>`function setUserName() { console.log("You clicked the button!"); }`</details>

4. Add an onClick event to the button created earlier that calls the function. <details closed><summary>Hint</summary><br> `<button onclick="setUserName()">Click me</button> `</details>

5. Open your site in the browser and right click -> inspect. Open the console tab on the right and click the button. You should see the output of your function! :grin:

6. Let's add a HTML tag for holding the welcome message, Something simple like a `<p>` tag. Add an id attribute to the element <details closed><summary>Hint</summary><br> `<p id="welcomeMessage"></p>`</details>

7. Time to update the function to set the username to actually do something useful! Update the content of the function to the following. Try to understand what each line could be doing...

```

    let welcomeMessage = document.getElementById("welcomeMessage");
    let username = prompt("Please enter your name.");
    localStorage.setItem("name", username);
    welcomeMessage.textContent = "Welcome, " + username;

```

8. Try running the site and checking it works, when we click the button we should be asked for a username, which sets the welcome message. Try refreshing the site, what happens?

9. Finally, we need want a function to check the local storage after loading the page so that it "remembers" the username we set. To mak this easier we're going to use a tiny bit of React. The `useEffect` hook allows us to do side effects when things happen on the page, such as the page content being rendered. Add the following to the App function in App.js:

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

### Lesson 3: React :three:

1. Now let's work on our dream stays components. The cards are created as React component, which you can see in /components/Card.js. We're exporitng a "Card" component which can be used on other pages (such as the homepage). Take a look at the code and see if you can find out where we're pulling the Card information from such as the description...<details closed><summary>Hint</summary><br>There is a `getStays` function being called in App.js, which returns our list of objects from data.js</details>

2. Let's update our stays. Update each stay's description, image, name etc. to be something unique related to your destination, be as creative as you like!

3. The travel agent has informed us they want us to advertise the avg price of the stays too. For this we will need to use the Pricing-Server we worked on earlier. You should look at the `Card.js`, `pricing-server.js`, ask one of us for hints

4. Now we want to display this price on the card component. Go to App.js and pass our new price attribute to the Card component.<details closed><summary>Hint</summary><br>`<Card id={stay.id} name={stay.name} description={stay.description} img={stay.img} price={stay.price} />`</details>

5. Next, we want to use this price attibute in the Card component, so head over to Card.js and add a new HTML element that could display the price. Remember it's just a text field. Feel free to add some CSS to this it to look a bit nicer.<details closed><summary>Hint</summary><br>`<p className="card-price"> {props.price} </p>`</details>

6. The travel agent wants each Stay page to feature a promotational video. We can use the rich ecosystem of react to embded a video super easily. For this exercise we will be using https://github.com/CookPete/react-player. First off, install the package by running `npm install react-player`

7. Next, import the conmponent from the package by adding `import ReactPlayer from "react-player";` to the top of Stay.js (With the other imports)

8. Now add the component to the page using `<ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />`. You should see the video is now avaiable on the page! :grin:

9. We want a different video for each stay, so we're going to to need to do the same steps we did earlier to display the price, but this time we need to update stay.js rather than the homepage and card component.<details closed><summary>Hint</summary><br>`{ id: "theritz", name: "The Ritz", img: "https://media.cntraveler.com/photos/5f6198aa987090832029b181/16:9/w_2560%2Cc_limit/ritz-london-exterior.jpg", description: "We are London’s most iconic hotel. A five star haven on Piccadilly that is famous the world over for its historic elegance, impeccable service, impressive suites, and legendary Afternoon Tea.", nearby: ["London eye", "Buckingham Palace", "Tower Bridge"], videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }` && `<ReactPlayer url={stay.videoUrl} />`</details>

10. Find some promotational video for your stay or location for each stay and display it on the stay page!

### Lesson 4: Final additions and deployment :four:

1. Congratualions on making it to the end! :tada:. This final sesison is for you to make any last minute changes or fixes; Add any content you like or play around with some more of the technologies we've learnt by creating the website.

## Student sites

TODO: Add links to student sites here!

```
links go here
```
