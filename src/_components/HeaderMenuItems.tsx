const pages = [
  {
    data: {
      url: "/projects/page/1/",
      title: "Projects",
    },
  },
];

export default ({ search, ...props }) => (
  <>
    {[
      ...search.pages("menu.header=true"),
      ...pages,
    ].map((page) => {
      const subpages = search.pages(
        `menu.header[${page.data.slug}]`,
        "date=desc",
      );
      if (subpages.length > 0) {
        return (
          <li class="category dropdown">
            <div
              class="btn btn-outline-dark btn-shadow m-2 dropdown-label"
              tabindex="0"
            >
              {page.data.title}
            </div>
            <div class="block dropdown-menu btn-outline-dark p-0 mx-2">
              {subpages.map((subpage) => (
                <a class="block dropdown-item" href={subpage.data.url}>
                  {subpage.data.title}
                </a>
              ))}
            </div>
          </li>
        );
      } else {
        return (
          <li>
            <a href={page.data.url}>
              <div class="btn btn-primary m-2">
                {page.data.title}
              </div>
            </a>
          </li>
        );
      }
    })}
  </>
);
