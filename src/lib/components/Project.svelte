<script>
  export let title;
  export let description;
  export let link;
  export let img;
  export let github;
</script>

<details>
  <summary>
    {title}
  </summary>
  <img src={img} alt={title} />
  <p>{description}</p>
  <a href={link} target="_blank">Website link</a> <br />
  <a href={github} target="_blank">Github link</a>
</details>

<style>
  details {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img {
    width: 100%;
    height: auto;
  }

  p {
    margin-top: 1rem;
  }

</style>