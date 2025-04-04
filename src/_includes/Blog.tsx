export default ({ title, date, children, ...props }) => (
  <props.comp.Base title={title} {...props}>
    <div class="container mx-auto">
      <div class="flex m-4">
        <div class="w-full p-4">
          <section class="my-8 flex items-end">
            <h1 class="mr-4 font-thin text-5xl">Blog</h1>
            <a href="/blog/page/1">
              {/* <i class="ph-light ph-arrow-bend-up-left text-2xl" /> */}
              <i class="text-2xl">&#8617;</i>
            </a>
          </section>
          <section data-markdown="true">
            <h1>{title}</h1>
            <p>
              <span class="italic">
                {new Date(date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
            {children}
          </section>
        </div>
      </div>
    </div>
  </props.comp.Base>
);
