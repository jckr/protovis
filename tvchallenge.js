This all started from 
<a href="http://awesome.good.is/transparency/web/1101/census-data/flat.html" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://awesome.good.is/transparency/web/1101/census-data/flat.html', 'this map']);">this map</a> 
from GOOD magazine. It went viral on Twitter, which puzzled the data vis community. <a href="http://well-formed-data.net" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://well-formed-data.net', 'Moritz Stefaner']);">Moritz Stefaner</a> 
notably asked others for advice and input, and <a href="http://www.visualisingdata.com/index.php/2011/01/discussing-are-the-richest-americans-also-the-best-educated/" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://www.visualisingdata.com/index.php/2011/01/discussing-are-the-richest-americans-also-the-best-educated/', 'Andy Kirk']);">Andy Kirk</a>, then <a href="http://fellinlovewithdata.com/reflections/demystifying-cargo-cult-visualization-you-cannot-visualize-3-variables-by-mixing-3-colors" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://fellinlovewithdata.com/reflections/demystifying-cargo-cult-visualization-you-cannot-visualize-3-variables-by-mixing-3-colors', 'Enrico Bertini']);">Enrico Bertini</a>
answered in some detail.<p></p>
I won&quote;t go into great detail on why I didn&quote;t like the original map much, it has been amply criticized as is. So, what&quote;s a better way to answer this question?<p></p>
<p></p>
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/protovis/3.3.1/protovis.min.js"></script>
<script type="text/javascript" src="http://www.jeromecukier.net/wp-content/uploads/2011/01/pisa21.js"></script>
<script type="text/javascript">var myVar=24;</script>
<h3>Are the richest Americans the best educated?</h3>
<em>Wealth vs. School performance</em><p></p>
<div class="protovis">
<form id="myForm"><select id="Variable" onchange="myVar = value;vis.render();">

<option value="0">Demographics - Sex</option>
<option value="1">Demographics - Birth month</option>
<option value="2">Demographics - Birth year</option>
<option value="51">Demographics - Immigration status</option>
<option value="3">Family - Father (or male guardian)?</option>
<option value="4">Family - Mother (or female guardian)?</option>
<option value="5">Family - Brothers?</option>
<option value="6">Family - Sisters?</option>
<option value="7">Family - Grand-parents?</option>
<option value="8">Family - Others?</option>
<option value="48">Family - Educational level of father</option>
<option value="49">Family - Educational level of mother</option>
<option value="50">Family - Highest level of parents</option>
<option value="9">Do you have - A desk to work on</option>
<option value="10">Do you have - Their own room</option>
<option value="11">Do you have - A quiet place to study</option>
<option value="12">Do you have - A computer</option>
<option value="13">Do you have - Internet access</option>
<option value="14">Do you have - Literature</option>
<option value="15">Do you have - Poetry</option>
<option value="16">Do you have - Art</option>
<option value="17">Do you have - Textbooks</option>
<option value="18">Do you have - A dictionary</option>
<option value="19">How many in your home - Cellular phones</option>
<option value="20">How many in your home - Televisions</option>
<option value="21">How many in your home - Computers</option>
<option value="22">How many in your home - Cars</option>
<option value="23">How many in your home - Bathrooms</option>
<option value="24" selected="">How many in your home - Books</option>
<option value="25">Reading attitude - Only if I have to</option>
<option value="26">Reading attitude - One of my favourite hobbies</option>
<option value="27">Reading attitude - Like to talk about books</option>
<option value="28">Reading attitude - Find books hard to finish</option>
<option value="29">Reading attitude - Happy to get books as gift</option>
<option value="30">Reading attitude - Books are a waste of time</option>
<option value="31">Reading attitude - I like the library</option>
<option value="32">Reading attitude - Only read if I need to</option>
<option value="33">Reading attitude - Can't stand still with book</option>
<option value="34">Reading attitude - Like to voice opinion on books</option>
<option value="35">Reading attitude - Like to exchange books</option>
<option value="36">You like to read - Magazines</option>
<option value="37">You like to read - Comics</option>
<option value="38">You like to read - Fiction</option>
<option value="39">You like to read - Non-fiction books</option>
<option value="40">You like to read - Newspapers</option>
<option value="41">At the library,  you - borrow for pleasure</option>
<option value="42">At the library,  you - borrow for work</option>
<option value="43">At the library,  you - do homework</option>
<option value="44">At the library,  you - read magazines</option>
<option value="45">At the library,  you - read for fun</option>
<option value="46">At the library,  you - learn things</option>
<option value="47">At the library,  you - go on internet</option>

</select></form>
<script type="text/javascript+protovis">
function avg(data) pv.mean(data, function(d) (d[53]));
var w = 500,
    h = 500,
	fill1="#EDF8B1",
	fill2="#2C7FB8", // thank you, colorbrewer.org
    x = pv.Scale.linear(-5,5).range(0, w),
    y = pv.Scale.linear(800, 200).range(0, h);


var vis = new pv.Panel()
    .width(2*w)
    .height(h)
;
vis.add(pv.Panel).width(w).height(h).strokeStyle("#eee");

vis.add(pv.Rule)
	.data(x.ticks())
	.left(function(d) Math.round(x(d))-0.5)
	.strokeStyle(function(d) d?(d>4?"#000":"#eee"):"#000")
	;

vis.add(pv.Rule)
	.data(y.ticks())
	.width(w)
	.bottom(function(d) Math.round(y(d))-0.5)
	.strokeStyle(function(d) d==500?"#000":"#eee")

vis.add(pv.Label)
	.top(h/2	)
	.right(w+35)
	.textAlign("RIGHT")
	.text("wealth")
;
vis.add(pv.Label)
	.left(w/2+5)
	.top(10)
	.textAlign("LEFT")
	.text("school performance")
;


vis.add(pv.Line)
	.data([{x:-5,y:351.5665256},{x:5,y:616.1095531}])
	.top(function(d) y(d.y))
	.left(function(d) x(d.x))
	.strokeStyle("#000")
	.lineWidth(1)
	;


vis.add(pv.Dot)

	.data(pisa)
	.top(function(d) y(d[53]))
	.left(function(d) x(d[52]+(Math.random()-.5)/5))
	.fillStyle(function(d) (legends[variables[myVar].legendType].type?pv.Scale.linear(legends[variables[myVar].legendType].min,legends[variables[myVar].legendType].max).range(fill1, fill2)(d[myVar]):pv.Scale.linear(legends[variables[myVar].legendType].min,legends[variables[myVar].legendType].max).range("steelblue", "orange")(d[myVar])).alpha(.5))
	.visible(function(d) d[myVar]<(legends[variables[myVar].legendType].max+1))
	.title(function(d) "School performance: "+d[53].toFixed(0)+", wealth:"+d[52].toFixed(1)+", "+variables[myVar].label+": "+legends[variables[myVar].legendType].categories[d[myVar]-legends[variables[myVar].legendType].min].label)
	.size(5)
	.strokeStyle(null)

	;

vis.add(pv.Label)
	.top(.1*h-5)
	.left(w*1.1)
	.text(function() variables[myVar].label)
	.textBaseline("BOTTOM")
	.textAlign("LEFT")
	;

vis.add(pv.Bar)
	.data(function() legends[variables[myVar].legendType].categories)
	.top(function() .1*h+15*this.index)
	.left(w*1.1)
	.height(15)
	.width(15)
	.fillStyle(function(d) legends[variables[myVar].legendType].type?pv.Scale.linear(legends[variables[myVar].legendType].min,legends[variables[myVar].legendType].max).range(fill1, fill2)(d.value):pv.Scale.linear(legends[variables[myVar].legendType].min,legends[variables[myVar].legendType].max).range("steelblue", "orange")(d.value))
	.anchor("right").add(pv.Label).left(w*1.1+20).text(function(d) d.label).textAlign("LEFT")
;

vis.add(pv.Dot)
		.data(function() pv.values(pv.nest(pisa).key(function(d) d[myVar]).rollup(avg)).slice(0,1+legends[variables[myVar].legendType].max-legends[variables[myVar].legendType].min))
		.top(function(d) y(d))
		.left(w)
		.fillStyle(function(d) (legends[variables[myVar].legendType].type?pv.Scale.linear(legends[variables[myVar].legendType].min,legends[variables[myVar].legendType].max).range(fill1, fill2)(this.index+legends[variables[myVar].legendType].min):pv.Scale.linear(legends[variables[myVar].legendType].min,legends[variables[myVar].legendType].max).range("steelblue", "orange")(this.index+legends[variables[myVar].legendType].min)))
		.size(10)
		.strokeStyle("#000")
		.title(function(d) legends[variables[myVar].legendType].categories[this.index].label+" - "+d.toFixed(0))
		.lineWidth(1)
		;
vis.render();
    </script>
</div>

IMO, it doesn't make a lot of sense to talk of the <strong>richest Americans at the county level</strong>. There are huge inequalities even &nbsp;in the better-off counties, so all schools in a county don't have the same resources, and obviously, all families don't have the same means. Those remarks also apply to academic achievement.<p></p>
So it's more relevant to examine that <strong>at the individual level</strong>. The dataset I am using is an extract from <a href="http://www.pisa.oecd.org/" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://www.pisa.oecd.org/', 'OECD PISA 2009 study']);">OECD PISA 2009 study</a>, where close to 450,000 15-years-olds have been given a standardized test where their reading, maths and science skills were assessed. Here, we are looking at the 5233 American kids only. The scores of the test go from 200 to 800.<p></p>
In addition to the test questions, students must fill a very detailed questionnaire about their family, their habits, and other factors that could influence their results. From some of these answers a wealth index can be computed, based on the availability of various items or equipments in their home.<p></p>
This visualization shows the correlation between the two. As the shape of the trend line and that of the cloud of points assess, <strong>there is a correlation but it's pretty weak</strong>. I've added the possibility to color the dots by the answers to some of the questions asked. Here's how to read that. If the colors are scattered all over the place, it means that this question is not very relevant. If the top half of the chart is different than the bottom half (as in : how many books do you have), it means that the question is important. If the left half is different than the right half, it means: this question has a strong impact on the wealth, not so much on the performance (as in: how many cars are there in your home).<p></p>
I've only used a small subset of all the questions.<p></p>		    			<div class="clear">&nbsp;</div>
		</section>