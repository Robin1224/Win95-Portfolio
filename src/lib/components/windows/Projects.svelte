<script>
  import Project from "$lib/components/Project.svelte";
</script>

<section>
  <h3>These are some of the projects I've worked on over the past few years as a Front-End Development student:</h3>

  <Project 
    title="New Portfolio" 
    description="I'm currently updating my portfolio to a new Bauhaus inspired design in Svelte 5. However, because school has been very busy this year, I haven't been able to finish it yet. (Tip: check out the responsive design!)" 
    link="https://robin-iloveweb.netlify.app/"
    github="https://github.com/Robin1224/i-love-web"
    img="/images/portfolio.webp"
  />

  <Project 
    title="DEPT Weather planner" 
    description="As part of a one-sprint (3 weeks) assignment for studio DEPT, I created a weather planner that allows users to plan their day the weather forecast. The app uses the OpenWeather API to fetch the weather data, and allows users to add activities to their day based on the weather forecast. The app is fully responsive and uses a mobile-first design. Created using NextJS and Tailwind CSS. The design and API were provided by DEPT. All data is randomised one each request and does not reflect the actual weather. Forecast is cached for one day, as I wanted to try out the caching features available in NextJS."
    link="https://nextjs-the-startup.vercel.app/"
    github="https://github.com/Robin1224/nextjs-weather-planner"
    img="/images/dept.webp"
  />

  <Project 
    title="Visual Thinking" 
    description="As part of a school assignment I have worked on an existing web project for a company called Visual Thinking. I gathered experience in working with existing codebases and spent a lot of my time with this project on refactoring old code and bringing it up to standard, along with redesigning some elements to be more responsive. This project was created in Svelte 5 and is fully responsive." 
    link="https://visualthinking.agency.fdnd.nl"
    github="https://github.com/fdnd-agency/visual-thinking/tree/release-candidate"
    img="/images/visual_thinking.webp"
  />

  <Project 
    title="Merlin's Potions" 
    description="As part of a one-sprint (3 weeks) assignment for Merlin Studio, I created a simple potion crafting game. The assignment was only that you should be able to craft potions, aside from that I was given complete freedom to create my own design. The assets themselves were provided by Merlin Studio. With this project I experimented a lot with small design flourishes, like the focus state on the ingredients." 
    link="merlins-potions.onrender.com"
    github="https://github.com/Robin1224/merlins-potions"
    img="/images/merlin.webp"
  />

  <Project
    title="Funda"
    description="In my first year of the Front-End Development course, I worked on a project for Funda. The assignment was to create a responsive website that allows users to save houses to a personal favourites page. The website had to be fully responsive and use a mobile-first design. The design was based on the existing Funda website and the website was created using HTML, CSS and vanilla Javascript, with a simple express back-end. I worked mostly on the grid layout, and the (micro-)interactions on the rating system. (Tip: try rating something 5 stars!)"
    link="pleasurable-ui-qxxg.onrender.com"
    github="https://github.com/Robin1224/funda-favourites"
    img="/images/funda.webp"
  />

  <Project
    title="Interactions assignment"
    description="As part of a school assignment in my first college year I had to apply a list of different simple interactions to UI elements. I wanted to challenge myself though, and ended up using a physics library to make the UI elements fall to the bottom of the screen when the device is shaken. You can try it out by first giving permission to listen to the shake event, and then shaking your device. If not on mobile, or the shake doens't work, you can simply use the debug button at the bottom of the screen.."
    link="https://robin1224.github.io/fix-the-flow-ui-events-2023/"
    github="https://github.com/Robin1224/fix-the-flow-ui-events-2023"
    img="/images/interactions.webp"
  />
</section>

<style>
  section {
    padding: 1rem;
    max-width: 30rem;
    max-height: 25rem;
    overflow-y: scroll;
  }

  h3 {
    margin-bottom: 1rem;
  }
</style>