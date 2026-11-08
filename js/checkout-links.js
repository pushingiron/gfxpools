/* GFX Pools — checkout links for the shop.
 *
 * Key   = "<product handle>|<size label>"  (size label is empty for single-size items).
 * Value = a checkout URL, e.g. a Stripe Payment Link.
 *
 * Empty ("")  -> the card shows "Request a quote" (goes to the contact form, pre-filled).
 * Has a URL   -> the card shows "Buy now" and opens that URL.
 *
 * To turn on checkout for an item later, paste its Payment Link between the quotes. No other change needed.
 */
window.GFX_CHECKOUT_LINKS = {
  // Saguaro Torch
  "saguaro-torch|Small – 21\"W x 60\"H x 8\"D": "",
  "saguaro-torch|Large – 25\"W x 78\"H x 9\"D": "",
  // Saguaro Cactus
  "saguaro-cactus|7ft Spear – 84\"H x 8\"W x 8\"D": "",
  "saguaro-cactus|7ft – 84\"H x 24\"W x 14\"D": "",
  "saguaro-cactus|9ft – 108\"H x 30\"W x 18\"D": "",
  "saguaro-cactus|11ft – 132\"H x 32\"W x 32\"D": "",
  "saguaro-cactus|14ft – 168\"H x 38\"W x 38\"D": "",
  "saguaro-cactus|17ft – 204\"H x 44\"W x 44\"D": "",
  // Crescent Palm Tree
  "crescent-palm-tree|10 ft | 10 Fronds": "",
  "crescent-palm-tree|12 ft | 16 Fronds": "",
  "crescent-palm-tree|14 ft | 16 Fronds": "",
  // Sunset Palm Tree
  "sunset-palm-tree|10 ft | 10 Fronds": "",
  "sunset-palm-tree|12 ft | 16 Fronds": "",
  // Ocotillo
  "ocotillo|Small – 36\"H x 15\"W x 15\"D": "",
  "ocotillo|Large – 80\"H x 30\"W x 30\"D": "",
  // Joshua Tree
  "joshua-tree|4 ft One-head – 48\"H x 12\"W x 12\"D": "",
  "joshua-tree|7 ft One-head – 82\"H x 12\"W x 12\"D": "",
  "joshua-tree|6 ft Two-head – 72\"H x 34\"W x 12\"D": "",
  "joshua-tree|7 ft Two-head – 90\"H x 34\"W x 12\"D": "",
  "joshua-tree|8 ft Three-head – 98\"H x 54\"W x 34\"D": "",
  // Barrel Torch
  "barrel-torch|Small – 12\"W x 9\"H": "",
  "barrel-torch|Large – 18\"W x 13\"H": "",
  // Fishhook Barrel Cactus
  "fishhook-barrel-cactus|Small – 19\"H x 16\"W": "",
  "fishhook-barrel-cactus|Large – 23\"H x 20\"W": "",
  // Golden Barrel
  "golden-barrel|Small – 13.5\"W x 9.25\"H": "",
  "golden-barrel|Large – 19.5\"W x 13.25\"H": "",
  // Sawtooth Agave
  "sawtooth-agave|Small – 28\"W x 23\"H": "",
  "sawtooth-agave|Large – 32\"W x 26\"H": "",
  // Whale's Tongue Agave
  "whales-tongue-agave|Small – 18\"W x 12\"H": "",
  "whales-tongue-agave|Medium – 23\"W x 16\"H": "",
  "whales-tongue-agave|Large – 29\"W x 20\"H": "",
  // Octopus Agave
  "octopus-agave|Small – 36\"W x 32\"H": "",
  "octopus-agave|Large – 53\"W x 35\"H": "",
  "octopus-agave|XL – 65\"W x 44\"H": "",
  // Americana Agave
  "americana-agave|": "",
  // Sharkskin Agave
  "sharkskin-agave|Small – 22\"W x 18\"H": "",
  "sharkskin-agave|Large – 28\"W x 25\"H": "",
  "sharkskin-agave|XL – 40\"W x 30\"H": "",
  // Artichoke Agave
  "artichoke-agave|Small – 8\"W x 8\"H": "",
  "artichoke-agave|Medium – 12\"W x 12\"H": "",
  "artichoke-agave|Large – 19\"W x 16\"H": "",
  "artichoke-agave|XL – 20\"W x 19\"H": "",
  // Glow Agave
  "glow-agave|Small – 18\"W x 18\"H": "",
  "glow-agave|Medium – 20\"W x 20\"H": "",
  "glow-agave|Large – 24\"W x 24\"H": "",
  // Yucca Succulent
  "yucca-succulent|Small – 9\"W x 9\"H": "",
  "yucca-succulent|Medium – 13\"W x 10\"H": "",
  "yucca-succulent|Large – 20\"W x 14\"H": "",
  // Emperor Agave
  "emperor-agave|Small – 12\"W x 23\"H": "",
  "emperor-agave|Medium – 15\"W x 30\"H": "",
  "emperor-agave|Large – 20\"W x 36\"H": "",
  "emperor-agave|XL – 26\"W x 46\"H": "",
  // Prickly Pear Cactus
  "prickly-pear-cactus|Small – 22\"H x 16\"W x 11\"D": "",
  "prickly-pear-cactus|Tall – 31\"H x 18\"W x 6\"D": "",
  "prickly-pear-cactus|Wide – 22\"H x 28\"W x 6\"D": "",
  "prickly-pear-cactus|Round – 20\"H x 26\"W x 23\"D": "",
  "prickly-pear-cactus|Large – 42\"H x 28\"W x 9\"D": ""
};
