import { c as create_ssr_component, f as spread, b as add_attribute, h as escape_object, i as compute_rest_props, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { parse, icon } from "@fortawesome/fontawesome-svg-core";
function classList(props) {
  const {
    beat,
    fade,
    beatFade,
    bounce,
    shake,
    flash,
    spin,
    spinPulse,
    spinReverse,
    pulse,
    fixedWidth,
    inverse,
    border,
    listItem,
    flip,
    size,
    rotation,
    pull
  } = props;
  const classes = {
    "fa-beat": beat,
    "fa-fade": fade,
    "fa-beat-fade": beatFade,
    "fa-bounce": bounce,
    "fa-shake": shake,
    "fa-flash": flash,
    "fa-spin": spin,
    "fa-spin-reverse": spinReverse,
    "fa-spin-pulse": spinPulse,
    "fa-pulse": pulse,
    "fa-fw": fixedWidth,
    "fa-inverse": inverse,
    "fa-border": border,
    "fa-li": listItem,
    "fa-flip": flip === true,
    "fa-flip-horizontal": flip === "horizontal" || flip === "both",
    "fa-flip-vertical": flip === "vertical" || flip === "both",
    [`fa-${size}`]: typeof size !== "undefined" && size !== null,
    [`fa-rotate-${rotation}`]: typeof rotation !== "undefined" && rotation !== null && rotation !== 0,
    [`fa-pull-${pull}`]: typeof pull !== "undefined" && pull !== null,
    "fa-swap-opacity": props.swapOpacity
  };
  return Object.keys(classes).map((key) => classes[key] ? key : null).filter((key) => key);
}
function _isNumerical(obj) {
  obj = obj - 0;
  return obj === obj;
}
function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  }
  string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : "";
  });
  return string.substr(0, 1).toLowerCase() + string.substr(1);
}
function styleToString(style) {
  if (typeof style === "string") {
    return style;
  }
  return Object.keys(style).reduce((acc, key) => acc + key.split(/(?=[A-Z])/).join("-").toLowerCase() + ":" + style[key] + ";", "");
}
function convert(createElement, element, extraProps = {}) {
  if (typeof element === "string") {
    return element;
  }
  const children = (element.children || []).map((child) => {
    return convert(createElement, child);
  });
  const mixins = Object.keys(element.attributes || {}).reduce(
    (acc, key) => {
      const val = element.attributes[key];
      if (key === "style") {
        acc.attrs["style"] = styleToString(val);
      } else {
        if (key.indexOf("aria-") === 0 || key.indexOf("data-") === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }
      }
      return acc;
    },
    { attrs: {} }
  );
  return createElement(element.tag, { ...mixins.attrs }, children);
}
let PRODUCTION = false;
try {
  PRODUCTION = process.env.NODE_ENV === "production";
} catch (e) {
}
function log(...args) {
  if (!PRODUCTION && console && typeof console.error === "function") {
    console.error(...args);
  }
}
function normalizeIconArgs(icon2) {
  if (icon2 && typeof icon2 === "object" && icon2.prefix && icon2.iconName && icon2.icon) {
    return icon2;
  }
  if (parse.icon) {
    return parse.icon(icon2);
  }
  if (icon2 === null) {
    return null;
  }
  if (icon2 && typeof icon2 === "object" && icon2.prefix && icon2.iconName) {
    return icon2;
  }
  if (Array.isArray(icon2) && icon2.length === 2) {
    return { prefix: icon2[0], iconName: icon2[1] };
  }
  if (typeof icon2 === "string") {
    return { prefix: "fas", iconName: icon2 };
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? { [key]: value } : {};
}
const SvgElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag } = $$props;
  let { props } = $$props;
  let { children } = $$props;
  let { style = null } = $$props;
  let { ref = null } = $$props;
  if (tag !== "svg") {
    throw new Error('SvgElement requires a tag of "svg"');
  }
  function processChildren(children2) {
    return children2?.reduce(
      (acc, child) => {
        return acc + (child.tag ? generateMarkup(child) : child);
      },
      ""
    ) || "";
  }
  function generateMarkup({ tag: tag2, props: props2, children: children2 }) {
    const attributes = Object.keys(props2).map((key) => `${key}="${props2[key]}"`).join(" ");
    return `<${tag2} ${attributes}>${processChildren(children2)}</${tag2}>`;
  }
  const markup = processChildren(children);
  const elementStyle = props?.style ? `${props.style}${style || ""}` : style;
  const elementProps = { ...props, style: elementStyle };
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0) $$bindings.props(props);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0) $$bindings.children(children);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0) $$bindings.ref(ref);
  return `<svg${spread([escape_object(elementProps)], {})}${add_attribute("this", ref, 0)}><!-- HTML_TAG_START -->${markup}<!-- HTML_TAG_END --></svg>`;
});
const FontAwesomeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "border",
    "mask",
    "maskId",
    "fixedWidth",
    "inverse",
    "flip",
    "icon",
    "listItem",
    "pull",
    "pulse",
    "rotation",
    "size",
    "spin",
    "spinPulse",
    "spinReverse",
    "beat",
    "fade",
    "beatFade",
    "bounce",
    "shake",
    "symbol",
    "title",
    "titleId",
    "transform",
    "swapOpacity",
    "ref",
    "style"
  ]);
  let { border = false } = $$props;
  let { mask = null } = $$props;
  let { maskId = null } = $$props;
  let { fixedWidth = false } = $$props;
  let { inverse = false } = $$props;
  let { flip = false } = $$props;
  let { icon: icon$1 = null } = $$props;
  let { listItem = false } = $$props;
  let { pull = null } = $$props;
  let { pulse = false } = $$props;
  let { rotation = null } = $$props;
  let { size = null } = $$props;
  let { spin = false } = $$props;
  let { spinPulse = false } = $$props;
  let { spinReverse = false } = $$props;
  let { beat = false } = $$props;
  let { fade = false } = $$props;
  let { beatFade = false } = $$props;
  let { bounce = false } = $$props;
  let { shake = false } = $$props;
  let { symbol = false } = $$props;
  let { title = "" } = $$props;
  let { titleId = null } = $$props;
  let { transform = null } = $$props;
  let { swapOpacity = false } = $$props;
  let { ref = null } = $$props;
  let { style = null } = $$props;
  const iconLookup = normalizeIconArgs(icon$1);
  const classes = objectWithKey("classes", [...classList($$props), ...($$props.class || "").split(" ")]);
  const transformObj = objectWithKey("transform", typeof transform === "string" ? parse.transform(transform) : transform);
  const maskObj = objectWithKey("mask", normalizeIconArgs(mask));
  const renderedIcon = icon(iconLookup, {
    ...classes,
    ...transformObj,
    ...maskObj,
    symbol,
    title,
    titleId,
    maskId
  });
  let result = null;
  if (!renderedIcon) {
    log("Could not find icon", iconLookup);
  } else {
    const { abstract } = renderedIcon;
    result = convert(
      (tag, props, children) => {
        return { tag, props, children };
      },
      abstract[0],
      $$restProps
    );
  }
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.mask === void 0 && $$bindings.mask && mask !== void 0) $$bindings.mask(mask);
  if ($$props.maskId === void 0 && $$bindings.maskId && maskId !== void 0) $$bindings.maskId(maskId);
  if ($$props.fixedWidth === void 0 && $$bindings.fixedWidth && fixedWidth !== void 0) $$bindings.fixedWidth(fixedWidth);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0) $$bindings.inverse(inverse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0) $$bindings.flip(flip);
  if ($$props.icon === void 0 && $$bindings.icon && icon$1 !== void 0) $$bindings.icon(icon$1);
  if ($$props.listItem === void 0 && $$bindings.listItem && listItem !== void 0) $$bindings.listItem(listItem);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0) $$bindings.pull(pull);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0) $$bindings.pulse(pulse);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0) $$bindings.rotation(rotation);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0) $$bindings.spin(spin);
  if ($$props.spinPulse === void 0 && $$bindings.spinPulse && spinPulse !== void 0) $$bindings.spinPulse(spinPulse);
  if ($$props.spinReverse === void 0 && $$bindings.spinReverse && spinReverse !== void 0) $$bindings.spinReverse(spinReverse);
  if ($$props.beat === void 0 && $$bindings.beat && beat !== void 0) $$bindings.beat(beat);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0) $$bindings.fade(fade);
  if ($$props.beatFade === void 0 && $$bindings.beatFade && beatFade !== void 0) $$bindings.beatFade(beatFade);
  if ($$props.bounce === void 0 && $$bindings.bounce && bounce !== void 0) $$bindings.bounce(bounce);
  if ($$props.shake === void 0 && $$bindings.shake && shake !== void 0) $$bindings.shake(shake);
  if ($$props.symbol === void 0 && $$bindings.symbol && symbol !== void 0) $$bindings.symbol(symbol);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.titleId === void 0 && $$bindings.titleId && titleId !== void 0) $$bindings.titleId(titleId);
  if ($$props.transform === void 0 && $$bindings.transform && transform !== void 0) $$bindings.transform(transform);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0) $$bindings.swapOpacity(swapOpacity);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0) $$bindings.ref(ref);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${result ? `${validate_component(SvgElement, "SvgElement").$$render(
      $$result,
      Object.assign({}, result, { style }, { ref }),
      {
        ref: ($$value) => {
          ref = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const css$1 = {
  code: "button.svelte-1qvilbc{display:block;align-items:center;position:absolute;top:0;right:0;background:transparent;font-size:1.3rem;cursor:pointer}",
  map: `{"version":3,"file":"CopyText.svelte","sources":["CopyText.svelte"],"sourcesContent":["<script>\\n    import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';\\n    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';\\n\\n    let copyText = \\"\\";\\n    let copied = false;\\n\\n    async function copyToClipboard() {\\n        if (navigator.clipboard && window.isSecureContext) {\\n            try {\\n                await navigator.clipboard.writeText(copyText);\\n                copied = true;\\n                setTimeout(() => {\\n                    copied = false;\\n                }, 2000);\\n            } catch (err) {\\n                console.error('Could not copy text: ', err);\\n                fallbackCopyTextToClipboard(copyText);\\n            }\\n        } else {\\n            fallbackCopyTextToClipboard(copyText);\\n        }\\n    }\\n\\n    function fallbackCopyTextToClipboard(text) {\\n        const textArea = document.createElement(\\"textarea\\");\\n        textArea.value = text;\\n        textArea.style.top = \\"0\\";\\n        textArea.style.left = \\"0\\";\\n        textArea.style.position = \\"fixed\\";\\n        document.body.appendChild(textArea);\\n        textArea.focus();\\n        textArea.select();\\n\\n        try {\\n            const successful = document.execCommand('copy');\\n            const msg = successful ? 'successful' : 'unsuccessful';\\n            console.log('Fallback: Copying text command was ' + msg);\\n            copied = true;\\n            setTimeout(() => {\\n                copied = false;\\n            }, 2000);\\n        } catch (err) {\\n            console.error('Fallback: Oops, unable to copy', err);\\n            alert('Fallback: Copy failed.');\\n        }\\n\\n        document.body.removeChild(textArea);\\n    }\\n\\n    export let textToCopy = \\"This is the text to copy.\\";\\n    $: copyText = textToCopy;\\n<\/script>\\n\\n<!--<div id=\\"textToCopy\\">\\n    {textToCopy}\\n</div>-->\\n\\n<button on:click={copyToClipboard}>\\n    <FontAwesomeIcon icon={copied ? faCheck : faCopy} />\\n<!--    {copied ? \\" Copied!\\" : \\" Copy\\"}-->\\n</button>\\n\\n<style>\\n    button {\\n        display: block; /* Makes icon and text align nicely */\\n        align-items: center; /* Vertically centers the icon */\\n        position: absolute;\\n        top: 0;\\n        right: 0;\\n        background: transparent;\\n        font-size: 1.3rem;\\n        cursor: pointer;\\n    }\\n</style>"],"names":[],"mappings":"AAgEI,qBAAO,CACH,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,UAAU,CAAE,WAAW,CACvB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,OACZ"}`
};
const CopyText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { textToCopy = "This is the text to copy." } = $$props;
  if ($$props.textToCopy === void 0 && $$bindings.textToCopy && textToCopy !== void 0) $$bindings.textToCopy(textToCopy);
  $$result.css.add(css$1);
  return ` <button class="svelte-1qvilbc">${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render($$result, { icon: faCopy }, {}, {})}  </button>`;
});
const css = {
  code: "section.svelte-jakce0{filter:brightness(1.2) contrast(20);-webkit-filter:brightness(1.2) contrast(20)}small.svelte-jakce0{border-top:black 1px dotted;padding-top:0.5rem;margin-top:1.2rem}.father-div.svelte-jakce0{width:50%;height:5vh;margin:0 auto;padding:2rem;padding-left:40%;filter:blur(20px);-webkit-filter:blur(20px)}.cat.svelte-jakce0{background-color:black;width:50px;height:50px;border-radius:50%;animation:svelte-jakce0-right 15s infinite;-webkit-animation:svelte-jakce0-right 15s infinite;cursor:pointer}@-webkit-keyframes svelte-jakce0-right{0%,100%{margin-left:10px}50%{margin-left:-50px}}.dog.svelte-jakce0{background-color:black;width:100px;height:100px;border-radius:50%;-webkit-animation:svelte-jakce0-lefty 5s infinite;position:relative;z-index:4;cursor:pointer}@-webkit-keyframes svelte-jakce0-lefty{0%,100%{margin-left:-250px}50%{margin-left:-50px}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import {onMount} from \'svelte\';\\n    import CopyText from \'$lib/CopyText.svelte\';\\n\\n    let dataJSON = null;\\n    let randomPrompt = \'\';\\n    let usedPrompts = new Set();\\n    // let usedArchetypes = new Set();\\n    let prompt = null;\\n    let short = false;\\n    let intro = \'Story Blitz\';\\n    let roles = [\\n        \\"Protagonist\\",\\n        \\"Central figure\\",\\n        \\"Main character\\",\\n        \\"Lead character\\",\\n        \\"Hero(ine)\\"\\n    ];\\n    let archetype = roles[0];\\n    let plot = \'\';\\n\\n    async function fetchPrompts() {\\n        try {\\n            const response = await fetch(\'./data/prompts.json\');\\n            if (!response.ok) throw new Error(\'Network response was not ok\');\\n            return await response.json();\\n        } catch (error) {\\n            console.error(\'Failed to fetch prompts:\', error);\\n            return null;\\n        }\\n    }\\n\\n    let oneOf = (obj) => {\\n        if(!short && obj) {\\n            let rand = Math.floor(Math.random() * obj.length);\\n            return obj[rand].description;\\n        }\\n        return (obj) ? obj[Math.floor(Math.random() * obj.length)].name : \'[...]\';\\n    }\\n    let getOne = (arr) => {\\n        return arr[Math.floor(Math.random() * arr.length)];\\n    }\\n    $: prompts = null;\\n    $: allArchetypes = null;\\n    $: plotLines = (data = null) => {\\n        if (!data) return;\\n        let {\\n            archetypes,\\n            protagonists,\\n            incidents,\\n            settings,\\n            goals,\\n            obstacles,\\n            challenges,\\n            environments,\\n            tones,\\n            transformations,\\n            problems,\\n            genres,\\n            adventures,\\n            valuables,\\n            resolutions,\\n            flaws,\\n            powers,\\n            creatures,\\n            introductions,\\n            plots = []\\n        } = data;\\n        allArchetypes = archetypes;\\n        intro = introductions[Math.floor(Math.random() * introductions.length)].name;\\n        archetype = (short) ? roles[Math.floor(Math.random() * roles.length)] : archetypes[Math.floor(Math.random() * archetypes.length)].name;\\n        if(plots.length > 0) {\\n            let whichPlot = Math.floor(Math.random() * plots.length) || null;\\n            plot = (whichPlot) ? `<b>${plots[whichPlot].name}:</b> ${plots[whichPlot].description}` : \'\';\\n        }\\n        return [\\n            {\\n                id: 1,\\n                body: `${oneOf(incidents)}. ${archetype} ${oneOf(protagonists)} in ${getOne(settings)} to ${oneOf(goals)}, facing ${oneOf(obstacles)} and ${oneOf(challenges)} along the way.`,\\n            },\\n            {\\n                id: 2,\\n                body: `${archetype} ${oneOf(protagonists)}  ${oneOf(incidents)}, experiences ${oneOf(challenges)} and ${oneOf(adventures)}, and returns to ${oneOf(environments)} transformed.`,\\n            },\\n            {\\n                id: 3,\\n                body: `${archetype} ${oneOf(protagonists)} embarks on a journey to find ${oneOf(valuables)} and ${oneOf(goals)}.`,\\n            },\\n            {\\n                id: 4,\\n                body: `${archetype} ${oneOf(protagonists)} travels to ${oneOf(tones)} ${getOne(settings)}, experiences ${oneOf(transformations)}, and returns to ${oneOf(environments)} with ${oneOf(problems)}.`,\\n            },\\n            {\\n                id: 5,\\n                body: `${archetype} ${oneOf(protagonists)} travels to ${oneOf(environments)}, experiences ${oneOf(transformations)}, and returns to ${oneOf(environments)} with ${oneOf(valuables)}.`,\\n            },\\n            {\\n                id: 6,\\n                body: `${oneOf(tones)} and ${oneOf(genres)} story that involves ${oneOf(problems)}, ${oneOf(incidents)}, ${oneOf(challenges)}  and ${oneOf(adventures)}, leading to ${oneOf(resolutions)}.`,\\n            },\\n            {\\n                id: 7,\\n                body: `${oneOf(genres)} story that depicts ${oneOf(tones)} ${oneOf(challenges)} of ${oneOf(protagonists)} due to ${oneOf(flaws)}, ${oneOf(powers)}, and ${oneOf(creatures)}, leading to ${oneOf(resolutions)}.`,\\n            },\\n            {\\n                id: 8,\\n                body: `${archetype} ${oneOf(protagonists)} undergoes ${oneOf(problems)}, ${oneOf(transformations)} from ${getOne(settings)} to ${oneOf(goals)}, after a period of ${oneOf(challenges)} and ${oneOf(adventures)}.`\\n            },\\n            {\\n                id: 10,\\n                body: `${oneOf(creatures)} ${oneOf(adventures)} and ${oneOf(problems)}, and saves the ${getOne(settings)}.`\\n            },\\n            {\\n                id: 11,\\n                body: `${archetype} ${oneOf(creatures)} overcomes ${oneOf(problems)} through ${oneOf(flaws)} and ${oneOf(powers)}`\\n            }\\n        ];\\n    };\\n    $: getRandomPrompt = () => {\\n        archetype = (short || allArchetypes.length < 1) ? roles[Math.floor(Math.random() * roles.length)] : allArchetypes[Math.floor(Math.random() * allArchetypes.length)].name;\\n        if (usedPrompts.size === prompts.length) {\\n            // Reset used prompts when all have been displayed\\n            usedPrompts.clear();\\n            prompts = plotLines(dataJSON);\\n            console.log(\\"All prompts have been used. Starting over!\\");\\n        } do {\\n            prompt = prompts[Math.floor(Math.random() * prompts.length)];\\n        } while (usedPrompts.has(prompt.id));\\n        usedPrompts.add(prompt.id);\\n        return prompt.body;\\n    }\\n\\n    onMount(async () => {\\n        dataJSON = await fetchPrompts();\\n        if (!dataJSON) return;\\n        prompts = plotLines(dataJSON);\\n        randomPrompt = getRandomPrompt();\\n    });\\n\\n    function shufflePrompt() {\\n        short = !short;\\n        randomPrompt = getRandomPrompt();\\n    }\\n<\/script>\\n\\n<section>\\n    <div class=\\"main\\">\\n        <CopyText textToCopy={randomPrompt} />\\n        {#if intro}<h2>{intro}</h2>{/if}\\n        <div>{@html randomPrompt}</div>\\n        {#if plot}<small>{@html plot}</small>{/if}\\n        <div class=\\"father-div\\" on:click={shufflePrompt}>\\n            <div class=\\"cat\\">\\n                <div class=\\"dog\\">\\n                    <i class=\\"fal fa-smile\\"></i>\\n                    <div>Blitz!</div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n</section>\\n<style>\\n    section {\\n        filter: brightness(1.2) contrast(20);\\n        -webkit-filter: brightness(1.2) contrast(20);\\n    }\\n    small {\\n        border-top: black 1px dotted;\\n        padding-top: 0.5rem;\\n        margin-top: 1.2rem;\\n    }\\n    .father-div{\\n        width: 50%;\\n        height:5vh;\\n        margin: 0 auto;\\n        padding:2rem;\\n        /*background-color: #fff;*/\\n        padding-left:40%;\\n        filter: blur(20px);\\n        -webkit-filter: blur(20px);\\n    }\\n\\n    .cat{\\n        background-color: black;\\n        width: 50px;\\n        height: 50px;\\n\\n        border-radius: 50%;\\n        animation: right 15s infinite;\\n        -webkit-animation: right 15s infinite;\\n        cursor: pointer;\\n/*        background-image: linear-gradient(-45deg, #ee7752, #e73c7e);\\n        background-size: 400% 400%;*/\\n    }\\n\\n    @-webkit-keyframes right {\\n        0%,100%   {\\n            margin-left: 10px;\\n            /*background-position: 0% 50%;*/\\n        }\\n        50% {\\n            margin-left: -50px;\\n            /*background-position: 100% 50%;*/\\n        }\\n    }\\n\\n    .dog{\\n        background-color: black;\\n        width: 100px;\\n        height: 100px;\\n\\n        border-radius: 50%;\\n        -webkit-animation: lefty 5s infinite;\\n        position:relative;\\n        z-index:4;\\n        cursor: pointer;\\n/*        background: linear-gradient(-45deg, #ee7752, #e73c7e);\\n        background-size: 400% 400%;*/\\n    }\\n\\n    @-webkit-keyframes lefty {\\n        0%,100%   {\\n            margin-left: -250px;\\n            /*background-position: 0% 50%;*/\\n        }\\n        50% {\\n            margin-left: -50px;\\n            /*background-position: 100% 50%;*/\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAkKI,qBAAQ,CACJ,MAAM,CAAE,WAAW,GAAG,CAAC,CAAC,SAAS,EAAE,CAAC,CACpC,cAAc,CAAE,WAAW,GAAG,CAAC,CAAC,SAAS,EAAE,CAC/C,CACA,mBAAM,CACF,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,MAAM,CAC5B,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAChB,CACA,yBAAW,CACP,KAAK,CAAE,GAAG,CACV,OAAO,GAAG,CACV,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,QAAQ,IAAI,CAEZ,aAAa,GAAG,CAChB,MAAM,CAAE,KAAK,IAAI,CAAC,CAClB,cAAc,CAAE,KAAK,IAAI,CAC7B,CAEA,kBAAI,CACA,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAEZ,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,mBAAK,CAAC,GAAG,CAAC,QAAQ,CAC7B,iBAAiB,CAAE,mBAAK,CAAC,GAAG,CAAC,QAAQ,CACrC,MAAM,CAAE,OAGZ,CAEA,mBAAmB,mBAAM,CACrB,EAAE,CAAC,IAAO,CACN,WAAW,CAAE,IAEjB,CACA,GAAI,CACA,WAAW,CAAE,KAEjB,CACJ,CAEA,kBAAI,CACA,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CAEb,aAAa,CAAE,GAAG,CAClB,iBAAiB,CAAE,mBAAK,CAAC,EAAE,CAAC,QAAQ,CACpC,SAAS,QAAQ,CACjB,QAAQ,CAAC,CACT,MAAM,CAAE,OAGZ,CAEA,mBAAmB,mBAAM,CACrB,EAAE,CAAC,IAAO,CACN,WAAW,CAAE,MAEjB,CACA,GAAI,CACA,WAAW,CAAE,KAEjB,CACJ"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let randomPrompt = "";
  let intro = "Story Blitz";
  $$result.css.add(css);
  return `<section class="svelte-jakce0"><div class="main">${validate_component(CopyText, "CopyText").$$render($$result, { textToCopy: randomPrompt }, {}, {})} ${`<h2>${escape(intro)}</h2>`} <div><!-- HTML_TAG_START -->${randomPrompt}<!-- HTML_TAG_END --></div> ${``} <div class="father-div svelte-jakce0" data-svelte-h="svelte-1cfdoow"><div class="cat svelte-jakce0"><div class="dog svelte-jakce0"><i class="fal fa-smile"></i> <div>Blitz!</div></div></div></div></div> </section>`;
});
export {
  Page as default
};
