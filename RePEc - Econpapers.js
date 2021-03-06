{
	"translatorID": "411f9a8b-64f3-4465-b7df-a3c988b602f3",
	"label": "RePEc - Econpapers",
	"creator": "Sebastian Karcher",
	"target": "^https?://econpapers\\.repec\\.org/",
	"minVersion": "1.0.0b4.r1",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcs",
	"lastUpdated": "2012-02-09 09:18:20"
}

/* FW LINE 57:6869c32952b1 */ function flatten(c){var b=new Array();for(var d in c){var e=c[d];if(e instanceof Array){b=b.concat(flatten(e))}else{b.push(e)}}return b}var FW={_scrapers:new Array()};FW._Base=function(){this.callHook=function(b,c,e,a){if(typeof this["hooks"]==="object"){var d=this["hooks"][b];if(typeof d==="function"){d(c,e,a)}}};this.evaluateThing=function(f,e,c){var b=typeof f;if(b==="object"){if(f instanceof Array){var d=this.evaluateThing;var a=f.map(function(g){return d(g,e,c)});return flatten(a)}else{return f.evaluate(e,c)}}else{if(b==="function"){return f(e,c)}else{return f}}}};FW.Scraper=function(a){FW._scrapers.push(new FW._Scraper(a))};FW._Scraper=function(a){for(x in a){this[x]=a[x]}this._singleFieldNames=["abstractNote","applicationNumber","archive","archiveLocation","artworkMedium","artworkSize","assignee","audioFileType","audioRecordingType","billNumber","blogTitle","bookTitle","callNumber","caseName","code","codeNumber","codePages","codeVolume","committee","company","conferenceName","country","court","date","dateDecided","dateEnacted","dictionaryTitle","distributor","docketNumber","documentNumber","DOI","edition","encyclopediaTitle","episodeNumber","extra","filingDate","firstPage","forumTitle","genre","history","institution","interviewMedium","ISBN","ISSN","issue","issueDate","issuingAuthority","journalAbbreviation","label","language","legalStatus","legislativeBody","letterType","libraryCatalog","manuscriptType","mapType","medium","meetingName","nameOfAct","network","number","numberOfVolumes","numPages","pages","patentNumber","place","postType","presentationType","priorityNumbers","proceedingsTitle","programTitle","programmingLanguage","publicLawNumber","publicationTitle","publisher","references","reportNumber","reportType","reporter","reporterVolume","rights","runningTime","scale","section","series","seriesNumber","seriesText","seriesTitle","session","shortTitle","studio","subject","system","thesisType","title","type","university","url","version","videoRecordingType","volume","websiteTitle","websiteType"];this._makeAttachments=function(p,b,g,t){if(g instanceof Array){g.forEach(function(k){this._makeAttachments(p,b,k,t)},this)}else{if(typeof g==="object"){var o=g.urls||g.url;var m=g.types||g.type;var f=g.titles||g.title;var q=g.snapshots||g.snapshot;var j=this.evaluateThing(o,p,b);var n=this.evaluateThing(f,p,b);var s=this.evaluateThing(m,p,b);var d=this.evaluateThing(q,p,b);if(!(j instanceof Array)){j=[j]}for(var l in j){var c=j[l];var h;var e;var r;if(s instanceof Array){h=s[l]}else{h=s}if(n instanceof Array){e=n[l]}else{e=n}if(d instanceof Array){r=d[l]}else{r=d}t.attachments.push({url:c,title:e,type:h,snapshot:r})}}}};if(this.itemTrans!==undefined){this.makeItems=this.itemTrans.makeItems}else{this.makeItems=function(o,b,m,c,l){var q=new Zotero.Item(this.itemType);q.url=b;for(var h in this._singleFieldNames){var n=this._singleFieldNames[h];if(this[n]){var g=this.evaluateThing(this[n],o,b);if(g instanceof Array){q[n]=g[0]}else{q[n]=g}}}var r=["creators","tags"];for(var f in r){var p=r[f];var d=this.evaluateThing(this[p],o,b);if(d){for(var e in d){q[p].push(d[e])}}}this._makeAttachments(o,b,this["attachments"],q);c(q,this,o,b);l([q])}}};FW._Scraper.prototype=new FW._Base;FW.MultiScraper=function(a){FW._scrapers.push(new FW._MultiScraper(a))};FW._MultiScraper=function(a){for(x in a){this[x]=a[x]}this._mkSelectItems=function(e,d){var b=new Object;for(var c in e){b[d[c]]=e[c]}return b};this._selectItems=function(d,c,e){var b=new Array();Zotero.selectItems(this._mkSelectItems(d,c),function(f){for(var g in f){b.push(g)}e(b)})};this._mkAttachments=function(g,d,f){var b=this.evaluateThing(this["attachments"],g,d);var c=new Object();if(b){for(var e in f){c[f[e]]=b[e]}}return c};this._makeChoices=function(f,p,c,d,h){if(f instanceof Array){f.forEach(function(k){this._makeTitlesUrls(k,p,c,d,h)},this)}else{if(typeof f==="object"){var m=f.urls||f.url;var e=f.titles||f.title;var n=this.evaluateThing(m,p,c);var j=this.evaluateThing(e,p,c);var l=(j instanceof Array);if(!(n instanceof Array)){n=[n]}for(var g in n){var b=n[g];var o;if(l){o=j[g]}else{o=j}h.push(b);d.push(o)}}}};this.makeItems=function(j,b,g,c,f){if(this.beforeFilter){var k=this.beforeFilter(j,b);if(k!=b){this.makeItems(j,k,g,c,f);return}}var e=[];var h=[];this._makeChoices(this["choices"],j,b,e,h);var d=this._mkAttachments(j,b,h);this._selectItems(e,h,function(m){if(!m){f([])}else{var l=[];var n=this.itemTrans;Zotero.Utilities.processDocuments(m,function(q){var p=q.documentURI;var o=n;if(o===undefined){o=FW.getScraper(q,p)}if(o===undefined){}else{o.makeItems(q,p,d[p],function(r){l.push(r);c(r,o,q,p)},function(){})}},function(){f(l)})}})}};FW._MultiScraper.prototype=new FW._Base;FW.DelegateTranslator=function(a){return new FW._DelegateTranslator(a)};FW._DelegateTranslator=function(a){for(x in a){this[x]=a[x]}this._translator=Zotero.loadTranslator(this.translatorType);this._translator.setTranslator(this.translatorId);this.makeItems=function(g,d,b,f,c){var e;Zotero.Utilities.HTTP.doGet(d,function(h){this._translator.setHandler("itemDone",function(k,j){e=j;if(b){j.attachments=b}});if(this.preProcess){h=this.preProcess(h)}this._translator.setString(h);this._translator.translate();f(e)},function(){c([e])})}};FW.DelegateTranslator.prototype=new FW._Scraper;FW._StringMagic=function(){this._filters=new Array();this.addFilter=function(a){this._filters.push(a);return this};this.split=function(a){return this.addFilter(function(b){return b.split(a).filter(function(c){return(c!="")})})};this.replace=function(c,b,a){return this.addFilter(function(d){if(d.match(c)){return d.replace(c,b,a)}else{return d}})};this.prepend=function(a){return this.replace(/^/,a)};this.append=function(a){return this.replace(/$/,a)};this.remove=function(b,a){return this.replace(b,"",a)};this.trim=function(){return this.addFilter(function(a){return Zotero.Utilities.trim(a)})};this.trimInternal=function(){return this.addFilter(function(a){return Zotero.Utilities.trimInternal(a)})};this.match=function(a,b){if(!b){b=0}return this.addFilter(function(d){var c=d.match(a);if(c===undefined||c===null){return undefined}else{return c[b]}})};this.cleanAuthor=function(b,a){return this.addFilter(function(c){return Zotero.Utilities.cleanAuthor(c,b,a)})};this.key=function(a){return this.addFilter(function(b){return b[a]})};this.capitalizeTitle=function(){if(arguments.length>0&&arguments[0]==true){return this.addFilter(function(a){return Zotero.Utilities.capitalizeTitle(a,true)})}else{return this.addFilter(function(a){return Zotero.Utilities.capitalizeTitle(a)})}};this.unescapeHTML=function(){return this.addFilter(function(a){return Zotero.Utilities.unescapeHTML(a)})};this.unescape=function(){return this.addFilter(function(a){return unescape(a)})};this._applyFilters=function(c,e){for(i in this._filters){c=flatten(c);c=c.filter(function(a){return((a!==undefined)&&(a!==null))});for(var d=0;d<c.length;d++){try{if((c[d]===undefined)||(c[d]===null)){continue}else{c[d]=this._filters[i](c[d],e)}}catch(b){c[d]=undefined;Zotero.debug("Caught exception "+b+"on filter: "+this._filters[i])}}c=c.filter(function(a){return((a!==undefined)&&(a!==null))})}return flatten(c)}};FW.PageText=function(){return new FW._PageText()};FW._PageText=function(){this._filters=new Array();this.evaluate=function(c){var b=[c.documentElement.innerHTML];b=this._applyFilters(b,c);if(b.length==0){return false}else{return b}}};FW._PageText.prototype=new FW._StringMagic();FW.Url=function(){return new FW._Url()};FW._Url=function(){this._filters=new Array();this.evaluate=function(d,c){var b=[c];b=this._applyFilters(b,d);if(b.length==0){return false}else{return b}}};FW._Url.prototype=new FW._StringMagic();FW.Xpath=function(a){return new FW._Xpath(a)};FW._Xpath=function(a){this._xpath=a;this._filters=new Array();this.text=function(){var b=function(c){if(typeof c==="object"&&c.textContent){return c.textContent}else{return c}};this.addFilter(b);return this};this.sub=function(b){var c=function(f,e){var d=e.evaluate(b,f,null,XPathResult.ANY_TYPE,null);if(d){return d.iterateNext()}else{return undefined}};this.addFilter(c);return this};this.evaluate=function(f){var e=f.evaluate(this._xpath,f,null,XPathResult.ANY_TYPE,null);var d=e.resultType;var c=new Array();if(d==XPathResult.STRING_TYPE){c.push(e.stringValue)}else{if(d==XPathResult.ORDERED_NODE_ITERATOR_TYPE||d==XPathResult.UNORDERED_NODE_ITERATOR_TYPE){var b;while((b=e.iterateNext())){c.push(b)}}}c=this._applyFilters(c,f);if(c.length==0){return false}else{return c}}};FW._Xpath.prototype=new FW._StringMagic();FW.detectWeb=function(e,b){for(var c in FW._scrapers){var d=FW._scrapers[c];var f=d.evaluateThing(d.itemType,e,b);var a=d.evaluateThing(d.detect,e,b);if(a.length>0&&a[0]){return f}}return undefined};FW.getScraper=function(b,a){var c=FW.detectWeb(b,a);return FW._scrapers.filter(function(d){return(d.evaluateThing(d.itemType,b,a)==c)&&(d.evaluateThing(d.detect,b,a))})[0]};FW.doWeb=function(c,a){var b=FW.getScraper(c,a);b.makeItems(c,a,[],function(f,e,g,d){e.callHook("scraperDone",f,g,d);if(!f.title){f.title=""}f.complete()},function(){Zotero.done()});Zotero.wait()};

/*
RePEc Translator
Copyright (C) 2011 Sebastian Karcher

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/


function detectWeb(doc, url) { return FW.detectWeb(doc, url); }
function doWeb(doc, url) { return FW.doWeb(doc, url); }

/**Article */

FW.Scraper({
itemType : 'journalArticle',
detect : FW.Xpath('//meta[@name="citation_journal_title"]'),
title : FW.Xpath('//meta[@name="citation_title"]/@content').text().trim(),
attachments : [{ url: FW.Xpath('//p/a[contains(@href, "scripts/redi") and contains(@href, ".pdf")]').text().trim(),
  title: "RePEc PDF",
  type: "application/pdf" },
  {url: FW.Url(),
  title: "RePEc Snapshot",
  type: "text/html"},
  ],
creators : FW.Xpath('//meta[@name="citation_authors"]/@content').text().replace(/(;[^A-Za-z0-9]*)$/, "").split(/;/).cleanAuthor("author"),
date : FW.Xpath('//meta[@name="citation_date"]/@content|//meta[@name="citation_year"]/@content').text(),
issue : FW.Xpath('//meta[@name="citation_issue"]/@content').text(),
volume : FW.Xpath('//meta[@name="citation_volume"]/@content').text(),
pages : FW.Xpath('concat(//meta[@name="citation_firstpage"]/@content, "-", //meta[@name="citation_lastpage"]/@content)').remove(/^-|-$/),
ISSN : FW.Xpath('//meta[@name="citation_issn"]/@content').text(),
abstractNote: FW.Xpath('//meta[@name="citation_abstract"]/@content').text(),
journalAbbreviation : FW.Xpath('//meta[@name="citation_journal_abbrev"]/@content').text(),
DOI : FW.Xpath('//meta[@name="citation_doi"]/@content').text(),
language : FW.Xpath('//meta[@name="DC.Language"]/@content').text(),
tags :  FW.Xpath('//meta[@name="citation_keywords"]/@content').text().split(/;/),
publisher: FW.Xpath('//meta[@name="citation_publisher"]/@content').text(),
publicationTitle : FW.Xpath('//meta[@name="citation_journal_title"]/@content').text(),
//test for a comma in the first name - if it's there, switch them around
hooks : { "scraperDone": function  (item,doc, url) {
	for (i in item.creators) {
		if (item.creators[i].firstName.match(/,/)) {
			var lastname = item.creators[i].firstName.match(/^.*,/)[0].replace(/,/, "");
			var firstname = item.creators[i].firstName.match(/,.*/)[0].replace(/,\s?/, "") + " " + item.creators[i].lastName;
			item.creators[i].firstName=firstname;
			item.creators[i].lastName=lastname;
		}
	}}
}
});


/** Working Papers*/
FW.Scraper({
itemType : 'report',
detect : FW.Xpath('//meta[@name="dc.Type" and contains(@content, "techreport")]|//meta[contains(@name, "technical_report")]'),
title : FW.Xpath('//meta[@name="citation_title"]/@content').text().trim(),
attachments : [{ url: FW.Xpath('//p/a[contains(@href, "scripts/redi") and contains(@href, ".pdf")]').text().trim(),
  title: "RePEc PDF",
  type: "application/pdf" },
  {url: FW.Url(),
  title: "RePEc Snapshot",
  type: "text/html"},
  ],
//make sure there are no empty authors:
creators : FW.Xpath('//meta[@name="citation_authors"]/@content').text().replace(/(;[^A-Za-z0-9]*)$/, "").split(/;/).cleanAuthor("author", "true"),
date : FW.Xpath('//meta[@name="citation_date"]/@content|//meta[@name="citation_year"]/@content').text(),
pages : FW.Xpath('concat(//meta[@name="citation_firstpage"]/@content, "-", //meta[@name="citation_lastpage"]/@content)').remove(/^-|-$/),
ISSN : FW.Xpath('//meta[@name="citation_issn"]/@content').text(),
abstractNote: FW.Xpath('//meta[@name="citation_abstract"]/@content').text(),
DOI : FW.Xpath('//meta[@name="citation_doi"]/@content').text(),
language : FW.Xpath('//meta[@name="DC.Language"]/@content').text(),
tags :  FW.Xpath('//meta[@name="citation_keywords"]/@content').text().split(/;/),
publisher: FW.Xpath('//meta[@name="citation_publisher"]/@content|//meta[@name="citation_technical_report_institution"]/@content').text(),
reportNumber: FW.Xpath('//meta[@name="citation_technical_report_number"]/@content').text(),
reportType : FW.Xpath('//meta[@name="series"]/@content').text().replace(/apers$/, "aper"),

hooks : { "scraperDone": function  (item,doc, url) {
	for (i in item.creators) {
		if (item.creators[i].firstName.match(/,/)) {
			var lastname = item.creators[i].firstName.match(/^.+,/)[0].replace(/,/, "");
			var firstname = item.creators[i].firstName.match(/,.*/)[0].replace(/,\s?/, "") + " " + item.creators[i].lastName;
			item.creators[i].firstName=firstname;
			item.creators[i].lastName=lastname;
		}
	}}
}

});

FW.Scraper({
itemType : 'computerProgram',
detect : FW.Xpath('//meta[@name="dc.Type" and contains(@content, "software")]'),
title : FW.Xpath('//meta[@name="citation_title"]/@content').text().trim(),
attachments : [{ url: FW.Xpath('//p/a[contains(@href, "scripts/redi") and contains(@href, ".pdf")]').text().trim(),
  title: "RePEc PDF",
  type: "application/pdf" },
  {url: FW.Url(),
  title: "RePEc Snapshot",
  type: "text/html"},
  ],
//make sure there are no empty authors:
creators : FW.Xpath('//meta[@name="citation_authors"]/@content').text().replace(/(;[^A-Za-z0-9]*)$/, "").split(/;/).cleanAuthor("author", "true"),
date : FW.Xpath('//meta[@name="citation_date"]/@content|//meta[@name="citation_year"]/@content').text(),
pages : FW.Xpath('concat(//meta[@name="citation_firstpage"]/@content, "-", //meta[@name="citation_lastpage"]/@content)').remove(/^-|-$/),
ISSN : FW.Xpath('//meta[@name="citation_issn"]/@content').text(),
abstractNote: FW.Xpath('//meta[@name="citation_abstract"]/@content').text(),
DOI : FW.Xpath('//meta[@name="citation_doi"]/@content').text(),
programmingLanguage: FW.Xpath('//meta[@name="plang"]/@content').text().trim(),
seriesTitle: FW.Xpath('//meta[@name="series"]/@content').text().trim(),
language : FW.Xpath('//meta[@name="DC.Language"]/@content').text(),
tags :  FW.Xpath('//meta[@name="citation_keywords"]/@content').text().split(/;/),
publisher: FW.Xpath('//meta[@name="citation_publisher"]/@content|//meta[@name="citation_technical_report_institution"]/@content').text(),


hooks : { "scraperDone": function  (item,doc, url) {
	for (i in item.creators) {
		if (item.creators[i].firstName.match(/,/)) {
			var lastname = item.creators[i].firstName.match(/^.+,/)[0].replace(/,/, "");
			var firstname = item.creators[i].firstName.match(/,.*/)[0].replace(/,\s?/, "") + " " + item.creators[i].lastName;
			item.creators[i].firstName=firstname;
			item.creators[i].lastName=lastname;
		}
	}}
}

});




//Multi Econpapers - this happens in frames - scaffold fails, regular testing works
FW.MultiScraper({
itemType : 'multiple',
detect : FW.Url().match(/scripts\/a\/abstract\.pf/),
choices : {
  titles : FW.Xpath('//div[@class="abstractframe"]//li/a').text().trim(),
  urls : FW.Xpath('//div[@class="abstractframe"]//li/a').key("href")
}
});

/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "http://econpapers.repec.org/article/fejarticl/v_3a4a_3ay_3a2011_3ai_3a3_3ap_3a27-44.htm",
		"items": [
			{
				"itemType": "journalArticle",
				"creators": [
					{
						"firstName": "Dr. Selami",
						"lastName": "Guney",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [
					[
						"Informal Economy",
						" Shadow Economy",
						" Accounting",
						" Accountant",
						" Tax"
					]
				],
				"seeAlso": [],
				"attachments": [
					{
						"url": "http://www.fareastjournals.com/files/FEJPBV4N1P3.pdf",
						"title": "RePEc PDF",
						"type": "application/pdf"
					},
					{
						"url": "http://econpapers.repec.org/article/fejarticl/v_3a4a_3ay_3a2011_3ai_3a3_3ap_3a27-44.htm",
						"title": "RePEc Snapshot",
						"type": "text/html"
					}
				],
				"url": "http://econpapers.repec.org/article/fejarticl/v_3a4a_3ay_3a2011_3ai_3a3_3ap_3a27-44.htm",
				"abstractNote": "The informal economy is a common problem in all countries; however when compared to the developed countries, it has particular significance in the economies of the developing countries. Looking to the causes and effects of the informal economy, it appears that the informal economy is a persistent problem even if numerous solution methods have been proposed. This is mainly because of its social, physiologic, legislative, political and ethical dimensions integral to its structure. In addition to these, there are also economic factors that are extremely complex. Although there are numerous studies conducted on the informal economy, it hasn’t been thoroughly examined in terms of accounting. What can accounting which is one of the disciplines most severely affected by the informal economy do about this problem? How can governments prevent enterprises from undertaking unrecorded activities? What the discipline accounting can do to take effective steps to solve this problem, whose main function is to collect and to report all the information and documents pertaining to the enterprises. To find answers to such questions constitutes the basis of the study. In this study by making the definition of the informal economy, the developmental stage of the informal economy in Turkey and in the world has been examined on a general level and what kind of contributions the discipline accounting and certified public accountants can make to prevent the growth of the informal economy have been discussed and relevant recommendations have been put forward.",
				"date": "2011",
				"ISSN": "2219-5440",
				"issue": "3",
				"pages": "27-44",
				"publicationTitle": "Far East Journal of Psychology and Business",
				"publisher": "Far East Research Centre",
				"title": "The Role Of Accounting And Certified Public Accountants In The Prevention Of The Informal Economy In Turkey",
				"volume": "4 No 1 Paper 3 July",
				"libraryCatalog": "RePEc - Econpapers",
				"accessDate": "CURRENT_TIMESTAMP"
			}
		]
	},
	{
		"type": "web",
		"url": "http://econpapers.repec.org/paper/nbrnberwo/11309.htm",
		"items": [
			{
				"itemType": "report",
				"creators": [
					{
						"firstName": "David E",
						"lastName": "Card",
						"creatorType": "author"
					},
					{
						"firstName": "Enrico",
						"lastName": "Moretti",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [],
				"seeAlso": [],
				"attachments": [
					{
						"url": "http://www.nber.org/papers/w11309.pdf",
						"title": "RePEc PDF",
						"type": "application/pdf"
					},
					{
						"url": "http://econpapers.repec.org/paper/nbrnberwo/11309.htm",
						"title": "RePEc Snapshot",
						"type": "text/html"
					}
				],
				"url": "http://econpapers.repec.org/paper/nbrnberwo/11309.htm",
				"abstractNote": "Supporters of touch-screen voting claim it is a highly reliable voting technology, while a growing number of critics argue that paperless electronic voting systems are vulnerable to fraud. In this paper we use county-level data on voting technologies in the 2000 and 2004 presidential elections to test whether voting technology affects electoral outcomes. We first show that there is a positive correlation between use of touch-screen voting and the level of electoral support for George Bush. This is true in models that compare the 2000-2004 changes in vote shares between adopting and non-adopting counties within a state, after controlling for income, demographic composition, and other factors. Although small, the effect could have been large enough to influence the final results in some closely contested states. While on the surface this pattern would appear to be consistent with allegations of voting irregularities, a closer examination suggests this interpretation is incorrect. If irregularities did take place, they would be most likely in counties that could potentially affect statewide election totals, or in counties where election officials had incentives to affect the results. Contrary to this prediction, we find no evidence that touch-screen voting had a larger effect in swing states, or in states with a Republican Secretary of State. Touch-screen voting could also indirectly affect vote shares by influencing the relative turnout of different groups. We find that the adoption of touch-screen voting has a negative effect on estimated turnout rates, controlling for state effects and a variety of county-level controls. This effect is larger in counties with a higher fraction of Hispanic residents (who tend to favor Democrats) but not in counties with more African Americans (who are overwhelmingly Democrat voters). Models for the adoption of touch-screen voting suggest it was more likely to be used in counties with a higher fraction of Hispanic and Black residents, especially in swing states. Nevertheless, the impact of non-random adoption patterns on vote shares is small.",
				"date": "2005/05",
				"publisher": "National Bureau of Economic Research, Inc",
				"reportNumber": "11309",
				"reportType": "NBER Working Paper",
				"title": "Does Voting Technology Affect Election Outcomes? Touch-screen Voting and the 2004 Presidential Election",
				"libraryCatalog": "RePEc - Econpapers",
				"accessDate": "CURRENT_TIMESTAMP",
				"shortTitle": "Does Voting Technology Affect Election Outcomes?"
			}
		]
	},
	{
		"type": "web",
		"url": "http://econpapers.repec.org/software/bocbocode/s439301.htm",
		"items": [
			{
				"itemType": "computerProgram",
				"creators": [
					{
						"firstName": "Ben",
						"lastName": "Jann",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [
					[
						"estimates",
						" LaTeX",
						" HTML",
						" word processor",
						" output"
					]
				],
				"seeAlso": [],
				"attachments": [
					{
						"url": false,
						"title": "RePEc PDF",
						"type": "application/pdf"
					},
					{
						"url": "http://econpapers.repec.org/software/bocbocode/s439301.htm",
						"title": "RePEc Snapshot",
						"type": "text/html"
					}
				],
				"url": "http://econpapers.repec.org/software/bocbocode/s439301.htm",
				"abstractNote": "estout produces a table of regression results from one or several models for use with spreadsheets, LaTeX, HTML, or a word-processor table. eststo stores a quick copy of the active estimation results for later tabulation. esttab is a wrapper for estout. It displays a pretty looking publication-style regression table without much typing. estadd adds additional results to the e()-returns for one or several models previously fitted and stored. This package subsumes the previously circulated esto, esta, estadd, and estadd_plus. An earlier version of estout is available as estout1.",
				"date": "2009/10/12",
				"programmingLanguage": "Stata",
				"seriesTitle": "Statistical Software Components",
				"title": "ESTOUT: Stata module to make regression tables",
				"libraryCatalog": "RePEc - Econpapers",
				"accessDate": "CURRENT_TIMESTAMP",
				"shortTitle": "ESTOUT"
			}
		]
	}
]
/** END TEST CASES **/