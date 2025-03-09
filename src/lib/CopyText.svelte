<script>
    import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    let copyText = "";
    let copied = false;

    async function copyToClipboard() {
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(copyText);
                copied = true;
                setTimeout(() => {
                    copied = false;
                }, 2000);
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

    export let textToCopy = "This is the text to copy.";
    $: copyText = textToCopy;
</script>

<!--<div id="textToCopy">
    {textToCopy}
</div>-->

<button on:click={copyToClipboard}>
    <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
<!--    {copied ? " Copied!" : " Copy"}-->
</button>

<style>
    button {
        display: block; /* Makes icon and text align nicely */
        align-items: center; /* Vertically centers the icon */
        position: absolute;
        top: 0;
        right: 0;
        background: transparent;
        font-size: 1.3rem;
        cursor: pointer;
    }
</style>