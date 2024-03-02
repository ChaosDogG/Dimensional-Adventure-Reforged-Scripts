ServerEvents.recipes(event => {
    let etable = (table1, table2) => {
        event.shapeless(table2, [table1])
    }
    etable('quark:matrix_enchanter', 'enchanting_table')
    etable('enchanting_table', 'quark:matrix_enchanter')

    event.replaceInput(
        {output:'enchanting_table'},
        'blue_skies:charoite',
        'diamond'
    )

    event.recipes.create.pressing('quark:blank_rune', '#forge:stone')

    event.remove({output: 'create:chromatic_compound'})
    event.recipes.create.mixing('create:chromatic_compound', ['create:andesite_alloy', '8x #forge:dyes', 'quark:rainbow_rune'])

    event.recipes.create.item_application('create:refined_radiance_casing', ['#logs', 'create:refined_radiance'])
    event.recipes.create.item_application('create:shadow_steel_casing', ['#logs', 'create:shadow_steel'])

    event.recipes.create.crushing('supplementaries:rope', 'everycomp:cfm/byg/ebony_blinds')

    event.replaceInput(
        {output:'pipez:item_pipe'},
        'iron_ingot',
        'create:iron_sheet'
    )
    event.replaceInput(
        {output:'pipez:fluid_pipe'},
        'iron_ingot',
        'create:copper_sheet'
    )
    event.replaceInput(
        {output:'pipez:energy_pipe'},
        'iron_ingot',
        'create:polished_rose_quartz'
    )
    event.replaceInput(
        {output:'pipez:gas_pipe'},
        'iron_ingot',
        'createdeco:cast_iron_sheet'
    )
    event.replaceInput(
        {output:'pipez:universal_pipe'},
        'iron_ingot',
        'create:sturdy_sheet'
    )

    event.recipes.powah.energizing(['diamond_block'], 'powah:niotic_crystal_block', 2700000)
    event.recipes.powah.energizing(['botania:blaze_block'], 'powah:blazing_crystal_block', 810000)
    event.recipes.powah.energizing(['emerald_block'], 'powah:spirited_crystal_block', 9000000)
    event.recipes.powah.energizing(['iron_block', 'gold_block'], '2x powah:energized_steel_block', 90000)
    event.recipes.powah.energizing(['mekanism:block_uranium'], 'powah:uraninite_block', 270000)

    event.shaped('vm:vending_machine', [
        'idg',
        'irg',
        'ivg'
    ],{
        i: 'iron_ingot',
        d: 'daylight_detector',
        g: '#forge:glass_panes',
        r: 'randomium:randomium',
        v: 'villager_spawn_egg'
    })

    event.shaped('vm:vending_machine', [
        'idg',
        'irg',
        'icg'
    ],{
        i: 'iron_ingot',
        d: 'daylight_detector',
        g: '#forge:glass_panes',
        r: 'randomium:randomium',
        c: '#forge:coins'
    })

    event.shaped('touhou_little_maid:smart_slab_empty', [
        'ppp',
        'pbp',
        'ppp'
    ],{
        p: 'paper',
        b: 'bundle'
    })

    event.recipes.mekanism.combining('touhou_little_maid:smart_slab_init', 'touhou_little_maid:smart_slab_empty', 'quark:soul_bead')

    event.recipes.create.deploying('petrified_oak_slab', ['oak_slab', 'projecte:watch_of_flowing_time'])
})