import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return <div>this is tester page!</div>
});

export const head: DocumentHead = {
    title: 'this is tester page',
    meta: [
        {
            name: 'tester page',
            content: 'hello this is tester page'
        }
    ]
}
