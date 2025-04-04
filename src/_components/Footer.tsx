export default ({ search, site }) => (
  <footer class="bg-neutral dark:bg-secondary-dark">
    <div class="container mx-auto text-white px-8 py-4">
      <span class="copyright">
        {new Date().getFullYear()} - {site.title}
      </span>
      <span>
        {search.pages("menu.footer=true").map((page) => (
          <a href={page.data.url} class="underline mx-2">
            {page.data.title}
          </a>
        ))}
      </span>
    </div>
  </footer>
);
