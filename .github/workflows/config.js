//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94701839429@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://github.com/pabasaralakmal75/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://files.catbox.moe/yvr808.jpg";
global.devs = "94701839429";
global.sudo = process.env.SUDO || "94701839429";
global.owner = process.env.OWNER_NUMBER || "94701839429";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVab0wzbFZNTE9kKzZJMkhXS1EvS3BOWU5qSzhYSUtjTFVvZkxsUGlrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUNqbk9xRXlBSTFPTFBpdWxVREFpMHd5V1o4dEJQYlF4U25SMDYxREJSRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSmdtbTVXSkQ2YWtPYzRtUzJuVVBJTUh1em1rODdDNGxkc3lSRitjNW1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRZFV3MUlvSGVvbUpUM2dSZkF3ZVdud0dDM2w3ZjN5cklQdVJHYlFYbVR3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitJOXZwblZPZ0ZFZUNMSUZIaWFCYW84RDF4a2M3N3ZCSHYrYUlmaEFFVTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM4dktWU1NjOWc3SDgvTjhOb25yRGJJSnZFTmtLVE0wQWdwOEg1ZGtMeEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUlnQ0IzajNlYnZwcUlwOUFMYnljYjFyZUdPU3lOWmlOL0NXVURkRUgxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmM2QXhmZUJLTXd3c2p6bW1YOW1hUWpvM0J1RkNsd3dianNXOWdhTDhtQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijk1S1E4eTFvM1VWQmEyaE9qOCs4dFBZQldoQ1FsZnJoLzhMeTVXQUJOZGxNZGYwSzZNWVdyc1ZHcUdDRXYxdXdJSUo2aTlYdDZKSnNLWDBMQ1ZsS0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6IlBuUU91QVVEc2YvQzkxdWJ3RzdQS1JNV1VLZmNZN3p1TXNESDk3Y3hqdXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDE4Mzk0MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjQxRDRBREExNjcyMkI0MkM5REY1OENENTVFNzAxREMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODEyODgzMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDE4Mzk0MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzJCODYyOUJFODdCODc3NzUwOEM3RkJBMzlFRTc4MTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODEyODgzM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibXpGeDd4V3NUeEtjaU8yTWQ4VjA2QSIsInBob25lSWQiOiJmNDFhYjM0My0wZTM3LTQ1YTktYTgyOC0zOTVhN2Y0YzRiMzciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEhNa0hpdGZvR0pHWEpCZk9kMElOTlB3R3A4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRhQi9sdE5FVi9BNXVweHJQVGNYMTlCQlNRZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJLWkJEUDdLSiIsIm1lIjp7ImlkIjoiOTQ3MDE4Mzk0Mjk6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ3aGF0c2FwcF9ib3QifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ056OG5PUUVFTEhPaExnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhHRzg5ckF4NjVFZlBRREtFS0kwUG5WMmd2cHIzcDVwYlZjQlR0WGhNSEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJZMnBFRTdoczdzS0ROQ3J1VE95aGRmZ0hnbWZqSFF0NnQrRFlETlIyY1dzbWNDVU9pdGVhUnhoVDNFeTZ4RllFdEUvZzErMG1JR0cxUXJZbjBmVUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjSzY5SXBLSFA1RVQxazZudUhDanNZWks4MVZpRGNzUlRQT0EwZTRXSHc0Uk56SEZVcm5ZS1loNEhwenVpOE9Ia3ViZDNQaFJaU2xQL3JlT2NxNHNCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAxODM5NDI5OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1JodlBhd01ldVJIejBBeWhDaU5ENTFkb0w2YTk2ZWFXMVhBVTdWNFRCdyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODEyODgzMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIMFYifQ==";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-QUEEN-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "QUEEN",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "QUEEN-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "PABASARA",
  errorChat: process.env.ERROR_CHAT || "94701839429",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
  
