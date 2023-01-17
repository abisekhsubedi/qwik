import { component$, $, useStore } from '@builder.io/qwik';
import { Button } from '~/components/button/button';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
    const state = useStore({name: 'unassigned'})
    const handleName = $(() => {
        state.name = "this is bananas 🍌 🍌 🍌"
    })

    return (<>
    <div>this is tester page!</div>
    <div>{state.name}</div>
    <Button handleFunction={handleName} />
    </>)
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
