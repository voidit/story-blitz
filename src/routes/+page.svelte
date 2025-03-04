<script>
    import { onMount } from 'svelte';

    let dataJSON = null;
    let prompts = [];
    let settings = [];
    let introductions = [];
    let conclusions = [];
    let subjects = [];
    let themes = [];
    let concepts = [];
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

    $: getRandomPrompt = () =>{
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
    $: themeLines = [];
    $: conceptLines = [];
    $: getRandomPromptBody = () => {
        let promptBody = ' [...] ';
        if(themeLines.length > 0) {
            for (let i = 0; i < themeLines.length; i++) {
                // let t = themeLines[i] - 1;
                // promptBody += themes[t].body[Math.floor(Math.random() * themes[i].body.length)];
                promptBody += themeLines[i];
            }
        }
        return promptBody += '<br />';
    }

    onMount(async () => {
        dataJSON = await fetchPrompts();
        if (!dataJSON) return;
        settings = dataJSON.settings;
        introductions = dataJSON.introductions;
        conclusions = dataJSON.conclusions;
        themes = dataJSON.themes;
        subjects = dataJSON.subjects;
        concepts = dataJSON.concepts.map((k, i) => {
            let newKeywords = k.keywords || {};
            return {
                ...k,
                id: i,
                keywords: Object.entries(newKeywords),
                questions: k.questions || []
            }
        }); // concept {term, definition, keywords{}}
        // console.log('concepts', concepts);

        for(let i = 0; i < settings.length; i++) {
            prompts.push({
                id: i,
                body: `${settings[i]} ${subjects[Math.floor(Math.random() * subjects.length)]} ${introductions[Math.floor(Math.random() * introductions.length)].body} ${conclusions[Math.floor(Math.random() * conclusions.length)]} ${introductions[i].subject}`
            });
        }
        randomPrompt = getRandomPrompt();
    });

    function shufflePrompt() {
        randomPrompt = getRandomPrompt();
    }
</script>

<section>
    <div class="checkboxes">
        {#if (concepts.length > 0)}
            {#each concepts as c, i}
                <div class="col">
                <input type="checkbox" bind:group={conceptLines} value="{i}" name="concept-{i}" />
                <label for="concept-{i}">{c.term}</label>
                </div>
            {/each}

        {/if}
        {#if themes.length > 0}
            {#each themes as t}
                <div class="col">
                <input type="checkbox" bind:group={themeLines} value="{t.id}" name="theme-{t.id}" />
                <label for="theme-{t.id}">{t.theme}</label>
                </div>
            {/each}
        {/if}
    </div>
    <div class="main">
<!--        <button on:click={shufflePrompt}>Shuffle</button>-->
        {#if (themeLines.length > 0) || (conceptLines.length > 0)}
            {#if (themeLines.length > 0)}
                <div class="theme-lines">
                    {#each themeLines as l}
                        <p>{themes[l - 1].body[Math.floor(Math.random() * themes[l - 1].body.length)]}</p>
                    {/each}
                </div>
            {/if}
            {#if (conceptLines.length > 0)}
                <div class="concept-lines">
                    <ul>
                        {#each conceptLines as c}
                            <li>
                                {concepts[c].term}: {concepts[c].definition}
                                {#if concepts[c].keywords}
                                    <ul>
                                    {#each concepts[c].keywords as keyword}
                                        <li>{keyword}</li>
                                    {/each}
                                    </ul>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
        {:else}
            <div>{@html randomPrompt}</div>
            <label>
                <input class="bubble" type="checkbox" name="dummy" value="on"  on:click={shufflePrompt}>
            </label>
        {/if}
    </div>
</section>

<style>
    .checkboxes {
        column-count: 5;
        width: 100%;
    }
    .checkboxes .col {
        display: flex;
        flex-wrap: wrap;
    }
    .theme-lines {
        display: block;
        width: 100%;
        overflow: scroll;
        text-align: left;
        margin: 1rem 0;
    }
    .theme-lines p {
        padding-bottom: 1rem;
    }
    .concept-lines,
    .concept-lines ul,
    .concept-lines ul li {
        text-align: left;
    }
</style>