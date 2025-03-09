<script>
    import {onMount} from 'svelte';

    let dataJSON = null;
    let randomPrompt = '';
    let usedPrompts = new Set();
    let prompt = null;
    let short = false;
    let intro = 'Story Blitz';
    let plot = '';

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
            creatures,
            introductions,
            plots = []
        } = data;
        intro = introductions[Math.floor(Math.random() * introductions.length)].name;
        if(plots.length > 0) {
            let whichPlot = Math.floor(Math.random() * plots.length) || null;
            plot = (whichPlot) ? `<b>${plots[whichPlot].name}:</b> ${plots[whichPlot].description}` : '';
        }
        return [
            {
                id: 1,
                body: `Central figure ${oneOf(protagonists)} ${oneOf(incidents)} in ${getOne(settings)} to ${oneOf(goals)}, facing ${oneOf(obstacles)} and ${oneOf(challenges)} along the way.`,
            },
            {
                id: 2,
                body: `Main character ${oneOf(protagonists)}  ${oneOf(incidents)}, experiences ${oneOf(challenges)}  and ${oneOf(adventures)}, and returns to ${oneOf(environments)} transformed.`,
            },
            {
                id: 3,
                body: `Lead character ${oneOf(protagonists)} embarks on a journey to find ${oneOf(valuables)} and ${oneOf(goals)}.`,
            },
            {
                id: 4,
                body: `Hero(ine) ${oneOf(protagonists)} travels to ${oneOf(tones)} ${getOne(settings)}, experiences ${oneOf(transformations)}, and returns to ${oneOf(environments)} with ${oneOf(problems)}.`,
            },
            {
                id: 5,
                body: `One of those who ${oneOf(protagonists)} travels to ${oneOf(environments)}, experiences ${oneOf(transformations)}, and returns to ${oneOf(environments)} with ${oneOf(valuables)}.`,
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
                body: `Protagonist ${oneOf(protagonists)} undergoes ${oneOf(problems)}, ${oneOf(transformations)} from ${getOne(settings)} to ${oneOf(goals)}, after a period of ${oneOf(challenges)}  and ${oneOf(obstacles)}.`
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
        short = !short;
        randomPrompt = getRandomPrompt();
    }
</script>

<section>
    <div class="main">
        {#if intro}<h2>{intro}</h2>{/if}
        <div>{@html randomPrompt}</div>
        {#if plot}<small>{@html plot}</small>{/if}

        <div class="father-div" on:click={shufflePrompt}>
            <div class="cat">
                <div class="dog">
                    <i class="fal fa-smile"></i>
                    <div>Blitz!</div>
                </div>
            </div>
        </div>
    </div>
</section>
<style>
    section {
        filter: brightness(1.2) contrast(20);
        -webkit-filter: brightness(1.2) contrast(20);
    }
    small {
        border-top: black 1px dotted;
        padding-top: 0.5rem;
        margin-top: 1.2rem;
    }
    .father-div{
        width: 50%;
        height:5vh;
        margin: 0 auto;
        padding:2rem;
        /*background-color: #fff;*/
        padding-left:40%;
        filter: blur(20px);
        -webkit-filter: blur(20px);
    }

    .cat{
        background-color: black;
        width: 50px;
        height: 50px;

        border-radius: 50%;
        animation: right 15s infinite;
        -webkit-animation: right 15s infinite;
        cursor: pointer;
/*        background-image: linear-gradient(-45deg, #ee7752, #e73c7e);
        background-size: 400% 400%;*/
    }

    @-webkit-keyframes right {
        0%,100%   {
            margin-left: 10px;
            /*background-position: 0% 50%;*/
        }
        50% {
            margin-left: -50px;
            /*background-position: 100% 50%;*/
        }
    }

    .dog{
        background-color: black;
        width: 100px;
        height: 100px;

        border-radius: 50%;
        -webkit-animation: lefty 5s infinite;
        position:relative;
        z-index:4;
        cursor: pointer;
/*        background: linear-gradient(-45deg, #ee7752, #e73c7e);
        background-size: 400% 400%;*/
    }

    @-webkit-keyframes lefty {
        0%,100%   {
            margin-left: -250px;
            /*background-position: 0% 50%;*/
        }
        50% {
            margin-left: -50px;
            /*background-position: 100% 50%;*/
        }
    }
</style>