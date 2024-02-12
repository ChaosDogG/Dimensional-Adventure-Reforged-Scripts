//All credit for this code goes to @kostromdan on Discord! 

NetworkEvents.fromServer('open_tome', event => {
    Client.player.getItemInHand(event.data['hand']).use(Client.player.level, Client.player, event.data['hand'])
})