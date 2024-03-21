EntityEvents.spawned(event => {
    const $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes');
    const armorTypes = [
        { ingredient: Ingredient.of(/minecraft:chainmail.*/), effects: [{ type: 'jump_boost', duration: 10000, amplifier: 0 }] },
        { ingredient: Ingredient.of(/minecraft:diamond.*/), effects: [{ type: 'strength', duration: 10000, amplifier: 3 }] },
        { ingredient: Ingredient.of(/minecraft:golden.*/), effects: [{ type: 'fire_resistance', duration: 10000, amplifier: 0 }] },
        { ingredient: Ingredient.of(/minecraft:iron.*/), effects: [{ type: 'strength', duration: 10000, amplifier: 1 }] },
        { ingredient: Ingredient.of(/minecraft:leather.*/), effects: [{ type: 'speed', duration: 10000, amplifier: 0 }] },
        { ingredient: Ingredient.of(/minecraft:netherite.*/), effects: [{ type: 'resistance', duration: 10000, amplifier: 3 }] }
    ];
    const entity = event.entity;
    const isErza = entity.username.displayName === '_Erza_';
    const isJimmyHere = entity.username.displayName === 'JimmyHere';
    const isPlayerMob = entity.type === 'player_mobs:player_mob';
    let air = Ingredient.of('air');

    if (isPlayerMob) {
        if (isJimmyHere && entity.headArmorItem === 'air') {
            entity.headArmorItem = 'farmersdelight:tomato';
        }
        if (isErza) {
            for (const armorType of armorTypes) {
                if (armorType.ingredient.test(entity.headArmorItem) || armorType.ingredient.test(entity.chestArmorItem) || armorType.ingredient.test(entity.legsArmorItem) || armorType.ingredient.test(entity.feetArmorItem)) {
                    for (const effect of armorType.effects) {
                        entity.potionEffects.add(effect.type, effect.duration, effect.amplifier, true, true);
                    }
                }
            }
        }
    }
    if (entity.type == 'player_mobs:player_mob' && entity.getLevel().getDimension().getPath() == 'the_aether') {
        if (entity.username.displayName != 'Technoblade' || entity.username.displayName != 'Bob_Ross') {
            event.cancel()
        }
    }
    if (entity.type == 'player_mobs:player_mob' && entity.getLevel().getDimension().getPath() == 'the_bumblezone') {
        if (air.test(entity.headArmorItem) && air.test(entity.chestArmorItem) && air.test(entity.legsArmorItem) && air.test(entity.feetArmorItem)) {
            entity.headArmorItem = 'thermal:beekeeper_helmet'
            entity.chestArmorItem = 'thermal:beekeeper_chestplate'
            entity.legsArmorItem = 'thermal:beekeeper_leggings'
            entity.feetArmorItem = 'thermal:beekeeper_boots'
        }
    }
    if (entity.type == 'player_mobs:player_mob'){
        const HP = entity.health;
        const maxHP = entity.maxHealth;
        if (HP != maxHP) {
            if (maxHP > 20){
                entity.health = maxHP
            }
            if (maxHP > 50){
                entity.getAttribute($Attributes.MAX_HEALTH).removeModifiers()
                entity.maxHealth = 50
                entity.health = 50
            }
        }
    }
});

EntityEvents.hurt(event => {
    const entity = event.entity;
    const isPlayerMob = entity.type === 'player_mobs:player_mob';
    const isDummy = entity.type === 'dummmmmmy:target_dummy';
    const username = entity.username.displayName;

    if (isDummy) {
        console.log(event.getSource().type);
    }

    if (isPlayerMob) {
        switch (username) {
            case 'Luffy':
                if (event.getSource().type == 'lightningBolt') {
                    entity.setRemainingFireTicks(0);
                    event.cancel();
                }
                if (event.getSource().type == 'fall') {
                    event.cancel();
                }
                break;
            case 'Natsu___':
            case 'billyp673':
            case 'lookomni':
                if (event.getSource().type == 'onFire') {
                    entity.setRemainingFireTicks(0);
                    event.cancel();
                }
                if (event.getSource().type == 'inFire') {
                    entity.setRemainingFireTicks(0);
                    event.cancel();
                }
                if (event.getSource().type == 'lava') {
                    entity.setRemainingFireTicks(0);
                    event.cancel();
                }
                break;
            case 'HuskyMudkipz':
                if (event.getSource().type == 'lightningBolt') {
                    event.cancel();
                }
                break;
            case 'foxynotail':
            case 'Fundy':
            case 'ItsFundy':
                if (event.getSource().type == 'sweetBerryBush') {
                    event.cancel();
                }
                break;
            case 'SB737':
            case 'TheWolfAndTheBoy':
                if (event.getSource().type == 'freeze') {
                    event.cancel();
                }
                break;
            case 'MrCrayfish':
            case 'FishyBoopkins':
                if (event.getSource().type == 'drown') {
                    event.cancel();
                }
                break;
            case 'mysticat_':
            case 'Paimon':
            case 'ElectroniCritic': 
                if (event.getSource().type == 'fall') {
                    event.cancel();
                }
                break;
            case '_Bender':
                if (event.getSource().type == 'drown') {
                    event.cancel();
                }
                console.log(entity.getPotionEffects().getActive());
                break;
            case 'cjosie1':
                console.log(event.getSource().type);
                break;
            default:
                break;
        }
    }
});