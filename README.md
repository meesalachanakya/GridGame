# grid-game

A Grid Memory Game

Can add multiple users
react icon to add user HiPlusCircle => style it

gridSize: 3 _ 4, 4 _ 5, 4 _ 6, 6 _ 6,

eachUser = {
name: 'bla bla',
avatar: 'emoji',
score: 0
}

If one user does wrong selection next user should get the chance

Should be able to upload an image use them as card images to play the game. If the uploaded images are less use the default images that we have should be displayed.

Two features:

- Pic Similar cards
- Pic Paired cards

eachCard = {
id="",
image: "",
}

LOgics

```
alphabet = ['a','b','c','d','e','f','g','h','i','j'];
// let vowels = ["a", "e", "i", "o", "u", "z"];
console.log(alphabet.sort(() => .5 - Math.random()).sort(() => .5 - Math.random()));
```

```
lets take direct images of the users and use them in the game

<input accept="image/*" id="icon-button-file" type="file" capture="environment" />
```

Routes

- Add Users
- Game
- Results
