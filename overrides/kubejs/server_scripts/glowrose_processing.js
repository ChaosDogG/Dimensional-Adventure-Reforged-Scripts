
const gems = ['ruby', 'carnelian', 'topaz', 'citrine', 'heliodor', 'moldavite', 'peridot', 'turquoise', 'kyanite', 'sapphire', 'iolite', 'alexandrite']
const rare_gems = ['ammolite', 'rose_quartz', 'black_diamond', 'white_diamond']

ServerEvents.recipes(event => {
    for (const gem of gems) {
        event.recipes.thermal.insolator([`silentgems:${gem}_glowrose`, Item.of(`silentgems:${gem}`).withChance(0.1)], `silentgems:${gem}_glowrose`)
        let flower = (input) => {
            event.recipes.botania.petal_apothecary(
                `silentgems:${gem}`,
                [
                    input,
                    input,
                    input
                ],
                'botania:mana_diamond'
            )
        }
        flower(`silentgems:${gem}_glowrose`)
    }
    for (const gem of rare_gems) {
        event.recipes.thermal.insolator([`silentgems:${gem}_glowrose`, Item.of(`silentgems:${gem}`).withChance(0.01)], `silentgems:${gem}_glowrose`)
        let flower = (input) => {
            event.recipes.botania.petal_apothecary(
                `silentgems:${gem}`,
                [
                    input,
                    input,
                    input,
                    input,
                    input
                ],
                'botania:dragonstone'
            )
        }
        flower(`silentgems:${gem}_glowrose`)
    }
})
ServerEvents.tags('item', event => {
    for (const gem of gems) {
        event.add('dar:common_glowrose', `silentgems:${gem}_glowrose`)
    }
    for (const gem of rare_gems) {
        event.add('dar:rare_glowrose', `silentgems:${gem}_glowrose`)
    }
})