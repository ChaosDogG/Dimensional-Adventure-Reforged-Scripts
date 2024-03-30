ServerEvents.recipes(event => {

    let head_1 = (output, user) => {
        event.recipes.create.milling(output, Item.of('minecraft:player_head', `{SkullOwner:${user}}`).weakNBT())
    }
    let head_2 = (outputA, outputB, user) => {
        event.recipes.create.milling([outputA, outputB], Item.of('minecraft:player_head', `{SkullOwner:${user}}`).weakNBT())
    }
    let head_3 = (outputA, outputB, outputC, user) => {
        event.recipes.create.milling([outputA, outputB, outputC], Item.of('minecraft:player_head', `{SkullOwner:${user}}`).weakNBT())
    }
    let head_4 = (outputA, outputB, outputC, outputD, user) => {
        event.recipes.create.milling([outputA, outputB, outputC, outputD], Item.of('minecraft:player_head', `{SkullOwner:${user}}`).weakNBT())
    }

    //Drop Variables
    let codtraband = Item.of('minecraft:cooked_cod', '{Enchantments:[{}],AttributeModifiers:[{Amount:-32767,AttributeName:"generic.attack_damage",Name:"generic.attack_damage",Operation:0,UUID:[I;1669516158,-179748104,-1828154834,-1140618795]}],HideFlags:2,display:{Lore:[\'[{"translate":"enchantment.minecraft.sharpness","italic":false},{"text":" LXIX","italic":false}]\',\'{"text":"Increases the damage of the item.","color":"dark_gray","italic":false}\',\'{"text":"Banned by the TSA","color":"light_purple","italic":false}\',\'{"text":"Extra Unethical","color":"dark_green","italic":false}\',\'{"text":"Why does it smell like someone left the fridge open for 3 hours on a Wednesday?","color":"red","italic":true}\',\'{"text":"STOP ASKING QUESTIONS!","color":"dark_aqua","italic":true}\',\'{"text":"Now with extra mold!","color":"yellow","italic":false}\',\'{"text":"(Don\\\'t show Chaos this item)","color":"blue","italic":false}\'],Name:\'[{"text":"Demonitized\\\'s","color":"dark_blue","italic":false},{"text":" Cod","color":"dark_purple","bold":true,"italic":false},{"text":"traband","color":"light_purple","italic":false}]\'}}').withChance(0.01)
    let hammer = Item.of('silentgear:hammer', '{Damage:0,SGear_Data:{Construction:{Parts:[{ID:"silentgear:hammer_head",Item:{Count:1b,id:"silentgear:hammer_head",tag:{CraftedCount:1,Damage:0,Materials:[{ID:"silentgear:tyrian_steel",Item:{Count:1b,id:"silentgear:tyrian_steel_ingot"}},{ID:"silentcompat:arcmetal",Item:{Count:1b,id:"silentcompat:arcmetal_ingot"}},{Count:4b,ID:"silentgems:white_diamond",Item:{Count:1b,id:"silentgems:white_diamond"}}]}}},{ID:"silentgear:rod",Item:{Count:1b,id:"silentgear:rod",tag:{CraftedCount:4,Materials:[{ID:"silentgear:silver",Item:{Count:1b,id:"silentgems:silver_ingot"}},{ID:"silentgems:white_diamond",Item:{Count:1b,id:"silentgems:white_diamond"}}]}}},{ID:"silentgear:tip",Item:{Count:1b,id:"silentgear:tip",tag:{CraftedCount:1,Materials:[{ID:"silentcompat:soul_crystal",Item:{Count:1b,id:"deeperdarker:soul_crystal"}}]}}},{ID:"silentgear:grip",Item:{Count:1b,id:"silentgear:grip",tag:{CraftedCount:1,Materials:[{ID:"silentgear:wool/white",Item:{Count:1b,id:"minecraft:white_wool"}}]}}},{ID:"silentgear:binding",Item:{Count:1b,id:"silentgear:binding",tag:{CraftedCount:1,Materials:[{ID:"silentgear:string",Item:{Count:1b,id:"minecraft:string"}}]}}},{ID:"silentgear:coating",Item:{Count:1b,id:"silentgear:coating",tag:{CraftedCount:1,Materials:[{ID:"silentgear:netherite",Item:{Count:1b,id:"minecraft:netherite_ingot"}}]}}}]},Properties:{LockStats:0b,ModVersion:"3.2.6",Stats:{"silentgear:attack_reach":3.0f,"silentgear:attack_speed":-2.9763308f,"silentgear:charging_value":1.0334735f,"silentgear:durability":6176.103f,"silentgear:enchantment_value":12.545944f,"silentgear:harvest_level":5.0f,"silentgear:harvest_speed":14.925613f,"silentgear:magic_damage":8.313297f,"silentgear:melee_damage":16.05321f,"silentgear:rarity":114.842606f,"silentgear:repair_efficiency":1.575f},Traits:[{Level:2b,Name:"silentgear:sturdy"},{Level:1b,Name:"silentgear:accelerate"},{Level:1b,Name:"silentgear:malleable"},{Level:2b,Name:"silentgear:soft"},{Level:1b,Name:"silentgear:chipping"},{Level:1b,Name:"silentgear:cursed"},{Level:2b,Name:"silentcompat:bulwark"},{Level:2b,Name:"silentgear:flexible"},{Level:1b,Name:"silentgear:fireproof"}]},Rendering:{Model:15,ModelKey:"hammer:hammer_head{tyrian_steel,silentcompat:arcmetal,silentgems:white_diamond,silentgems:white_diamond,silentgems:white_diamond,silentgems:white_diamond},rod{silver,silentgems:white_diamond},tip{silentcompat:soul_crystal},grip{wool/white},binding{string},coating{netherite},"}},SGear_UUID:[I;1806241175,2064009117,-1700995666,1449002952]}').withChance(0.001)
    let katana = Item.of('silentgear:katana', '{Damage:0,SGear_Data:{Construction:{Parts:[{ID:"silentgear:katana_blade",Item:{Count:1b,id:"silentgear:katana_blade",tag:{CraftedCount:1,Damage:0,Materials:[{ID:"silentcompat:fluix",Item:{Count:1b,id:"ae2:fluix_crystal"}},{ID:"silentgear:refined_obsidian",Item:{Count:1b,id:"mekanism:ingot_refined_obsidian"}},{ID:"silentcompat:capsid_alloy",Item:{Count:1b,id:"silentcompat:capsid_alloy_ingot"}}]}}},{ID:"silentgear:rod",Item:{Count:1b,id:"silentgear:rod",tag:{CraftedCount:4,Materials:[{Count:2b,ID:"silentgems:black_diamond",Item:{Count:1b,id:"silentgems:black_diamond"}}]}}},{ID:"silentgear:tip",Item:{Count:1b,id:"silentgear:tip",tag:{CraftedCount:1,Materials:[{ID:"silentgear:tyrian_steel",Item:{Count:1b,id:"silentgear:tyrian_steel_ingot",tag:{}}}]}}}]},Properties:{LockStats:0b,ModVersion:"3.2.6",Stats:{"silentgear:attack_reach":3.0f,"silentgear:attack_speed":-2.5265408f,"silentgear:charging_value":1.0718491f,"silentgear:durability":1208.3147f,"silentgear:enchantment_value":12.254093f,"silentgear:harvest_level":5.0f,"silentgear:harvest_speed":6.5909796f,"silentgear:magic_damage":3.2869415f,"silentgear:melee_damage":6.25185f,"silentgear:rarity":67.26399f,"silentgear:repair_efficiency":1.0f},Traits:[{Level:1b,Name:"silentgear:malleable"},{Level:3b,Name:"silentgear:hard"},{Level:1b,Name:"silentgear:organic"}]},Rendering:{Model:7,ModelKey:"katana:katana_blade{silentcompat:fluix,refined_obsidian,silentcompat:capsid_alloy},rod{silentgems:black_diamond,silentgems:black_diamond},tip{tyrian_steel},"}},SGear_UUID:[I;-1131913735,454248743,-2040231046,444500764]}').withChance(0.001)
    let maid1 = Item.of('touhou_little_maid:maid_spawn_egg').withChance(0.25)
    let maid2 = Item.of('touhou_little_maid:fairy_spawn_egg').withChance(0.25)

    head_1('20x dirt', 'cjosie1')
    head_1('3x stick', 'MIGimmy')
    head_1('64x red_mushroom', 'marshmallowz0')
    head_1('8x bone_meal', '_Sans_')
    head_1('botania:rune_lust', 'KamiyaMidori')
    head_1('botania:rune_lust', 'ProjektButt')
    head_1('create:goggles', 'GeorgeNotFound')
    head_1('farmersdelight:hamburger', 'Scooby_')
    head_1('farmersdelight:hamburger', '_shaggy')
    head_1('gold_ingot', 'SkythekidRS')
    head_1('quark:trowel', 'rockit14')
    head_1(Item.of('a_man_with_plushies:plush_box').withChance(0.25), 'TheWolfAndTheBoy')
    head_1(Item.of('alexsmobs:spawn_egg_seagull').withChance(0.25), 'CringyGull')
    head_1(Item.of('artifacts:running_shoes').withChance(0.2), 'Sonic')
    head_1(Item.of('artifacts:feral_claws').withChance(0.2), 'ElectroniCritic')
    head_1(Item.of('axolotl_spawn_egg').withChance(0.25), 'JessTheAxolotl')
    head_1(Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), 'KashiiKiwii')
    head_1(Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), 'Ligeriscool')
    head_1(Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), 'MrJagsterS')
    head_1(Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), 'PM7John')
    head_1(Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), 'TheInfamousQuiff')
    head_1(Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), 'Wisp')
    head_1(Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), 'oxibee')
    head_1(Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'Legundo')
    head_1(Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'syszee')
    head_1(Item.of('kubejs:unprocessed_evil_core').withChance(0.01), 'MHF_Herobrine')
    head_1(Item.of('kubejs:unprocessed_meme_core').withChance(0.1), 'FatMemeGod')
    head_1(Item.of('kubejs:unprocessed_meme_core').withChance(0.1), 'FishyBoopkins')
    head_1(Item.of('kubejs:unprocessed_meme_core').withChance(0.1), 'kevdevz')
    head_1(Item.of('kubejs:unprocessed_meme_core').withChance(0.1), 'magicalhobo')
    head_1(Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'LadyAgnes')
    head_1(Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'PhoenixSC')
    head_1(Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'bhami')
    head_1(Item.of('minecraft:villager_spawn_egg', '{EntityTag:{Offers:{},VillagerData:{profession:"minecraft:librarian"}},display:{Name:\'{"text":"Dr. Trayaurus","italic":false}\'}}').withChance(0.25), 'DanTDM')
    head_1(Item.of('minecraft:zombie_spawn_egg', '{EntityTag:{ArmorItems:[{Count:1,id:"minecraft:golden_boots"},{Count:1,id:"minecraft:golden_leggings"},{Count:1,id:"minecraft:golden_chestplate"},{Count:1,id:"minecraft:golden_helmet"}],CanPickUpLoot:1,IsBaby:1},display:{Name:\'"Hardcore World Ender"\'}}').withChance(0.25), 'Ph1LzA')
    head_1(Item.of('monsters_and_girls:debug').withChance(0.25), 'b_ART_ek')
    head_1(Item.of('quark:crab_spawn_egg').withChance(0.25), 'TbhHonest')
    head_1(Item.of('tetra:modular_double', '{Damage:0,HideFlags:1,"double/basic_hammer_left_material":"basic_hammer/blackstone","double/basic_hammer_right_material":"basic_hammer/blackstone","double/basic_handle_material":"basic_handle/biomesoplenty_magic_wood","double/handle":"double/basic_handle","double/head_left":"double/basic_hammer_left","double/head_right":"double/basic_hammer_right"}').withChance(.2), 'lookomni')
    head_1(Item.of('thermal:diamond_dust').withChance(0.01), 'itsCraftee')

    head_2('3x milk_bucket', 'botania:rune_lust', 'Queen_Aliza')
    head_2('alexsmobs:fedora', Item.of('alexsmobs:spawn_egg_platypus').withChance(0.25), 'PerryThePlatypus')
    head_2('apple', Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), '_shadowapples')
    head_2('botania:rune_greed', Item.of('kubejs:unprocessed_evil_core').withChance(0.01), 'EvilXisuma')
    head_2('create:cogwheel', Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'MrBeardstone')
    head_2('create:cogwheel', Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'polartt')
    head_2('create:cogwheel', Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'RagePlaysGames')
    head_2('createcafe:coffee_beans', Item.of('farmersrespite:coffee_beans').withChance(0.25), 'WestTheBean')
    head_2('ender_pearl', Item.of('farmersdelight:netherite_knife').withChance(0.01), 'Brokemboy')
    head_2('quark:trowel', Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'GoodTimeWithScar')
    head_2('tnt', Item.of('ae2:tiny_tnt').withChance(0.25), 'Rocket')
    head_2(Item.of('3x bee_spawn_egg').withChance(0.25), 'oak_slab', 'Tubbo_')
    head_2(Item.of('explorerscompass:explorerscompass').withChance(0.25), Item.of('naturescompass:naturescompass').withChance(0.25), 'Jak')
    head_2(Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), Item.of('kubejs:unprocessed_compassionate_core').withChance(0.1), 'Luffy')
    head_2(Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'quark:trowel', 'BdoubleO100')
    head_2(Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'quark:trowel', 'Keralis1')
    head_2(Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'quark:trowel', 'Smallishbeans')
    head_2(Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'quark:trowel', 'SolidarityGaming')
    head_2(Item.of('kubejs:unprocessed_creative_core').withChance(0.1), Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'Tango')
    head_2(Item.of('kubejs:unprocessed_creative_core').withChance(0.1), Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'TangoCam')
    head_2(Item.of('kubejs:unprocessed_technical_core').withChance(0.1), Item.of('alexsmobs:spawn_egg_lobster').withChance(0.25),'MrCrayfish')
    head_2(Item.of('lightmanscurrency:coin_netherite').withChance(0.001), Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'Lightman314')
    head_2(codtraband, Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'DemonitizedBoi')
    head_2(Item.of('quark:dragon_scale').withChance(0.25), Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'Waterpicker')
    head_2(katana, 'botania:cosmetic_hyper_plus', '_nep__')
    head_2(Item.of('twilightforest:penguin_spawn_egg').withChance(0.25), 'feather', 'SB737')
    head_2(maid1, maid2, 'tamaOwO')
    head_2(maid1, maid2, 'therealSocksfor1')

    head_3('cookie', Item.of('botania:pixie_dust').withChance(0.001), Item.of('clock').withChance(0.25), 'Paimon')
    head_3('etched:music_label', 'etched:blank_music_disc', Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'C418')
    head_3('etched:music_label', 'etched:blank_music_disc', Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'Xisuma')
    head_3('etched:music_label', 'etched:blank_music_disc', Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'Xisumatwo')
    head_3('etched:music_label', 'etched:blank_music_disc', Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'deadmau5')
    head_3('etched:music_label', 'etched:blank_music_disc', Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'xisumavoid')
    head_3('farmersdelight:pasta_with_meatballs', 'botania:rune_sloth', 'botania:rune_gluttony', 'Garfield_')
    head_3(Item.of('ae2:logic_processor').withChance(0.25), Item.of('ae2:calculation_processor').withChance(0.25), Item.of('ae2:engineering_processor').withChance(0.25), 'Graser10')
    head_3(Item.of('ae2:logic_processor').withChance(0.25), Item.of('ae2:calculation_processor').withChance(0.25), Item.of('ae2:engineering_processor').withChance(0.25), 'ThatOneBlueGuyYT')
    head_3(Item.of('ae2:logic_processor').withChance(0.25), Item.of('ae2:calculation_processor').withChance(0.25), Item.of('ae2:engineering_processor').withChance(0.25), 'ThatOneRedGuyYT')
    head_3(Item.of('ae2:logic_processor').withChance(0.25), Item.of('ae2:calculation_processor').withChance(0.25), Item.of('ae2:engineering_processor').withChance(0.25), 'ZedCam')
    head_3(Item.of('ae2:logic_processor').withChance(0.25), Item.of('ae2:calculation_processor').withChance(0.25), Item.of('ae2:engineering_processor').withChance(0.25), 'mjd7999')
    head_3(Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), maid1, maid2, 'Lynixity')
    head_3(Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), maid1, maid2, 'Purplecliffe')
    head_3(Item.of('kubejs:unprocessed_technical_core').withChance(0.1), Item.of('quark:shiba_spawn_egg').withChance(0.25), Item.of('wolf_spawn_egg').withChance(0.25), 'ChaosDog')
    head_3(Item.of('kubejs:unprocessed_technical_core').withChance(0.1), maid1, maid2, 'doctor4t')
    head_3(Item.of('kubejs:unprocessed_technical_core').withChance(0.1), maid1, maid2, 'r4tmaid')
    head_3(Item.of('minecraft:sheep_spawn_egg', "{display:{Name:'\"jeb_\"'}}").withChance(0.25), Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'shield', 'jeb_')
    head_3(Item.of('name_tag', "{display:{Name:'{\"text\":\"Dinnerbone\"}'}}"), Item.of('ae2:name_press', '{InscribeName:"Dinnerbone"}').withChance(0.25), Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'Dinnerbone')
    head_3(Item.of('name_tag', "{display:{Name:'{\"text\":\"Grumm\"}'}}"), Item.of('ae2:name_press', '{InscribeName:"Grumm"}').withChance(0.25), Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'Grumm')
    head_3(hammer, 'book', 'writable_book', '_Blanc_')
    head_3(Item.of('thermal:fire_grenade').withChance(0.5), Item.of('thermal:fire_tnt').withChance(0.25), 'flint_and_steel', 'Natsu___')
    head_3(Item.of('thermal:fire_grenade').withChance(0.5), Item.of('thermal:fire_tnt').withChance(0.25), 'flint_and_steel', 'billyp673')
    head_3(Item.of('byg:byg_logo').withChance(0.001), Item.of('biomesoplenty:bop_icon').withChance(0.001), Item.of('kubejs:unprocessed_meme_core').withChance(0.1), 'PerfectBidoof')
    head_3(Item.of('byg:byg_logo').withChance(0.001), Item.of('biomesoplenty:bop_icon').withChance(0.001), Item.of('kubejs:unprocessed_meme_core').withChance(0.1), 'Waluigi')

    head_4('etched:music_label', 'etched:blank_music_disc', Item.of('kubejs:unprocessed_creative_core').withChance(0.1), maid1, 'CaptainSparklez')
    head_4('farmersdelight:tomato', maid1, maid2, Item.of('frog_spawn_egg').withChance(0.25), 'JimmyHere')
    head_4('feather', Item.of('alexsmobs:spawn_egg_crow').withChance(0.25), Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), maid1, 'SpicySaint')
    head_4('feather', Item.of('kubejs:unprocessed_creative_core').withChance(0.1), maid1, maid2, 'DoniBobes')
    head_4('honey_bottle', 'botania:rune_lust', Item.of('alexsmobs:spawn_egg_grizzly_bear').withChance(0.25), Item.of('a_man_with_plushies:plush_box').withChance(0.25), 'ATG21')
    head_4('painting', 'spruce_sapling', Item.of('kubejs:unprocessed_creative_core').withChance(0.1), Item.of('kubejs:unprocessed_angelic_core').withChance(0.01), 'Bob_Ross')
    head_4('pumpkin_pie', Item.of('minecraft:potion', "{CustomPotionColor:16777215,CustomPotionEffects:[{Amplifier:1b,Duration:300,Id:9},{Amplifier:3b,Duration:300,Id:17},{Amplifier:2b,Duration:1200,Id:19}],HideFlags:32,display:{Name:'[{\"translate\":\"item.farmersdelight.milk_bottle\",\"italic\":false},{\"text\":\"?\",\"italic\":false}]'},\"quark:RuneAttached\":1b,\"quark:RuneColor\":{Count:1b,id:\"quark:blank_rune\"}}").enchant('unbreaking', 1).withChance(0.5), Item.of('minecraft:potion', "{CustomPotionColor:16777215,CustomPotionEffects:[{Amplifier:2b,Duration:6000,Id:5},{Amplifier:2b,Duration:1900,Id:10},{Amplifier:3b,Duration:6000,Id:11},{Amplifier:4b,Duration:2400,Id:22}],HideFlags:32,display:{Name:'[{\"translate\":\"item.farmersdelight.milk_bottle\",\"italic\":false},{\"text\":\"?\",\"italic\":false}]'},\"quark:RuneAttached\":1b,\"quark:RuneColor\":{Count:1b,id:\"quark:blank_rune\"}}").enchant('unbreaking', 1).withChance(0.5), Item.of('golden_hoe').withChance(0.25),'Penguiniie')
    head_4('redstone', Item.of('oak_boat').withChance(0.25), Item.of('diamond_hoe').withChance(0.25), Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'Mumbo')
    head_4('redstone', Item.of('oak_boat').withChance(0.25), Item.of('diamond_hoe').withChance(0.25), Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'MumboJumbo')
    head_4('slime_ball', Item.of('create:chromatic_compound').withChance(0.25), maid1, maid2, 'Boosfer')
    head_4('string', Item.of('command_block').withChance(0.25), Item.of('chain_command_block').withChance(0.25), Item.of('repeating_command_block').withChance(0.25), 'mysticat_')
    head_4('supplementaries:pancake', 'farmersdelight:cooked_bacon', maid1, Item.of('kubejs:unprocessed_compassionate_core').withChance(0.1), 'MurderMittens5TV')
    head_4('sweet_berries', Item.of('fox_spawn_egg').withChance(0.25), 'create:cogwheel', Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'foxynotail')
    head_4('sweet_berries', Item.of('fox_spawn_egg').withChance(0.25), Item.of('kubejs:unprocessed_technical_core').withChance(0.1), maid1, 'Fundy')
    head_4('sweet_berries', Item.of('fox_spawn_egg').withChance(0.25), Item.of('kubejs:unprocessed_technical_core').withChance(0.1), maid1, 'ItsFundy')
    head_4('tnt', 'quark:trowel', Item.of('ae2:tiny_tnt').withChance(0.25), Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'Grian')
    head_4('tnt', 'quark:trowel', Item.of('ae2:tiny_tnt').withChance(0.25), Item.of('kubejs:unprocessed_creative_core').withChance(0.1), 'TwoMuchGrian')
    head_4('yellow_wool', Item.of('create:chromatic_compound').withChance(0.25), Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), maid1, 'YelloWool')
    head_4(Item.of('ae2:logic_processor').withChance(0.25), Item.of('ae2:calculation_processor').withChance(0.25), Item.of('ae2:engineering_processor').withChance(0.25), 'chipped:carpenters_table', 'TubeAndKnuckle')
    head_4(Item.of('ae2:logic_processor').withChance(0.25), Item.of('ae2:calculation_processor').withChance(0.25), Item.of('ae2:engineering_processor').withChance(0.25), Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'NetherNoah777')
    head_4(Item.of('ae2:logic_processor').withChance(0.25), Item.of('ae2:calculation_processor').withChance(0.25), Item.of('ae2:engineering_processor').withChance(0.25), Item.of('mekanism:dust_osmium').withChance(0.4), '_Bender')
    head_4(Item.of('ae2:logic_processor').withChance(0.25), Item.of('ae2:calculation_processor').withChance(0.25), Item.of('ae2:engineering_processor').withChance(0.25), maid1, 'bionicLMAO')
    head_4(Item.of('create:chromatic_compound').withChance(0.25), 'etched:music_label', 'etched:blank_music_disc', Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), 'bubbo2000')
    head_4(Item.of('create:chromatic_compound').withChance(0.25), Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), maid1, maid2, 'Baablu')
    head_4(Item.of('create:chromatic_compound').withChance(0.25), Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), maid1, maid2, 'Its_Dev_')
    head_4(Item.of('create:chromatic_compound').withChance(0.25), Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), maid1, maid2, 'Kierrrr')
    head_4(Item.of('create:chromatic_compound').withChance(0.25), Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), maid1, maid2, 'Qndres')
    head_4(Item.of('explorerscompass:explorerscompass').withChance(0.25), Item.of('naturescompass:naturescompass').withChance(0.25), Item.of('blaze_rod').withChance(0.69), Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), 'Dream' )
    head_4(Item.of('kubejs:unprocessed_creative_core').withChance(0.1), maid1, maid2, Item.of('polar_bear_spawn_egg').withChance(0.25), 'Knarfy')
    head_4(Item.of('pig_spawn_egg').withChance(0.25), 'redstone', Item.of('kubejs:unprocessed_technical_core').withChance(0.1), 'create:wand_of_symmetry', 'ChosenArchitect')
    head_4(Item.of('quark:dragon_scale').withChance(0.25), Item.of('kubejs:unprocessed_creative_core').withChance(0.1), Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), Item.of('obsidian').withChance(0.05), 'DragonSoda_')
    head_4(Item.of('totem_of_undying').withChance(0.001), 'potato', Item.of('kubejs:unprocessed_competitive_core').withChance(0.1), Item.of('kubejs:unprocessed_angelic_core').withChance(0.01), 'Technoblade')
    head_4(Item.of('trashcans:item_trash_can').withChance(0.25), Item.of('trashcans:liquid_trash_can').withChance(0.25), Item.of('trashcans:energy_trash_can').withChance(0.25), Item.of('trashcans:ultimate_trash_can').withChance(0.01), 'OscarGrouch')
    head_4(Item.of('water_bucket').withChance(0.5), '5x ender_pearl', maid1, '5x ghast_tear', 'Ranboo')
    head_4(maid1, 'tnt', 'redstone', 'rotten_flesh', 'LoveTechy')
    head_4(maid1, Item.of('command_block').withChance(0.25), Item.of('chain_command_block').withChance(0.25), Item.of('repeating_command_block').withChance(0.25), 'Henzoid')
    head_4(maid1, maid2, Item.of('minecraft:fox_spawn_egg', '{EntityTag:{HandItems:[{Count:1b,id:"minecraft:fox_spawn_egg",tag:{EntityTag:{HandItems:[{Count:1b,id:"minecraft:iron_sword",tag:{Enchantments:[{id:"minecraft:fire_aspect",lvl:7s}],display:{Name:\'{"text":"Blade of Loaf","color":"gold"}\'}}},{}],Type:"red"},display:{Name:\'{"text":"Loaf","color":"gold"}\'}}},{}],Type:"snow"},display:{Name:\'{"text":"Miho","color":"dark_purple"}\'}}').withChance(0.25), Item.of('minecraft:potion', "{CustomPotionColor:8874048,CustomPotionEffects:[{Amplifier:4b,Duration:6000,Id:22},{Amplifier:3b,Duration:200,Id:23}],RepairCost:1,display:{Lore:['{\"text\":\"A special recipe made using magical knowledge and coco powder. \\\\nIt has a rich dark chocolate flavor\"}'],Name:'{\"text\":\"Destiny\\'s Choccy Milk\",\"color\":\"dark_purple\"}'},\"quark:RuneAttached\":1b,\"quark:RuneColor\":{Count:1b,id:\"quark:blank_rune\"}}").enchant('minecraft:vanishing_curse', 1).withChance(0.1), 'DestinyPurple')
})