module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "George Nakila",//remodified by GeoBlo
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
Yo, my prefix is [ 𓆩 @ 𓆪 ]\n
𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨:
➥ ✓ʜᴇʟᴘ [number of page] -> sᴇᴇ ᴄᴏᴍᴍᴀɴᴅs
➥ ✓ᴀɪ [message] -> ᴛᴀʟᴋ ᴛᴏ ʙᴏᴛ/ᴀɪ
➥ ✓ɪɴғᴏ [command] -> ɪɴғᴏʀᴍᴀᴛɪᴏɴ \n\nHave fun using it enjoy!❤️\nDeveloper: https://www.facebook.com/geotechph.net`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/M4luPbE.gif")
 });
 }
 }
}
