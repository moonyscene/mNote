$(function(){

	/** ◇◆ Swipe. 20150609~.20150612. @MoonYoungShin.
	* !!required: jquery-1.8.0.min.js +, jquery.easing.1.3.js
	* DOM 조작하하므로 하위 JS 는 주의! 특히, 자동실행 플러그인 jQmPR1()
	* 맨앞 이전, 맨뒤 다음 순환 )) DOM detach() 후 append()
	/----
	* Task.A) make Plugin
	* Task.B) If three or more?
	* Task.C) Out of $this after touchstart )) $(this) 범위 밖이면 원위치 ☆과제) 이 경우 발생안함! 
	*/
	var $this = $('#mswipe');
	var vc=[];
	// DOM
	$this.nav = $('>.swipe-nav', $this);
	$this.navm = $('.m', $this.nav);
	$this.mView = $('>.swipe-view', $this);
	$this.mCont = $('>.swipe-container', $this.mView);
	$this.mPanel = $('>.swipe-panel', $this.mCont);
		$this.mPanelLeft = $this.mPanel.eq(0);
		$this.mPanelCenter = $this.mPanel.eq(1);
		$this.mPanelRight = $this.mPanel.eq(2);
	$this.prev = $('.swipe-prev', $this); // to-be
	$this.next = $('.swipe-next', $this); // to-be
	$this.onnum = 1; // 초기활성값
	$this.maxnum = $this.mPanel.length; // 맨뒤수. console.log($this.maxnum);
	// Initialize
	vc[0] = $this.mPanelLeft.find('.wrap').detach(); // 左
	vc[1] = $this.mPanelCenter.find('.wrap').detach(); // 中
	vc[2] = $this.mPanelRight.find('.wrap').detach(); // 右
	$this.mPanelLeft.append(vc[rotateNum($this.onnum-1) - 1]);
	$this.mPanelCenter.append(vc[rotateNum($this.onnum) - 1]); // 현재
	$this.mPanelRight.append(vc[rotateNum($this.onnum+1) - 1]);

	function rotateNum(num){ // 순번계산
		var num = num;
		if(num < 1){
			num = $this.maxnum;
		}
		if(num > $this.maxnum){
			num = 1;
		}
		return num;
	}

	// Action
	$this.reset = function(){ // 左中右 DOM 재배치
		//console.log($this.onnum);
		$this.navm.removeClass('on');
		$this.navm.eq($this.onnum-1).addClass('on');
		$this.mPanel.find('.wrap').detach(); // ☆ remove() 또는 empty() 사용하면.. 자손 스크립트 중복 호출로 동작 오류 발생한다.
		$this.mPanelLeft.append(vc[rotateNum($this.onnum-1) - 1]);
		$this.mPanelCenter.append(vc[rotateNum($this.onnum) - 1]);
		$this.mPanelRight.append(vc[rotateNum($this.onnum+1) - 1]);
		$this.mCont.css({'left': '-100%'});
	}
	$this.prevAct = function(){ // 이전 순번 계산, 액션 실행
		$this.mCont.animate({left: '0'}, 200, 'easeOutQuad', function(){
			$this.onnum--;
			$this.onnum = rotateNum($this.onnum);
			$this.reset();
		});
	}
	$this.nextAct = function(){ // 다음 순번 계산, 액션 실행
		$this.mCont.animate({left: '-200%'}, 200, 'easeOutQuad', function(){
			$this.onnum++;
			$this.onnum = rotateNum($this.onnum);
			$this.reset();
		});
	}
	$this.prev.on('click', function(e){e.preventDefault(); // 이전 클릭
		$this.prevAct();
	});
	$this.next.on('click', function(e){e.preventDefault(); // 다음 클릭
		$this.nextAct();
	});
	$this.navm.on('click', function(e){e.preventDefault(); // 순번 클릭
		$this.onnum = $(this).index() + 1;
		$this.reset();
	});
	// Gesture
	($this.gesture1 = function(){
		var o = {
			sx: 0, // start x
			sy: 0, // start y
			dx: 0, // distance x
			dy: 0, // distance y
			ex: 0, // end x
			ey: 0, // end y
			sl: 0, // start left
			st: 0, // start top
			threshold: 50 // 임계값
		};
		$this.on('touchstart touchmove touchend mousedown mousemove mouseup', function(e){
			 // $(this) 좌상단에서의 터치 이벤트 상대 위치 x, y
			$this.offsetLeft = ($(this).offset().left < 0)? 0: $(this).offset().left; // 뷰가 화면 보다 클 때 보정
			$this.offsetTop = ($(this).offset().top < 0)? 0: $(this).offset().top;
			if(e.originalEvent.touches || e.originalEvent.changedTouches){ // 터치 있으면
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]; // 싱글 터치
				touch.length = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
			}else{
				var e = e || window.event;
			}
			var x = (e.pageX || touch.pageX) - $this.offsetLeft;
			var y = (e.pageY || touch.pageY) - $this.offsetTop;
			if(x < $(this).width() && x > 0 && y < $(this).height() && y > 0){ // $(this) 범위 안이면 동작
				if(e.type == 'touchstart' || e.type == 'mousedown'){
					$this.onGesture = 1;
					o.sx = x; o.sy = y; // 터치 시작 위치 기억
					o.dx = 0; o.dy = 0; // 터치 이동 거리 초기화
					o.sl = parseInt($this.mCont.css('left')); // mCont 가 [1][2][3] 나열되어 있을 때와 동일하게 동작하고.. 이전, 다음 동작 시에는  mContC 로 계산할거다.
					clearInterval($this.timer1); // 자동 정지
				}
				if(e.type == 'touchmove' || e.type == 'mousemove'){
					if($this.onGesture){
						o.dx = x-o.sx; o.dy = y-o.sy; // 터치 이동 거리 계산
						if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
							e.preventDefault();
							$this.mCont.css('left',(o.sl + o.dx) + 'px'); // 터치 이동 거리만큼 mCont 이동
						}else{
							$this.onGesture = 0;
						}
					}
				}
				if(e.type == 'touchend' || e.type == 'mouseup'){
					//e.preventDefault(); // 20150414. a 링크 위해 주석처리.
					$this.onGesture = 0;
					o.ex = x; o.ey = y; // 터치 종료 위치 기억
					if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
						$this.offsetXdrag = parseInt($this.mCont.css('left')) || 0; // mContC 를 이전 다음 동작 시 이동한 만큼 보정할거고.. (NAN이면0으로계산)
						if((o.ex-o.sx) > o.threshold){ // 임계값 초과면
							$this.prevAct();
						}
						else if((o.ex-o.sx) < -o.threshold){ // 임계값 초과면
							$this.nextAct();
						}
						else{ // 임계값 이하면
							$this.returnAct('slide');
						}
					}
				}
			}else{ // $(this) 범위 밖이면 원위치 ☆과제) 이 경우 발생안함! 
				console.log('$(this) 범위 밖이면 원위치');
				if($this.onGesture){ // 터치중
					$this.returnAct('slide');
					$this.onGesture = 0;
				}
			}
			$('a', this).click(function(){
				if(Math.abs(o.dx) > 2){ // 2px 초과 드래그하면.. 링크 이동 안함.
					return false;
				}else{
					return;
				}
			});
			$this.returnAct = function(effect){ // 제자리로 되돌리기. 20150609. (o.sl) 값 받으러 즉시함수 안으로 이동.
				switch(effect){
				case'slide':
					$this.mCont.animate({'left': (o.sl) + 'px'}, 200, 'easeOutQuad', function(){});
					break;
				default:
					$this.mCont.css({'left': (o.sl) + 'px'});
				}
			}
			// Android 4.1.2 Webkit 534.30 (GalaxyS2,..) 는 touch 와 mouse 이벤트 동시에 발생하고,
			if(/touch/.test(e.type)){
				//$('.test').html($this.onGesture + "  " + /touch/.test(e.type) + "  " + e.type + "  " + Math.abs(o.dx)).css({'border':'1px solid #f00'}); // 점검
			}else{ // Desktop Web 은 mouse 이벤트만 발생한다.
				//$('.test').html($this.onGesture + "  " + /touch/.test(e.type) + "  " + e.type + "  " + Math.abs(o.dx)).css({'background':'#0f0'}); // 점검
				return false; // 그래서 여기서만 해줘야지.. 올바로 동작
			}
		});
	})();

}); /* /$(function(){}); */