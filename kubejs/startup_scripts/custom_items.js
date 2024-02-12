const core_type = [
    "angelic",
    "compassionate",
    "competitive",
    "creative",
    "evil",
    "meme",
    "technical"
];

StartupEvents.registry('item', event => {

    for(const core of core_type) {
        event.create(`unprocessed_${core}_core`)
        event.create(`refined_${core}_core`)
    }
})