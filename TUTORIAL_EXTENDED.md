### Introduction :wave:

A local travel agent is building a websites to show off a selection of hotels in their area. They want their website to encouragage people to visit a destination and stay at one of the travel agent managed "dream stays"

For example, your destination may be London and your dream stays may be The London Grand Hotel, Camping in Crystal Palace and a Thames canal boat.

Remember the local travel agent really wants to market the location and "Dream stays" to our customers so they'll book a holiday so try to encourage people to visit. Perhaps the weather is exceptionally nice, or there is a range of local wildlife to see. Think about the type of content that would persuade YOU to travel to a specific destination. BE CREATIVE! We want a website that stands out, not a boring website.

Remember to use the knowledge shared in the slide deck to complete these activities and ask the assistents for help. We will walk through the exercises together but you'll have time to after each to go back through and update the content.

There are also a million ways to design and implement a website, we're not worried about using best practices here, let's just get it working!

### Exercise 0: Getting started [30 minutes]

1. First, we need to create a Github.com account. This is a free account (you may already have one from an earlier session)

2. Next, we want to actually start working on our website! 
    1. Go to https://codesandbox.io/
    2. Click on `Try for free` in the top right
    3. Click on `Import repository` and click `Sign in with Github`
    4. Click on `Import repository` again and paste `https://github.com/mattjnewberry/dream-stays/` and click `Import`
    5. This will create a Github branch for your work. This is where we're going to do all of our coding.

3. Then, pick a location. This can be any location you like. Perhaps there's a place you've always wanted to visit or just random town from google maps! Pick somewhere you'll find interesting reseraching and building a website for.

4. The code for our website is in `/src`. Open the folder and take a look at the files, this is a great time to ask any questions if you're wondering what a particular file does.

5. Next, we need to update your website title to include your new location. Update the `<h1>` tag in the `App.js` and change the title to include your location. Refresh the page to check it's worked!

6. Now we need to make sure we can save out change to Github, this is called a "Commit". It's important to commit your work regulary to avoid losing any work! Click on the icon in the top left with a purple dot. This will list the "Uncommited Changes", make sure all files you want to commit are ticked and click `Commit and Push`. 

7. Let's view our branch in Github to make sure it's all there. In the top center click the drop down and click `Open branch in Github`, This should open your branch and you should be able to see the most recent commit!

3. Great. Now let's start adding content to our website using html and css!

### Exercise 1: HTML and CSS :pencil2: [1 hour]

1. First, we need a slogan for our location. Think of a catchy slogan for your location, for example "Explore London's iconic sights and create a life long memory!" (I'm sure you can think of a better one than that).

2. Now let's add this to our site underneath our location title. Try making the slogan italic and bold so it stands out.

    Add the following to your html under the your `h1` tag in `App.js`. Play around with placing it on different areas of the page and see what happens.

    ```
    <p class=app-slogan>my slogan</p>
    ```

    Then we want to style this element, so add the following to the `App.css`

    ```
    .app-slogan {
        font-size: 30px;
        font-weight: bold; 
        font-style: italic;
    }
    ```
    
3. The travel agent has asked that the slogan stands out on the page, and to do this he wants to change the color.

    Go to https://www.w3schools.com/colors/colors_picker.asp and select pick a color for your slogan. Copy the 7 digit code, it should look something like `#ffffff`. This is a hex code.
    
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

    Think of a stay you'd like to advertise that would encourage travellers to visit your destination. Be imaginative.
    
    Go to https://unsplash.com/ and find a relevant picture for your stay
    
    Click on an image and right click, select `Copy image address`
    
    Paste this URL into the `src` attribrute of the `img` tag for the card. 
    
    e.g 
    ```
    <img class="card-header-img" alt="alt2" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"/>
    ```

    Go to `data.js` and update the `img` key value to use your new URL. Refresh the page to ensure the new data is being used correctly!
    
    Give the stay id, name and description to more accureately describle you stay.

5. You may be wondering what the `id` field is. Let's see what changing this does. 

    Click on `View More` in the built in browser for one of the cards. Notice how it takes you to a new page.

    Take a look at the URL (That's the address at the top). You should notice your `id`. Now go back and change your `id` in `data.js` again. Go back to the root url by deleteing the `#` and everything after. Click on the `View More` for the same stay and notice how the URL has changed automatically!

    
6. Finally, let's add a footer to the page with the name of the author and the year

    Add a div to the bottom of the page just below the last closing `</div` tag, with
    
    ```
    	<div className="footer">
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


7. You've probably been strugglging to get back to the home page from other pages of the website. Let's add a home button to make our life easier!

    Have a look in `Card.js` and see how the `View More` button works...

    We want to copy this functionality.

    First paste the following in between the `<header></header>` tags in `stays.js`

    ```
    <Link to="/">
        <button className="nav-button">Home</button>
     </Link>
    ```

    You should see an error in your code. `'Link' is not defined`, what does this mean?

    The `<link>` component doesn't exist in our application. We haven't defined it and our code doesn't know where to get it from! 

    We need to import this `<Link>` component. Add 

    `import { Link } from "react-router-dom";` to `stays.js`

    This is importing the `<Link>` component from the `react-router-dom` package. We'll look at react packages a bit later on.

    Now it should work. Test it out!

    
8. Now, let's apply what we've learnt and make the webstie our own!

    Update the colors of the site to make it your own. See what components you can change the color of.
    
    Add the remaining stays with titles, pictures and a description.
    
    Add any additional marketing content to the website using `<div>` and styling it as we've done previously, or you can update the existing sections on climate and history
    
    Have a look at all the CSS properties we can use https://www.w3schools.com/cssref/. You could try updating the background of the website.
    

### Exercise 2: Javascript :computer: [1 hour]

1. Let's add a button that can change the color of the header

    First add a varible to hold our default background color in `App.js`, just under where we define our other variable
    
    ```
    const egBlue = "#3662d8";
    ```

    Now we need to add state so we can update something when we click the button. This is going to use a little bit of React logic.

    ```
     const [bgColor, setBgColor] = useState(egBlue);
    ```

    Next, we need to add the function to actually update this state. Add this function to `App.js`. Feel free to pick whatever colour you like. If you do, make sure you rename the variable so others know what color it is!.


    ```
    const changeColor = () => {
        let purple = "#A020F0";
        setBgColor(purple);
    };
    ```

    We need to update our header to use this new state. Update the `<header>` tag to have the following attribute 
   
    ```
    style={{ background: bgColor }}
    ```

    Finally, let's add a button to set this state. Add this to somewhere in the html section.
    
    ```
    <button type="button" onClick={changeColor}>
        Click me!
    </button>
    ```
    
    
2. Let's add a clock to the footer

    First, let's define a state again for our clock. Paste the following code into `App.js` before the return statement. We're using the built in functions to get the current time!

    ```
    const [time, setTime] = useState({
        minutes: new Date().getMinutes(),
        hours: new Date().getHours(),
        seconds: new Date().getSeconds()
    });
    ```
    
    Next, we want to some code to run after our website had loaded every second to update the time. The following code
    
    ```
      useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setTime({
                minutes: date.getMinutes(),
                hours: date.getHours(),
                seconds: date.getSeconds()
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    ```

    `useEffect()` is a React hook that will run after the page has loaded. We then define some code to run at a specified interval, in this case, every 1 second. Notice how we're updating our time state that we set just a moment ago.

    There should be an error saying `useEffect` is undefined... Take a look at how we're importing `useState` at the tope of the file, can you try importing `useEffect`?

    Let's display the time state. Paste the following anyewhere in the html in `App.js`

    ```
    <div className="clock">
        <span>{time.hours}:</span>
        <span>{time.minutes}:</span>
        <span>{time.seconds}</span>
        <span>{time.hours >= 12 ? " PM" : " AM"}</span>
      </div>
    ```

    Wait for the clock to a single digit second...it looks a little weird, right? Let's write a function to prettify our clock digits. Add the following function to before the return function in `App.js` 
    
    ```
        const convertToTwoDigit = (number) => {
            return number.toLocaleString("en-US", {
            minimumIntegerDigits: 2
            });
        };
    ```

    Can you figure how to now use this function in our html? It takes a number of a paramter and returns the formatted number. We're currently displaying the numbres with `<span>{time.hours}:</span>`.
    
    
### Exercise 3: React components :earth_africa: [1 hour]

1. We've used a number of react featuers such as state and hooks. Another key benifit of react is using Components. Components are reusable bits of code. Let's create a NearbyAttractions component

    First we need to create `NearbyAttractions.js` and `NearbyAttractions.css` files.

    Once we have these files let's create a basic functional component with the following code

    ```
    function Attractions() {
        return <div className="Attractions"></div>;
    }

    export default Attractions;
    ```

    We want this component to show a table with a list of nearby attractions. First let's add a paramter to this component (these are called our props). Update the function to include a parameter.

    ```
    function Attractions(attractionData)
    ```

    Now we can use this variable to display the data which we'll pass in later. Add a basic table that is going to display our data in a table

    ```
      <table>
        <thead>
          <tr>
            <th>Attraction</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{attractionData.attractions[0].name}</td>
            <td>{attractionData..attractions[0].distance}</td>
          </tr>
        </tbody>
      </table>
    ```

    We need to use this component somwehere. Let's add it to our `stays.js` page. You'll need to import your custom component first, take a look at how `App.js` is importing our `Card` component and try and import the `Attractions` component into `stays.js`

    Once you've imported the componet, try adding it to `stays.js` somewhere in the html. Remember to include a closing tag!

    It looks a little empty...It's because we're not passing any data to the component! Let's pass some data.

    First, let's update the data in `data.js`. We're currently defining an array of nearby locations, but we want to make this an array of objects for each of our attractoins. For example

    ```
    attractions: [
      {
        name: "London eye",
        distance: 12
      },
      {
        name: "Buckingham Palace",
        distance: 10
      },
      {
        name: "Tower Bridge",
        distance: 3
      }
    ]
    ```

    Update each of the stays neary fields in `data.js` to use a create an array of objects.

    Now add the Attractions component to `stays.js` by adding

    ```
    <Attractions attractions={stay.attractions} />
    ```

    Checkout one of the stays pages. Hmm, it's only showing the first attraction. Why is this?

    We need to loop over the `attractionsData.attraction` and display a new row in the table for each one!

    Take a look at how we're doing this when displaying the Cards list in `App.js`. Can you try iterating over the map and the values in each row? You can use this to get you started

    ```
        {attractionsData.attractions.map((attraction) => {
            return (
                <tr>
                <td>{attraction.name}</td>
                <td>ADD THE DISTANCE ROW<td>
                </tr>
            );
        })}
    ```

2. The travel agent has provided some feedback and said they want more content on the website to engage the customer. Let's add a video to each stay page.

First, let's import `ReactPlayer` from `react-player` in `stays.js`. Just like we can import and re-use our componetns, we can import and re-use other peoples components!

```
import ReactPlayer from "react-player";
```

You should see an error in your website, it's telling us to resolve the dependecy. We need to tell the IDE to install the `react-player` package. Click `Resolve dependencies`. Go to `package.json`, you'll see the package we just installed!

Now we can add the `ReactPlayer` component to the page

```
<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /
```

You should see the video pop up. But there's a problem, it's using the same URL for each stay page. We want a different video for each stay. 

How can we pass in the URL? Take a look at how we're pasing in the `stay.description`, can you do the same for the video url?

#### Congratulations

You've reached the end of the exercises. Now's the time to go back and update any areas you didn't get time to do earlier and add any additional content you think would encouragage a traveller to visit.

If there's something you want to add and need help, ask one of the volunteers!
