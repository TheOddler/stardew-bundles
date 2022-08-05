---
title: Stardew Valley Bundles
---

# ![*][junimo] {{ page.title }} ![*][junimo]
{: .no-print}
[junimo]: images/Junimo.gif

<div class="bulk-buttons no-print">
    <button onclick="setAllCheckboxes(true, 'input[type=checkbox].name-toggle')">Enable all names</button>
    <button onclick="setAllCheckboxes(false, 'input[type=checkbox].name-toggle')">Disable all names</button>
    <button onclick="setAllCheckboxes(false, '.item input[type=checkbox]')">Remove all progress</button>
    <button onclick="setAllCheckboxes(true, 'input[type=checkbox].visibility-toggle')">Show everything</button>
</div>

## <img src="images/Dwarf_Gadget.png" height="24"> Save Slots:
{: .no-print}

<div class="save-slots no-print">
    {% for i in (1..5) %}
    <span class="save-slot">
        Slot {{ i }}:
        <button onclick="saveCheckboxes('{{ i }}')">Save</button>
        <button onclick="loadCheckboxes('{{ i }}')">Load</button>
    </span>
    {% endfor %}
</div>

<div class="room">
    {% include room_header.html name="Crafts Room" reward="Bridge Repaired" %}

    {% include_relative bundles/crafts/spring.md %}
    {% include_relative bundles/crafts/summer.md %}
    {% include_relative bundles/crafts/fall.md %}
    {% include_relative bundles/crafts/winter.md %}
    {% include_relative bundles/crafts/construction.md %}
    {% include_relative bundles/crafts/exotic.md %}
</div>

<div class="room">
    {% include room_header.html name="Pantry" reward="Greenhouse Repaired" %}

    {% include_relative bundles/pantry/spring.md %}
    {% include_relative bundles/pantry/summer.md %}
    {% include_relative bundles/pantry/fall.md %}
    {% include_relative bundles/pantry/quality.md %}
    {% include_relative bundles/pantry/animal.md %}
    {% include_relative bundles/pantry/artisan.md %}
</div>

<div class="room">
    {% include room_header.html name="Fish Tank" reward="Glittering Boulder Removed" showInfoToggle=true %}

    {% include_relative bundles/fish/river.md %}
    {% include_relative bundles/fish/lake.md %}
    {% include_relative bundles/fish/ocean.md %}
    {% include_relative bundles/fish/night.md %}
    {% include_relative bundles/fish/crab.md %}
    {% include_relative bundles/fish/specialty.md %}
</div>

<div class="room">
    {% include room_header.html name="Boiler Room" reward="Minecarts Repaired" %}

    {% include_relative bundles/boiler/blacksmith.md %}
    {% include_relative bundles/boiler/geologist.md %}
    {% include_relative bundles/boiler/adventurer.md %}
</div>

<div class="room">
    {% include room_header.html name="Bulletin Board" reward="Friendship ♡♡ (non-datable)" showInfoToggle=true %}

    {% include_relative bundles/bulletin_board/chef.md %}
    {% include_relative bundles/bulletin_board/dye.md %}
    {% include_relative bundles/bulletin_board/field_research.md %}
    {% include_relative bundles/bulletin_board/fodder.md %}
    {% include_relative bundles/bulletin_board/enchanter.md %}
</div>

<div class="room">
    {% include room_header.html name="Vault" reward="Bus Repaired" showBulkButtons=false showNameToggle=false %}

    {% include_relative bundles/vault/coin_bundle.md amount=2500 reward="Chocolate Cake" reward_count=3 %}
    {% include_relative bundles/vault/coin_bundle.md amount=5000 reward="Quality Fertilizer" reward_count=30 %}
    {% include_relative bundles/vault/coin_bundle.md amount=10000 reward="Lightning Rod" %}
    {% include_relative bundles/vault/coin_bundle.md amount=25000 reward="Crystalarium" %}
</div>

<div class="room">
    {% include room_header.html name="Abandoned JojaMart" reward="Movie Theater" showBulkButtons=false showNameToggle=false %}

    {% include_relative bundles/joja_mart/missing_bundle.md %}
</div>

<div class="room">
    {% include room_header.html name="Fish Shop" reward="Ginger Island" showBulkButtons=false showNameToggle=false %}

    {% include_relative bundles/boat/boat.md %}
</div>

<div class="room museum">
    {% include room_header.html name="Museum" %}

    {% include_relative museum/artifacts.md %}
    {% include_relative museum/minerals.md %}
</div>
