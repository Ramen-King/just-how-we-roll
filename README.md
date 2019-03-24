# Just How We Roll

#### Introduction

Today we'll be dealing with dice, and we'll make you DIE laughing at the PUNishing jokes you'll be on the receiving end of.

#### What Does This App Do?

Every time we click on a die, we get back a random result according to the possibilities of that die or set of dice. In other words, if we click on the six-sided die, we get a number 1-6. If we click on the pair of six-sided dice, we get a number from 2-12 (because you can't get 1 with two dice!).

While the user is seeing how they felt (craps pun... just ROLL with it) about that result, we calculate the mean average and median average of the rolls so far, and give that data to them.

Try not to DIE from how hard this is!

Oh, I already used that pun?

Dangit, there just isn't that much to work with here.

#### What steps should I take to get there ?

You could try to go without instructions here for a real challenge. Be the star, not a ROLL PLAYER.

Okay, that pun was a reeeeeaaaaaal stretch. I'm done now.

Besides, you probably _should_ follow these instructions.

1. Start with your first roll function, `rollD6`. This function should, in order:
	* Get a random number from 1-6, using `Math.random`, `Math.ceil`, and the number 6. **Save it somewhere**, because we'll be using it!
	* Add that number to a list of rolls. A global array would help here!
	* Figure out the mean average of the rolls we've seen so far.
	* Figure out the median average of the rolls we've seen so far.
	* Put those values in the appropriate places on the page.
	* Place the image corresponding to our roll (it's in the repo already!) on the page, _replacing the image they clicked on_.
2. Now, that there is a long and ugly function. But we want you to leave it like that. DO NOT REFACTOR IT. We'll make the following roll functions much better!
3. Make the second roll function, `rollDoubleD6`, following these steps:
	* For this one, let's make a `getRandomRoll` function, so that we can call it (twice!) in this function. It should have the same code as before, but it can `return` the random number 1-6, the `return` value of which we can set as a variable. Once again, **do not** refactor the `rollD6` function. We wants its ugliness preserved so we can remember what happens if we don't write little helper functions.
	* Add the number to a list of rolls, just like before.
	* Don't figure out the mean in this function: instead, make a new function that can take in an array as a parameter and return the mean of all those numbers.
	* Do the same for the median! FUNCTIONS GALORE.
	* Put the mean and median values in the appropriate places on the page, just like before.
	* Place the image in the corresponding place on the page, just like before.
4. Now let's do the `rollD12` function. This time, if we did it right so we can take in a parameter like the array or the maximum roll or whatever the function needs, we can use the random number, median, and mean helper functions!
5. And the same for the `rollD20` function!
6. Now gaze upon how far you've come since you wrote the `rollD6` function. Good job!

#### Stretch Goals

Coming soon!