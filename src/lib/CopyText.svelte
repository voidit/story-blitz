<script>
    let copyText = ""; // Initialize with empty string
    let copied = false;

    async function copyToClipboard() {
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(copyText);
                copied = true;
                setTimeout(() => {
                    copied = false;
                }, 2000); // Reset copied status after 2 seconds
            } catch (err) {
                console.error('Could not copy text: ', err);
                fallbackCopyTextToClipboard(copyText);
            }
        } else {
            fallbackCopyTextToClipboard(copyText);
        }
    }

    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
            copied = true;
            setTimeout(() => {
                copied = false;
            }, 2000);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            alert('Fallback: Copy failed.');
        }

        document.body.removeChild(textArea);
    }

    export let textToCopy = "This is the text to copy."; // Prop to receive text
    $: copyText = textToCopy; // Reactively update copyText
</script>

<!--
<div id="textToCopy">
    {textToCopy}
    <slot />
</div>
-->

<button on:click={copyToClipboard}>
    {copied ? "Copied!" : "Copy to Clipboard"}
</button>

<style>
    button {
        position: absolute;
        top: 0;
        right: 0;
        text-align: right;
    }
/*    #textToCopy {
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
        width: 300px;
        min-height: 50px;
    }*/
</style>