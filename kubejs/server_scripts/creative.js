ServerEvents.recipes(event => {

    //creative

    event.shaped('cyclic:item_infinite', [
        'ERE',
        'MCM',
        'ERE'
    ],{
        E: 'botania:elf_quartz',
        R: 'randomium:randomium',
        M: 'alexsmobs:mimicream',
        C: 'chain_command_block'
    })
    event.shaped('pipez:infinity_upgrade', [
        'CRC',
        'RNR',
        'CRC'
    ],{
        C: 'kubejs:unprocessed_creative_core',
        R: 'redstone_block',
        N: 'pipez:ultimate_upgrade'
    })
    event.shaped('mekanism:creative_bin', [
        'CUC',
        'AuA',
        'CCC'
    ],{
        C: 'cobblestone',
        U: 'kubejs:unprocessed_creative_core',
        A: 'mekanism:pellet_antimatter',
        u: 'mekanism:ultimate_bin'
    })
    event.shaped('mekanism:creative_fluid_tank', [
        'AIA',
        'IUI',
        'AIA'
    ],{
        A: 'mekanism:pellet_antimatter',
        I: 'iron_ingot',
        U: 'mekanism:ultimate_fluid_tank'
    })
    event.shaped(Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}'), [
        'CEC',
        'AUA',
        'CEC'
    ],{
        C: 'kubejs:unprocessed_creative_core',
        E: 'mekanism:energy_tablet',
        A: 'mekanism:pellet_antimatter',
        U: Item.of('mekanism:ultimate_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"256000000"}]}}')
    })
    event.shaped('mekanism:creative_chemical_tank', [
        'CAC',
        'AUA',
        'CAC'
    ],{
        C: 'kubejs:unprocessed_creative_core',
        A: 'mekanism:pellet_antimatter',
        U: 'mekanism:ultimate_chemical_tank'
    })
    event.shaped('botania:creative_pool', [
        ' C ',
        'AFA',
        'AAA'
    ],{
        C: 'kubejs:unprocessed_creative_core',
        A: 'mekanism:pellet_antimatter',
        F: 'botania:fabulous_pool'
    })

    event.shapeless('botania:corporea_spark_creative', ['botania:corporea_spark_master', 'kubejs:unprocessed_creative_core', 'mekanism:pellet_antimatter'])

    event.recipes.industrialforegoing.dissolution_chamber([
        'create:potato_cannon',
        'create:extendo_grip',
        'create:schematicannon',
        'create:wand_of_symmetry',
        'create:creative_crate',
        'create:cogwheel',
        'kubejs:unprocessed_creative_core'
    ], 
    Fluid.of('industrialforegoing:ether_gas', 2000), 
    'create:handheld_worldshaper', 
    700)
    event.recipes.industrialforegoing.dissolution_chamber([
        'create:water_wheel',
        'create:large_water_wheel',
        'create:hand_crank',
        '#create:valve_handles',
        'create:windmill_bearing',
        'create:steam_engine',
        'createaddition:electric_motor',
        'mechanicalbotania:mana_motor'
    ],
    Fluid.of('industrialforegoing:ether_gas', 2000),
    'create:creative_motor',
    700)
    event.recipes.industrialforegoing.dissolution_chamber([
        'mekanism:creative_bin',
        'create:brass_funnel',
        'create:smart_chute',
        'mekanism:pellet_antimatter',
        'kubejs:unprocessed_creative_core'
    ],
    Fluid.of('industrialforegoing:ether_gas', 2000),
    'create:creative_crate',
    700)
    event.recipes.industrialforegoing.dissolution_chamber([
        'touhou_little_maid:ultramarine_orb_elixir',
        'touhou_little_maid:explosion_protect_bauble',
        'touhou_little_maid:fire_protect_bauble',
        'touhou_little_maid:projectile_protect_bauble',
        'touhou_little_maid:magic_protect_bauble',
        'touhou_little_maid:fall_protect_bauble',
        'touhou_little_maid:drown_protect_bauble',
        'kubejs:unprocessed_creative_core'
    ],
    Fluid.of('industrialforegoing:ether_gas', 2000),
    'touhou_little_maid:substitute_jizo',
    700)

    event.recipes.mekanismCombining('botania:lens_storm', '#botania:lens', 'mekanism:pellet_antimatter')

    event.recipes.mekanism.injecting('create:creative_blaze_cake', 'create:blaze_cake', 'mekanism:antimatter')
    event.recipes.mekanism.injecting('ae2:creative_item_cell', 'megacells:item_storage_cell_256m', 'mekanism:antimatter')
    event.recipes.mekanism.injecting('ae2:creative_fluid_cell', 'megacells:fluid_storage_cell_256m', 'mekanism:antimatter')
    event.recipes.mekanism.injecting('appmek:creative_chemical_cell', 'megacells:chemical_storage_cell_256m', 'mekanism:antimatter')
    event.recipes.mekanism.injecting('appbot:creative_mana_cell', 'megacells:mana_storage_cell_256m', 'mekanism:antimatter')


    //developer

    let command_block = (output, shell, component, core) => {
        event.recipes.create.mechanical_crafting(output, [
            'SSSSSSS',
            'SRNRNRS',
            'SNTCTNS',
            'SRCOCRS',
            'SNTCTNS',
            'SRNRNRS',
            'SSSSSSS'
        ],{
            S: shell,
            R: 'redstone_block',
            N: 'nether_star',
            T: 'redstone_torch',
            C: component,
            O: core
        })
    }
    command_block('command_block', 'allthemodium:allthemodium_block', '#buttons', 'kubejs:unprocessed_technical_core')
    command_block('chain_command_block', 'allthemodium:vibranium_block', 'chain', 'command_block')
    command_block('repeating_command_block', 'allthemodium:unobtainium_block', 'amethyst_shard', 'command_block')

    event.shaped('command_block_minecart', [
        'ICI',
        'III'
    ],{
        I: 'iron_ingot',
        C: 'command_block'
    })
    event.shaped('command_block_minecart', [
        'C',
        'M'
    ],{
        C: 'command_block',
        M: 'minecart'
    })
    event.shapeless('bedrock', [
        '#forge:stone',
        "#beds"
    ])
    

    event.recipes.industrialforegoing.dissolution_chamber([
        '#forge:cactus',
        '#forge:vines',
        '#saplings',
        '#chipped:lily_pad',
        'book',
        'sugar_cane',
        'bamboo',
        '#chipped:moss_block'
    ],
    'cofh_core:experience',
    'knowledge_book',
    100)

    event.recipes.botania.terra_plate('debug_stick', ['stick', '#quark:runes', 'kubejs:unprocessed_technical_core'], 100000)

})

