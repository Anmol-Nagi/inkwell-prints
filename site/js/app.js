var BRAND="Inkwell Prints",PHONE="919999999999";
var COL={Posters:"#00a3e0",Frames:"#e6007e",Magazines:"#ffd500",Stickers:"#9be564","Poster Sticking":"#ff9f43"};
var CATS=Object.keys(COL);
var P=[
["Posters","A3 Art Poster","Matte 170 gsm, sharp colour. Any design you send.","₹149"],
["Posters","A2 Movie Style Poster","Large gloss print for rooms and shops.","₹299"],
["Posters","Custom Poster Set (5)","Five posters in one size, one theme.","₹599"],
["Frames","Classic Black Frame 8×10","Wood finish frame with glass front.","₹349"],
["Frames","Wall Gallery Set (3)","Three matching frames in mixed sizes.","₹899"],
["Frames","Poster Frame A3","Light frame sized to fit our A3 posters.","₹499"],
["Magazines","College Magazine (40 pages)","Layout, printing and binding. Price for 50 copies.","₹4,500"],
["Magazines","Event Brochure (8 pages)","Folded and stapled. Price for 100 copies.","₹1,800"],
["Stickers","Die-Cut Stickers (25)","Waterproof vinyl cut to your shape.","₹249"],
["Stickers","Sticker Sheet A4","Many small designs on one glossy sheet.","₹99"],
["Stickers","Logo Stickers (100)","Round or square labels for your brand.","₹399"],
["Poster Sticking","Wall Poster Sticking","Per poster, glue included. Bulk rates available.","₹10"],
["Poster Sticking","Shop Window Branding","Vinyl or posters fitted on glass. Price per job.","₹1,200"]
];
function q(k){return new URLSearchParams(location.search).get(k)}
function wa(t){return "https://wa.me/"+PHONE+"?text="+encodeURIComponent(t)}
var pg=document.body.getAttribute("data-page");
var NAV=[["index.html","Home","home"],["shop.html","Shop","shop"],["gallery.html","Gallery","gallery"],["about.html","About","about"],["contact.html","Contact","contact"],["order.html","Order","order"]];
document.getElementById("hd").innerHTML='<header><div class="wrap"><a class="logo" href="index.html">'+BRAND+'</a><nav aria-label="Main">'+NAV.map(function(n){return '<a href="'+n[0]+'"'+(n[2]===pg?' class="on"':'')+'>'+n[1]+'</a>'}).join("")+'</nav></div></header>';
document.getElementById("ft").innerHTML='<footer><div class="wrap"><h3>'+BRAND+'</h3><p>WhatsApp: <a href="https://wa.me/'+PHONE+'">+91 99999 99999</a><br>Address: 12, Market Road, Your City<br>Hours: Mon–Sat, 10 am – 8 pm</p><p>© 2026 '+BRAND+'</p></div></footer><a class="btn wa fab" target="_blank" rel="noopener" href="'+wa("Hi "+BRAND+", I have a question.")+'">Chat on WhatsApp</a>';
if(pg==="shop"){
  var cat=q("cat")||"All";
  document.getElementById("tabs").innerHTML=["All"].concat(CATS).map(function(c){return '<a href="shop.html'+(c==="All"?'':'?cat='+encodeURIComponent(c))+'"'+(c===cat?' class="on"':'')+'>'+c+'</a>'}).join("");
  document.getElementById("grid").innerHTML=P.map(function(p,i){return cat==="All"||p[0]===cat?'<div class="card"><div class="ph" style="background:'+COL[p[0]]+'">'+p[0]+'</div><div class="b"><h3>'+p[1]+'</h3><p>'+p[2]+'</p><div class="price">From '+p[3]+'</div><a class="btn" href="order.html?p='+i+'">Order this</a></div></div>':''}).join("");
}
if(pg==="order"){
  var s=document.getElementById("prod"),pi=q("p");
  s.innerHTML=P.map(function(p,i){return '<option value="'+p[1]+'"'+(String(i)===pi?' selected':'')+'>'+p[1]+' (from '+p[3]+')</option>'}).join("");
}
if(pg==="gallery"){
  document.getElementById("gal").innerHTML=Array.from({length:12},function(_,i){return '<div style="background:'+COL[CATS[i%5]]+'">Photo '+(i+1)+'</div>'}).join("");
}
if(pg==="home"){
  document.getElementById("cats").innerHTML=CATS.map(function(c){return '<a class="card" href="shop.html?cat='+encodeURIComponent(c)+'"><div class="ph" style="background:'+COL[c]+'">'+c+'</div><div class="b"><h3>'+c+'</h3><p>See all '+c.toLowerCase()+'</p></div></a>'}).join("");
}
