<script lang="ts">
    import { tween } from "jsap";
	import { onMount } from "svelte";
    let h1: HTMLElement;
    onMount(() => {
        const scale = new tween({
            target: '.box',
            duration: 3000,
            fill: 'forwards',
            ease: 'bounce.out',
            to: {
                translateX: 1000,
                rotate: 720
            }
        });
        scale.play();
        document.querySelector('.pause')?.addEventListener('click', () => {
            scale.pause();
        });
        document.querySelector('.play')?.addEventListener('click', () => {
            scale.play();
        });
        document.querySelector('.reverse')?.addEventListener('click', () => {
            scale.reverse();
        });
    })
</script>
<h1 bind:this={h1}>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="box">
</div>
<button class="pause">Pause</button>
<button class="play">Play</button>
<button class="reverse">Reverse</button>


<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: red;
    }
</style>