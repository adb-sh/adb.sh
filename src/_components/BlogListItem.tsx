export default ({ page }) => (
  <figure class="my-8">
    <div class="flex justify-between flex-wrap mb-1 items-end">
      <h2 class="text-3xl font-light text-accent dark:text-primary-dark">
        {page.data.title}
      </h2>
      <span>
        {new Date(page.data.date).toLocaleDateString("us-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
    </div>
    <div class="rounded overflow-hidden xl:flex border-solid border border-neutral-600 dark:border-neutral no-underline">
      {page.data.imgUrl
        ? (
          <img
            class="w-full max-h-72 xl:max-w-xs object-cover"
            src={page.data.imgUrl}
          />
        )
        : null}
      <div class="m-3">{page.data.excerpt}</div>
    </div>
  </figure>
);
