export default ({ ...props }) => (
  <>
    <header class="my-12">
      <div class="container overflow-auto mx-auto px-4">
        <div class="flex w-full justify-center">
          <div class="bg-[url('/mewithmic.jpg')] bg-cover bg-center h-52 aspect-square rounded-full"></div>
        </div>
        <div data-markdown="true">
          <h1 class="text-center">{props.site.title}</h1>
        </div>
        <nav>
          <ul class="flex w-full justify-center">
            <props.comp.HeaderMenuItems {...props} />
          </ul>
        </nav>
      </div>
    </header>
  </>
);
