import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const refactoringMe = new BlogBuilder({
  title: "Refactoring Me: A Developer’s Journey Through a Full-Stack Reboot",
  image: "assets/images/posts/refactoring-me/header.png",
  description:
    "The start of 2025 was a turning point — laid off for the first time after 20+ years. This post begins my journey rebuilding myself as a modern full-stack developer.",
})
  .addParagraph(
    "Welcome to my personal blog, where I plan to document my journey rebooting my skills as a full-stack software developer after 20+ years in the industry."
  )
  .addParagraph(
    "The first week of 2025 was… interesting. I was laid off for the first time in my career. Up until that point, the only experience I had with unemployment was a brief three-week stretch during the pandemic. This time, the client I was working for decided to play it safe and cut ties with contractors. But as soon as they found out another company was interested in hiring me, I was immediately reinstated."
  )
  .addParagraph(
    "Let me tell you — having a client recognize your value feels amazing. Being laid off? That’s the extreme opposite. I was in a daze, confused. How could this happen? I’ve always been the one who gets picked for the team. The go-to guy. A key player."
  )
  .addHeading("Doubt & Reflection")
  .addParagraph(
    `Being let go made me question everything.
    “Can I still do this?”
    “Do I even want to?”
    “How can I trust another employer?”
    “They discarded me so easily.”
    “How can I take back control of my career?”`
  )
  .addParagraph(
    "After moping around, I decided to do something about it. Being jaded is a waste of time. It’s far more constructive to believe in myself — and believe that everything will work out for the best."
  )
  .addParagraph(
    `<blockquote>
      “Anything is possible if you just believe. But if you want to start believing, start with yourself.”
      <br />— Dulara Perera
    </blockquote>`
  )
  .addHeading("Refactoring Me")
  .addParagraph(
    "I’m going to be proactive. I’m going to refactor me — improve, refresh, and expand my skillset. When the next opportunity presents itself, I’ll be more than ready."
  )
  .addParagraph(
    "I hope you’ll take this journey with me. This blog will be a series. I’ll tackle real-world projects, learn modern tools, and build up a fresh portfolio — from C#, React, and Node to AWS and accessibility-first UI design."
  );

bloglist.push(refactoringMe);

bloglist.push(refactoringMe);

export default bloglist;
