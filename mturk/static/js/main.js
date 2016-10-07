var step = 0;
var str_result = '';
var tags = ["Occasion", "Style", "Temperature", "Ethnicity", "Body-shape"];
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
		"Bold/Striking":["https://s-media-cache-ak0.pinimg.com/564x/85/e7/99/85e7997c7ee3ea79e39f377bbcf32a82.jpg",
					"https://s-media-cache-ak0.pinimg.com/564x/98/6d/83/986d836f9ef731b51097e45fcb08697d.jpg"], 
		"Feminine":["https://s-media-cache-ak0.pinimg.com/564x/db/ba/27/dbba27380a7e6e137a12bbd788daf0a9.jpg",
					"https://s-media-cache-ak0.pinimg.com/564x/9c/8b/8f/9c8b8ffa2441c1184eed2a3c9d33522a.jpg"], 
		"Punk-Rock":["https://s-media-cache-ak0.pinimg.com/564x/ff/dc/09/ffdc099b20c4876a5a12722d6a0e5e4b.jpg",
				"https://s-media-cache-ak0.pinimg.com/564x/fa/86/26/fa8626c0d15e88ef71bcdde9b8699fd8.jpg"],
		"Don't-Know/Other":[]
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
	"Body-shape":
		{"Slim":["https://i2.wp.com/chicstreetstyle.me/wp-content/uploads/2016/06/IMG_0571.jpg?resize=683%2C1024"],
		"Full":["http://i246.photobucket.com/albums/gg111/jadorecoutureblog/jadorecoutureblog005/jadore-couture-sleeveless-vest-dress.jpg~original"],
		"Plus":["https://s-media-cache-ak0.pinimg.com/564x/bc/c6/96/bcc696467a3b588b8e8897ed0c483001.jpg"]}
};
var inst = 
{
	"Occasion":"Please tag which occasion(s) this outfit is appropriate for: Work, Special Occasion, Weekend Casual, or Date night/Dining out. Select all that applies.",
	"Style":"Please tag which style(s) this outfit is: Classic, Trendy, Bohemian, Bold/Striking, Feminine, Punk Rock or Other. Select all that applies.",
	"Temperature":"Please tag which temperature this outfit is good for: 70°s+, 60°s, 50°s or 40°s-.",
	"Ethnicity":"Please tag the ethnicity of the model in the picture: Caucasian, African American, Latino, Asian or Other.",
	"Body-shape":"Please tag the model’s body size: Slim, Full or Plus.",
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
	"Professional-Work": "outfits don’t show too much skin, suitable for work",
	"Special-Occasions": "formal outfits for black tie, weddings, etc.",
	"70°s+": "Hot summer days. Suitable clothing involves short sleeves, shorts, short skirts, sandals. Lots of skin exposure.",
	"60°s": "Cooler spring/summer days. Suitable clothing involves medium/long sleeves, medium/long pants/skirts/dresses, maybe a thin layer of cardigan, sweatshirt and a scarf, open shoes. Some skin exposure.",
	"50°s": "Chilly Fall weather. Arms and legs all covered up. Suitable clothing involves long sleeves, warm tops or thicker layer of jackets/sweaters, closed-toe shoes. No skin exposure.",
	"40°s-": "Cold Winter days. Suitable clothing involves coats, scarfs, boots. No skin exposure."
};
var image_index;

$(document).ready(function() {
	setup();
});

function setup() {
	image_index = parseInt(document.getElementById("imageIndex").value);

	if (isNaN(image_index)) {
	    image_index = 0;
	}
	str_result+=urls[image_index]+'\n';
	document.getElementById('target').src=urls[image_index];
	setupTag();
}

function setupTag() {
	var task = document.getElementById('task');
	var i = 0;
	var out = "";
	for (var category in references) {
		out+='<div class="tag" id="'+category
			+'"><legend style="width:300px;">'+category+'</legend><ul>';
		// var button_sec = '<fieldset class=\"'+category +'\">';
		// var button_sec = ''
		for (var option in references[category]) {
			// console.log(option);
			// if (references[category][option].length != 0) {
			// }
			if (category == "Ethnicity" ||category =="Body-shape") {
				out+='<li><div class="checkbox"><label><input name=\"'
					+category+'Answer\" type=\"radio\" value=\"'+option
					+'\" />'+option+'</label></div></li>';
			} else {
				out+='<li><div class="checkbox"><label><input name=\"'
					+category+'Answer\" type=\"checkbox\" value=\"'+option
					+'\" />'+option+'</label></div></li>';
			}
		}
		out+='</ul></div>';

		// out+='</div>';
	}
	task.innerHTML = out;
}

function nextstep() {			
		var out = "";
		for (var category in references) {
			var result = "";
			$('#'+category+' input:checked').each(function() {
				var cur_tag = $(this).val();
				result+=category+" "+cur_tag+"\n";
			});
			if (result == "") {
				alert("You have to select a tag for " + category);
				return;
			}
			out+=result;
		}
		str_result+=out;
		console.log(str_result);
}
