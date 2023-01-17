import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city";
export const Navigation = component$(() => {
    return (
    <>
    <nav class="flex flex-row justify-between px-5">
        <div class="logo">logo</div>
        <ul class="flex flex-row justify-center gap-2 m-0 p-0 list-none">
            <li><Link href="/">home</Link></li>
            <li><Link href="/flower">flower</Link></li>
            <li><Link href="/tester">tester</Link></li>
            <li><Link href="nav-4">nav 4</Link></li>
        </ul>
    </nav>
    </>
    )
});
