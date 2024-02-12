
ServerEvents.recipes(event => {
    event.recipes.create.mixing('kubejs:unprocessed_angelic_core', ['ender_pearl', 'feather', 'aether:ambrosium_shard', 'botania:rune_air']).superheated()
    event.recipes.create.mixing('kubejs:unprocessed_competitive_core', ['ender_pearl', '#forge:tools/swords', '#forge:tools/axes', 'botania:rune_pride']).superheated()
    event.recipes.create.mixing('kubejs:unprocessed_compassionate_core', ['ender_pearl', 'byg:rose', 'a_man_with_plushies:companion_block_plushie', 'botania:rune_spring']).superheated()
    event.recipes.create.mixing('kubejs:unprocessed_creative_core', ['ender_pearl', 'quark:trowel', '#forge:dyes', 'botania:lens_storm']).superheated()
    event.recipes.create.mixing('kubejs:unprocessed_evil_core', ['ender_pearl', 'twilightforest:fiery_blood', 'nether_star', '#dar:runes_of_sin']).superheated()
    event.recipes.create.mixing('kubejs:unprocessed_meme_core', ['ender_pearl', 'alexsmobs:mungal_spores', 'alexsdelight:raw_bunfungus', 'alexsmobs:mimicream']).superheated()
    event.recipes.create.mixing('kubejs:unprocessed_technical_core', ['ender_pearl', 'command_block', 'debug_stick', 'quark:rainbow_rune']).superheated()

    for(const core of core_type) {
        event.recipes.botania.elven_trade(`kubejs:refined_${core}_core`, [`kubejs:unprocessed_${core}_core`, 'blaze_powder'])
    }
})