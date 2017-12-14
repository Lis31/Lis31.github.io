(function(window) {

	function Level_3() {
		var __self = this;

		this.domElems = {
			gameMenu: $('.game_menu'),
			level2Menu: $('level_2_menu'),
			level3Menu: $('.level_3_menu'),
			level3Start: $('.level_3_start'),
			exit: $('.exit'),
			wrap: $('.wrap'),
			wrap2: $('.wrap_2'),
			wrap3: $('.wrap_3'),
			upperField: $('.upper_field'),
			level3Field: $('.level_3_field'),
		};

		// Метод начала уровня 3 --------------------------
		this.startLevel = function() {
			$('.hero_div').addClass('invis');
			$('.dragon_dead_div').addClass('invis');
			$('.game_message_lvl_2').addClass('invis');
			__self.domElems.wrap.removeClass('invis');
			__self.domElems.level2Menu.addClass('invis');
			

			$('.game_message_lvl_3').removeClass('invis');
			__self.domElems.wrap2.addClass('invis');
			__self.domElems.level3Menu.removeClass('invis');
			__self.domElems.level3Start.click(function(e) {
				__self.domElems.level3Menu.addClass('invis');
				__self.domElems.wrap3.removeClass('invis');
				__self.domElems.upperField.html('');
			});
		};
		//--------------------------------------------------

		// Старт по клику на надпись ------------------
		$('.game_message_lvl_3').click(function(e) {
		//вставляем звук
		var level3Theme = document.getElementById('level_3_theme');
		level3Theme.play();
		//--------------
			setTimeout(__self.level_3_start, 1000);
			setTimeout(__self.rogueMoveRender, 8000);
		});
		//--------------------------------------------------

		//------------Тест клик--------------------
		$('.lower_field').click(function(e) {
			setTimeout(__self.rogueMoveRender, 100);
		});
		//-----------------------------------------
	}


	// Метод обратного отсчёта до начала игры ------------
	Level_3.prototype.level_3_start = function() {
		var __self = this;

		var counter = 5;

		var backCounter = setInterval(function() {
			$('.game_message_lvl_3').css({left: '45%', fontSize: '88px'});
			$('.game_message_lvl_3').html('<b>' + counter + '</b>');
			counter--;

			if (+counter === -1) {
				clearInterval(backCounter);
				$('.game_message_lvl_3').css({left: '40%'});
				$('.game_message_lvl_3').html('FIGHT!');
				var fight = setTimeout(function(){
					$('.game_message_lvl_3').html('');
				}, 1200);
			}

		}, 800);
	}

	//----------------------------------------------------

	//----------------------------------------
	// Метод появления и движения разбойника 
	//----------------------------------------
	Level_3.prototype.rogueMoveRender = function() {
		var rogue = $('.rogue');
		rogue.removeClass('invis');
		var __self = this;
		
		//вставляем звук
		var rogueMove = document.getElementById('rogue_move_sound');
		rogueMove.play();

		var rogueMove = setTimeout(function() {
			rogue.css({backgroundPosition: "-75px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-150px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-225px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-300px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "0px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-75px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-150px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-225px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-300px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "0px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-75px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-150px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-225px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-300px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "0px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-75px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-150px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-225px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-300px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "0px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-75px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-150px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-225px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-300px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "0px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-75px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-150px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-225px"});
			return setTimeout(function() {
			rogue.css({backgroundPosition: "-300px"});
			
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
		}, 100);

		var rogueAttackTime = setTimeout(level_3.rogueAttackRender, 3000);

		rogue.animate({left:"390px"}, 3000);

		rogue.click(function() {
		clearTimeout(rogueAttackTime);

		// alert('Попадание!');
		rogue.stop(true, false);

		setTimeout(level_3.hero3LeftRunRender, 1000);
		return;
	});

	}
	
	//----------------------------------------

	//---------------------------------------
	// Метод отображения атаки Разбойника
	//---------------------------------------
	Level_3.prototype.rogueAttackRender = function() {
		var rogue = $('.rogue');
		var hero3Left = $('.hero_3_left');

		//определяем координаты разбойника
		var position = rogue.offset();
		rogue.offset(position);
		var roguePosition = rogue.offset().left;
		console.log(roguePosition);
		//если разбойник добежал удачно:
		game.youLoseRender();
		//вставляем звук
		var rogueAttackSound = document.getElementById('rogue_attack_sound');
		rogueAttackSound.play();
		var rogueAttack = setTimeout(function() {
		rogue.css({backgroundPosition: "-375px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-450px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-525px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-600px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-375px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-450px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-525px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-600px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-375px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-450px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-525px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-600px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-375px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-450px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-525px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-600px"});
		return setTimeout(function() {
		rogue.css({backgroundPosition: "-375px"});
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
			hero3Left.addClass('invis');
		}, 1700);

		setTimeout(level_3.hero3LeftDeadRender, 1700);
	};

//------------------------------------------
// Метод для отображения смерти героя слева
//------------------------------------------
Level_3.prototype.hero3LeftDeadRender = function() {
	var hero3LeftDead = $('.hero_3_dead_left');
	hero3LeftDead.removeClass('invis');
	setTimeout(function() {
	hero3LeftDead.css({backgroundPosition: "-219px"});
	return setTimeout(function() {
	hero3LeftDead.css({backgroundPosition: "-146px"});
	return setTimeout(function() {
	hero3LeftDead.css({backgroundPosition: "-73px"});
	return setTimeout(function() {
	hero3LeftDead.css({backgroundPosition: "0px"});
	return setTimeout(function() {
	hero3LeftDead.css({backgroundPosition: "-73px"});
	return setTimeout(function() {
	hero3LeftDead.css({backgroundPosition: "0px"});
	return setTimeout(function() {
	hero3LeftDead.css({backgroundPosition: "-73px"});
	return setTimeout(function() {
	hero3LeftDead.css({backgroundPosition: "0px"});
	return setTimeout(function() {
	hero3LeftDead.css({backgroundPosition: "-73px"});
	return setTimeout(function() {
	hero3LeftDead.css({backgroundPosition: "0px"});
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

	level_3.youLoseRender();
};

//------------------------------------------

//------------------------------------------
// Метод для отображения атаки героя налево
//------------------------------------------
Level_3.prototype.hero3LeftRunRender = function() {
	var __self = this;
	var hero3Left = $('.hero_3_left');
	var rogue = $('.rogue');

	//определяем координаты разбойника
	var position = rogue.offset();
	rogue.offset(position);
	var roguePosition = rogue.offset().left;
	console.log(roguePosition);

	//Вставляем звук
	var hero3LeftRun = document.getElementById('hero_3_left_run_sound');
	hero3LeftRun.play();

	setTimeout(function() {
		hero3Left.css({backgroundPosition: "-70px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-140px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-210px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-280px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-350px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-420px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-70px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-140px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-210px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-280px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-350px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-420px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-70px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-140px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-210px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-280px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-350px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-420px"});
		
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

	hero3Left.animate({left: (roguePosition - 446) + 'px'}, 1800);
	setTimeout(level_3.hero3LeftAttackRender, 1500);

};
//------------------------------------------

//------------------------------------------
// Метод для отображения атаки героя налево
//------------------------------------------
Level_3.prototype.hero3LeftAttackRender = function() {
	var __self = this;
	var hero3Left = $('.hero_3_left');
	
	//Вставляем звук
	var hero3LeftAttack = document.getElementById('hero_3_left_attack_sound');
	hero3LeftAttack.play();

	setTimeout(function() {
		hero3Left.css({backgroundPosition: "-490px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-560px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-630px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-700px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-770px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-830px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-900px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-970px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-490px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-560px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-630px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-700px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-770px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-830px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-900px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-970px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-490px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-560px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-630px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-700px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-770px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-830px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-900px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-970px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-490px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-560px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-630px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-700px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-770px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-830px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-900px", width: "60px"});
		return setTimeout(function() {
		hero3Left.css({backgroundPosition: "-970px", width: "60px"});
		
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);
		}, 30);

		setTimeout(level_3.rogueDeadRender, 1000);

};
//------------------------------------------

//-----------------------------------------
// Метод для отображения смерти разбойника
//-----------------------------------------
Level_3.prototype.rogueDeadRender = function() {
	var rogueDead = $('.rogue_dead');
	var rogue = $('.rogue');
	var hero3Left = $('.hero_3_left');
	var hero3Right = $('.hero_3_right');
	// опять координаты-------------------------
	var position = rogue.offset();
	rogue.offset(position);
	var roguePosition = rogue.offset().left;

	rogueDead.animate({left: roguePosition - 80}, 0);
	//------------------------------------------

	rogue.addClass('invis');
	rogueDead.removeClass('invis');

	// //вставляем звук
	var rogueDeadSound = document.getElementById('rogue_dead_sound');
	rogueDeadSound.play();

	setTimeout(function(){
		rogueDead.css({backgroundPosition: "-370px"});
		return setTimeout(function() {
		rogueDead.css({backgroundPosition: "-296px"});
		return setTimeout(function(){
		rogueDead.css({backgroundPosition: "-222px"});
		return setTimeout(function() {
		rogueDead.css({backgroundPosition: "-148px"});
		return setTimeout(function(){
		rogueDead.css({backgroundPosition: "-74px"});
		return setTimeout(function() {
		rogueDead.css({backgroundPosition: "0px"});
		}, 200);
		}, 200);
		}, 200);
		}, 200);
		}, 200);
	}, 200);

	// сообщаем координаты героя, чтобы повернуть его вправо--
	var position = hero3Left.offset();
	hero3Left.offset(position);
	var hero3LeftPosition = hero3Left.offset().left;

	hero3Right.animate({left: roguePosition - 450}, 0);
	//-------------------------------------------------------

	hero3Left.addClass('invis');
	hero3Right.removeClass('invis');

	setTimeout(level_3.pirateMoveRender, 1000);
};
//-----------------------------------------


//----------------------------------------
// Метод появления и движения пирата
//----------------------------------------
Level_3.prototype.pirateMoveRender = function() {
	var pirate = $('.pirate');
	var hero3Right = $('.hero_3_right');
	pirate.removeClass('invis');
	var __self = this;

	// сообщаем координаты героя, чтобы знать сколько идти пирату---
	var position = hero3Right.offset();
	hero3Right.offset(position);
	var hero3RightPosition = hero3Right.offset().left;
	//-------------------------------------------------------------

	//вставляем звук
	var pirateRun = document.getElementById('pirate_run_sound');
	pirateRun.play();

	var pirateRun = setTimeout(function() {
	pirate.css({backgroundPosition:"-109px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-218px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-327px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-436px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-545px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"0px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-109px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-218px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-327px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-436px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-545px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"0px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-109px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-218px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-327px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-436px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-545px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"0px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-109px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-218px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-327px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-436px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"-545px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition:"0px"});
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

	var pirateAttackTime = setTimeout(level_3.pirateAttackRender, 2400);

	pirate.animate({left: hero3RightPosition - 850}, 2400);

	pirate.click(function() {
		clearTimeout(pirateAttackTime);
		//вырубаем звук
		// pirateRun.pause();

		// alert('Попадание!');
		pirate.stop(true, false);
		setTimeout(level_3.hero3RightRunRender, 500);
		return;
	});
};
//----------------------------------------

//---------------------------------------
// Метод отображения атаки Пирата
//---------------------------------------
Level_3.prototype.pirateAttackRender = function() {
	var pirate = $('.pirate');
	var hero3Right = $('.hero_3_right');

	//определяем координаты пирата
	var position = pirate.offset();
	pirate.offset(position);
	var piratePosition = pirate.offset().left;
	console.log(piratePosition);
	//если пират добежал удачно:
	setTimeout(function() {
		level_3.youLoseRender();
	}, 2500);
	

	//вставляем звук
	var pirateStrike = document.getElementById('pirate_strike_sound');
	pirateStrike.play();

	var pirateStrike = setTimeout(function() {
	pirate.css({backgroundPosition: "-654px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-763px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-872px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-981px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-1090px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-1199px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-654px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-763px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-872px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-981px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-1090px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-1199px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-654px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-763px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-872px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-981px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-1090px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-1199px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-654px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-763px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-872px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-981px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-1090px", width: "107px"});
	return setTimeout(function() {
	pirate.css({backgroundPosition: "-1199px", width: "107px"});
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

	setTimeout(function() {
		hero3Right.addClass('invis');
	}, 2400);

	setTimeout(level_3.hero3RightDeadRender, 2400);

};
//---------------------------------------

//-------------------------------------------
// Метод для отображения смерти героя справа 
//-------------------------------------------
Level_3.prototype.hero3RightDeadRender = function() {
	var hero3RightDead = $('.hero_3_dead_right');
	var hero3Right = $('.hero_3_right');
	//задаём координаты трупа героя-----------
	var position = hero3Right.offset();
	hero3Right.offset(position);
	var hero3RightPosition = hero3Right.offset().left;
	
	hero3RightDead.animate({left: hero3RightPosition - 300}, 0)
	//----------------------------------------
	hero3RightDead.removeClass('invis');

	setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-83px"});
	return setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-168px"});
	return setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-251px"});
	return setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-168px"});
	return setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-251px"});
	return setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-168px"});
	return setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-251px"});
	return setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-168px"});
	return setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-251px"});
	return setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-168px"});
	return setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-251px"});
	return setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-168px"});
	return setTimeout(function() {
	hero3RightDead.css({backgroundPosition: "-251px"});
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
//-------------------------------------------


//---------------------------------------
// Метод для отображения атаки героя
//---------------------------------------
Level_3.prototype.hero3RightRunRender = function() {
	var __self = this;
	var hero3Right = $('.hero_3_right');
	var pirate = $('.pirate');

	//определяем координаты пирата
	var position = pirate.offset();
	pirate.offset(position);
	var piratePosition = pirate.offset().left;
	console.log(piratePosition);
	//-------------------------------

	//Вставляем звук
	var hero3RightRun = document.getElementById('hero_3_right_run_sound');
	hero3RightRun.play();

	setTimeout(function() {
	hero3Right.css({backgroundPosition: "-92px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-184px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-276px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-368px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-460px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-552px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-644px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-736px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-828px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-920px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1012px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1104px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1196px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1288px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1380px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1104px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1196px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1288px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1380px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1104px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1196px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1288px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1380px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1104px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1196px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1288px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition: "-1380px"});
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


	setTimeout(function() {
		hero3Right.animate({left: piratePosition - 560}, 2000);
	}, 1100);

	setTimeout(level_3.hero3RightAttackRender, 2800);
}

//---------------------------------------


//---------------------------------------
// Метод для отображения атаки героя
//---------------------------------------
Level_3.prototype.hero3RightAttackRender = function() {
	var __self = this;
	var hero3Right = $('.hero_3_right');

	//Вставляем звук
	var hero3RightAttack = document.getElementById('hero_3_right_attack_sound');
	hero3RightAttack.play();

	setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1472px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1564px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1656px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1748px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1840px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1932px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-2024px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1472px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1564px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1656px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1748px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1840px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1932px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-2024px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1472px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1564px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1656px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1748px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1840px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-1932px"});
	return setTimeout(function() {
	hero3Right.css({backgroundPosition:"-2024px"});
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

	setTimeout(level_3.pirateDeadRender, 1050);
};
//---------------------------------------

//-----------------------------------------
// Метод для отображения смерти пирата
//-----------------------------------------
Level_3.prototype.pirateDeadRender = function() {
	var pirateDead = $('.pirate_dead');
	var pirate = $('.pirate');

	// опять координаты
	var position = pirate.offset();
	pirate.offset(position);
	var piratePosition = pirate.offset().left;

	pirateDead.animate({left: (piratePosition -885) + 'px'}, 0);
	//-------------------------------------
	pirate.addClass('invis');
	pirateDead.removeClass('invis');

	//вставляем звук
	var pirateDeadSound = document.getElementById('pirate_dead_sound');
	pirateDeadSound.play();

	setTimeout(function(){
	pirateDead.css({backgroundPosition: "-89px"});
	return setTimeout(function() {
	pirateDead.css({backgroundPosition: "-178px"});
	return setTimeout(function(){
	pirateDead.css({backgroundPosition: "-267px"});
	return setTimeout(function() {
	pirateDead.css({backgroundPosition: "-356px"});
	}, 200);
	}, 200);
	}, 200);
	}, 200);

	setTimeout(level_3.hero3WalkAwayRender, 1000);

};
//-----------------------------------------

//-------------------------------------------
// Метод ухода героя
//-------------------------------------------
Level_3.prototype.hero3WalkAwayRender = function() {
	var hero3Right = $('.hero_3_right');
	var heroWalkLeft = $('.hero_3_walk_left');
	var heroWalkRight = $('.hero_3_walk_right');
	var __self = this;

	// определяем координаты героя
	var position = hero3Right.offset();
	hero3Right.offset(position);
	var hero3RightPosition = hero3Right.offset().left;

		heroWalkLeft.animate({left: hero3RightPosition - 450}, 0);
		hero3Right.addClass('invis');
		heroWalkLeft.removeClass('invis');

		var walk = setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-40px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-80px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-120px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-160px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-200px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-40px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-80px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-120px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-160px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-200px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-40px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-80px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-120px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-160px"});
		return setTimeout(function() {
		heroWalkLeft.css({backgroundPosition: "-200px"});
		}, 200);
		}, 200);
		}, 200);
		}, 200);
		}, 200);
		}, 200);
		}, 200);
		}, 200);
		}, 200);
		}, 200);
		}, 200);
		}, 200);
		}, 200);
		}, 200);
		}, 200);

		heroWalkLeft.animate({left: 100 + 'px'}, 3000).animate({top: -190 + 'px'}, 3000).fadeTo(800, 0);


		// снова определяем координаты героя
		var position = heroWalkLeft.offset();
		heroWalkLeft.offset(position);
		var heroWalkLeftPosition = heroWalkLeft.offset().left;

		if(heroWalkLeftPosition <= (-450)) {
			heroWalkLeft.stop();
		}

		setTimeout(level_3.youWinRender, 6000);
		





	
	

};
//-------------------------------------------


//-------------------------------------------
// Метод отображения сообщения о победе 3лвл
//-------------------------------------------
Level_3.prototype.youWinRender = function() {
	//Вставляем звук
	// setTimeout(function(){
	// 	// var level1Theme = document.getElementById('level_1_theme');
	// 	// level1Theme.pause();
	// 	var youWinSound = document.getElementById('youWinSound');
	// 	youWinSound.play();
	// }, 1500);
	//--------------
	$('.game_message_lvl_3').css({left: '30%'});
	$('.game_message_lvl_3').css({color: "orange"});
	$('.game_message_lvl_3').html('YOU WIN!');
	
	// setTimeout(window.level_4.startLevel, 6000);
};

//----------------------------------------------
// Метод отображения сообщения о поражении 3 лвл
//----------------------------------------------
Level_3.prototype.youLoseRender = function() {
	//Вставляем звук
	setTimeout(function() {
		var gameOver = document.getElementById('gameOverSound');
		gameOver.play();
	}, 2200);
	$('.game_message_lvl_3').css({color: "red"});
	$('.game_message_lvl_3').html('GAME OVER');
};
//-----------------------------------------

















window.level_3 = new Level_3();

})(window);