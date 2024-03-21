JEIEvents.addItems(event => {

    event.add(Item.of('barrier'))
    event.add(Item.of('chain_command_block'))
    event.add(Item.of('command_block'))
    event.add(Item.of('command_block_minecart'))
    event.add(Item.of('debug_stick'))
    event.add(Item.of('jigsaw'))
    event.add(Item.of('knowledge_book'))
    event.add(Item.of('light'))
    event.add(Item.of('player_head'))
    event.add(Item.of('repeating_command_block'))
    event.add(Item.of('structure_block'))
    event.add(Item.of('structure_void'))
    event.add(Item.of('petrified_oak_slab'))

    event.add(Item.of('biomesoplenty:bop_icon'))

    event.add(Item.of('blue_skies:debug_sword'))

    event.add(Item.of('byg:byg_logo'))

    event.add(Item.of('citadel:citadel_book'))
    event.add(Item.of('citadel:debug'))
    event.add(Item.of('citadel:effect_item'))
    event.add(Item.of('citadel:fancy_item'))
    event.add(Item.of('citadel:item_icon'))

    event.add(Item.of('create:chromatic_compound'))
    event.add(Item.of('create:refined_radiance'))
    event.add(Item.of('create:shadow_steel'))
    event.add(Item.of('create:refined_radiance_casing'))
    event.add(Item.of('create:shadow_steel_casing'))

    event.add(Item.of('cofh_core:dev_stick'))

    event.add(Item.of('everycomp:all_woods'))

    event.add(Item.of('monsters_and_girls:debug'))

    event.add(Item.of('randomium:any_item'))

    event.add(Item.of('sophisticatedstorage:inaccessible_slot'))

    event.add(Item.of('touhou_little_maid:smart_slab_empty'))

})

JEIEvents.hideItems(event => {
    
    let dm = (recipe) => {
        event.hide(`projecte:dm_${recipe}`)
    }
    let rm = (recipe) => {
        event.hide(`projecte:rm_${recipe}`)
    }
    let gem = (recipe) => {
        event.hide(`projecte:gem_${recipe}`)
    }
    let meka = (recipe) => {
        event.hide(`mekanism:mekasuit_${recipe}`)
    }
    
    dm('axe')
    dm('boots')
    dm('chestplate')
    dm('hammer')
    dm('helmet')
    dm('hoe')
    dm('leggings')
    dm('pick')
    dm('shears')
    dm('shovel')
    dm('sword')

    gem('boots')
    gem('chestplate')
    gem('helmet')
    gem('leggings')

    meka('bodyarmor')
    meka('boots')
    meka('helmet')
    meka('pants')
    
    rm('axe')
    rm('boots')
    rm('chestplate')
    rm('hammer')
    rm('helmet')
    rm('hoe')
    rm('katar')
    rm('leggings')
    rm('morning_star')
    rm('pick')
    rm('shears')
    rm('shovel')
    rm('sword')

    event.hide(Item.of('mekanism:atomic_disassembler'))
    event.hide(Item.of('mekanism:digital_miner'))
    event.hide(Item.of('mekanism:electric_bow'))
    event.hide(Item.of('mekanism:flamethrower'))
    event.hide(Item.of('mekanism:jetpack'))
    event.hide(Item.of('mekanism:jetpack_armored'))
    event.hide(Item.of('mekanism:free_runners'))
    event.hide(Item.of('mekanism:free_runners_armored'))
    event.hide(Item.of('mekanism:meka_tool'))
    event.hide(Item.of('mekanism:hdpe_elytra'))
    event.hide(Item.of(/mekanism:module.*/))

})