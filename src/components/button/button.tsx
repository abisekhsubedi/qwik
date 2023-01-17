import { component$, useTask$, useSignal, useStore, $ } from '@builder.io/qwik';

type ItemProps = {
handleFunction?: any;
}

export const Button = component$((props: ItemProps) => {
    // const msg = useSignal('signal clicked');
    // // const state = useStore({msg: 'hello world'})


    // useTask$(() => {
    //     const timer = setInterval(() => {
    //         console.log(msg.value)
    //     }, 1000);

    //     // console.log(state.msg);

    //     setTimeout(() => {
    //         clearInterval(timer)
    //     }, 5000);

    // })
    const state = useStore({ name: "unassigned" })

    useTask$(({track}) => {
        track(state)
        console.log(state.name)
    })
    const handleClick = $(() => {
        state.name = "I am clicked!"
        props.handleFunction()
    })

    return <>
        <button onClick$={handleClick} class="bg-sky-700 py-2 px-4 text-slate-50 my-4 rounded-lg cursor-pointer hover:bg-sky-600"> click me!</button>
        <p class="text-4xl">Name: {state.name}</p>
        </>
});
