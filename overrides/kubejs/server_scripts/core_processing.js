
ServerEvents.recipes(event => {
    event.recipes.create.mixing('kubejs:unprocessed_angelic_core', ['ender_pearl', 'feather', 'aether:ambrosium_shard', 'botania:rune_air']).superheated()
    event.recipes.create.mixing('kubejs:unprocessed_competitive_core', ['ender_pearl', '#forge:tools/swords', '#forge:tools/axes', 'botania:rune_pride']).superheated()
    event.recipes.create.mixing('kubejs:unprocessed_compassionate_core', ['ender_pearl', 'byg:rose', 'a_man_with_plushies:companion_block_plushie', 'botania:rune_spring']).superheated()
    event.recipes.create.mixing('kubejs:unprocessed_creative_core', ['ender_pearl', 'quark:trowel', '#forge:dyes', 'botania:lens_storm']).superheated()
    event.recipes.create.mixing('kubejs:unprocessed_evil_core', ['ender_pearl', 'twilightforest:fiery_blood', 'nether_star', '#dar:runes_of_sin']).superheated()
    event.recipes.create.mixing('kubejs:unprocessed_meme_core', ['ender_pearl', 'alexsmobs:mungal_spores', 'alexsdelight:raw_bunfungus', 'alexsmobs:mimicream']).superheated()
    event.recipes.create.mixing('kubejs:unprocessed_technical_core', ['ender_pearl', 'command_block', 'debug_stick', 'quark:rainbow_rune']).superheated()

    event.recipes.extendedcrafting.shaped_table('kubejs:unprocessed_overworld_core', [
        'sgf',
        'cew',
        'dpa'
    ],{
        s: '#saplings',
        g: 'grass_block',
        f: '#flowers',
        c: 'cobblestone',
        e: 'ender_pearl',
        w: 'water_bucket',
        d: 'diamond',
        p: 'porkchop',
        a: 'apple'
    }
)
    event.recipes.extendedcrafting.shaped_table('kubejs:unprocessed_nether_core', [
        'nal',
        'ser',
        'obt'
    ],{
        n: 'nether_bricks',
        a: 'netherite_scrap',
        l: 'lava_bucket',
        s: '#soul_fire_base_blocks',
        e: 'ender_pearl',
        r: 'blaze_rod',
        o: 'obsidian',
        b: 'blackstone',
        t: 'basalt'
    }
)
    event.recipes.extendedcrafting.shaped_table('kubejs:unprocessed_end_core', [
        'sch',
        'pey',
        'Erf'
    ],{
        s: 'end_stone',
        c: 'chorus_flower',
        h: 'shulker_shell',
        p: 'purpur_block',
        e: 'ender_pearl',
        y: 'end_rod',
        E: 'tconstruct:enderman_head',
        r: 'end_crystal',
        f: 'byg:shulkren_fungus'
    }
)
    event.recipes.extendedcrafting.shaped_table('kubejs:unprocessed_aether_core', [
        'hzp',
        'qea',
        'gdP'
    ],{
        h: 'aether:holystone_bricks',
        z: 'aether:zanite_gemstone',
        p: 'aether:skyroot_poison_bucket',
        q: 'aether:quicksoil',
        e: "ender_pearl",
        a: 'aether:aechor_petal',
        g: 'glowstone',
        d: 'aether:aether_dirt',
        P: 'aether:pillar'
    }
)
    event.recipes.extendedcrafting.shaped_table('kubejs:unprocessed_twilight_core', [
        'fcccf',
        'cnlhc',
        'cuesc',
        'cmakc',
        'fcccf'
    ],{
        a: 'twilightforest:alpha_yeti_trophy',
        c: 'twilightforest:carminite',
        e: 'ender_pearl',
        f: 'twilightforest:firefly',
        h: 'twilight_forest:hydra_trophy',
        k: 'twilightforest:knight_phantom_trophy',
        l: 'twilightforest:lich_trophy',
        m: 'twilightforest:minoshroom_trophy',
        n: 'twilightforest:naga_trophy',
        s: 'twilightforest:snow_queen_trophy',
        u: 'twilightforest:ur_ghast_trophy'
    })

    for(const core of core_type) {
        event.recipes.botania.elven_trade(`kubejs:refined_${core}_core`, [`kubejs:unprocessed_${core}_core`, 'blaze_powder'])
    }
})