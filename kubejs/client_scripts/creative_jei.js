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

    event.add(Item.of('blue_skies:debug_sword'))

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
    
    event.hide(Item.of('mekanism:digital_miner'))
})