module.exports.config = {
  name: "oii",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "...",
  description: "5 बारको लागि साथीलाई निरन्तर ट्याग गर्नुहोस्\nत्यो व्यक्तिलाई आत्मा कल गर्न सकिन्छ बारको लागि साथीलाई निरन्तर ट्याग गर्नुहोस्\nत्यो व्यक्तिलाई आत्मा कल गर्न सकिन्छ",
  commandCategory: "game",
  usages: " please @mention",
  cooldowns: 10,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
  var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("BOSS RKO BRO कसलाई मन पर्यो", event.threadID);
let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention, tag: name});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("𝐋𝐞𝐭'𝐬 𝐠𝐨 𝐈𝐭'𝐬😘");
setTimeout(() => {a({body: "माया माया माया मात्रै थाहा हुन्छ" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "तिमि संग एकचोटी बोलेन भने मलाई मर्न देउ" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "म खान सक्दिन, सुत्न सक्दिन, तिमी बिना केहि गर्न सक्दिन, जान" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "तिमि बिना तिमिले मलाई के गर्यौ मैले बुझिन किन यो मन सधै तिमिलाइ नै खोज्छ" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "तिम्रा विचारहरूले मेरो दिमागलाई कहिल्यै छोड्ने छैन किनभने तपाईं मेरो विचारहरूको विचारमा हुनुहुन्छ" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "स्वर्ग मलाई चाहिदैन किनकि मैले तिमीलाई पाएको छु, सपनाहरू म हेर्न चाहन्न किनकि तिमी मेरो सपना हौ" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "जब देखि तिमी मेरो नजरमा परी बनेर बस्यौ, तब देखि मलाई तिमी बाहेक केहि मन पर्दैन" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "थाहा छैन तिमी किन यति सुन्दर छौ कि म तिमीलाई देख्न सक्दिन" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "तिमीलाई देख्दा मलाई किन यति राम्रो लाग्छ बुझिन" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "यदि तिमी मेरो होइनौ भने म मेरो यो जीवनलाई राख्ने छैन किनकि म तिमीलाई धेरै माया गर्छु" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "टमाटर रातो हरियो खुर्सानी झल तिम्रो galaमा सदा kiss 👄 गर्नेछु मलाई थाहा छ" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "जान पोम पोम पोम खाओ तिम्रो लागि म पोम पोमको बगैचा रोप्छु तिमी मात्र जान खाउ" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: "तिमि खुसी छैनौ भनी सोच्छौ भने तिमी मेरो छातीमा फर्केर आऊ, म तिमीलाई पहिले जस्तै माया गर्छु !!" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("i LoVe u babe 😘 तिमि बिना म बाँच्न सक्दिन, तिमी मात्र मेरो साथी हौ")} , 39000);




}
