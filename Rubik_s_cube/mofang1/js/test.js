window.onload = function() {
	var arr = [];
	var tc = "translateZ(150px)";
	for (var i = 0; i < 6; i++) {
		arr[i] = [];
		for (var j = 0; j < 9; j++) {
			arr[i][j] = [];
			arr[i][j][0] = $("ul").eq(i).children().eq(j).css("background");
			switch (j) {
				case 0:
					arr[i][j][1] = "";
					break;
				case 1:
					arr[i][j][1] = "translateX(100px) translateY(0px)";
					break;
				case 2:
					arr[i][j][1] = " translateX(200px) translateY(0px) ";
					break;
				case 3:
					arr[i][j][1] = " translateX(0px) translateY(100px) ";
					break;
				case 4:
					arr[i][j][1] = " translateX(100px) translateY(100px)";
					break;
				case 5:
					arr[i][j][1] = " translateX(200px) translateY(100px) ";
					break;
				case 6:
					arr[i][j][1] = " translateX(0px) translateY(200px) ";
					break;
				case 7:
					arr[i][j][1] = " translateX(100px) translateY(200px) ";
					break;
				case 8:
					arr[i][j][1] = " translateX(200px) translateY(200px) ";
					break;
				default:
					break;
			}
		}
	}
	var gs = new zhuan();
	var flag = true;
	
	$(".U").click(gs.U);
	$(".U1").click(gs.U_);
	$(".L").click(gs.L);
	$(".L1").click(gs.L_);
	$(".F").click(gs.F);
	$(".F1").click(gs.F_);
	$(".B").click(gs.B);
	$(".B1").click(gs.B_);
	$(".R").click(gs.R);
	$(".R1").click(gs.R_);
	$(".D").click(gs.D);
	$(".D1").click(gs.D_);

	
	
	$(".move").click(function() {
//		var gongshi = $(".gongshi").val();
//		var newarr = gongshi.toUpperCase();
		var i=0;
//		newarr = newarr.split(" ")
        var newarr=["F","U","R","U'","R'","F'"]
		var zhisi=setInterval(function(){
			if(i==newarr.length){
				clearInterval(zhisi);
			}else{
			switch (newarr[i]) {
				case "F":
					gs.F();
					break;
				case "F'":
					gs.F_();
					break;
				case "B":
					gs.B();
					break;
				case "B'":
					gs.B_();
					break;
				case "L":
					gs.L();
					break;
				case "L'":
					gs.L_();
					break;
				case "R":
					gs.R();
					break;
				case "R'":
					gs.R_();
					break;
				case "D":
					gs.D();
					break;
				case "D'":
					gs.D_();
					break;
				case "U":
					gs.U();
					break;
				case "U'":
					gs.U_();
					break;
				default:
					break;
			}
			}
			i++;
		},1000)
				
			
		

	})

	function zhuan() {

		this.F = function() {
			var dushu = 0;
			var tim = setTimeout(function() {
				if (flag) {
					flag = false;
					var time = setInterval(function() {
						dushu += 5;
						for (var k = 0; k < 9; k++) {
							$($(".f1").children())[k].style.transform = tc + " rotateZ(" + dushu + "deg)" + arr[0][k][1];
						}
						$($(".f2").children())[0].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[1][0][1]
						$($(".f2").children())[3].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[1][3][1]
						$($(".f2").children())[6].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[1][6][1]

						$($(".f3").children())[0].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[2][0][1]
						$($(".f3").children())[1].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[2][1][1]
						$($(".f3").children())[2].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[2][2][1]

						$($(".f4").children())[6].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[3][6][1]
						$($(".f4").children())[7].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[3][7][1]
						$($(".f4").children())[8].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[3][8][1]

						$($(".f5").children())[2].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[4][2][1]
						$($(".f5").children())[5].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[4][5][1]
						$($(".f5").children())[8].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[4][8][1]
						if (dushu % 90 == 0) {
							if (dushu == 360) {
								dushu = 0;
							}
							flag = true;
							huifu();
							huan();
							clearInterval(time);

						}
					}, 15)
				}
			}, 0)

			function huan() {

				var s = arr[0][0][0];
				//F面的四个角块旋转替换
				arr[0][0][0] = arr[0][6][0];
				arr[0][6][0] = arr[0][8][0];
				arr[0][8][0] = arr[0][2][0];
				arr[0][2][0] = s;
				s = arr[0][1][0];
				//F面的四个棱块旋转替换
				arr[0][1][0] = arr[0][3][0];
				arr[0][3][0] = arr[0][7][0];
				arr[0][7][0] = arr[0][5][0];
				arr[0][5][0] = s;

				s = arr[1][0][0];
				//侧面的上块旋转替换
				arr[1][0][0] = arr[3][6][0];
				arr[3][6][0] = arr[4][8][0];
				arr[4][8][0] = arr[2][2][0];
				arr[2][2][0] = s;
				s = arr[1][3][0];
				//侧面的中块旋转替换
				arr[1][3][0] = arr[3][7][0];
				arr[3][7][0] = arr[4][5][0];
				arr[4][5][0] = arr[2][1][0];
				arr[2][1][0] = s;
				s = arr[1][6][0];
				//侧面的下块旋转替换
				arr[1][6][0] = arr[3][8][0];
				arr[3][8][0] = arr[4][2][0];
				arr[4][2][0] = arr[2][0][0];
				arr[2][0][0] = s;

				color();
			}

		}
		this.F_ = function() {
			var dushu = 0;
			var tim = setTimeout(function() {
				if (flag) {
					flag = false;
					var time = setInterval(function() {
						dushu -= 5;
						for (var k = 0; k < 9; k++) {
							$($(".f1").children())[k].style.transform = tc + " rotateZ(" + dushu + "deg)" + arr[0][k][1];
						}
						$($(".f2").children())[0].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[1][0][1]
						$($(".f2").children())[3].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[1][3][1]
						$($(".f2").children())[6].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[1][6][1]

						$($(".f3").children())[0].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[2][0][1]
						$($(".f3").children())[1].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[2][1][1]
						$($(".f3").children())[2].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[2][2][1]

						$($(".f4").children())[6].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[3][6][1]
						$($(".f4").children())[7].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[3][7][1]
						$($(".f4").children())[8].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[3][8][1]

						$($(".f5").children())[2].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[4][2][1]
						$($(".f5").children())[5].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[4][5][1]
						$($(".f5").children())[8].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[4][8][1]
						if (dushu % 90 == 0) {
							if (dushu == -360) {
								dushu = 0;
							}
							flag = true;
							huifu();
							huan();
							clearInterval(time);

						}
					}, 15)
				}
			}, 0)

			function huan() {

				var s = arr[0][6][0];
				//F面的四个角块旋转替换
				arr[0][6][0] = arr[0][0][0];
				arr[0][0][0] = arr[0][2][0];
				arr[0][2][0] = arr[0][8][0];
				arr[0][8][0] = s;
				s = arr[0][5][0];
				//F面的四个棱块旋转替换
				arr[0][5][0] = arr[0][7][0];
				arr[0][7][0] = arr[0][3][0];
				arr[0][3][0] = arr[0][1][0];
				arr[0][1][0] = s;

				s = arr[1][0][0];
				//侧面的上块旋转替换
				arr[1][0][0] = arr[2][2][0];
				arr[2][2][0] = arr[4][8][0];
				arr[4][8][0] = arr[3][6][0];
				arr[3][6][0] = s;

				s = arr[1][3][0];
				//侧面的中块旋转替换
				arr[1][3][0] = arr[2][1][0];
				arr[2][1][0] = arr[4][5][0];
				arr[4][5][0] = arr[3][7][0];
				arr[3][7][0] = s;

				s = arr[1][6][0];
				//侧面的下块旋转替换
				arr[1][6][0] = arr[2][0][0];
				arr[2][0][0] = arr[4][2][0];
				arr[4][2][0] = arr[3][8][0];
				arr[3][8][0] = s;
				color();

			}
		}
		this.B = function() {
			var dushu = 0;
			var tim = setTimeout(function() {
				if (flag) {
					flag = false;
					var time = setInterval(function() {
						dushu += 5;
						for (var k = 0; k < 9; k++) {
							$($(".f6").children())[k].style.transform = tc + " rotateZ(" + dushu + "deg)" + arr[0][k][1];
						}
						$($(".f5").children())[0].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[4][0][1]
						$($(".f5").children())[3].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[4][3][1]
						$($(".f5").children())[6].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[4][6][1]

						$($(".f4").children())[0].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[3][0][1]
						$($(".f4").children())[1].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[3][1][1]
						$($(".f4").children())[2].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[3][2][1]

						$($(".f3").children())[6].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[2][6][1]
						$($(".f3").children())[7].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[2][7][1]
						$($(".f3").children())[8].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[2][8][1]

						$($(".f2").children())[2].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[1][2][1]
						$($(".f2").children())[5].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[1][5][1]
						$($(".f2").children())[8].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[1][8][1]
						if (dushu % 90 == 0) {
							if (dushu == 360) {
								dushu = 0;
							}
							flag = true;
							huifu();
							huan();
							clearInterval(time);

						}
					}, 15)
				}
			}, 0)

			function huan() {

				var s = arr[5][0][0];
				//F面的四个角块旋转替换
				arr[5][0][0] = arr[5][6][0];
				arr[5][6][0] = arr[5][8][0];
				arr[5][8][0] = arr[5][2][0];
				arr[5][2][0] = s;
				s = arr[5][1][0];
				//F面的四个棱块旋转替换
				arr[5][1][0] = arr[5][3][0];
				arr[5][3][0] = arr[5][7][0];
				arr[5][7][0] = arr[5][5][0];
				arr[5][5][0] = s;

				s = arr[4][0][0];
				//侧面的上块旋转替换
				arr[4][0][0] = arr[3][2][0];
				arr[3][2][0] = arr[1][8][0];
				arr[1][8][0] = arr[2][6][0];
				arr[2][6][0] = s;

				s = arr[4][3][0];
				//侧面的中块旋转替换
				arr[4][3][0] = arr[3][1][0];
				arr[3][1][0] = arr[1][5][0];
				arr[1][5][0] = arr[2][7][0];
				arr[2][7][0] = s;

				s = arr[4][6][0];
				//侧面的下块旋转替换
				arr[4][6][0] = arr[3][0][0];
				arr[3][0][0] = arr[1][2][0];
				arr[1][2][0] = arr[2][8][0];
				arr[2][8][0] = s;
				color();

			}
		}
		this.B_ = function() {
			var dushu = 0;
			var tim = setTimeout(function() {
				if (flag) {
					flag = false;
					var time = setInterval(function() {
						dushu -= 5;
						for (var k = 0; k < 9; k++) {
							$($(".f6").children())[k].style.transform = tc + " rotateZ(" + dushu + "deg)" + arr[0][k][1];
						}
						$($(".f5").children())[0].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[0][0][1]
						$($(".f5").children())[3].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[0][3][1]
						$($(".f5").children())[6].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[0][6][1]

						$($(".f4").children())[0].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[0][0][1]
						$($(".f4").children())[1].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[0][1][1]
						$($(".f4").children())[2].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[0][2][1]

						$($(".f3").children())[6].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[0][6][1]
						$($(".f3").children())[7].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[0][7][1]
						$($(".f3").children())[8].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[0][8][1]

						$($(".f2").children())[2].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[0][2][1]
						$($(".f2").children())[5].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[0][5][1]
						$($(".f2").children())[8].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[0][8][1]
						if (dushu % 90 == 0) {
							if (dushu == -360) {
								dushu = 0;
							}
							flag = true;
							huifu();
							huan();
							clearInterval(time);

						}
					}, 15)
				}
			}, 0)

			function huan() {

				var s = arr[5][6][0];
				//F面的四个角块旋转替换
				arr[5][6][0] = arr[5][0][0];
				arr[5][0][0] = arr[5][2][0];
				arr[5][2][0] = arr[5][8][0];
				arr[5][8][0] = s;
				s = arr[5][5][0];
				//F面的四个棱块旋转替换
				arr[5][5][0] = arr[5][7][0];
				arr[5][7][0] = arr[5][3][0];
				arr[5][3][0] = arr[5][1][0];
				arr[5][1][0] = s;
				s = arr[4][0][0];
				//侧面的上块旋转替换
				arr[4][0][0] = arr[2][6][0];
				arr[2][6][0] = arr[1][8][0];
				arr[1][8][0] = arr[3][2][0];
				arr[3][2][0] = s;

				s = arr[4][3][0];
				//侧面的中块旋转替换
				arr[4][3][0] = arr[2][7][0];
				arr[2][7][0] = arr[1][5][0];
				arr[1][5][0] = arr[3][1][0];
				arr[3][1][0] = s;

				s = arr[4][6][0];
				//侧面的下块旋转替换
				arr[4][6][0] = arr[2][8][0];
				arr[2][8][0] = arr[1][2][0];
				arr[1][2][0] = arr[3][0][0];
				arr[3][0][0] = s;
				color();

			}
		}
		this.L = function() {
			var dushu = 0;
			var tim = setTimeout(function() {
				if (flag) {
					flag = false;
					var time = setInterval(function() {
						dushu += 5;
						for (var k = 0; k < 9; k++) {
							$($(".f5").children())[k].style.transform = tc + " rotateZ(" + dushu + "deg)" + arr[4][k][1];
						}
						$($(".f4").children())[0].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[3][0][1]
						$($(".f4").children())[3].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[3][3][1]
						$($(".f4").children())[6].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[3][6][1]

						$($(".f1").children())[0].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[0][0][1]
						$($(".f1").children())[3].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[0][3][1]
						$($(".f1").children())[6].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[0][6][1]

						$($(".f3").children())[0].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[2][0][1]
						$($(".f3").children())[3].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[2][3][1]
						$($(".f3").children())[6].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[2][6][1]

						$($(".f6").children())[2].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[5][2][1]
						$($(".f6").children())[5].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[5][5][1]
						$($(".f6").children())[8].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[5][8][1]
						if (dushu % 90 == 0) {
							if (dushu == 360) {
								dushu = 0;
							}
							flag = true;
							huifu();
							huan();
							clearInterval(time);

						}
					}, 15)
				}
			}, 0)

			function huan() {

				var s = arr[4][0][0];
				//F面的四个角块旋转替换
				arr[4][0][0] = arr[4][6][0];
				arr[4][6][0] = arr[4][8][0];
				arr[4][8][0] = arr[4][2][0];
				arr[4][2][0] = s;
				s = arr[4][1][0];
				//F面的四个棱块旋转替换
				arr[4][1][0] = arr[4][3][0];
				arr[4][3][0] = arr[4][7][0];
				arr[4][7][0] = arr[4][5][0];
				arr[4][5][0] = s;

				s = arr[0][0][0];
				//侧面的上块旋转替换
				arr[0][0][0] = arr[3][0][0];
				arr[3][0][0] = arr[5][8][0];
				arr[5][8][0] = arr[2][0][0];
				arr[2][0][0] = s;

				s = arr[0][3][0];
				//侧面的中块旋转替换
				arr[0][3][0] = arr[3][3][0];
				arr[3][3][0] = arr[5][5][0];
				arr[5][5][0] = arr[2][3][0];
				arr[2][3][0] = s;

				s = arr[0][6][0];
				//侧面的下块旋转替换
				arr[0][6][0] = arr[3][6][0];
				arr[3][6][0] = arr[5][2][0];
				arr[5][2][0] = arr[2][6][0];
				arr[2][6][0] = s;
				color();

			}
		}
		this.L_ = function() {
			var dushu = 0;
			var tim = setTimeout(function() {
				if (flag) {
					flag = false;
					var time = setInterval(function() {
						dushu -= 5;
						for (var k = 0; k < 9; k++) {
							$($(".f5").children())[k].style.transform = tc + " rotateZ(" + dushu + "deg)" + arr[4][k][1];
						}
						$($(".f4").children())[0].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[3][0][1]
						$($(".f4").children())[3].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[3][3][1]
						$($(".f4").children())[6].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[3][6][1]

						$($(".f1").children())[0].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[0][0][1]
						$($(".f1").children())[3].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[0][3][1]
						$($(".f1").children())[6].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[0][6][1]

						$($(".f3").children())[0].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[2][0][1]
						$($(".f3").children())[3].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[2][3][1]
						$($(".f3").children())[6].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[2][6][1]

						$($(".f6").children())[2].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[1][2][1]
						$($(".f6").children())[5].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[1][5][1]
						$($(".f6").children())[8].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[1][8][1]
						if (dushu % 90 == 0) {
							if (dushu == -360) {
								dushu = 0;
							}
							flag = true;
							huifu();
							huan();
							clearInterval(time);

						}
					}, 15)
				}
			}, 0)

			function huan() {

				var s = arr[4][6][0];
				//F面的四个角块旋转替换
				arr[4][6][0] = arr[4][0][0];
				arr[4][0][0] = arr[4][2][0];
				arr[4][2][0] = arr[4][8][0];
				arr[4][8][0] = s;
				s = arr[4][5][0];
				//F面的四个棱块旋转替换
				arr[4][5][0] = arr[4][7][0];
				arr[4][7][0] = arr[4][3][0];
				arr[4][3][0] = arr[4][1][0];
				arr[4][1][0] = s;

				s = arr[0][0][0];
				//侧面的上块旋转替换
				arr[0][0][0] = arr[2][0][0];
				arr[2][0][0] = arr[5][8][0];
				arr[5][8][0] = arr[3][0][0];
				arr[3][0][0] = s;

				s = arr[0][3][0];
				//侧面的中块旋转替换
				arr[0][3][0] = arr[2][3][0];
				arr[2][3][0] = arr[5][5][0];
				arr[5][5][0] = arr[3][3][0];
				arr[3][3][0] = s;

				s = arr[0][6][0];
				//侧面的下块旋转替换
				arr[0][6][0] = arr[2][6][0];
				arr[2][6][0] = arr[5][2][0];
				arr[5][2][0] = arr[3][6][0];
				arr[3][6][0] = s;
				color();

			}
		}
		this.R = function() {
			var dushu = 0;
			var tim = setTimeout(function() {
				if (flag) {
					flag = false;
					var time = setInterval(function() {
						dushu += 5;
						for (var k = 0; k < 9; k++) {
							$($(".f2").children())[k].style.transform = tc + " rotateZ(" + dushu + "deg)" + arr[1][k][1];
						}
						$($(".f1").children())[2].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[0][2][1]
						$($(".f1").children())[5].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[0][5][1]
						$($(".f1").children())[8].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[0][8][1]

						$($(".f4").children())[2].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[3][2][1]
						$($(".f4").children())[5].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[3][5][1]
						$($(".f4").children())[8].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[3][8][1]

						$($(".f3").children())[2].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[2][2][1]
						$($(".f3").children())[5].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[2][5][1]
						$($(".f3").children())[8].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[2][8][1]

						$($(".f6").children())[0].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[5][0][1]
						$($(".f6").children())[3].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[5][3][1]
						$($(".f6").children())[6].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[5][6][1]
						if (dushu % 90 == 0) {
							if (dushu == 360) {
								dushu = 0;
							}
							flag = true;
							huifu();
							huan();
							clearInterval(time);

						}
					}, 15)
				}
			}, 0)

			function huan() {

				var s = arr[1][0][0];
				//F面的四个角块旋转替换
				arr[1][0][0] = arr[1][6][0];
				arr[1][6][0] = arr[1][8][0];
				arr[1][8][0] = arr[1][2][0];
				arr[1][2][0] = s;
				s = arr[1][1][0];
				//F面的四个棱块旋转替换
				arr[1][1][0] = arr[1][3][0];
				arr[1][3][0] = arr[1][7][0];
				arr[1][7][0] = arr[1][5][0];
				arr[1][5][0] = s;

				s = arr[5][0][0];
				//侧面的上块旋转替换
				arr[5][0][0] = arr[3][8][0];
				arr[3][8][0] = arr[0][8][0];
				arr[0][8][0] = arr[2][8][0];
				arr[2][8][0] = s;

				s = arr[5][3][0];
				//侧面的中块旋转替换
				arr[5][3][0] = arr[3][5][0];
				arr[3][5][0] = arr[0][5][0];
				arr[0][5][0] = arr[2][5][0];
				arr[2][5][0] = s;
				
				s = arr[5][6][0];
				//侧面的下块旋转替换
				arr[5][6][0] = arr[3][2][0];
				arr[3][2][0] = arr[0][2][0];
				arr[0][2][0] = arr[2][2][0];
				arr[2][2][0] = s;
				color();

				

			}
		}
		this.R_ = function() {
			var dushu = 0;
			var tim = setTimeout(function() {
				if (flag) {
					flag = false;
					var time = setInterval(function() {
						dushu -= 5;
						for (var k = 0; k < 9; k++) {
							$($(".f2").children())[k].style.transform = tc + " rotateZ(" + dushu + "deg)" + arr[1][k][1];
						}
						$($(".f1").children())[2].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[0][2][1]
						$($(".f1").children())[5].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[0][5][1]
						$($(".f1").children())[8].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[0][8][1]

						$($(".f4").children())[2].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[3][2][1]
						$($(".f4").children())[5].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[3][5][1]
						$($(".f4").children())[8].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[3][8][1]

						$($(".f3").children())[2].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[2][2][1]
						$($(".f3").children())[5].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[2][5][1]
						$($(".f3").children())[8].style.transform = tc + " rotateX(" + dushu + "deg)" + arr[2][8][1]

						$($(".f6").children())[0].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[5][0][1]
						$($(".f6").children())[3].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[5][3][1]
						$($(".f6").children())[6].style.transform = tc + " rotateX(" + -dushu + "deg)" + arr[5][6][1]
						if (dushu % 90 == 0) {
							if (dushu == -360) {
								dushu = 0;
							}
							flag = true;
							huifu();
							huan();
							clearInterval(time);

						}
					}, 15)
				}
			}, 0)

			function huan() {

				var s = arr[1][6][0];
				//F面的四个角块旋转替换
				arr[1][6][0] = arr[1][0][0];
				arr[1][0][0] = arr[1][2][0];
				arr[1][2][0] = arr[1][8][0];
				arr[1][8][0] = s;
				s = arr[1][5][0];
				//F面的四个棱块旋转替换
				arr[1][5][0] = arr[1][7][0];
				arr[1][7][0] = arr[1][3][0];
				arr[1][3][0] = arr[1][1][0];
				arr[1][1][0] = s;

				s = arr[5][0][0];
				//侧面的上块旋转替换
				arr[5][0][0] = arr[2][8][0];
				arr[2][8][0] = arr[0][8][0];
				arr[0][8][0] = arr[3][8][0];
				arr[3][8][0] = s;

				s = arr[5][3][0];
				//侧面的中块旋转替换
				arr[5][3][0] = arr[2][5][0];
				arr[2][5][0] = arr[0][5][0];
				arr[0][5][0] = arr[3][5][0];
				arr[3][5][0] = s;
				
				s = arr[5][6][0];
				//侧面的下块旋转替换
				arr[5][6][0] = arr[2][2][0];
				arr[2][2][0] = arr[0][2][0];
				arr[0][2][0] = arr[3][2][0];
				arr[3][2][0] = s;
				color();

				

			}
		}
		this.D = function() {
			var dushu = 0;
			var tim = setTimeout(function() {
				if (flag) {
					flag = false;
					var time = setInterval(function() {
						dushu += 5;
						for (var k = 0; k < 9; k++) {
							$($(".f3").children())[k].style.transform = tc + " rotateZ(" + dushu + "deg)" + arr[2][k][1];
						}
						$($(".f2").children())[6].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[1][6][1]
						$($(".f2").children())[7].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[1][7][1]
						$($(".f2").children())[8].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[1][8][1]

						$($(".f6").children())[6].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[5][6][1]
						$($(".f6").children())[7].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[5][7][1]
						$($(".f6").children())[8].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[5][8][1]

						$($(".f5").children())[6].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[4][6][1]
						$($(".f5").children())[7].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[4][7][1]
						$($(".f5").children())[8].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[4][8][1]

						$($(".f1").children())[6].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[0][6][1]
						$($(".f1").children())[7].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[0][7][1]
						$($(".f1").children())[8].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[0][8][1]
						if (dushu % 90 == 0) {
							if (dushu == 360) {
								dushu = 0;
							}
							flag = true;
							huifu();
							huan();
							clearInterval(time);

						}
					}, 15)
				}
			}, 0)

			function huan() {

				var s = arr[2][0][0];
				//F面的四个角块旋转替换
				arr[2][0][0] = arr[2][6][0];
				arr[2][6][0] = arr[2][8][0];
				arr[2][8][0] = arr[2][2][0];
				arr[2][2][0] = s;
				s = arr[2][1][0];
				//F面的四个棱块旋转替换
				arr[2][1][0] = arr[2][3][0];
				arr[2][3][0] = arr[2][7][0];
				arr[2][7][0] = arr[2][5][0];
				arr[2][5][0] = s;

				s = arr[1][6][0];
				//侧面的上块旋转替换
				arr[1][6][0] = arr[0][6][0];
				arr[0][6][0] = arr[4][6][0];
				arr[4][6][0] = arr[5][6][0];
				arr[5][6][0] = s;
				s = arr[1][7][0];
				//侧面的中块旋转替换
				arr[1][7][0] = arr[0][7][0];
				arr[0][7][0] = arr[4][7][0];
				arr[4][7][0] = arr[5][7][0];
				arr[5][7][0] = s;
				s = arr[1][8][0];
				//侧面的下块旋转替换
				arr[1][8][0] = arr[0][8][0];
				arr[0][8][0] = arr[4][8][0];
				arr[4][8][0] = arr[5][8][0];
				arr[5][8][0] = s;

				color();
			}
		}
		this.D_ = function() {
			var dushu = 0;
			var tim = setTimeout(function() {
				if (flag) {
					flag = false;
					var time = setInterval(function() {
						dushu -= 5;
						for (var k = 0; k < 9; k++) {
							$($(".f3").children())[k].style.transform = tc + " rotateZ(" + dushu + "deg)" + arr[2][k][1];
						}
						$($(".f2").children())[6].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[1][6][1]
						$($(".f2").children())[7].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[1][7][1]
						$($(".f2").children())[8].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[1][8][1]

						$($(".f6").children())[6].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[5][6][1]
						$($(".f6").children())[7].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[5][7][1]
						$($(".f6").children())[8].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[5][8][1]

						$($(".f5").children())[6].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[4][6][1]
						$($(".f5").children())[7].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[4][7][1]
						$($(".f5").children())[8].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[4][8][1]

						$($(".f1").children())[6].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[0][6][1]
						$($(".f1").children())[7].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[0][7][1]
						$($(".f1").children())[8].style.transform = tc + " rotateY(" + dushu + "deg)" + arr[0][8][1]
						if (dushu % 90 == 0) {
							if (dushu == -360) {
								dushu = 0;
							}
							flag = true;
							huifu();
							huan();
							clearInterval(time);

						}
					}, 15)
				}
			}, 0)

			function huan() {

				var s = arr[2][0][0];
				//F面的四个角块旋转替换
				arr[2][0][0] = arr[2][2][0];
				arr[2][2][0] = arr[2][8][0];
				arr[2][8][0] = arr[2][6][0];
				arr[2][6][0] = s;
				s = arr[2][1][0];
				//F面的四个棱块旋转替换
				arr[2][1][0] = arr[2][5][0];
				arr[2][5][0] = arr[2][7][0];
				arr[2][7][0] = arr[2][3][0];
				arr[2][3][0] = s;

				s = arr[1][6][0];
				//侧面的上块旋转替换
				arr[1][6][0] = arr[5][6][0];
				arr[5][6][0] = arr[4][6][0];
				arr[4][6][0] = arr[0][6][0];
				arr[0][6][0] = s;
				s = arr[1][7][0];
				//侧面的中块旋转替换
				arr[1][7][0] = arr[5][7][0];
				arr[5][7][0] = arr[4][7][0];
				arr[4][7][0] = arr[0][7][0];
				arr[0][7][0] = s;
				s = arr[1][8][0];
				//侧面的下块旋转替换
				arr[1][8][0] = arr[5][8][0];
				arr[5][8][0] = arr[4][8][0];
				arr[4][8][0] = arr[0][8][0];
				arr[0][8][0] = s;

				color();
			}
		}
		this.U = function() {
			var dushu = 0;
			var tim = setTimeout(function() {
				if (flag) {
					flag = false;
					var time = setInterval(function() {
						dushu += 5;
						for (var k = 0; k < 9; k++) {
							$($(".f4").children())[k].style.transform = tc + " rotateZ(" + dushu + "deg)" + arr[3][k][1];
						}
						$($(".f2").children())[0].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[1][0][1]
						$($(".f2").children())[1].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[1][1][1]
						$($(".f2").children())[2].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[1][2][1]

						$($(".f6").children())[0].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[5][0][1]
						$($(".f6").children())[1].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[5][1][1]
						$($(".f6").children())[2].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[5][2][1]

						$($(".f5").children())[0].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[4][0][1]
						$($(".f5").children())[1].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[4][1][1]
						$($(".f5").children())[2].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[4][2][1]

						$($(".f1").children())[0].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[0][0][1]
						$($(".f1").children())[1].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[0][1][1]
						$($(".f1").children())[2].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[0][2][1]
						if (dushu % 90 == 0) {
							if (dushu == 360) {
								dushu = 0;
							}
							flag = true;
							huifu();
							huan();
							clearInterval(time);

						}
					}, 15)
				}
			}, 0)

			function huan() {

				var s = arr[3][0][0];
				//F面的四个角块旋转替换
				arr[3][0][0] = arr[3][6][0];
				arr[3][6][0] = arr[3][8][0];
				arr[3][8][0] = arr[3][2][0];
				arr[3][2][0] = s;
				s = arr[3][1][0];
				//F面的四个棱块旋转替换
				arr[3][1][0] = arr[3][3][0];
				arr[3][3][0] = arr[3][7][0];
				arr[3][7][0] = arr[3][5][0];
				arr[3][5][0] = s;

				s = arr[1][2][0];
				//侧面的上块旋转替换
				arr[1][2][0] = arr[5][2][0];
				arr[5][2][0] = arr[4][2][0];
				arr[4][2][0] = arr[0][2][0];
				arr[0][2][0] = s;
				s = arr[1][1][0];
				//侧面的中块旋转替换
				arr[1][1][0] = arr[5][1][0];
				arr[5][1][0] = arr[4][1][0];
				arr[4][1][0] = arr[0][1][0];
				arr[0][1][0] = s;
				s = arr[1][0][0];
				//侧面的下块旋转替换
				arr[1][0][0] = arr[5][0][0];
				arr[5][0][0] = arr[4][0][0];
				arr[4][0][0] = arr[0][0][0];
				arr[0][0][0] = s;

				color();
			}
		}
		this.U_ = function() {
			var dushu = 0;
			var tim = setTimeout(function() {
				if (flag) {
					flag = false;
					var time = setInterval(function() {
						dushu -= 5;
						for (var k = 0; k < 9; k++) {
							$($(".f4").children())[k].style.transform = tc + " rotateZ(" + dushu + "deg)" + arr[3][k][1];
						}
						$($(".f2").children())[0].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[1][0][1]
						$($(".f2").children())[1].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[1][1][1]
						$($(".f2").children())[2].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[1][2][1]

						$($(".f6").children())[0].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[5][0][1]
						$($(".f6").children())[1].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[5][1][1]
						$($(".f6").children())[2].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[5][2][1]

						$($(".f5").children())[0].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[4][0][1]
						$($(".f5").children())[1].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[4][1][1]
						$($(".f5").children())[2].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[4][2][1]

						$($(".f1").children())[0].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[0][0][1]
						$($(".f1").children())[1].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[0][1][1]
						$($(".f1").children())[2].style.transform = tc + " rotateY(" + -dushu + "deg)" + arr[0][2][1]
						if (dushu % 90 == 0) {
							if (dushu == -360) {
								dushu = 0;
							}
							flag = true;
							huifu();
							huan();
							clearInterval(time);

						}
					}, 15)
				}
			}, 0)

			function huan() {

				var s = arr[3][0][0];
				//F面的四个角块旋转替换
				arr[3][0][0] = arr[3][2][0];
				arr[3][2][0] = arr[3][8][0];
				arr[3][8][0] = arr[3][6][0];
				arr[3][6][0] = s;
				s = arr[3][1][0];
				//F面的四个棱块旋转替换
				arr[3][1][0] = arr[3][5][0];
				arr[3][5][0] = arr[3][7][0];
				arr[3][7][0] = arr[3][3][0];
				arr[3][3][0] = s;

				s = arr[1][2][0];
				//侧面的上块旋转替换
				arr[1][2][0] = arr[0][2][0];
				arr[0][2][0] = arr[4][2][0];
				arr[4][2][0] = arr[5][2][0];
				arr[5][2][0] = s;
				s = arr[1][1][0];
				//侧面的中块旋转替换
				arr[1][1][0] = arr[0][1][0];
				arr[0][1][0] = arr[4][1][0];
				arr[4][1][0] = arr[5][1][0];
				arr[5][1][0] = s;
				s = arr[1][0][0];
				//侧面的下块旋转替换
				arr[1][0][0] = arr[0][0][0];
				arr[0][0][0] = arr[4][0][0];
				arr[4][0][0] = arr[5][0][0];
				arr[5][0][0] = s;

				color();
			}
		}
		


		function color() {
			$(".f1").children().each(function() {
				$(this).css("background", arr[0][$(this).index()][0])
			})
			$(".f2").children().each(function() {
				$(this).css("background", arr[1][$(this).index()][0])
			})
			$(".f3").children().each(function() {
				$(this).css("background", arr[2][$(this).index()][0])
			})
			$(".f4").children().each(function() {
				$(this).css("background", arr[3][$(this).index()][0])
			})
			$(".f5").children().each(function() {
				$(this).css("background", arr[4][$(this).index()][0])
			})
			$(".f6").children().each(function() {
				$(this).css("background", arr[5][$(this).index()][0])
			})
		}

		function huifu() {
			for (var k = 0; k < 9; k++) {
				$($(".f1").children())[k].style.transform = tc + arr[0][k][1];
				$($(".f2").children())[k].style.transform = tc + arr[1][k][1];
				$($(".f3").children())[k].style.transform = tc + arr[2][k][1];
				$($(".f4").children())[k].style.transform = tc + arr[3][k][1];
				$($(".f5").children())[k].style.transform = tc + arr[4][k][1];
				$($(".f6").children())[k].style.transform = tc + arr[5][k][1];
			}
		}
	}

}

//document.ondragstart = function() { //鼠标拖动时的事件
//	return false; //false不可选
//}
//document.onmousedown = function(ev) { //关闭鼠标拖动选择图片文字等
//	var eve = ev || window.event;
//	if (eve.preventDefault) {
//		eve.preventDefault();
//	} else {
//		eve.returnValue = false;
//	}
//}
//
//var a = -30,
//	b = -30;
//document.onmousedown = function(ev) {
//
//	var ev = ev || window.event;
//	var x = ev.clientX;
//	var y = ev.clientY;
//	document.onmousemove = function(ev) {
//		var ev = ev || window.event;
//		var X = ev.clientX;
//		var Y = ev.clientY;
//		var le = X - x;
//		var tp = Y - y;
//		b -= tp * 0.1;
//		a += le * 0.1;
//		$(".box").css("transform", " rotateX(" + b + "deg) rotateY(" + a + "deg)");
//		x = X;
//		y = Y;
//	}
//	document.onmouseup = function() {
//		document.onmousemove = null;
//	}
//}//		this.CR=function(){
//			var box=document.querySelector(".box");
//			var dushu=-30;
//			var dushu1=30;
//			var dushu2=0;
//		    var time = setTimeout(function() {
//				if (flag) {
//					flag = false;
//					var time = setInterval(function() {
//						dushu += 5;
//						dushu1-=(30*(5/90));
//						dushu2+=(30*(5/90));
//						if(dushu1<0){dushu1=0;}
//						if(dushu2>30){dushu2=30;}
//		    box.style.transform=" rotateX(" + dushu + "deg) rotateY("+dushu1+"deg) rotateZ("+dushu2+")";
//						
//						
//						if (dushu ==60) {
//							flag = true;
//							huifu();
//							huan();
//							clearInterval(time);
//
//						}
//					}, 15)
//				}
//			}, 0)
//		    function huan() {
//
//				
//
//			}
//		}
//		this.CF=function(){}
//		this.CU=function(){}