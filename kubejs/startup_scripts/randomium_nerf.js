const $BasicItemBuilder = Java.loadClass('dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder')

let items = Ingredient.all.subtract('#randomium:blacklist')

ItemEvents.modification(event => {
    event.modify('randomium:any_item', item => {
        item.setItemBuilder(new $BasicItemBuilder('randomium:any_item').use((level, player, hand) => {
            let randomItem = items.itemIds[Math.floor(Math.random() * items.itemIds.length)]
            if (!player.isCreative()) player.getHeldItem(hand).shrink(1)
            player.give(randomItem)
            return true
        }))
    })
})