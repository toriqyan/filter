var test = true;
var target = "Season";
var PAGES = 2;
var ELENUM = 5;
var TOTAL = PAGES*ELENUM;
var step = 0;
var str_result = target+'\n';
var tags = ["Occasion", "Style", "Season", "Ethnicity", "Body-shape"];
var references = {
	"Occasion":{
		"Professional-Work":[], 
		"Night-Out":[],
	    "Casual-Outing":[],
	    "Special-Occasions": []
	}, 
	"Style":{
		"Classic":["https://s-media-cache-ak0.pinimg.com/564x/dc/97/c9/dc97c90e37192f14b7a29ecdde08c269.jpg",
				   "https://s-media-cache-ak0.pinimg.com/564x/62/48/04/624804309174b5ac2f3793b208a2cfdb.jpg"], 
		"Trendy":["https://s-media-cache-ak0.pinimg.com/564x/7d/80/9c/7d809cae57df2645963e7d4b93e93a85.jpg",
				  "https://s-media-cache-ak0.pinimg.com/564x/c6/63/bf/c663bfbad217b140d1aba3d3a9948a38.jpg"], 
		"Bohemian":["https://s-media-cache-ak0.pinimg.com/564x/d9/f8/1c/d9f81ca91969bce6a8aa0fbdf587661c.jpg",
					"https://s-media-cache-ak0.pinimg.com/564x/1d/83/9d/1d839d04adce5486a368ee0e8f8dcb9f.jpg"], 
		"Dramatic":["https://s-media-cache-ak0.pinimg.com/564x/85/e7/99/85e7997c7ee3ea79e39f377bbcf32a82.jpg",
					"https://s-media-cache-ak0.pinimg.com/564x/98/6d/83/986d836f9ef731b51097e45fcb08697d.jpg"], 
		"Feminine":["https://s-media-cache-ak0.pinimg.com/564x/db/ba/27/dbba27380a7e6e137a12bbd788daf0a9.jpg",
					"https://s-media-cache-ak0.pinimg.com/564x/9c/8b/8f/9c8b8ffa2441c1184eed2a3c9d33522a.jpg"], 
		"Punk-Rock":["https://s-media-cache-ak0.pinimg.com/564x/ff/dc/09/ffdc099b20c4876a5a12722d6a0e5e4b.jpg",
				"https://s-media-cache-ak0.pinimg.com/564x/fa/86/26/fa8626c0d15e88ef71bcdde9b8699fd8.jpg"],
		"Don't-Know/Other":[]
	}, 
	"Season":
		{"Spring":[], 
		"Summer":[],
		"Fall":[],
		"Winter":[]},
	"Ethnicity":
		{"Caucasian":[],
		"African American":[],
		"Latino":[],
		"Asian":[],
		"Other":[]},
	"Body-shape":
		{"Slim":["https://i2.wp.com/chicstreetstyle.me/wp-content/uploads/2016/06/IMG_0571.jpg?resize=683%2C1024"],
		"Full":["http://i246.photobucket.com/albums/gg111/jadorecoutureblog/jadorecoutureblog005/jadore-couture-sleeveless-vest-dress.jpg~original"],
		"Plus":["https://s-media-cache-ak0.pinimg.com/564x/bc/c6/96/bcc696467a3b588b8e8897ed0c483001.jpg"]}
};
var inst = 
{
	"Occasion":"Please tag which occasion(s) this outfit is appropriate for: Work, Special Occasion, Weekend Casual, or Date night/Dining out. Select all that applies.",
	"Style":"Please tag which style(s) this outfit is: Classic, Trendy, Bohemian, Dramatic, Feminine, Punk Rock or Other. Select all that applies.",
	"Season":"Please tag which season(s) this outfit is good for: Spring, Summer, Fall or Winter. Select all that applies.",
	"Ethnicity":"Please tag the ethnicity of the model in the picture: Caucasian, African American, Latino, Asian or Other.",
	"Body-shape":"Please tag the model’s body size: Slim, Full or Plus.",
};
var tag_exp = 
{
	"Classic": "a timeless style with tailored looks",
    "Trendy": "a style that keeps up with the latest trends",
    "Bohemian": "a \"free spirit\" style, prints, fringes, maxi dresses, cowboy boots, loose and flowy",
    "Dramatic": "a theatric style, bold color, patterns and accessories",
    "Feminine": "a \"lady-like\" style, floral prints, full skirts, lace, bows and ruffles",
    "Punk-Rock": "a \"rock star\" style, leather, studs, and ripped jeans",
    "Casual-Outing": "outfit typically includes casual shoes like flats, sneakers, walking shoes.",
	"Night-Out": "dressier outfits, shoes typically have heels.",
	"Professional-Work": "outfits don’t show too much skin, suitable for work",
	"Special-Occasions": "formal outfits for black tie, weddings, etc."
};
var image_index;

$(document).ready(function() {
	if (test) {
		urls = ["http://images0.chictopia.com/photos/jamour/7500394172/jeffrey-campbell-boots-printed-zara-scarf-black-tote-drew-melie-bianco-bag_400.jpg",
				"http://images0.chictopia.com/photos/FrancescaPenko/9918850709/light-brown-wedge-forever-21-boots-white-cargo-skinny-currentelliott-jeans_400.jpg",
				"http://images2.chictopia.com/photos/sonyasjukebox/2326232580/navy-pleated-forever-21-shirt-red-impo-heels-31-phillip-lim-sweatshirt_400.jpg",
				"http://images0.chictopia.com/photos/OliviaL/3107109207/3107109207_400.jpg",
				"http://images2.chictopia.com/photos/falling4u/1782302674/sky-blue-jeans-army-green-thrifted-jacket-black-striped-forever-21-t-shirt_400.jpg",
				"http://images0.chictopia.com/photos/Myblondegal/9328375659/blue-korean-dress-beige-forever-21-jacket-beige-miss-nabi-bag_400.jpg",
				"http://images0.chictopia.com/photos/Janeisha/11078936344/11078936344_400.jpg",
				"http://cdn12.lbstatic.nu/files/looks/large/2016/01/18/4808615_feline.jpg?1453124230",
				"http://cdn9.lbstatic.nu/files/looks/large/2015/10/14/4709076_Asilio-Long-Grey-Coat-Boyfriend-Jeans-Proenza-Schouler-Ps11-5-copy.jpg?1444829832",
				"http://cdn11.lbstatic.nu/files/looks/large/2016/03/16/4866766_Leather_Stripes.jpg?1458160368"]
	}
	setup();
	
	next = document.getElementById('next');
	nextstep();
});

function setup() {
	image_index = parseInt(document.getElementById("imageIndex").value);

	if (isNaN(image_index)) {
	    image_index = 0;
	}
	image_index = 0;
	setupTag();

	$('#end').hide();
	$('#submit').hide();
	$('#task').hide();
	$('#description').show();
}

function setupTag() {
	var task = document.getElementById('task');
	var i = 0;
	var out = "";
	for (var category in references) {
		out+='<div class="tag" id="'+category
			+'"><div class="reference"><p>'+ inst[category] 
			+'</p>';
		if (references[category].length >0) {
			// out+='<h3>For reference: </h3>';
		}
		// var button_sec = '<fieldset class=\"'+category +'\">';
		var button_sec = ''
		for (var option in references[category]) {
			// console.log(option);
			// if (references[category][option].length != 0) {
			if ((option in tag_exp)) {
				// out+='<ul class=\"imagewrap\"><legend>'+option+': </legend>';
			// } else {
				out+='<ul class=\"imagewrap\"><legend style="width:300px;">'+option+': '+tag_exp[option]+'</legend>';
			}
			
			// for (var reference in references[category][option]) {
			// 	out+='<li><img src=\"'+ references[category][option][reference] +'\"></li>';
			// }
			out+='</ul>';
			// }
			// if (category == "ethnicity" ||category =="body-shape") {
			button_sec+='<div class="checkbox"><label><input name=\"'
				+category+'Answer\" type=\"checkbox\" value=\"'+option
				+'\" />'+option+'</label></div>';
			// } else {
				// button_sec+='<div class="checkbox"><label><input name=\"'
				// 	+category+'Answer\" type=\"checkbox\" value=\"'+option
				// 	+'\" />'+option+'</label></div>';
			// }
		}
		out+='</div>';
		if (category == target) {
			for (var j = 0; j < PAGES; j++) {
				out+='<ul id="'+category+j+'">';
				for (var i = 0; i < ELENUM; i++) {
					// console.log(urls[image_index]);
					var temp_button = button_sec;
					var old = '';
					while (old != temp_button) {
						old = temp_button;
						temp_button = temp_button.replace('<input name=\"'+category+'Answer\"', '<input name="images'+image_index+'"');
					}
					temp_button = '<fieldset class="images'+image_index+'">' + temp_button;
					out+= '<li><div class="images" id="images'+image_index+'"><img src=\"'+urls[image_index]+'\">'+temp_button+'</div></li>';
					image_index++;
				}
				// out+='<button style="float: right;" name="next" onclick="$(\'#next\').click()" type="button">Next</button></fieldset>';
				out+='</ul>';
			}
		}

		out+='</div>';
	}
	task.innerHTML = out;
}

function nextstep() {
	$('#next').click(function() {
		if (step == 0) {
			if($('#workerId').val() == "") {
				alert("Please accept the HIT before proceeding!");
				return;
			}
			
			str_result+=("workerId: "+$('#workerId').val()+"\n");
			str_result+=("assignmentId: "+$('#assignmentId').val()+"\n");
			str_result+=("hitId: "+$('#hitId').val()+"\n");
			$('#description').hide();
			$('#task').show();
			// $('#next').hide();
			$('#'+target).show();
			$('#'+target+'0').show();
			$('#'+target+'1').hide();
			$('#'+target+'2').hide();
			for (var i = 0; i < tags.length; i++) {
				if (tags[i] != target) {
					$('#'+tags[i]).hide();
				}
			}
		} else if(step < PAGES) {
			var out = "";
			for (var i = image_index-TOTAL+(step-1)*ELENUM; i < image_index-TOTAL+step*ELENUM; i++) {
				var result = "";
				$('#images'+i+' input:checked').each(function() {
					var cur_tag = $(this).val();
					result+=i+" "+cur_tag+"\n";
				});
				if (result == "") {
					alert("You have to select a tag for image" + (i-image_index+TOTAL-(step-1)*ELENUM+1));
					return;
				}
				out+=result;
			}
			str_result+=out;
			
			window.scrollTo(0, 0);
			$('#'+target+step).show();
			$('#'+target+(step-1)).hide();
		} else {
			for (var i = image_index-TOTAL+(step-1)*ELENUM; i < image_index-TOTAL+step*ELENUM; i++) {
				var result = "";
				$('#images'+i+' input:checked').each(function() {
					var cur_tag = $(this).val();
					result+=i+" "+cur_tag+"\n";
				});
				if (result == "") {
					alert("You have to select a tag for image" + (i-image_index+TOTAL-(step-1)*ELENUM+1));
					return;
				}
				str_result+=result;
			}
			window.scrollTo(0, 0);
			$('#task').hide();
			$('#next').hide();
			$('#end').show();
			$('#submit').show();
			document.getElementById('user-input').value = str_result;
		} 
		step++;
		console.log(str_result);
	});
}
