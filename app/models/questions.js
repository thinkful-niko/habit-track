'use strict';

const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
	text: String,
		// text: {type: String, required: true},

	answers: Array,
	answerType: String,
	//name of the question
	name: String
});

// var question = {
// 	text: "What is your name?",
// 	answers: ['Sean', 'Niko'],
// 	answerType: "radio",
// 	name: "Question 1"
// };

// create the model for questions and expose it to our app
module.exports = mongoose.model('Question', questionSchema);
