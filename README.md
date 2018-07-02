# Gamiﬁcation of an Optimisation Algorithm - Prototype Game Client

This is the repository of the prototype artefact containing the code for the game client. The game client was developed as part of the module "Innovation Thinking Project" for the Business Information Systems master degree program at the [University of Applied Science Northwestern Switzerland](https://www.fhnw.ch/en/degree-programmes/business/msc-bis).

## Getting Started

### Prerequisits

* [Node.js/npm](https://nodejs.org/en/download/)

### In npm client
Install Aurelia CLI and Yarn:

```
npm install aurelia-cli -g
npm install yarn -g
```

Load node modules:
```
yarn install
```

Start app:
```
au run --watch
```
### In your browser
```
http://localhost:8081
```

## Manual
In the following section, we will go over how to use the game client to display a running game session and where to change the Firebase API key in order to move to a different Firebase instance.

### Display a Game Session

* **First of all, we need to retrieve the ID of the game session, this ID can be found for example using the [Firebase Console](https://console.firebase.google.com/):**

![Client Firebase](https://drive.switch.ch/index.php/s/uu0jnEqBLu2H9Xa/download?path=%2F&files=Client_Firebase.PNG)

```
The last entry represents the last created game ID.
```

* **We copy this ID into the input field that is displayed when we navigate to the web application and click on the button labeled "Initiate Game":**

![Client Init Screen](https://drive.switch.ch/index.php/s/uu0jnEqBLu2H9Xa/download?path=%2F&files=Client_Init.PNG)
* **The character sheets of the ten characters will be displayed below:**

![Client Character Sheet](https://drive.switch.ch/index.php/s/uu0jnEqBLu2H9Xa/download?path=%2F&files=Client_Sheet.PNG)

* The integer (1-10) corresponds to the number on the back of the character character.
* Next to 'Task' we can see the task the character was performing last turn.
* The color of the slider range corresponds to how the attribute has changed compared to last turn:
  * ![#32CD32](https://placehold.it/15/32CD32/000000?text=+) `Positive change`
  * ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Negative change`
  * ![#696969](https://placehold.it/15/696969/000000?text=+) `No change`

### Change Firebase API Key

If you want to use your own Firebase instance to host the realtime database, simply replace the following code block that can be found [here](https://github.com/StefanEggenschwiler/TLBO-GameClient/blob/master/src/main.ts#L39) with your own API configuration:
```javascript
var config = {
    apiKey: "AIzaSyDxbyj1sNwfR12hPl5fxDEoh_4UBJzZ9Mo",
    authDomain: "itp-tlbo.firebaseapp.com",
    databaseURL: "https://itp-tlbo.firebaseio.com",
    projectId: "itp-tlbo",
    storageBucket: "itp-tlbo.appspot.com",
    messagingSenderId: "729643811214"
  };
```

## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript run-time environment
* [Yarn](https://yarnpkg.com/lang/en/) - Dependency Management 
* [Aurelia.io](https://aurelia.io/) - A JavaScript client framework for web, mobile and desktop
* [Firebase Realtime Database](https://firebase.google.com/products/realtime-database/) - Store and sync data in real time

## Authors

* **Stefan Eggenschwiler**

See also the list of [contributors](https://github.com/StefanEggenschwiler/TLBO-GameClient/contributors) who participated in this project.

## Supervisors

* **[Dr. Elzbieta Pustulka](https://www.fhnw.ch/de/personen/elzbieta-pustulka)**
* **[Prof. Dr. Thomas Hanne](https://www.fhnw.ch/de/personen/thomas-hanne)**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
