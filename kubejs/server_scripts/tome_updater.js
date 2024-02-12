//All credit for this code goes to @kostromdan on Discord! 

let ec_tome_id = 'eccentrictome:tome'
let ec_tome_data = '{"eccentrictome:mods":{ae2:{0:{Count:1b,id:"ae2:guide"}},aether:{0:{Count:1b,id:"aether:book_of_lore"}},alexsmobs:{0:{Count:1b,id:"alexsmobs:animal_dictionary"}},apotheosis:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}}},botania:{0:{Count:1b,id:"botania:lexicon"}},byg:{0:{Count:1b,id:"byg:biomepedia"}},cyclic:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"cyclic:cyclic_guide_book"}}},deeperdarker:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"deeperdarker:wanderers_notebook"}}},dimdungeons:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"dimdungeons:guide_book"}}},industrialforegoing:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}}},minecraft:{0:{Count:1b,id:"minecraft:written_book",tag:{author:"ChaosDog",pages:[\'{"text":"You just lost\\\\nTHE GAME"}\'],resolved:1b,title:"README.md"}}},patchouli:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"patchouli:monsters_and_girls"}}},powah:{0:{Count:1b,id:"powah:book"}},shadowlands:{0:{Count:1b,id:"shadowlands:instruction_booklet"}},silentgear:{0:{Count:1b,id:"silentgear:guide_book"}},thermal:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}}},touhou_little_maid:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"touhou_little_maid:memorizable_gensokyo"}}}},"eccentrictome:version":1}';
let ec_tome = Item.of(ec_tome_id, ec_tome_data)

PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('starting_items_4_1')) {
        give_book_after_connect(event, 0)
    }
})

ServerEvents.recipes(event => {
    event.replaceOutput({}, ec_tome_id, ec_tome)
})

ItemEvents.rightClicked(event => {
    if (event.item == ec_tome_id) {
        let fl = false
        let cur_nbt = String(event.item.nbt)
        let new_nbt = ec_tome.nbt["eccentrictome:mods"]
        for (const newNbtKey in new_nbt) {
            if (!cur_nbt.includes(newNbtKey)) {
                fl = true
            }
        }
        if (fl) {
            event.item.setNbt(ec_tome_data)
            event.player.tell("Replaced your Eccentric Tome with Tome that has up to date info from the latest update!")
            event.player.sendData('resetScreen', {})
            event.server.scheduleInTicks(1, e => {
                event.player.sendData('open_tome', {'hand': event.hand.toString()})
            })
        }
    }
})

function give_book_after_connect(event, r) {
    if (r > 3) {
        if (!is_player_online(event.player, event.server)) {
            console.log("Can't give book to " + event.player.username + " because they logged out before the book was given!")
            return 0
        }
    }
    if (r > 30) {
        console.log("Can't give book to " + event.player.username + " after 30 attempts! Stopped trying.")
        return 0
    }
    if (event.player.inventory.count(ec_tome) === 0) {
        console.log("Trying to give book to " + event.player.username)
        event.server.runCommandSilent(`give ${event.player.username} ${ec_tome_id}${ec_tome_data}`)
        event.server.scheduleInTicks(20 * (r + 1), e => {
            give_book_after_connect(event, r + 1)
        })
    } else {
        console.log("Given book to " + event.player.username)
        event.player.stages.add('starting_items_4_1')
    }
}