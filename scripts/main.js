$(function () {

	var i = $(".solutionsOverview .cube");
    var a = document.querySelectorAll(".solutionsOverview .currentFace");
    var l = {

        angleShift: 90,

        state: {

            currentFace: 0,

            currentAngle: 0

        }
    };

    var setAngle = function(currentFace, cubeElement, l) {

	    $(cubeElement).css('transform', "rotateY(" + l.state.currentAngle + "deg)");

	    for (var i = 0; i < a.length; i++) a[i].classList.remove("selectFace");

	    a[l.state.currentFace].classList.add("selectFace");

	}

	$('.currentFace').click(function (e) {
		var currentFace = $(this).data('face');

		l.state.currentFace = currentFace;

		switch(currentFace) {
			case 1:
				l.state.currentAngle = 90;
				break;
			case 2:
				l.state.currentAngle = 180;
				break;
			case 3:
				l.state.currentAngle = 270;
				break;
			case 0:
			default:
				l.state.currentAngle = 0;
		}

		for (var t = 0; t < a.length; t++) a[t].classList.remove("selectFace"), a[l.state.currentFace].classList.add("selectFace");

		setAngle(currentFace, i, l);
	});

});