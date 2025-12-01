# Ibex Linguistic Experiment Project

## Project Overview
This is a web-based linguistic experiment built using the **Ibex framework** (formerly WebExp). The experiment presents Czech sentences to participants and collects three types of judgments:
1. **Acceptability judgments** - Rating sentence grammaticality/naturalness
2. **Entailment judgments** - Determining semantic relationships between sentences
3. **Truth value judgments** - Evaluating the truth conditions of sentences

## Architecture & Structure

### Core Directories
- `data_includes/` - Experiment definitions (items, sequences, defaults)
- `js_includes/` - Ibex controller components (UI widgets)
- `css_includes/` - Stylesheets for each controller
- `chunk_includes/` - HTML fragments included in experiments
- `results/` - Collected experiment data
- `server_state/` - Server-side state (e.g., participant counter)

### Key Files
- `data_includes/acceptability_spring_2015.js` - Main experiment configuration
  - Defines `shuffleSequence` (experimental flow)
  - Defines `items` array (all experimental items)
  - Sets `defaults` for controllers
  - Configures messages and behavior

## Ibex Framework Conventions

### Controller Pattern
Controllers are defined using `define_ibex_controller()` with a name and jQuery widget:
```javascript
define_ibex_controller({
    name: "ControllerName",
    jqueryWidget: { _init: function() { ... } }
});
```

### Item Structure
Items follow the format: `[["item-label-condition", itemNumber], "ControllerType", {options}]`
- First element: array with label/condition string and item number
- Second element: controller name (e.g., "AcceptabilityJudgment", "Message", "Form")
- Third element: configuration object

### Sequence Functions
- `seq()` - Sequential presentation
- `sepWith()` - Interleave separator between items
- `rshuffle()` - Randomized shuffle
- `startsWith()` - Filter items by label prefix

### Controller Composition
The `VBox` controller composes multiple controllers vertically. Controllers in children array can be prefixed:
- `*ControllerName` - Add when triggered (not immediately)
- `!ControllerName` - Remove previous controller when adding

## Experiment-Specific Patterns

### Item Naming Convention
Items use structured labels: `"first-item{N}-{CONDITION}"` or `"followup-item{N}-{CONDITION}"`
- Conditions: `NR`, `CNR`, `EWS`, `middle`, `notNR`, `pos`, `neg`
- Fillers: `firstfiller{N}` or just `filler{N}`

### Multi-Phase Design
The experiment consists of multiple judgment tasks:
1. **Acceptability judgments** - 5-point Likert scale with practice items
2. **Entailment judgments** - Binary choice (vyplývá/nevyplývá)
   - Preceded by `description-followup` message explaining task
3. **Truth value judgments** - Evaluating sentence truth conditions
   - Each phase may have its own introduction message and practice items

### Czech-Specific Content
All experiment text is in Czech. When adding items:
- Use Czech sentences with proper diacritics (ř, č, š, ž, etc.)
- Follow existing HTML entity encoding if needed
- Maintain formal/informal register consistency

### Controller Usage Patterns
- **AcceptabilityJudgment** (`aj`) - Combines sentence display + question
  - Uses `FlashSentence` or `DashedSentence` internally
  - Presents scale with `presentAsScale: true`
- **Form** - HTML forms with validation (see `example_intro.html`)
- **Message** - Informational screens with click-to-continue
- **Separator** - Timed pauses between items

## Adding New Items

When creating new experimental items:
1. Add to `items` array in `data_includes/acceptability_spring_2015.js`
2. Use consistent labeling with existing items
3. Update `shuffleSequence` if adding new item categories
4. Ensure item numbers are unique within condition sets
5. For HTML sentences, use `{html: "<p>...</p>"}` format

## Data Collection

Results are saved to `results/` directory:
- `raw_results` - Raw server output
- `results` - Processed results

The server maintains a participant counter in `server_state/counter`.

## Testing Workflow

There is no build step. To test:
1. Serve the directory via HTTP (Ibex typically runs on a web server)
2. Navigate to the experiment URL
3. Progress through practice items before seeing actual experiment
4. Check browser console for JavaScript errors

## Common Modifications

**Change scale labels:**
Edit `defaults` array, modify `AcceptabilityJudgment` entry's `leftComment` and `rightComment`.

**Modify experimental flow:**
Edit `shuffleSequence` variable to change order/grouping of item presentation.

**Add new controllers:**
Create new file in `js_includes/` following the `define_ibex_controller` pattern, with matching CSS in `css_includes/`.
