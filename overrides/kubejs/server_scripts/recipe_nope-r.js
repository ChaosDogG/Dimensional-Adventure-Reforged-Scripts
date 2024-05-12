ServerEvents.recipes(event => {
    let id = (recipe) => {
        event.remove({id: recipe})
    }
    let dm = (recipe) => {
        event.remove({output: `projecte:dm_${recipe}`})
    }
    let rm = (recipe) => {
        event.remove({output: `projecte:rm_${recipe}`})
    }
    let gem = (recipe) => {
        event.remove({output: `projecte:gem_${recipe}`})
    }
    let meka = (recipe) => {
        event.remove({output: `mekanism:mekasuit_${recipe}`})
    }
    id('create:compat/silentsgems/crushing/agate_ore')
    id('create:compat/silentsgems/crushing/amber_ore')
    id('create:compat/silentsgems/crushing/amethyst_ore')
    id('create:compat/silentsgems/crushing/ametrine_ore')
    id('create:compat/silentsgems/crushing/apatite_ore')
    id('create:compat/silentsgems/crushing/aquamarine_ore')
    id('create:compat/silentsgems/crushing/benitoite_ore')
    id('create:compat/silentsgems/crushing/cats_eye_ore')
    id('create:compat/silentsgems/crushing/chrysoprase_ore')
    id('create:compat/silentsgems/crushing/coral_ore')
    id('create:compat/silentsgems/crushing/euclase_ore')
    id('create:compat/silentsgems/crushing/fluorite_ore')
    id('create:compat/silentsgems/crushing/garnet_ore')
    id('create:compat/silentsgems/crushing/green_sapphire_ore')
    id('create:compat/silentsgems/crushing/jade_ore')
    id('create:compat/silentsgems/crushing/jasper_ore')
    id('create:compat/silentsgems/crushing/kunzite_ore')
    id('create:compat/silentsgems/crushing/lepidolite_ore')
    id('create:compat/silentsgems/crushing/malachite_ore')
    id('create:compat/silentsgems/crushing/moonstone_ore')
    id('create:compat/silentsgems/crushing/morganite_ore')
    id('create:compat/silentsgems/crushing/onyx_ore')
    id('create:compat/silentsgems/crushing/opal_ore')
    id('create:compat/silentsgems/crushing/pearl_ore')
    id('create:compat/silentsgems/crushing/phosphophyllite_ore')
    id('create:compat/silentsgems/crushing/pyrope_ore')
    id('create:compat/silentsgems/crushing/sodalite_ore')
    id('create:compat/silentsgems/crushing/spinel_ore')
    id('create:compat/silentsgems/crushing/sunstone_ore')
    id('create:compat/silentsgems/crushing/tanzanite_ore')
    id('create:compat/silentsgems/crushing/tektite_ore')
    id('create:compat/silentsgems/crushing/yellow_diamond_ore')
    id('create:compat/silentsgems/crushing/zircon_ore')
    id('silentgear:diamond_from_shards')
    id('unusualend:chiseled_endstone_recipe_1')

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

    event.remove({output: 'mekanism:atomic_disassembler'})
    event.remove({output: 'mekanism:digital_miner'})
    event.remove({output: 'mekanism:electric_bow'})
    event.remove({output: 'mekanism:flamethrower'})
    event.remove({output: 'mekanism:meka_tool'})
    event.remove({output: 'projectexpansion:matter_upgrader'})
    event.remove({output: /mekanism:free_runners.*/})
    event.remove({output: /mekanism:jetpack.*/})
    event.remove({output: /mekanism:module.*/})
    event.remove({output: /mekanismgenerators:module.*/})
    event.remove({output: /projecte:collector.*/})
    event.remove({output: /projecte:relay.*/})
    event.remove({output: /projectexpansion:.*_collector/})
    event.remove({output: /projectexpansion:.*_power_flower/})
    event.remove({output: /projectexpansion:.*_relay/})
})