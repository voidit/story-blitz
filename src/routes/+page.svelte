<script>
    import { onMount } from 'svelte';
    let dataJSON = null;
    let prompts = [];
    let randomPrompt = '';
    let usedPrompts = new Set();
    async function fetchPrompts() {
        try {
            const response = await fetch('./data/prompts.json');
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch prompts:', error);
            return null;
        }
    }
    $: protagonist = null;
    $: incident = null;
    $: goal = null;
    $: resolution = null;
    $: transformation = null;
    $: genre = null;
    $: tone = null;
    $: valuable = null;
    $: challenge = null;
    $: obstacle = null;
    $: problem = null;
    $: setting = null;
    $: environment = null;
    $: adventure = null;
    $: flaw = null;
    $: creature = null;
    $: power = null;
    $: plotLines = [
        `${protagonist} ${incident} in ${setting} to ${goal}, facing ${obstacle} and ${challenge} along the way.`,
        `${protagonist} ${incident}, experiences ${challenge} and ${adventure}, and returns to ${environment} transformed.`,
        `${protagonist} embarks on a journey to find ${valuable} and ${goal}.`,
        `${protagonist} travels to ${tone} ${setting}, experiences ${transformation}, and returns ${environment} with ${problem}.`,
        `${protagonist} travels to ${environment}, experiences ${transformation}, and returns ${environment} with ${valuable}.`,
        `A ${tone} and ${genre} story that involves ${problem}, ${incident}, ${challenge} and ${adventure}, leading to ${resolution}.`,
        `A ${genre} story that depicts ${tone} ${challenge} of a ${protagonist} due to ${flaw}, ${power}, and ${creature}, often leading to ${resolution}.`,
        `The ${protagonist} undergoes ${problem}, ${transformation} from ${setting} to ${goal}, after a period of ${challenge} and ${obstacle}.`
    ]
    $: getRandomPrompt = () => {
        if (usedPrompts.size === prompts.length) {
            // Reset used prompts when all have been displayed
            usedPrompts.clear();
            console.log("All prompts have been used. Starting over!");
        }

        let prompt;
        do {
            prompt = prompts[Math.floor(Math.random() * prompts.length)];
        } while (usedPrompts.has(prompt.id));

        usedPrompts.add(prompt.id);
        return prompt.body;
    }

    onMount(async () => {
        dataJSON = await fetchPrompts();
        if (!dataJSON) return;

        let {
            plots = [],
            settings = [],
            archetypes = [],
        } = dataJSON;

        plots = plots.map((p, i) => {
            return {
                ...p,
                id: i
            }
        });

        for(let i = 0; i < settings.length; i++) {
            prompts.push({
                id: i,
                body: `${settings[i]}`
            });
        }
        randomPrompt = getRandomPrompt();
    });

    function shufflePrompt() {
        randomPrompt = getRandomPrompt();
    }
</script>

<section>
<!--    <div class="checkboxes">
        {#if (concepts.length > 0)}
            {#each concepts as c, i}
                <div class="col">
                <input type="checkbox" bind:group={conceptLines} value="{i}" name="concept-{i}" />
                <label for="concept-{i}">{c.term}</label>
                </div>
            {/each}

        {/if}
    </div>-->
    <div class="main">
<!--        <button on:click={shufflePrompt}>Shuffle</button>-->

            <div>{@html randomPrompt}</div>
            <label>
                <input class="bubble" type="checkbox" name="dummy" value="on"  on:click={shufflePrompt}>
            </label>
    </div>
</section>