import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/header/header';
import { Navigation } from '~/components/navigation/navigation';

export default component$(() => {
  return (
    <>
      <main class="flex flex-col">
        <Header />
        <Navigation />
        <section>
          <Slot />
        </section>
      </main>
      <footer class="bg-indigo-50 py-4">
        <a href="https://www.abisubedi.com/" target="_blank">
          Made with ♡ by abisekh subedi
        </a>
      </footer>
    </>
  );
});
