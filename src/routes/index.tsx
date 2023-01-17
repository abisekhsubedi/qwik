import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
        <h1>Welcome to homepage</h1>
    </>
  );
});

// exporting the page meta information that goes into <head> element.
export const head: DocumentHead = {
  title: 'Welcome to homepage',
  meta: [
    {
      name: 'description',
      content: 'this is the homepage',
    },
  ],
};
