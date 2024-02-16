ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent', event => {
    global.entitytick(event)
})
/**
 * 
 * @param {Internal.LivingEvent$LivingTickEvent} event 
 */
global.entitytick = event => {
    const { entity } = event
    if (entity.type != 'player_mobs:player_mob') return
    if (entity.username.displayName == 'billyp673'){
        //if (entity.age % 20 != 0) return
        if (entity.inWaterOrRain) {
            entity.attack('drown', 1)
        }
    }
    if (entity.username.displayName == 'Queen_Aliza'){
        let leather = Ingredient.of(/minecraft:leather.*/)
        if (leather.test(entity.headArmorItem) || leather.test(entity.chestArmorItem) || leather.test(entity.legsArmorItem) || leather.test(entity.feetArmorItem)){
            entity.attack('generic', 1)
        }
    }
}