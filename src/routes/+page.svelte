<script>
    import {onMount} from 'svelte';

    let dataJSON = null;
    let randomPrompt = '';
    let usedPrompts = new Set();
    let prompt = null;
    let short = false;

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

    let oneOf = (obj) => {
        if(!short && obj) {
            let rand = Math.floor(Math.random() * obj.length);
            return obj[rand].description;
        }
        return (obj) ? obj[Math.floor(Math.random() * obj.length)].name : '[...]';
    }
    let getOne = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    $: prompts = null;
    $: plotLines = (data = null) => {
        if (!data) return;
        let {
            protagonists,
            incidents,
            settings,
            goals,
            obstacles,
            challenges,
            environments,
            tones,
            transformations,
            problems,
            genres,
            adventures,
            valuables,
            resolutions,
            flaws,
            powers,
            creatures
        } = data;
        return [
            {
                id: 1,
                body: `${oneOf(protagonists)} ${oneOf(incidents)} in ${getOne(settings)} to ${oneOf(goals)}, facing ${oneOf(obstacles)} and ${oneOf(challenges)} along the way.`,
            },
            {
                id: 2,
                body: `${oneOf(protagonists)}  ${oneOf(incidents)}, experiences ${oneOf(challenges)}  and ${oneOf(adventures)}, and returns to ${oneOf(environments)} transformed.`,
            },
            {
                id: 3,
                body: `${oneOf(protagonists)} embarks on a journey to find ${oneOf(valuables)} and ${oneOf(goals)}.`,
            },
            {
                id: 4,
                body: `${oneOf(protagonists)} travels to ${oneOf(tones)} ${getOne(settings)}, experiences ${oneOf(transformations)}, and returns to ${oneOf(environments)} with ${oneOf(problems)}.`,
            },
            {
                id: 5,
                body: `${oneOf(protagonists)} travels to ${oneOf(environments)}, experiences ${oneOf(transformations)}, and returns to ${oneOf(environments)} with ${oneOf(valuables)}.`,
            },
            {
                id: 6,
                body: `${oneOf(tones)} and ${oneOf(genres)} story that involves ${oneOf(problems)},  ${oneOf(incidents)}, ${oneOf(challenges)}  and ${oneOf(adventures)}, leading to ${oneOf(resolutions)}.`,
            },
            {
                id: 7,
                body: `${oneOf(genres)} story that depicts ${oneOf(tones)} ${oneOf(challenges)}  of ${oneOf(protagonists)} due to ${oneOf(flaws)}, ${oneOf(powers)}, and ${oneOf(creatures)}, leading to ${oneOf(resolutions)}.`,
            },
            {
                id: 8,
                body: `${oneOf(protagonists)} undergoes ${oneOf(problems)}, ${oneOf(transformations)} from ${getOne(settings)} to ${oneOf(goals)}, after a period of ${oneOf(challenges)}  and ${oneOf(obstacles)}.`
            }];
    };
    $: getRandomPrompt = () => {
        if (usedPrompts.size === prompts.length) {
            // Reset used prompts when all have been displayed
            usedPrompts.clear();
            prompts = plotLines(dataJSON);
            console.log("All prompts have been used. Starting over!");
        } do {
            prompt = prompts[Math.floor(Math.random() * prompts.length)];
        } while (usedPrompts.has(prompt.id));
        usedPrompts.add(prompt.id);
        return prompt.body;
    }

    onMount(async () => {
        dataJSON = await fetchPrompts();
        if (!dataJSON) return;
        prompts = plotLines(dataJSON);
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
            <input class="bubble" name="dummy" on:click={shufflePrompt} type="checkbox" value="on">
        </label>
    </div>
</section>