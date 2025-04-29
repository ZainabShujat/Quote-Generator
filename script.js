console.log("Script loaded!");

const quotes = [
  "Believe in yourself!",
  "You are stronger than you think.",
  "Keep pushing forward.",
  "Every day is a second chance.",
  "Dream big and dare to fail.",
  "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "You must be the change you wish to see in the world. – Mahatma Gandhi",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Opportunities don't happen, you create them. – Chris Grosser",
  "It’s never too late to be what you might have been. – George Eliot"
];

const quoteText = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Fade out and fade in effect
  quoteText.classList.remove("fade-in"); // Remove fade first
  void quoteText.offsetWidth; // Trick browser to reset animation
  quoteText.textContent = randomQuote; // Change quote
  quoteText.classList.add("fade-in"); // Reapply fade
}

newQuoteButton.addEventListener("click", getRandomQuote);
