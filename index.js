const transparentBox = document.getElementById('fun');

// On load pop up animation should be set
window.onload = () => {
    transparentBox.style.animation = 'popUp 0.5s forwards ease-in-out';
}

// Array of quotes inspiring to write a blog or a note
const quotes =
    ["Blogging is a conversation, not a code.",
        "The best stories start with a blank page.",
        "Write what should not be forgotten.",
        "Blogging is the new poetry.",
        "Start writing, no matter what. The water does not flow until the faucet is turned on.",
        "Your blog is your unedited version of yourself.",
        "Blogging is just writing — writing using a particularly efficient type of publishing technology.",
        "The art of writing is the art of discovering what you believe.",
        "Write as if no one is reading.",
        "Blogging is about creating content that resonates.",
        "Notes are the building blocks of wisdom.",
        "Take notes, every idea is valuable.",
        "Notes are a way to capture the whispers of your thoughts before they fade away.",
        "A writer is working when he’s staring out the window.",
        "The palest ink is better than the best memory.",
        "Notes help you remember what the mind forgets.",
        "Your notes are your intellectual footprint.",
        "Notes are like breadcrumbs leading you back to your original thought.",
        "Good notes lead to great insights.",
        "A notebook is a repository of sparks of genius."
    ]

// Function to get random index and display the text present at that index
function randomText() {
    let index = Math.floor(Math.random() * 20);

    return quotes[index];
}

// Dynamically change the quote after every 2sec
const textBox = document.getElementById('textBox');

setInterval(() => {
    textBox.innerHTML = randomText();
}, 2000);