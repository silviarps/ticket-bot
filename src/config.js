import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: "s!",
  TOKEN: "MTE2MDMwNDEwMzk3MzQ2NjI0Mg.GPXp1p.naX9ti4BKnUrBcousxa4vMOZA1Yhs8JrtzarUc",
  ACTIVITY: { NAME: "", TYPE: "PLAYING" },
  GUILD_ID: "",
  TICKET: {
    CHANNEL: "1159948984132046961",
    CATEGORY: "1160306280850804817",
    ARCHIVE_CATEGORY: "1160306280850804817",
    MESSAGE: "Click to create ticket!",
    STAFF_ROLES: [1159948634125766656],
    BUTTONS: [
      {
        STYLE: ButtonStyle.Success,
        LABEL: "Confirm Ticket",
        EMOTE: "✅",
        ID: "successTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Secondary,
        LABEL: "Archive Ticket",
        EMOTE: "🎫",
        ID: "archiveTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Danger,
        LABEL: "Delete Ticket",
        EMOTE: "🎟️",
        ID: "deleteTicket",
        DISABLED: false,
      },
    ],
    QUESTIONS: [
      {
        ID: "name",
        LABEL: "What is your name?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "You can write your name.",
        REQUIRED: true,
      },
      {
        ID: "age",
        LABEL: "How old are you?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "You can write your age.",
        REQUIRED: true,
      },
    ],
  },
};
