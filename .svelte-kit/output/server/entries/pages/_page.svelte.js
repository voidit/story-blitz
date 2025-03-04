import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let randomPrompt = "";
  return `<section> <div class="main"> <div><!-- HTML_TAG_START -->${randomPrompt}<!-- HTML_TAG_END --></div> <label><input class="bubble" name="dummy" type="checkbox" value="on"></label></div></section>`;
});
export {
  Page as default
};
