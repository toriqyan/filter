var test = false;
var target = "Style";
var PAGES = 2;
var ELENUM = 5;
var TOTAL = PAGES*ELENUM;
var step = 0;
var str_result = target+'\n';
var tags = ["Occasion", "Style", "Temperature", "Ethnicity", "Body-size"];
var spam_c = ["http://images0.chictopia.com/photos/jamour/7500394172/jeffrey-campbell-boots-printed-zara-scarf-black-tote-drew-melie-bianco-bag_400.jpg",
			"http://images0.chictopia.com/photos/FrancescaPenko/9918850709/light-brown-wedge-forever-21-boots-white-cargo-skinny-currentelliott-jeans_400.jpg",
			"http://images2.chictopia.com/photos/sonyasjukebox/2326232580/navy-pleated-forever-21-shirt-red-impo-heels-31-phillip-lim-sweatshirt_400.jpg",
			"http://images0.chictopia.com/photos/OliviaL/3107109207/3107109207_400.jpg",
			"http://images2.chictopia.com/photos/falling4u/1782302674/sky-blue-jeans-army-green-thrifted-jacket-black-striped-forever-21-t-shirt_400.jpg",
			"http://images0.chictopia.com/photos/Myblondegal/9328375659/blue-korean-dress-beige-forever-21-jacket-beige-miss-nabi-bag_400.jpg",
			"http://images0.chictopia.com/photos/Janeisha/11078936344/11078936344_400.jpg",
			"http://cdn12.lbstatic.nu/files/looks/large/2016/01/18/4808615_feline.jpg?1453124230",
			"http://cdn9.lbstatic.nu/files/looks/large/2015/10/14/4709076_Asilio-Long-Grey-Coat-Boyfriend-Jeans-Proenza-Schouler-Ps11-5-copy.jpg?1444829832",
			"http://cdn11.lbstatic.nu/files/looks/large/2016/03/16/4866766_Leather_Stripes.jpg?1458160368"];
var spam_i;
var spam_img_i;
var spam_p;
var references = {
	"Occasion":{
		"Work":[], 
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
		"Bold/Striking":["https://s-media-cache-ak0.pinimg.com/564x/85/e7/99/85e7997c7ee3ea79e39f377bbcf32a82.jpg",
					"https://s-media-cache-ak0.pinimg.com/564x/98/6d/83/986d836f9ef731b51097e45fcb08697d.jpg"], 
		"Feminine":["https://s-media-cache-ak0.pinimg.com/564x/db/ba/27/dbba27380a7e6e137a12bbd788daf0a9.jpg",
					"https://s-media-cache-ak0.pinimg.com/564x/9c/8b/8f/9c8b8ffa2441c1184eed2a3c9d33522a.jpg"], 
		"Punk-Rock":["https://s-media-cache-ak0.pinimg.com/564x/ff/dc/09/ffdc099b20c4876a5a12722d6a0e5e4b.jpg",
				"https://s-media-cache-ak0.pinimg.com/564x/fa/86/26/fa8626c0d15e88ef71bcdde9b8699fd8.jpg"],
		"Other":[]
	}, 
	"Temperature":
		{"70°s+":[], 
		"60°s":[],
		"50°s":[],
		"40°s-":[]},
	"Ethnicity":
		{"Caucasian":[],
		"African American":[],
		"Latino":[],
		"Asian":[],
		"Other":[]},
	"Body-size":
		{"Slim":["https://i2.wp.com/chicstreetstyle.me/wp-content/uploads/2016/06/IMG_0571.jpg?resize=683%2C1024"],
		"Full":["http://i246.photobucket.com/albums/gg111/jadorecoutureblog/jadorecoutureblog005/jadore-couture-sleeveless-vest-dress.jpg~original"],
		"Plus":["https://s-media-cache-ak0.pinimg.com/564x/bc/c6/96/bcc696467a3b588b8e8897ed0c483001.jpg"]}
};
var inst = 
{
	"Occasion":"Please tag which occasion(s) this outfit is appropriate for: Work, Special Occasion, Weekend Casual, or Date night/Dining out. Select all that applies.",
	"Style":"Please tag which style(s) this outfit is: Classic, Trendy, Bohemian, Bold/Striking, Feminine, Punk Rock or Other. Select at most 3 options that applies.",
	"Temperature":"Please tag which temperature this outfit is good for: 70°s+, 60°s, 50°s or 40°s-.",
	"Ethnicity":"Please tag the ethnicity of the model in the picture: Caucasian, African American, Latino, Asian or Other.",
	"Body-size":"Please tag the model’s body size: Slim, Full or Plus.",
};
var tag_exp = 
{
	"Classic": "Simple, timeless outfit.  Graceful and tasteful style. The outfit is a bit more conservative. Lots of neutral colors (black, gray, navy blue, beige).  Clean, straight lines. Favor garments with soft draping.  Tops and dresses with a nipped waist.",
    "Trendy": "An outfit with latest trends.  The look is up-to-date without the constraints of traditional fashion.  The look is often sassy, urban or eclectic.",
    "Bohemian": "A \"free spirit\" casual, hippie 70s style and ethnic plus vintage. Fringes, maxi dress, cowboy boots.",
    "Bold/Striking": "Bold colors and/or bold prints.  A flashy outfit that gets wearer noticed. The outfit tends to be highly structured (with exaggerated architectural shapes) or highly alluring, body-hugging/skin revealing. Outfit tends to use statement accessories and of high contrast colors.",
    "Feminine": "A romantic \"lady-like\" look with everything soft and pretty. Lots of whimsy feminine details in outfits: bows, ruffles, lace, pleats, floral prints.  Soft colors and fabrics. Delicate jewelries.",
    "Punk-Rock": "A \"rock star\" style, leather, studs, and ripped jeans",
    "Casual-Outing": "outfit typically includes casual shoes like flats, sneakers, walking shoes.",
	"Night-Out": "dressier outfits, shoes typically have heels.",
	"Work": "outfits don’t show too much skin, suitable for work",
	"Special-Occasions": "formal outfits for black tie, weddings, etc.",
	"70°s+": "Hot summer days. Suitable clothing involves short sleeves, shorts, short skirts, sandals. Lots of skin exposure.",
	"60°s": "Cooler spring/summer days. Suitable clothing involves medium/long sleeves, medium/long pants/skirts/dresses, maybe a thin layer of cardigan, sweatshirt and a scarf, open shoes. Some skin exposure.",
	"50°s": "Chilly Fall weather. Arms and legs all covered up. Suitable clothing involves long sleeves, warm tops or thicker layer of jackets/sweaters, closed-toe shoes. No skin exposure.",
	"40°s-": "Cold Winter days. Suitable clothing involves coats, scarfs, boots. No skin exposure."
};
var image_index;
var radio = ["Temperature", "Ethnicity", "Body-size"]

$(document).ready(function() {
	if (test) {
		urls = spam_c;
	}
	spam_i = Math.floor((Math.random() * TOTAL));
	spam_p = Math.floor(spam_i / ELENUM)+1;
	spam_img_i = Math.floor((Math.random() * spam_c.length));
	setup();
	console.log(spam_p);
	console.log(spam_i);
	console.log(spam_img_i);
	
	next = document.getElementById('next');
	nextstep();
});

function setup() {
	image_index = parseInt(document.getElementById("imageIndex").value);
	console.log(image_index);

	if (isNaN(image_index) || test) {
	    image_index = 0;
	}
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
		// var button_sec = '<fieldset class=\"'+category +'\">';
		var button_sec = ''
		for (var option in references[category]) {
			// console.log(option);
			// if (references[category][option].length != 0) {
			if ((option in tag_exp)) {
				// out+='<ul class=\"imagewrap\"><legend>'+option+': </legend>';
			// } else {
				out+='<ul class=\"imagewrap\"><legend>'+option+': '+tag_exp[option]+'</legend>';
			}
			
			// for (var reference in references[category][option]) {
			// 	out+='<li><img src=\"'+ references[category][option][reference] +'\"></li>';
			// }
			out+='</ul>';
			// }
			// console.log(category);
			if (radio.indexOf(category) > -1) {
				button_sec+='<div class="radio"><label><input name=\"'
					+category+'Answer\" type=\"radio\" value=\"'+option
					+'\" />'+option+'</label></div>';
			} else {
				button_sec+='<div class="checkbox"><label><input name=\"'
					+category+'Answer\" type=\"checkbox\" value=\"'+option
					+'\" />'+option+'</label></div>';
			}
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
					if (j*ELENUM+i == spam_i) {
						var temp_button = button_sec;
						var old = '';
						while (old != temp_button) {
							old = temp_button;
							temp_button = temp_button.replace('<input name=\"'+category+'Answer\"', '<input name="spam_checker"');
						}
						temp_button = '<fieldset class="spam_checker">' + temp_button;
						out+= '<li><div class="images" id="spam_checker"><img src=\"'+spam_c[spam_img_i]+'\">'+temp_button+'</div></li>';
					}
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
				var c = 0;
				$('#images'+i+' input:checked').each(function() {
					var cur_tag = $(this).val();
					result+=i+" "+cur_tag+" "+urls[i]+"\n";
					c+=1;
				});
				// if (c > 3) {
				// 	alert("Please select no more than 3 options for an image");
				// 	return;
				// }
				if (result == "") {
					alert("You have to select a tag for all images");
					return;
				}
				out+=result;
			}
			if (spam_p==step) {
				var result = "";
				$('#spam_checker input:checked').each(function() {
					var cur_tag = $(this).val();
					result+="spam_c "+spam_img_i+" "+cur_tag+"\n";
				});
				if (result == "") {
					alert("You have to select a tag for all images");
					return;
				}
				out+=result;
			}
			str_result+=out;
			
			window.scrollTo(0, 0);
			$('#'+target+step).show();
			$('#'+target+(step-1)).hide();
		} else {
			var out = ""
			for (var i = image_index-TOTAL+(step-1)*ELENUM; i < image_index-TOTAL+step*ELENUM; i++) {
				var result = "";
				var c =0;
				$('#images'+i+' input:checked').each(function() {
					var cur_tag = $(this).val();
					result+=i+" "+cur_tag+" "+urls[i]+"\n";
					c+=1;
				});
				// if (c > 3) {
				// 	alert("Please select no more than 3 options for an image");
				// 	return;
				// }
				if (result == "") {
					alert("You have to select a tag for all images");
					return;
				}
				out+=result;
			}
			if (spam_p==step) {
				var result = "";
				$('#spam_checker input:checked').each(function() {
					var cur_tag = $(this).val();
					result+="spam_c "+spam_img_i+" "+cur_tag+"\n";
				});
				if (result == "") {
					alert("You have to select a tag for all images");
					return;
				}
				out+=result;
			}
			str_result+=out;
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
