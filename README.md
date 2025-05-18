# Wheel Of Names App

# Build Your Own Wheel of Names
This will be an app that I presume is inspired by the TV show Wheel of Fortune. In the TV show, contestants try to figure out a short phrase by guessing letters. If they guess correctly, the letter will be revealed. They spin the wheel to determine how much money each correct letter is worth. Wheel of Names is similar, but allows us to create a virtual wheel, putting our own names on it. We can then virtually spin it to determine a winner.

# Tech Stack:
Bun / Vite
React / Typescript
SASS / styled-components
canvas / canvas-confetti

# Application features:
I. Question
This is where users can submit a question or phrase that will determine the focus of the spins.
Any changes made in the input field are saved when the user clicks outside of it (on focus out).
II. Wheel
The wheel component spins with an easing animation and determines the winner.
The spin direction can be adjusted using the buttons, for either clockwise or counterclockwise rotation.
Each adjacent sector is uniquely colored, and their sizes are calculated proportionally to the number of participants.
III. Add Participants
The participant entry area includes an input field for entering a participant's name and an 'ADD' button to add it to the participants list.
To add participants more quickly, the user can press the ENTER key on the keyboard.
IV. Participants List
This section displays all the participants' names.
The list offers options to sort the names alphabetically or shuffle them randomly, with both actions dynamically updating the wheel component.

# Running the app locally
To run the app, follow these steps.

Ensure that NodeJS is installed.
Install bun.
From the project folder, execute the following commands:
  To install dependencies:
     bun install
  To run the app:
     bun run dev
     
# Deploy on Vercel
This App Deplpoyed to Vercel, You can have access via this link: https://wheels-of-names-app.vercel.app/

