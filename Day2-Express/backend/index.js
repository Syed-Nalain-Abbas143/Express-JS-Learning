import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/facts", (req, res) => {
  const catFacts = [
    {
      id: 1,
      title: "Cats have a third eyelid",
      facts:
        "Cats have a third eyelid called the nictitating membrane, which helps keep their eyes moist and protected.",
    },
    {
      id: 2,
      title: "Purring doesn't always mean happiness",
      facts:
        "While cats purr when happy, they also purr when injured, stressed, or even dying as a self-soothing mechanism.",
    },
    {
      id: 3,
      title: "Cats can rotate their ears 180 degrees",
      facts:
        "Cats have 32 muscles in each ear, allowing them to rotate their ears up to 180 degrees independently to locate sounds.",
    },
    {
      id: 4,
      title: "Cats spend 70% of their lives sleeping",
      facts:
        "Cats are champion sleepers and spend approximately 13-16 hours per day sleeping or in a doze-like state.",
    },
    {
      id: 5,
      title: "Cats have a unique nose print",
      facts:
        "Every cat's nose pad has a unique pattern of ridges and grooves, similar to human fingerprints.",
    },
    {
      id: 6,
      title: "Cats can jump up to 6 times their height",
      facts:
        "Despite their size, cats are incredible jumpers and can leap up to 6 times their own body height vertically.",
    },
    {
      id: 7,
      title: "Cats are color-blind to red",
      facts:
        "Cats see the world primarily in blues and grays, and cannot distinguish red colors like humans do.",
    },
    {
      id: 8,
      title: "A cat's purr vibrates at a healing frequency",
      facts:
        "The frequency of a cat's purr (25-150 Hz) may promote bone and muscle growth, healing, and has been shown to reduce stress.",
    },
    {
      id: 9,
      title: "Cats have over 200 million scent receptors",
      facts:
        "A cat's sense of smell is 14 times stronger than humans, with scent receptors covering 200 million areas in their nasal tissue.",
    },
    {
      id: 10,
      title: "Cats can't taste sweetness",
      facts:
        "Unlike humans and dogs, cats lack the taste receptors for sweetness, making them indifferent to sweet foods.",
    },
  ];
  res.send(catFacts)
});

app.listen(port, () => {
  console.log(`backend running on port ${port}`);
});
