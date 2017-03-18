var decode;
var decodeArr = [];
var item = [];
var info = [];
var html = '';

$(document).ready(function(){
	
	for (var i=1;i<=12;i++) {
		var month = $('#month').html();
		month += ('<option value="Tháng ' + i +'">' + i + '</option>');
		$('#month').html(month);
	}
	for (var k=1;k<=31;k++) {
		var date = $('#date').html();
		date += ('<option value="Ngày ' + k +'">' + k + '</option>');
		$('#date').html(date);
	}
	for (var j=1990;j<=2005;j++) {
		var year = $('#year').html();
		year += ('<option value="Năm ' + j +'">' + j + '</option>');
		$('#year').html(year);
	}

	if (window.location.href != "https://hieudo212.github.io/Form/register.html") {
		decode = decodeURIComponent(window.location.search).substr(1);
		decodeArr = decode.split('&');
		for (var i=0;i<decodeArr.length;i++) {
			item[i] = (decodeArr[i].split('='))[0];
			info[i] = (decodeArr[i].split('='))[1].replace(/\+/g, ' ');
		}
		var monthIndex = item.indexOf('month');
		var dateIndex = item.indexOf('date');
		var yearIndex = item.indexOf('year');
		item[dateIndex] = "DOB";
		item[monthIndex] = item [yearIndex] = '';
		info[dateIndex] = info[dateIndex] + ' ' + info[monthIndex] + ' ' + info[yearIndex];
		for (var j=0;j<decodeArr.length;j++) {
			if (item[j] != '') {
				html += ('<span class="item">' + item[j] + '</span>' + ': ' + info[j] + '<br/>');
			}
		}
		$('.info').html(html);
	}
})

$("#month").change(function() {
	var i = Number($("#month option:selected").text());
	switch(i) {
		case 2:
			var date = '<option disabled selected hidden>Ngày</option>';
			for (var k=1;k<=28;k++) {

				date += ('<option value="Ngày ' + k +'">' + k + '</option>');
				$('#date').html(date);
			}
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			var date = '<option disabled selected hidden>Ngày</option>';
			for (var l=1;l<=30;l++) {
				date += ('<option value="Ngày ' + l +'">' + l + '</option>');
				$('#date').html(date);
			}
			break;
		default:
			var date = '<option disabled selected hidden>Ngày</option>';
			for (var m=1;m<=31;m++) {
				date += ('<option value="Ngày ' + m +'">' + m + '</option>');
				$('#date').html(date);
			}
			break;
	}
});
