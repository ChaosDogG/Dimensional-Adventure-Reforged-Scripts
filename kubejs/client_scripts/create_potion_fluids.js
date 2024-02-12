// priority: 0

const $PotionFluid = Java.loadClass('com.simibubi.create.content.fluids.potion.PotionFluid')

JEIEvents.addFluids(event => {
    const FLUID_STACK = global.jeiRuntime.jeiHelpers.platformFluidHelper.fluidIngredientType
    let potionFluids = []
    Utils.registries.potions().forEach(potion => {
        let fluid = $PotionFluid.of(1000, potion)
        if (!fluid.hasTag() || fluid.tag.Potion === 'minecraft:water') return;
        potionFluids.push(fluid)
    })
    global.jeiRuntime.ingredientManager.addIngredientsAtRuntime(FLUID_STACK, potionFluids)
})

