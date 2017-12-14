(function(window) {

	function Level_2() {

		var __self = this;

		this.domElems = {
			levelMenu: $('.level_2_menu'),
			level2Start: $('.level_2_start'),
			exit: $('.exit'),
			wrap: $('.wrap'),
			wrap2: $('.wrap_2'),
			upperField: $('.upper_field'),
			level2Field: $('.level_2_field'),
		};

		// Метод начала уровня 2 --------------------------

		this.startLevel = function() {
			$('.game_message_lvl_2').removeClass('invis');
			__self.domElems.wrap.addClass('invis');
			__self.domElems.levelMenu.removeClass('invis');
			__self.domElems.level2Start.click(function(e) {
				__self.domElems.levelMenu.addClass('invis');
				__self.domElems.wrap2.removeClass('invis');
				__self.domElems.upperField.html('');
			});
		};
		//--------------------------------------------------

		// Старт по клику на надпись ------------------
		$('.game_message_lvl_2').click(function(e) {
		//вставляем звук
		var level2Theme = document.getElementById('level_2_theme');
		level2Theme.play();
		//--------------
			setTimeout(__self.level_2_Start, 1000);
			setTimeout(__self.trooperRunRender, 8000);
		});
		//--------------------------------------------------

		//------------Тест клик--------------------
		$('.lower_field_2').click(function(e) {
			// setTimeout(__self.trooperRunRender, 100);
			setTimeout(__self.hero2RunRender, 100);
		});
		//-----------------------------------------



	};

//----------------------------------------
// Метод обратного отсчёта до начала игры 
//----------------------------------------
Level_2.prototype.level_2_Start = function() {

	var __self = this;

	var counter = 5;

	var backCounter = setInterval(function() {
		$('.game_message_lvl_2').css({left: '45%', fontSize: '88px'});
		$('.game_message_lvl_2').html('<b>' + counter + '</b>');
		counter--;

		if (+counter === -1) {
			clearInterval(backCounter);
			$('.game_message_lvl_2').css({left: '40%'});
			$('.game_message_lvl_2').html('FIGHT!');
			var fight = setTimeout(function(){
				$('.game_message_lvl_2').html('');
			}, 1200);
		}

	}, 800);

};
//---------------------------------------

//----------------------------------------
// Метод появления и бега штурмовика 
//----------------------------------------
Level_2.prototype.trooperRunRender = function() {
	var trooper = $('.trooper_div');
	trooper.removeClass('invis');
	var __self = this;
	//вставляем звук
	var run = document.getElementById('trooper_run_sound');
	run.play();

	var trooperRun = setTimeout(function() {
		trooper.css({backgroundPosition:"-972px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-866px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-760px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-654px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-548px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-442px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-336px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-230px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-124px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-442px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-972px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-760px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-654px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-548px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-442px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-336px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-230px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition:"-124px"});
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

	var trooperAttackTime = setTimeout(level_2.trooperAttackRender, 2000);


	trooper.animate({left:"-500px"}, 2000);

	trooper.click(function() {
		clearTimeout(trooperAttackTime);
		//вставляем звук
		// var run = document.getElementById('trooperRunSound');
		// run.pause();

		// alert('Попадание!');
		trooper.stop(true, false);
		setTimeout(level_2.hero2RunRender, 1400);
		return;
	});

	
};

//---------------------------------------
// Метод отображения атаки Штурмовика
//---------------------------------------
Level_2.prototype.trooperAttackRender = function() {
	var trooper = $('.trooper_div');
	var hero2 = $('.hero_2_div');

	//определяем координаты штурмовика
	var position = trooper.offset();
	trooper.offset(position);
	var trooperPosition = trooper.offset().left;
	console.log(trooperPosition);
	//если штурмовик добежал удачно:
	game.youLoseRender();

	//вставляем звук
	var shoot = document.getElementById('shoot_sound');
	shoot.play();

	var trooperShoot = setTimeout(function(){
		trooper.css({backgroundPosition: "0px", width: "122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "-124px", width:"106px"});
		return setTimeout(function() {
		trooper.css({backgroundPosition: "0px", width:"122px"});
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
		}, 50);
	}, 50);

	setTimeout(function() {
		hero2.addClass('invis');
	}, 1400);

	setTimeout(level_2.hero2DeadRender, 1300);

};

//---------------------------------------

//---------------------------------------
// Метод для отображения смерти героя
//---------------------------------------
Level_2.prototype.hero2DeadRender = function() {
	var hero2Dead = $('.hero_2_dead_div');
	hero2Dead.removeClass('invis');
	setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-83px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-168px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-251px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-168px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-251px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-168px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-251px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-168px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-251px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-168px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-251px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-168px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-2451px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-168px"});
		return setTimeout(function(){
		hero2Dead.css({backgroundPosition: "-251px"});
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

	level_2.youLoseRender();
};
//---------------------------------------

//---------------------------------------
// Метод для отображения атаки героя
//---------------------------------------
Level_2.prototype.hero2RunRender = function() {
	console.log('wtf');
	var __self = this;
	var hero2 = $('.hero_2_div');
	var trooper = $('.trooper_div')

	//определяем координаты штурмовика
	var position = trooper.offset();
	trooper.offset(position);
	var trooperPosition = trooper.offset().left;
	console.log(trooperPosition);

	//Вставляем звук
	var hero2Run = document.getElementById('hero2RunSound');
	hero2Run.play();

	setTimeout(function(){
		hero2.css({backgroundPosition:"-77px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-153px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-229px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-305px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-381px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-77px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-153px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-229px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-305px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-381px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-77px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-153px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-229px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-305px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-381px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-77px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-153px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-229px"});
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

	hero2.animate({left: (+trooperPosition - 330) + 'px'}, 2000);

	// hero2.animate({left:"620px"}, 2000);
	setTimeout(level_2.hero2AttackRender, 2000);

};
//---------------------------------------

//---------------------------------------
// Метод для отображения атаки героя
//---------------------------------------
Level_2.prototype.hero2AttackRender = function() {
	var __self = this;
	var hero2 = $('.hero_2_div');

	//Вставляем звук
	var hero2Attack = document.getElementById('hero2_attack_sound');
	hero2Attack.play();

	setTimeout(function(){
		hero2.css({backgroundPosition:"-458px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-536px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-612px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-688px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-536px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-612px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-688px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-536px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-612px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-688px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-764px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-840px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-916px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-992px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-1068px"});
		return setTimeout(function(){
		hero2.css({backgroundPosition:"-1149px"});
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
	setTimeout(level_2.trooperDeathRender, 1500);
};
//---------------------------------------

//-----------------------------------------
// Метод для отображения смерти штурмовика
//-----------------------------------------
Level_2.prototype.trooperDeathRender = function() {
	var trooperDead = $('.trooper_dead_div');
	var trooper = $('.trooper_div');
	
	// опять координаты
	var position = trooper.offset();
	trooper.offset(position);
	var trooperPosition = trooper.offset().left;
	console.log(trooperPosition);

	trooperDead.animate({left: (trooperPosition -800) + 'px'}, 0);
	//-------------------------------------
	trooper.addClass('invis');
	trooperDead.removeClass('invis');

	//вставляем звук
	var trooperDeadSound = document.getElementById('trooper_dead_sound');
	trooperDeadSound.play();

	setTimeout(function(){
		trooperDead.css({backgroundPosition: "-103px"});
		return setTimeout(function() {
		trooperDead.css({backgroundPosition: "0px"});
		}, 200);
	}, 200);

	level_2.youWinRender();
}
//---------------------------------------
//-------------------------------------------
// Метод отображения сообщения о победе 2лвл
//-------------------------------------------
Level_2.prototype.youWinRender = function() {
	//Вставляем звук
	setTimeout(function(){
		var level2Theme = document.getElementById('level_2_theme');
		level2Theme.pause();
		// var youWinSound = document.getElementById('youWinSound');
		// youWinSound.play();
	}, 2500);
	//--------------
	$('.game_message_lvl_2').css({left: '35%'});
	$('.game_message_lvl_2').css({color: "darkgreen"});
	$('.game_message_lvl_2').html('YOU WIN!');

	setTimeout(window.level_3.startLevel, 4000);
};

//----------------------------------------------
// Метод отображения сообщения о поражении 2 лвл
//----------------------------------------------
Level_2.prototype.youLoseRender = function() {
	//Вставляем звук
	setTimeout(function() {
		var gameOver = document.getElementById('gameOverSound');
		gameOver.play();
	}, 2200);
	$('.game_message_lvl_2').css({left: '30%'});
	$('.game_message_lvl_2').css({color: "red"});
	$('.game_message_lvl_2').html('GAME OVER');
};
//-----------------------------------------



window.level_2 = new Level_2();





})(window);