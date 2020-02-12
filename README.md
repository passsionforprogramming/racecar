# Racecar

# Background

Racecar is all about beating your previous race time while overcoming the onslaught of oncoming vehicles and also zombies. You can speed up, but you are doing so at the risk of crashing and not finish the race. You can are also equipped with 100 rounds of ammo to get through the race. However, be careful how you use it because when you run out

# Functionality & MVP
  * Users will be able to start, pause, and reset game.
  * Users will be able to speed up the car or slow down.
  * Users will be able to complete a race track.
  * Users will be able to move the car in left or right to evade oncoming cars.
  * Users will be able to view their race time.
  * There will be a modal with instructions for the user.
  * There will be a difficulty setting that will increase the amount of oncoming cars.
  * There will be zombies animating across the screen.
  * There will be sound effects for explosions, accelerating, and breaking the car.
  *
  
 # Wireframes
   The app will have a single screen. The user will control the game using keyboard up, down, left, right arrows. Game Controlls will also include, Start, Stop, and Reset buttons. There will be a car that the user is driving and the background will scroll and change as the car progresses forward. There will also be oncoming cars. The user will be able to see their time at the top and will also see when they have crossed the finish line.
   
   ![alt text](https://partybnb-seeder.s3.us-east-2.amazonaws.com/racecar.PNG)
   ![alt text](https://partybnb-seeder.s3.us-east-2.amazonaws.com/racecar3.PNG)
   
   
 # Architecture and Technologies
 This app is written in plain vanilla javascript with canvas to provide animations. Object oriented programming is utilized with the following classes:
 * Bullet
 * Car
 * Crazy Car
 * Explosion
 * Game
 * InputHandler
 * Road
 * Stats
 * Zombie
 
 ![alt text](https://partybnb-seeder.s3.us-east-2.amazonaws.com/racecar4.PNG)
 
 # Implemnation Timeline
 Day 1: Create Canvas Element, Submit project proposal, set up necessary classes, and begin car class. Find license free assets for car images, and road background. Create game loop for animation. Implement Game Start.
 Day 2: Finish car class, oncoming Car classes. Set up speeds of cars. Set up user controls for car. Style Time and score for users in css overlay on canvas. Implement game reset and stop.
 
 Day 3: Detect car crash, implement, debug, 
 
 # Bonus Features
   * Competitor racing cars.
 
