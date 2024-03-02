//priority: 1

ServerEvents.tags('item', event => {

    event.remove('forge:ores/silver', 'silentgems:raw_silver')

    for(const core of core_type) {
        event.add('randomium:blacklist', `kubejs:unprocessed_${core}_core`)
        event.add('randomium:blacklist', `kubejs:refined_${core}_core`)
    }

    event.add('ae2:can_remove_color', 'supplementaries:soap')

    event.add('dar:no_emc', '#minecraft:logs')
    event.add('dar:no_emc', 'feather')
    event.add('dar:no_emc', 'string')
    event.add('dar:no_emc', 'goat_horn')
    event.add('dar:no_emc', '#minecraft:planks')
    event.add('dar:no_emc', '#minecraft:sand')
    event.add('dar:no_emc', '#minecraft:saplings')
    event.add('dar:no_emc', '#minecraft:flowers')

    event.add('randomium:blacklist', /projecte/)
    event.add('randomium:blacklist', /everycomp/)
    event.add('randomium:blacklist', /mcw/)
    event.add('randomium:blacklist', /factory/)
    event.add('randomium:blacklist', /installer/)
    event.add('randomium:blacklist', /creative/)
    event.add('randomium:blacklist', /chipped/)
    event.add('randomium:blacklist', /silentgear/)
    event.add('randomium:blacklist', /infinity/)
    event.add('randomium:blacklist', /ae2/)
    event.add('randomium:blacklist', /appbot/)
    event.add('randomium:blacklist', /appmek/)
    event.add('randomium:blacklist', /megacells/)

    event.add('forge:storage_blocks/silver', 'silentgems:silver_block')
    event.add('forge:storage_blocks/flint', 'supplementaries:flint_block')
    event.add('forge:storage_block/apple', 'thermal:apple_block')
    event.add('forge:storage_block/carrot', 'thermal:carrot_block')
    event.add('forge:storage_block/carrot', 'farmersdelight:carrot_crate')
    event.add('forge:storage_block/potato', 'thermal:potato_block')
    event.add('forge:storage_block/potato', 'farmersdelight:potato_crate')
    event.add('forge:storage_block/beetroot', 'thermal:beetroot_block')
    event.add('forge:storage_block/beetroot', 'farmersdelight:beetroot_crate')
    event.add('forge:storage_block', '#forge:storage_blocks/flint')

    event.add('forge:mushrooms', 'monsters_and_girls:end_puffball')
    event.add('forge:mushrooms', 'monsters_and_girls:ink_cap_mushroom')
    event.add('forge:mushrooms', 'monsters_and_girls:molten_fungus')
    event.add('forge:mushrooms', 'monsters_and_girls:soul_wanderer_mushroom')

    event.add('minecraft:small_flowers', 'culturaldelights:wild_corn')
    event.add('minecraft:small_flowers', 'culturaldelights:wild_cucumbers')
    event.add('minecraft:small_flowers', 'culturaldelights:wild_eggplants')
    event.add('minecraft:small_flowers', 'farmersrespite:wild_coffee_bush')
    event.add('minecraft:small_flowers', 'farmersrespite:wild_tea_bush')

    event.add('farmersdelight:wild_crop', 'culturaldelights:wild_corn')
    event.add('farmersdelight:wild_crop', 'culturaldelights:wild_cucumbers')
    event.add('farmersdelight:wild_crop', 'culturaldelights:wild_eggplants')
    event.add('farmersdelight:wild_crop', 'farmersrespite:wild_tea_bush')
    event.add('farmersdelight:wild_crop', 'farmersrespite:wild_coffee_bush')

    event.add('forge:ores/quartz', 'byg:blue_nether_quartz_ore')
    event.add('forge:ores/quartz', 'byg:brimstone_nether_quartz_ore')
    event.add('forge:ores/redstone', 'byg:cryptic_redstone_ore')

    event.add('forge:ores/fire_gem', 'shadowlands:demonic_firegem_ore')
    event.add('forge:ores/fire_gem', 'shadowlands:fire_gem_ore')

    event.add('minecraft:soul_fire_base_blocks', 'byg:warped_soul_sand')
    event.add('minecraft:soul_fire_base_blocks', 'byg:warped_soul_soil')

    event.add('dar:soul_items', '#minecraft:soul_fire_base_blocks')
    event.add('dar:soul_items', 'quark:soul_bead')
    event.add('dar:soul_items', 'silentgems:soul_gem')
    event.add('dar:soul_items', 'blue_skies:soul_fragment')
    event.add('dar:soul_items', 'art_of_forging:dragon_soul')
    event.add('dar:soul_items', 'art_of_forging:soul_ember')
    event.add('dar:soul_items', 'botania:life_essence')

    event.add('dar:runes_of_sin', 'botania:rune_envy')
    event.add('dar:runes_of_sin', 'botania:rune_gluttony')
    event.add('dar:runes_of_sin', 'botania:rune_greed')
    event.add('dar:runes_of_sin', 'botania:rune_lust')
    event.add('dar:runes_of_sin', 'botania:rune_pride')
    event.add('dar:runes_of_sin', 'botania:rune_sloth')
    event.add('dar:runes_of_sin', 'botania:rune_wrath')

    event.add('minecraft:music_discs', 'alexsmobs:music_disc_daze')
    event.add('minecraft:music_discs', 'alexsmobs:music_disc_thime')
    event.add('minecraft:music_discs', 'idas:music_disc_calidum')
    event.add('minecraft:music_discs', 'idas:music_disc_slither')
    event.add('minecraft:music_discs', 'integrated_stronghold:music_disc_forlorn')
    event.add('minecraft:music_discs', 'integrated_stronghold:music_disc_sight')

    event.add('forge:coins/brass', 'createdeco:brass_coin')
    event.add('forge:coins/cast_iron', 'createdeco:cast_iron_coin')
    event.add('forge:coins/copper', 'createdeco:copper_coin')
    event.add('forge:coins/gold', 'createdeco:gold_coin')
    event.add('forge:coins/iron', 'createdeco:iron_coin')
    event.add('forge:coins/netherite', 'createdeco:netherite_coin')
    event.add('forge:coins/zinc', 'createdeco:zinc_coin')

    event.add('forge:coins', '#forge:coins/brass')
    event.add('forge:coins', '#forge:coins/zinc')
    event.add('forge:coins', '#forge:coins/cast_iron')

    event.add('forge:seeds', 'byg:white_puffball_spores')
    event.add('forge:seeds', 'culturaldelights:corn_kernels')
    event.add('forge:seeds', 'culturaldelights:cucumber_seeds')
    event.add('forge:seeds', 'culturaldelights:eggplant_seeds')

})

ServerEvents.tags('block', event => {

    event.add('minecraft:small_flowers', 'culturaldelights:wild_corn')
    event.add('minecraft:small_flowers', 'culturaldelights:wild_cucumbers')
    event.add('minecraft:small_flowers', 'culturaldelights:wild_eggplants')
    event.add('minecraft:small_flowers', 'farmersrespite:wild_tea_bush')
    event.add('minecraft:small_flowers', 'farmersrespite:wild_coffee_bush')

    event.add('farmersdelight:wild_crop', 'culturaldelights:wild_corn')
    event.add('farmersdelight:wild_crop', 'culturaldelights:wild_cucumbers')
    event.add('farmersdelight:wild_crop', 'culturaldelights:wild_eggplants')
    event.add('farmersdelight:wild_crop', 'farmersrespite:wild_tea_bush')
    event.add('farmersdelight:wild_crop', 'farmersrespite:wild_coffee_bush')

    event.add('minecraft:mineable/pickaxe', 'cfm:post_box')

    event.add('minecraft:climbable', 'everycomp:cfm/byg/ebony_blinds')

    event.add('forge:storage_blocks/silver', 'silentgems:silver_block')
    event.add('forge:storage_blocks/flint', 'cyclic:flint_block')
    event.add('forge:storage_blocks/flint', 'supplementaries:flint_block')
    event.add('forge:storage_block', '#forge:storage_blocks/flint')
})

ServerEvents.tags('entity_type', event => {

    event.add('mob_grinding_utils:no_dirt_spawn', 'mutantmonsters:mutant_creeper')
    event.add('mob_grinding_utils:no_dirt_spawn', 'mutantmonsters:mutant_enderman')
    event.add('mob_grinding_utils:no_dirt_spawn', 'mutantmonsters:mutant_skeleton')
    event.add('mob_grinding_utils:no_dirt_spawn', 'alexsmobs:farseer')

})