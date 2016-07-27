var test = true;
var target = "Shoes";
var PAGES = 5;
var ELENUM = 1;
var TOTAL = PAGES*ELENUM;
var step = 0;
var str_result = target+'\n';
var global_feature = {
	"Color": ["Aqua","Black","Blue","Brown","Coral/Orange","Green","Grey","Gold","Nude","Pink","Peach","Purple","Red","Silver","Taupe","Teal","White","Yellow","Other"],
	"Special-Material": ["Denim","Leather","Lace","Sequin","Velvet","N/A"],
	"Pattern": ["Animal-Prints","Color-Blocking","Camouflage","Dots","Floral","Graphics","Plaid/Checks","Solid","Stripe-vertical","Stripe-horizontal","Other"],
};
var limits = {
	"Neckline": ["Buttoned-Shirt","Camisole","Halter-Top","Polo-Shirt","Suit-Jacket","Sweat-Shirt","Tank-top"],
	"Hood": ["Tank-top", "Camisole", "Halter-Top"],
	"Collar": ["Tank-top", "Camisole", "Halter-Top"],
	"Special-Material": ["Jeans","Backpack", "Clutch", "Shoulder-Bag", "Tote", "Other"]
}
var features={
	"Top":{
		"category":["Blouse","Buttoned-Shirt","Camisole","Halter-Top","Polo-Shirt","Suit-Jacket","Sweaters","Sweat-Shirt","Tank-top","T-Shirt","Tunic"],
		"feature":{
			"Collar":["Yes", "No"], 
			"Hood": ["Yes", "No"],
			"Sleeve": ["None","Short","Medium","Long","Other"],
			"Neckline": ["Asymmetric","Boat","Cowl","Crew","Round","Grecian","Halter","V-neck","Off-the-shoulder","Pussy-bow","Turtleneck","Scoop","Spaghetti","Square","Strapless","Other"]
		},
	},
	"Bottom":{
		"category": ["Capris","Jeans","Leggings/Tights","Pants","Shorts","Skirt","Suit-Pants","Suit-Skirt"],
		"feature": {},
		"Pants-style": ["Wide-leg", "Straight","Skinny","Boot-cut","Flare","Other"],
		"Jeans-style": ["Wide-leg", "Straight","Skinny","Boot-cut","Flare","Other"],
		"Skirt-style": ["Straight","Pencil","A-line","Slit","Round","Pleat","Wrap","Prairie","Layered","Flounce" ,"Other"],
		"Skirt-length": ["Very-short/Mini-skirt", "Knee-length", "Midi/Calf-length", "Ankle-length", "Floor-length", "Other"]
	},
	"One-piece": {
		"category": ["Dress","Jumpsuit"],
		"feature":{
			"Collar":["Yes", "No"], 
			"Hood": ["Yes", "No"],
			"Sleeve": ["None","Short","Medium","Long","Other"],
			"Neckline": ["Asymmetric","Boat","Cowl","Crew","Round","Grecian","Halter","V-neck","Off-the-shoulder","Pussy-bow","Turtleneck","Scoop","Spaghetti","Square","Strapless","Other"]
		},
		"Dress-length":["Very-short", "Knee-length", "Midi", "Full-body"],
		"Dress-style":["A-line","Body-conscious","High-low","Maxi", "Shirt-dress","Swing-dress","Wrap-dress","Other"]
	},
	"Outerwear":{
		"category":["Blazer","Cape","Cardigan","Coat","Jacket","Sweaters","Suit-Jacket","Vest"],
		"feature":{
			"Collar":["Yes", "No"], 
			"Hood": ["Yes", "No"]
		},
		"Jacket-length":["Cropped","Normal","Long","Very-long"],
		"Coat-length":["Cropped","Normal","Long","Very-long"],
		"Cardigan-length":["Cropped","Normal","Long","Very-long"]
	},
	"Shoes":{
		"category":["Pumps","Sandals","Mules","Clogs","Ballerina","Espadrille","Loafers","Sneakers","Flip-flop","Ankle-boots","Boots","Western-boots","Oxford"],
		"feature":{
			"Heel":["Flat", "Low", "High"],
			"Color": ["Aqua","Black","Blue","Brown","Coral/Orange","Green","Grey","Gold","Nude","Pink","Peach","Purple","Red","Silver","Taupe","Teal","White","Yellow","Other"],
		}
	},
	"Bags":{
		"category":["Backpack", "Clutch", "Shoulder-Bag", "Tote", "Other"]
	}
};
var seg_ref = {
	"Top": "https://s-media-cache-ak0.pinimg.com/564x/ad/44/c4/ad44c4b48a20222cdb7285c8e5ceedbc.jpg",
	"Bottom_Jeans_Style": "https://s-media-cache-ak0.pinimg.com/564x/f1/95/60/f19560e706ef2ef3f97983f7a8cad4cd.jpg",
	"Bottom_Pants_Style": "https://s-media-cache-ak0.pinimg.com/564x/f1/95/60/f19560e706ef2ef3f97983f7a8cad4cd.jpg",
	"Outerwear": "https://s-media-cache-ak0.pinimg.com/564x/f0/ef/d2/f0efd2ffd628861cd0f966a8e635ac65.jpg",
	"Shoes": "https://s-media-cache-ak0.pinimg.com/564x/0b/36/d0/0b36d0615f4bee87ee3054d816e38534.jpg",
	"Pattern": "https://s-media-cache-ak0.pinimg.com/564x/cb/32/2e/cb322ed9f98d8f5b7340d308ff168224.jpg",
	"Neckline": "https://s-media-cache-ak0.pinimg.com/564x/6d/63/30/6d6330a36399a9f230fae05a4184f70f.jpg",
	"One-piece_Dress_Style": "https://s-media-cache-ak0.pinimg.com/564x/02/3b/96/023b96f16a5d4ce5c91f2ce7c3d2daf7.jpg",
	"Bottom_Skirt_Style": "https://s-media-cache-ak0.pinimg.com/564x/bf/7f/35/bf7f356f1e67b9f01706514d10f5d059.jpg",
	"Bags": "https://s-media-cache-ak0.pinimg.com/564x/89/c8/a9/89c8a98f16abb5ad621b9eabd5de8019.jpg"
};
var test_pic = {
	"Top": ["http://images0.chictopia.com/photos/jamour/7500394172/jeffrey-campbell-boots-printed-zara-scarf-black-tote-drew-melie-bianco-bag_400.jpg",
			"http://images0.chictopia.com/photos/FrancescaPenko/9918850709/light-brown-wedge-forever-21-boots-white-cargo-skinny-currentelliott-jeans_400.jpg",
			"http://images2.chictopia.com/photos/sonyasjukebox/2326232580/navy-pleated-forever-21-shirt-red-impo-heels-31-phillip-lim-sweatshirt_400.jpg",
			"http://images0.chictopia.com/photos/OliviaL/3107109207/3107109207_400.jpg",
			"http://cdn11.lbstatic.nu/files/looks/large/2015/10/29/4727970_IMG_8129.jpg?1446133329"
			],
	"Bottom": ["http://images0.chictopia.com/photos/jamour/7500394172/jeffrey-campbell-boots-printed-zara-scarf-black-tote-drew-melie-bianco-bag_400.jpg",
				"http://images0.chictopia.com/photos/FrancescaPenko/9918850709/light-brown-wedge-forever-21-boots-white-cargo-skinny-currentelliott-jeans_400.jpg",
				"http://images2.chictopia.com/photos/sonyasjukebox/2326232580/navy-pleated-forever-21-shirt-red-impo-heels-31-phillip-lim-sweatshirt_400.jpg",
				"http://images0.chictopia.com/photos/OliviaL/3107109207/3107109207_400.jpg",
				"http://cdn11.lbstatic.nu/files/looks/large/2015/10/29/4727970_IMG_8129.jpg?1446133329"
				],
	"One-piece": ["https://s-media-cache-ak0.pinimg.com/564x/cd/35/81/cd35817ba5f6cd0ccb68964603f26aa8.jpg",
				"http://cdn11.lbstatic.nu/files/looks/large/2016/03/16/4866766_Leather_Stripes.jpg?1458160368",
				"https://s-media-cache-ak0.pinimg.com/564x/b8/1a/bb/b81abba60aa58de8a8992a7af967609d.jpg",
				"http://images0.chictopia.com/photos/Myblondegal/9328375659/blue-korean-dress-beige-forever-21-jacket-beige-miss-nabi-bag_400.jpg",
				"http://images0.chictopia.com/photos/mowmigaba/6161671273/dark-brown-lakini-boots-white-the-great-beyond-dress_400.jpg"],
	"Bags": ["http://images0.chictopia.com/photos/jamour/7500394172/jeffrey-campbell-boots-printed-zara-scarf-black-tote-drew-melie-bianco-bag_400.jpg",
			"http://images0.chictopia.com/photos/FrancescaPenko/9918850709/light-brown-wedge-forever-21-boots-white-cargo-skinny-currentelliott-jeans_400.jpg",
			"http://images2.chictopia.com/photos/sonyasjukebox/2326232580/navy-pleated-forever-21-shirt-red-impo-heels-31-phillip-lim-sweatshirt_400.jpg",
			"http://images0.chictopia.com/photos/OliviaL/3107109207/3107109207_400.jpg",
			"http://cdn11.lbstatic.nu/files/looks/large/2015/10/29/4727970_IMG_8129.jpg?1446133329",
			"http://cdn11.lbstatic.nu/files/looks/large/2015/12/11/4773122_Looks_oficina_(15).jpg?1449838359",
			"http://cdn12.lbstatic.nu/files/looks/large/2016/01/18/4808615_feline.jpg?1453124230",
			"http://cdn9.lbstatic.nu/files/looks/large/2015/10/14/4709076_Asilio-Long-Grey-Coat-Boyfriend-Jeans-Proenza-Schouler-Ps11-5-copy.jpg?1444829832",
			"http://cdn11.lbstatic.nu/files/looks/large/2016/03/16/4866766_Leather_Stripes.jpg?1458160368",
			"http://images0.chictopia.com/photos/Myblondegal/9328375659/blue-korean-dress-beige-forever-21-jacket-beige-miss-nabi-bag_400.jpg"
			],
	"Outerwear": ["http://images0.chictopia.com/photos/OliviaL/3107109207/3107109207_400.jpg",
					"http://images2.chictopia.com/photos/falling4u/1782302674/sky-blue-jeans-army-green-thrifted-jacket-black-striped-forever-21-t-shirt_400.jpg",
					"http://images0.chictopia.com/photos/Myblondegal/9328375659/blue-korean-dress-beige-forever-21-jacket-beige-miss-nabi-bag_400.jpg",
					"http://cdn11.lbstatic.nu/files/looks/large/2015/12/11/4773122_Looks_oficina_(15).jpg?1449838359",
					"http://images0.chictopia.com/photos/Janeisha/11078936344/11078936344_400.jpg",
					"http://cdn9.lbstatic.nu/files/looks/large/2015/10/14/4709076_Asilio-Long-Grey-Coat-Boyfriend-Jeans-Proenza-Schouler-Ps11-5-copy.jpg?1444829832",
					"http://cdn11.lbstatic.nu/files/looks/large/2016/03/16/4866766_Leather_Stripes.jpg?1458160368"
					]
};
var image_index;
var item_feature = [];
var extra_style = ["Dress", "Jeans", "Pants", "Skirt"];
var extra_length = ["Jacket","Coat","Cardigan","Dress", "Skirt"];
var radios = ["Neckline","Collar", "Hood", "Sleeve", "Heel", "Size", "Length", "Garment-Length", "Style"];
var tag_instr = {
	'Top':'Describe the top you see in the outfit. The outfit may have a sweater or jacket outer layer, but ignore that for this task.',
	'Bottom':'Describe the bottom you see in the outfit.',
	'One-piece': 'Describe the one piece (dress or jumpsuit) you see in the outfit. The outfit may have a sweater or jacket outer layer, but ignore that for this task. For dress length,<br> Very-short: mini-skirt length, way above the knee<br> Knee-length: Around or at knee-length<br> Midi: below the knee<br> Full-body: at ankle or floor length<br>',
	'Outerwear':'Describe the outerwear you see in the outfit. The outfit will have an inner layer, but ignore that for this task. For garment length,<br> Cropped: very short, above or at waist<br> Normal: above or at hip length<br> Long: above or at thig/knee length<br> Very long: below the knee length<br>',
	'Bags':'Describe the bag you see in the outfit. Sometimes a tote can be worn as a shoulder bag as well, label it as a tote if the model is holding the bag by hand.',
	'Shoes':'Describe the shoes you see in the outfit.'
}
$(document).ready(function() {
	if (test) {
		urls = test_pic[target];
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
	if (test) {
		image_index = 0;
	}
	setupItem();
	setupSegment();

	$('#end').hide();
	$('#submit').hide();
	$('#items').hide();
	$('#segment').hide();
	$('#description').show();
}

function setupSegment() {
	document.getElementById("segment").innerHTML = '<img id=\"Canvas\" src=\"'
	+urls[image_index]+'\">';
}

function setupItem() {
	var out = '';
	
	for (var segment in features) {
		var seg_fea= '';
		if (segment in seg_ref) {
			seg_fea += '<div style="float: none;" id="'+ segment
			+'"><p>'+tag_instr[segment]+' If you see ?, you can get some references by clicking on it. Another click on it would hide the reference picture.</p><legend style="float:none; display:block;">'
			+segment+'<a onclick="changeImage(\''+segment+'\')" ><img id=\"'
				+segment+'_ref\" style="display:none;" src=\"'+seg_ref[segment]+'\"/>?</a></legend>';
		} else {
			seg_fea += '<div style="float: none;" id="'+ segment
			+'"><p>'+tag_instr[segment]+' If you see ?, you can get some references by clicking on it. Another click on it would hide the reference picture.</p><legend style="float:none; display:block;">'
			+segment+'</legend>';
		}
		

		// if (segment != "Bags") {
			// if (segment != "Top") {
			// 	seg_fea+='<div style="display:inline-block;"><input type=\"radio\" name=\"'+segment
			// 		+'\" id=\"'+segment+'_NA'
			// 		+'\" value=\"NA\" /><label for=\"'
			// 		+segment+'_NA\" >Not Applicable</label></div>';
			// 	}
			for (var i= 0; i < features[segment]['category'].length; i++) {
				var item = features[segment]['category'][i];				
				seg_fea+='<div style="display:inline-block;"><input type=\"radio\" name=\"'+segment
				+'\" id=\"'+segment+'_'+item
				+'\" value=\"'+segment+'_'+item
				+'\" /><label for=\"'+segment+'_'+item
				+'\" >'+item+'</label><ul>';
				if(segment != "Shoes") {
					for (var feature in global_feature) {
						if (feature in limits) {
							if (limits[feature].indexOf(item) == -1) {
								seg_fea+=appendFeature(segment+'_'+item, feature, global_feature[feature]);
							}
						} else {
							seg_fea+=appendFeature(segment+'_'+item, feature, global_feature[feature]);
						}
						
					}
				}
				for (var feature in features[segment]['feature']) {

					if (feature in limits) {
						console.log(feature);
						console.log(item);
						if (limits[feature].indexOf(item) == -1) {
							seg_fea+=appendFeature(segment+'_'+item, feature, features[segment]['feature'][feature]);
						}
					} else {
						seg_fea+=appendFeature(segment+'_'+item, feature, features[segment]['feature'][feature]);
					}
					
				}
				if (extra_style.indexOf(item) >= 0) {
					seg_fea+=appendFeature(segment+'_'+item, "Style", features[segment][item+'-style']);
				}
				if (extra_length.indexOf(item) >= 0) {

					seg_fea+=appendFeature(segment+'_'+item, "Garment-Length", features[segment][item+'-length']);
				}
				seg_fea+='</ul></div></li>';
			}
			
			// seg_fea+='<div style="display:inline-block;"><input type=\"radio\" name=\"'+segment
			// 	+'\" id=\"'+segment+'_DK'
			// 	+'\" value=\"DK\" /><label for=\"'+segment
			// 	+'_DK\" >Don\'t Know/Can\'t Tell</label></div>';
		// } else {
			// seg_fea+='<div style="display:inline-block;"><input type=\"radio\" name=\"'+segment
			// 	+'\" id=\"'+segment+'_NA'
			// 	+'\" value=\"NA\" /><label for=\"'
			// 	+segment+'_NA\" >Not Applicable</label></div>';
			// seg_fea+='<ul>';
			// seg_fea+=appendFeature(segment, "Color", global_feature['Color']);
			// seg_fea+=appendFeature(segment, "Pattern", global_feature['Pattern']);
			// seg_fea+=appendFeature(segment, "Size", features[segment]['Size']);
			// seg_fea+='</ul>';
			// seg_fea+='<div style="display:inline-block;"><input type=\"radio\" name=\"'+segment
			// 	+'\" id=\"'+segment+'_DK'
			// 	+'\" value=\"DK\" /><label for=\"'+segment
			// 	+'_DK\" >Don\'t Know/Can\'t Tell</label></div>';
		// }
		seg_fea+='</ul></div>';
		out+=seg_fea;
	}
	// out+='';
	document.getElementById("items").innerHTML = out;
}

// item: string; feature: string; options: list
// example: item: Top_Blouse, feature: Color, options: ["White", "Red",...]
function appendFeature(item, feature, options) {
	if (typeof item_feature[item] == "undefined") {
		item_feature[item] = [];
	}
	item_feature[item].push(item+'_'+feature);
	if (item+'_'+feature in seg_ref) {
		var res = '<li style="float:none; margin: 10px; border: 1px red solid; " id="'+item+'_'+feature+'"><legend style="float:none; display:block;">'+feature
	+'<a onclick="changeImage(\''+item+'_'+feature+'\')" ><img id=\"'
	+item+'_'+feature+'_ref\" style="display:none;" src=\"'+seg_ref[item+'_'+feature]+'\"/>?</a></legend><form style="float:none; ">';
	} else if (feature in seg_ref) {
		var res = '<li style="float:none; margin: 10px; border: 1px red solid; " id="'+item+'_'+feature+'"><legend style="float:none; display:block;">'+feature
	+'<a onclick="changeImage(\''+item+'_'+feature+'\')" ><img id=\"'
	+item+'_'+feature+'_ref\" style="display:none;" src=\"'+seg_ref[feature]+'\"/>?</a></legend><form style="float:none; ">';
	} else {
		var res = '<li style="float:none; margin: 10px; border: 1px red solid; "><legend style="float:none; display:block;">'+feature
	+'</legend><form style="float:none; ">';
	}
	
	for (var i = 0; i < options.length; i++) {
		var id = item+'_'+feature+'_'+options[i];
		if (radios.indexOf(feature)>=0) {
			res+='<div style="display:inline-block;"><input type=\"radio\" id=\"'+id+'\" value=\"'+id
			+'\" name=\"'+item+'_'+feature+'\"/><label for=\"'+id+'\" >'+options[i]
			+'</label></div>';
		} else {
			res+='<div style="display:inline-block;"><input type=\"checkbox\" id=\"'+id+'\" value=\"'+id
			+'\" name=\"'+item+'_'+feature+'\"/><label for=\"'+id+'\" >'+options[i]
			+'</label></div>';
		}
	}
	res+='</form></li>';
	return res;
}

function showImage(segment) {
	var id = '#'+segment+'_ref';
	var height = parseInt($(id).css("height").replace("px",""));
	var left = $('#'+segment+' a').position().left+20;
	var top = $('#'+segment+' a').position().top-height;
	if (top < 0) {
		// height = $('#'+segment+' a').position().top;
		top = 0;
	}
	$(id).css({
		'left': left+'px',
		'top': top+'px',
		// 'height': height+'px',
		'position': 'absolute',
		'display': 'block',
	});
}

function hideImage(segment) {
	var id = '#'+segment+'_ref';
	$(id).css({
		'position': 'absolute',
		'display': 'none',
	});
}

function changeImage(segment) {
	var id = '#'+segment+'_ref';
	if ($(id).css('display') == 'none') {
		showImage(segment);
	} else {
		hideImage(segment);
	}
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
			str_result+=image_index+' ';
			$('#description').hide();
			$('#items').css('display', 'inline-block');
			$('#segment').css('display', 'inline-block');
			for (var segment in features) {
				if (segment!= target) {
					$('#'+segment).hide();
				}
			}
		} else if(step < PAGES) {
			if (!recordResult(target)) {
				return;
			}
			clear();
			window.scrollTo(0, 0);
			
			image_index++;
			str_result+=image_index+' ';
			document.getElementById("Canvas").src = urls[image_index];
		} else {
			if (!recordResult(target)) {
				return;
			}
			clear();
			window.scrollTo(0, 0);
			$('#items').hide();
			$('#segment').hide();
			$('#next').hide();
			$('#end').show();
			$('#submit').show();
			document.getElementById('user-input').value = str_result;
		} 
		step++;
		console.log(str_result);
	});
}

function recordResult(segment) {
	var res = "";
	// if (target != 'Bags') {
		var item = $('input[name="'+segment+'"]:checked').val();
		if (typeof item == 'undefined') {
			alert('Please tag the item before proceed!');
			return false;
		}
		res+=("Item: "+item.replace(segment+"_",""));
		// if (item!='DK' && item!='NA') {
			for (var i = 0; i < item_feature[item].length; i++) {
				// console.log(item_feature[item][i]);
				var item_fea=", "+item_feature[item][i].replace(item+"_", "")+":";
				$('input[name="'+item_feature[item][i]+'"]:checked').each(function(){
					item_fea+=(' '+$(this).val().replace(item_feature[item][i]+"_", ""));
				});
				if (item_fea==", "+item_feature[item][i].replace(item+"_", "")+":") {
					alert("Please tag "+item_feature[item][i]+"!");
					return false;
				}
				res+=item_fea;
			}
		// } else if (item=='NA') {
		// 	alert("Please select Don't Know/Can't Tell if you are not sure about the item you marked!");
		// 	return false;
		// }
	// } else {
		// res+=(", ");
	// 	for (var i = 0; i < item_feature[segment].length; i++) {
	// 		var item_fea=item_feature[segment][i].replace(segment+'_', '')+":";
	// 		$('input[name="'+item_feature[segment][i]+'"]:checked').each(function(){
	// 			item_fea+=(' '+$(this).val().replace(item_feature[segment][i]+'_', ''));
	// 			console.log(item_fea);
	// 		});
	// 		if (item_fea=="") {
	// 			alert("Please tag "+item_feature[segment][i]+"!");
	// 			return false;
	// 		}
	// 		res+=item_fea;
	// 	}
	// }
	str_result+=res+"\n";
	return true;
}

function clear() {
	$('#items input:checked').each(function(){
		$(this).prop('checked', false);
	});
}