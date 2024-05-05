ServerEvents.recipes(event => {

    event.remove({output: 'projecte:philosophers_stone'})
    event.remove({output: 'projecte:repair_talisman'})
    event.remove({output: 'projecte:harvest_goddess_band'})
    event.remove({output: 'projecte:low_covalence_dust'})
    event.remove({output: 'projecte:medium_covalence_dust'})
    event.remove({output: 'projecte:high_covalence_dust'})
    event.remove({output: 'projecte:interdiction_torch'})
    event.remove({output: /projecte:transmutation.*/})

    event.recipes.create.mechanical_crafting('projecte:philosophers_stone', [
        'RSSSSSR',
        'SSGGGSS',
        'SG1D2GS',
        'SGDNDGS',
        'SG3D4GS',
        'SSGGGSS',
        'RSSSSSR',
    ], {
        R: 'redstone',
        S: '#dar:soul_items',
        G: '#forge:dusts/gold',
        D: 'diamond',
        N: 'nether_star',
        1: 'botania:rune_fire',
        2: 'botania:rune_water',
        3: 'botania:rune_earth',
        4: 'botania:rune_air'
    })
    let inter1 = Item.of('written_book', '{author:"ChaosDog",pages:[\'{"text":"You just lost\\\\nTHE GAME"}\'],title:"README.md"}')
    let inter2 = Item.of('stone_slab')
    let inter3 = Item.of('projecte:transmutation_table')
    event.recipes.create.sequenced_assembly([
        Item.of('projecte:repair_talisman').withChance(99),
        'paper'
        ],
        'paper',
        [
            event.recipes.createDeploying(inter1, [inter1, Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1).strongNBT()]),
            event.recipes.createDeploying(inter1, [inter1, 'paper']),
            event.recipes.createDeploying(inter1, [inter1, 'projecte:low_covalence_dust']),
            event.recipes.createDeploying(inter1, [inter1, 'projecte:medium_covalence_dust']),
            event.recipes.createDeploying(inter1, [inter1, 'projecte:high_covalence_dust']),
            event.recipes.createDeploying(inter1, [inter1, 'string'])
    ]).transitionalItem(inter1).loops(1)
    event.recipes.create.sequenced_assembly([
        'projecte:transmutation_table'
        ],
        'stone_slab',
        [
            event.recipes.createFilling(inter2, [inter2, Fluid.of('tconstruct:molten_obsidian', 1000)]),
            event.recipes.createDeploying(inter2, [inter2, 'projecte:philosophers_stone']).keepHeldItem()
        ]).transitionalItem(inter2).loops(4)
    event.recipes.create.sequenced_assembly([
        'projecte:transmutation_tablet'
        ],
        'projecte:transmutation_table',
        [
            event.recipes.createDeploying(inter3, [inter3, 'projecte:dark_matter_block']),
            event.recipes.createPressing(inter3, inter3)
        ]).transitionalItem(inter3).loops(4)
    event.recipes.botania.petal_apothecary(
        'projecte:repair_talisman',
        [
            'projecte:low_covalence_dust',
            'projecte:medium_covalence_dust',
            'projecte:high_covalence_dust',
            'string',
            Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1).strongNBT()
        ],
        'paper'
    )
    event.recipes.thermal.bottler('projecte:harvest_goddess_band', [Fluid.of('cyclic:biomass', 200),'projecte:iron_band'])
    event.recipes.create.milling([Item.of('2x projecte:low_covalence_dust').withChance(.25), 'projecte:low_covalence_dust'], 'create:experience_nugget')
    event.recipes.create.crushing([Item.of('18x projecte:low_covalence_dust').withChance(.25), '9x projecte:low_covalence_dust'], 'create:experience_block')
    event.recipes.botania.petal_apothecary(
        '4x projecte:medium_covalence_dust',
        [
            'projecte:low_covalence_dust',
            'projecte:low_covalence_dust',
            'projecte:low_covalence_dust',
            'projecte:low_covalence_dust'
        ],
        'botania:mana_powder'
    )
    event.recipes.mekanismCombining('projecte:high_covalence_dust', 'projecte:medium_covalence_dust', 'create_enchantment_industry:hyper_experience_bottle')
    event.recipes.create.mixing('projecte:interdiction_torch', ['3x mekanism:enriched_diamond','3x glowstone_dust', 'redstone_torch'])
})