const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription(`Replies with Pong`),

        async execute(interaction) {
			return interaction.reply({
				embeds: [
					new EmbedBuilder()
                    .setTitle(`Pong 🏓`)
					.setColor('grey')
				],
			}) 
		},
	};
	