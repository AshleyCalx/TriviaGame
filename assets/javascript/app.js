$('#start').on('click', function() {
	game.start();
})

var questions = [{
	question:"Which celebrity popularized the hairstyle known as The Rachel?",
	answers:["Anne Hathaway", "Ellen DeGeneres", "Oprah Winfrey", "Jennifer Aniston"],
	correctAnswer:"Jennifer Aniston"
}, {
	question:"Which film released in 1997 was, at the time, the most expensive film ever made?",
	answers:["Alien Resurrection", "Titanic", "Amistad", "Air Force One"],
	correctAnswer:"Titanic"
}, {
	question:"What style of shirt did the Grunge movement make popular during the 1990s?",
	answers:["Rugby","Polo","Flannel","Tuxedo"],
	correctAnswer:"Flannel"
}, {
	question:"Which hit TV show from the 1990s was produced by David Hasselhoff?",
	answers:["Friends","Full House","Baywatch","Seinfeld"],
	correctAnswer:"Baywatch"
}, {
	question:"Which artist had the most number one hit songs during the nineties?",
	answers:["Janet Jackson","Mariah Carey","Whitney Houston","Madonna"],
	correctAnswer:"Mariah Carey"
}, {
	question:"Starring Kevin Costner and Whitney Houston, what 1992 movie was Houston's acting debut?",
	answers:["The Preacher's Wife","Sparkle","Waiting to Exhale","The Bodyguard"],
	correctAnswer:"The Bodyguard"
}, {
	question:"One of the most popular sitcoms of all time, in which year did Friends premier on NBC?",
	answers:['1994','1990','1997','1999'],
	correctAnswer:"1994"
}, {
	question:"Starbucks, grunge music,Singles (1992) - which American city gave birth to these three 1990s phenomena?",
	answers:["San Francisco", "New York City","Seattle","Detroit"],
	correctAnswer:"Seattle"
}, {
	question:"There were two U.S. presidents during the nineties. Which U.S. President was in office from the years of 1993-2001?",
	answers:["George Bush Sr.", "George Bush Jr.", "Bill Clinton", "Jimmy Cater"],
	correctAnswer:"Bill Clinton" 
}, {
	question:"What was the phrase made popular in the 1990s that contemptuously implied no interest in what the speaker was saying?",
	answers:["as if", "whateverrr", "talk to the hand", "the bomb"],
	correctAnswer:"talk to the hand" 
}];


var game = {
	correct: 0,
	incorrect: 0,
	counter: 100,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0){
			console.log("Time is up!");
			game.done();
		
		}
	},
}
	start: funnction(){
		timer = setInterval(game.countdown, 1000);
		$('#subwrapper').prepend('<h2> Time Remaining: <span id="counter">120</span> Seconds</h2>');
		$('#start').remove();
		for(var i=0; i<questions.length;i++){
			$('#subwrapper').append('<h2>' +questions[i].question+'</h2>');
			for(var j=0; j<questions[i].answers.length;j++){
				$('#subwrapper').append("<input type='radio' name='question- "+i+"' value='" +questions[i].answers[j]+ "'>" + questions[i].answers[j])
			}
		}
	},
	done: function(){
		$.each($('input[name="question-0]":checked'), function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});
	done: function(){
		$.each($('input[name="question-1]":checked'), function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});
	done: function(){
		$.each($('input[name="question-2]":checked'), function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});
	done: function(){
		$.each($('input[name="question-3]":checked'), function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});
	done: function(){
		$.each($('input[name="question-4]":checked'), function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});
	done: function(){
		$.each($('input[name="question-5]":checked'), function(){
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});

	done: function(){
		$.each($('input[name="question-6]":checked'), function(){
			if($(this).val()==questions[6].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});
	done: function(){
		$.each($('input[name="question-7]":checked'), function(){
			if($(this).val()==questions[7].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});

	done: function(){
		$.each($('input[name="question-8]":checked'), function(){
			if($(this).val()==questions[8].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});

	done: function(){
		$.each($('input[name="question-9]":checked'), function(){
			if($(this).val()==questions[9].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});


		this.result();
	},

		result: function(){
			clearInterval(timer);
			$('#subwrapper h2').remove();

			$('#subwrapper').html("<h2> Your Results:</h2>");
			$('#subwrapper').append("<h3>Correct Answer:"+this.correct+"</h3>");
			$('#subwrapper').append("<h3>Incorrect Answer:"+this.incorrect+"</h3>");
			$('subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>")
		}
}


