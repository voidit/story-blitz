<script>
    // You can set dynamic values here if needed
    let websiteUrl = "https://story-blitz.art";
    let imageUrl = "https://story-blitz.art/favicon.png";
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Story Blitz - Spark Your Creativity!</title>
    <meta name="description" content="Generate hilarious story prompts for students! Get random ideas to inspire funny and creative writing. Perfect for classroom activities and creative writing exercises.">
    <meta name="keywords" content="funny story prompts, creative writing, student writing, random prompts, comedy writing, classroom activities, writing exercises, story ideas, humor, education">
    <meta name="author" content="Story Blitz">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="Story Blitz - Funny Story Prompts - Spark Your Creativity!">
    <meta property="og:description" content="Generate hilarious story prompts for students! Get random ideas to inspire funny and creative writing. Perfect for classroom activities and creative writing exercises.">
    <meta property="og:type" content="website">
    <meta property="og:url" content={websiteUrl}>
    <meta property="og:image" content={imageUrl}>
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Story Blitz - Funny Story Prompts - Spark Your Creativity!">
    <meta name="twitter:description" content="Generate hilarious story prompts for students! Get random ideas to inspire funny and creative writing. Perfect for classroom activities and creative writing exercises.">
    <meta name="twitter:image" content={imageUrl}>
</svelte:head>
<slot />
