
StartupEvents.registry('item', event => {

    global.core = []

    let uc = (type, outer_color, inner_color) => {
        let id = (`Unprocessed ${type} Core`).toLowerCase().replace("'", "").split(' ').join('_')
        global.core.push(id)
        event.create(id)
            .color(1, outer_color)
            .color(2, inner_color)
            .parentModel("kubejs:item/unprocessed_core")
            .texture("kubejs:item/unprocessed_core_0")
            .displayName(`Unprocessed ${type} Core`)
    }
    let rc = (type, outer_color, inner_color) => {
        let id = (`Refined ${type} Core`).toLowerCase().replace("'", "").split(' ').join('_')
        global.core.push(id)
        event.create(id)
            .color(1, outer_color)
            .color(2, inner_color)
            .parentModel("kubejs:item/refined_core")
            .texture("kubejs:item/refined_core_0")
            .displayName(`Refined ${type} Core`)
    }
    uc("Angelic", 0xe3e3e3, 0xf5eb38)
    rc("Angelic", 0xe3e3e3, 0xf5eb38)
    uc("Compassionate", 0xb30ca5, 0xf547f2)
    rc("Compassionate", 0xb30ca5, 0xf547f2)
    uc("Competitive", 0xb3570c, 0xf27d1d)
    rc("Competitive", 0xb3570c, 0xf27d1d)
    uc("Creative", 0x610e82, 0xb61df2)
    rc("Creative", 0x610e82, 0xb61df2)
    uc("Evil", 0x080808, 0x990000)
    rc("Evil", 0x080808, 0x990000)
    uc("Meme", 0x2232e0, 0xdcdef5)
    rc("Meme", 0x2232e0, 0xdcdef5)
    uc("Technical", 0x454545, 0x0fb500)
    rc("Technical", 0x454545, 0x0fb500)
})