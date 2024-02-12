EntityEvents.spawned(event => {
    const entity = event.entity // just to make the next line shorter

    if (entity.type == 'player_mobs:player_mob' && entity.username.displayName == 'JimmyHere' && entity.headArmorItem == 'air'){
        entity.headArmorItem = 'farmersdelight:tomato'
    }
})

EntityEvents.spawned(event => {
    const entity = event.entity // just to make the next line shorter
    let leather = Ingredient.of(/minecraft:leather.*/)

    if (entity.type == 'player_mobs:player_mob' && entity.username.displayName == 'Queen_Aliza'){
        if (leather.test(entity.headArmorItem) || leather.test(entity.chestArmorItem) || leather.test(entity.legsArmorItem) || leather.test(entity.feetArmorItem)){
            event.entity.potionEffects.add('wither', 10000, 0, true, true)
        }
    }
})

/*EntityEvents.spawned(event => {
    const {entity,entity:{type,username:{displayName}}} = event
    if (type != 'player_mobs:player_mob') return
    if (displayName != 'MHF_Herobrine') return
    if (!entity.getSlot(0).get().hasTag('forge:swords')) return
    if (entity.getSlot(0).get().id == 'minecraft:air') return
    entity.setItemSlot(0, "mob_grinding_utils:null_sword")
})*/

EntityEvents.spawned(event => {
    const entity = event.entity // just to make the next line shorter

    if (entity.type == 'player_mobs:player_mob' && entity.getLevel().getDimension().getPath() == 'the_aether'){
        if (entity.username.displayName == 'Technoblade' || entity.username.displayName == 'Bob_Ross'){
            event.entity.potionEffects.add('glowing', 1000, 0, true, true)
        }
    }
})

EntityEvents.spawned(event => {
    const entity = event.entity // just to make the next line shorter
    let air = Ingredient.of('air')

    if (entity.type == 'player_mobs:player_mob' && entity.getLevel().getDimension().getPath() == 'the_bumblezone'){
        if (air.test(entity.headArmorItem) && air.test(entity.chestArmorItem) && air.test(entity.legsArmorItem) && air.test(entity.feetArmorItem)){
            entity.headArmorItem = 'thermal:beekeeper_helmet'
            entity.chestArmorItem = 'thermal:beekeeper_chestplate'
            entity.legsArmorItem = 'thermal:beekeeper_leggings'
            entity.feetArmorItem = 'thermal:beekeeper_boots'
        }
    }
})

EntityEvents.checkSpawn(event => {
    
})