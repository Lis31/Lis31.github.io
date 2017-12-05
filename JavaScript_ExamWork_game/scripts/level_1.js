$(function(){

function Game() {
	var __self = this;

	this.domElems = {
		gameMenu: $('.game_menu'),
		gameStart: $('.game_start'),
		credits: $('.credits'),
		wrap: $('.wrap'),
		upperField: $('.upper_field'),
		gameField: $('.game_field'),
		dragon: $('.dragon_div'),
		dragonAttack: $('.dragon_attack_div'),
		dragonDead: $('dragon_dead_div'),
		hero: $('.hero_div'),
		heroAttack: $('.hero_attack_div'),
		heroDead: $('.hero_dead_div'),
		iceBall: $('.ice_ball_div')
	}



	// Метод начала игры
	this.domElems.gameStart.click(function(e) {
		$('.game_message').css({top: '200px'});
		__self.domElems.gameMenu.toggleClass('invis');
		__self.domElems.wrap.toggleClass('invis');
		//временно стартуем с 3 левела для удобства работы с ним
		// window.level_3.startLevel();
		//-------------------------------------------------------
	});

	$('.game_message').click(function(e) {
		//вставляем звук
		var level1Theme = document.getElementById('level_1_theme');
		level1Theme.play();
		//--------------
		setTimeout(__self.level_1_Start, 2000);
		setTimeout(__self.dragonFlyRender, 14000);
	});

	//------------Тест клик--------------------
	$('.lower_field').click(function(e) {
		// setTimeout(__self.heroAttackRender, 100);
	});
	//-----------------------------------------

}

//----------------------------------------
// Метод обратного отсчёта до начала игры 
//----------------------------------------
Game.prototype.level_1_Start = function() {

	var __self = this;

	var counter = 5;

	var backCounter = setInterval(function() {
		$('.game_message').css({left: '45%', top: '150px', fontSize: '88px'});
		$('.game_message').html('<b>' + counter + '</b>');
		counter--;

		if (+counter === -1) {
			clearInterval(backCounter);
			$('.game_message').css({left: '40%'});
			$('.game_message').html('FIGHT!');
			var fight = setTimeout(function(){
				$('.game_message').html('');
			}, 1200);
		}

	}, 2000);

};
//---------------------------------------

//---------------------------------------
// Метод отображения появления и полёта дракона
//---------------------------------------
Game.prototype.dragonFlyRender = function() {
	var dragon = $('.dragon_div');
	dragon.removeClass('invis');
	var __self = this;

	//вставляем звук
	var fly = document.getElementById('dragonFlySound');
	fly.play();

	var dragonFly = setTimeout(function() {
		dragon.css({backgroundPosition:"-145px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-290px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-435px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-580px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-725px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-580px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-725px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-580px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-725px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-580px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-725px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-580px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-725px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-870px"});
		return setTimeout(function() {
		dragon.css({backgroundPosition:"-1015px"});
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	
	dragon.animate({left:"750px"}, 2000);

	dragon.click(function() {
		var fly = document.getElementById('dragonFlySound');
		fly.pause();
		// alert('Попадание!');
		dragon.stop(true, false);
	});
	setTimeout(game.dragonAttackRender, 2000);

};
//---------------------------------------


//---------------------------------------
// Метод 
//---------------------------------------

//---------------------------------------

//---------------------------------------
// Метод отображения атаки дракона
//---------------------------------------
Game.prototype.dragonAttackRender = function() {
	var dragon = $('.dragon_div');
	var hero = $('.hero_div');
	var dragonAttack = $('.dragon_attack_div');

	//определяем координаты дракона
	var position = dragon.offset();
	dragon.offset(position);
	var dragonPosition = dragon.offset().left;
	console.log(dragonPosition);
	//если недолёт, тогда отмена атаки дракона, активизация атаки героя.
	if(dragonPosition < 750) {
		game.heroAttackRender();
		return;
	}
	//если дракон долетел удачно :)
	dragon.addClass('invis');
	game.youLoseRender();
	dragonAttack.removeClass('invis');
	//вставляем звук
	var roar = document.getElementById('dragonRoar');
	roar.play();

	var dragonFlame = setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-188px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-376px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-564px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-752px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-940px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-564px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-752px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-940px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-564px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-752px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-940px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-564px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-752px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-940px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"752px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-940px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-752px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-940px"});
		return setTimeout(function() {
		dragonAttack.css({backgroundPosition:"-752px"});
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
	}, 100);

	setTimeout(function() {
		hero.addClass('invis');
	}, 300);

	setTimeout(game.heroDeadRender, 300);

}
//---------------------------------------

//---------------------------------------
// Метод для отображения смерти героя
//---------------------------------------
Game.prototype.heroDeadRender = function() {
	var heroDead = $('.hero_dead_div');
	heroDead.removeClass('invis');
	setTimeout(function(){
		heroDead.css({backgroundPosition: "-146px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "-73px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "0px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "-73px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "0px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "-73px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "0px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "-73px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "0px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "-73px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "0px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "-73px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "0px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "-73px"});
		return setTimeout(function(){
		heroDead.css({backgroundPosition: "0px"});
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);
	}, 100);

};

//---------------------------------------
// Метод для отображения атаки героя и запуск перемещения снежного шара
//---------------------------------------
Game.prototype.heroAttackRender = function() {
	var __self = this;
	var heroAttack = $('.hero_div');
	var iceBall = $('.ice_ball_div');

	//Вставляем звук
	var magicCast = document.getElementById('magicCastSound');
	magicCast.play();

	setTimeout(function() {
		heroAttack.css({backgroundPosition:"-1016px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-889px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-762px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-635px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-889px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-762px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-635px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-889px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-762px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-635px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-889px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-762px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-635px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-508px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-381px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-254px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-127px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"0px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-254px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-127px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"0px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-254px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-127px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"0px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-254px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-127px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"0px"});
		return setTimeout(function() {
		heroAttack.css({backgroundPosition:"-1016px"});
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
		}, 100);
	}, 100);

	
	setTimeout(game.iceBallRender, 3000);
};
//---------------------------------------

//-----------------------------------------
// Метод отображения движения снежного шара
//-----------------------------------------
Game.prototype.iceBallRender = function() {
	// определяем текущие координаты дракона и задаем координаты
	// дохлого дракона соответственно
	var dragon = $('.dragon_div');
	var position = dragon.offset();
	dragon.offset(position);
	var dragonPosition = dragon.offset().left;
	console.log(dragonPosition);
	//-------------------------------------
	var iceBall = $('.ice_ball_div');
	iceBall.removeClass('invis');
	setTimeout(function() {
	iceBall.css({backgroundPosition: "-115px"});
	return setTimeout(function() {
	iceBall.css({backgroundPosition: "-230px"});
	return setTimeout(function() {
	iceBall.css({backgroundPosition: "-345px"});
	}, 100);
	}, 100);
	}, 100);

	iceBall.animate({left: (dragonPosition - 750) + 'px'}, 600);
	setTimeout(function() {
		iceBall.addClass('invis');
	}, 700);

	setTimeout(game.dragonDeathRender, 600);

};
//-----------------------------------------

//-----------------------------------------
// Метод отображения смерти дракона
//-----------------------------------------
Game.prototype.dragonDeathRender = function() {
	var dragonDeath = $('.dragon_dead_div');
	var dragon = $('.dragon_div');
	// опять координаты
	var position = dragon.offset();
	dragon.offset(position);
	var dragonPosition = dragon.offset().left;

	dragonDeath.animate({left: dragonPosition}, 0);
	//--------------------------------------------------
	var dragon = $('.dragon_div');
	dragon.addClass('invis');
	dragonDeath.removeClass('invis');
	//вставляем звук
	var dragonDead = document.getElementById('dragonDeadSound');
	dragonDead.play();

	setTimeout(function(){
		dragonDeath.css({backgroundPosition: "-113px"});
		return setTimeout(function() {
		dragonDeath.css({backgroundPosition: "-226px"});
		return setTimeout(function() {
		dragonDeath.css({backgroundPosition: "-339px"});
		return setTimeout(function() {
		dragonDeath.css({backgroundPosition: "-452px"});
		}, 150);
		}, 150);
		}, 150);
	}, 150);
	game.youWinRender();
};
//-----------------------------------------

//-----------------------------------------
// Метод отображения сообщения о победе
//-----------------------------------------
Game.prototype.youWinRender = function() {
	//Вставляем звук
	setTimeout(function(){
		var level1Theme = document.getElementById('level_1_theme');
		level1Theme.pause();
		// var youWinSound = document.getElementById('youWinSound');
		// youWinSound.play();
	}, 2500);
	//--------------
	$('.game_message').css({left: '30%'});
	$('.game_message').css({color: "darkgreen"});
	$('.game_message').html('YOU WIN!');
	setTimeout(window.level_2.startLevel, 4000);
};
//-----------------------------------------

//-----------------------------------------
// Метод отображения сообщения о поражении
//-----------------------------------------
Game.prototype.youLoseRender = function() {
	//Вставляем звук
	setTimeout(function() {
		var gameOver = document.getElementById('gameOverSound');
		gameOver.play();
	}, 2200);
	$('.game_message').css({color: "red"});
	$('.game_message').html('GAME OVER');
};
//-----------------------------------------

window.game = new Game();


















});