const activity = process.env.ACTIVITY;
const status_type = process.env.STATUS_TYPE;

module.exports = (client) => {
    client.on('ready', () => {
        console.log(`[Bot shard #${client.shard.id}] Discord client ready`);
        console.log(`[Bot shard #${client.shard.id}] Serving on ${client.guilds.size} servers, for ${client.users.size} users as ${client.user.tag}`);
        setInterval(()=>{
            client.user.setPresence({ game: { name: activity, type: status_type}});
        }, 15*1000)
    });
}