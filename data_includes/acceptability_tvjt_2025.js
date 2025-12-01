var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("first-item"), startsWith("firstfiller"))),"description-followup", sepWith("sep", rshuffle(startsWith("followup"), startsWith("filler"))));

var continueMessage = ["Klikni zde"];

var aj = "AcceptabilityJudgment";

var q = "Question";

var completionMessage = "[Zadané odpovědi jsou odeslány na server. Děkujeme za spolupráci!]";

var ms = "Message";

var defaults = [    
    "Separator", { transfer: 800,
                   normalMessage: "Počkejte prosím na další položku v experimentu.",
                   errorMessage: "Špatně. Počkejte prosím na další položku v experimentu." 
		 },
    "AcceptabilityJudgment", { as: ["1", "2", "3", "4", "5"],
                               presentAsScale: true,
                               leftComment: "(absolutně nepřijatelná věta)", rightComment: "(věta je naprosto v pořádku)" },
    "Message", { hideProgressBar: true, transfer: "click" }
];

 var progressBarText = "";

var items = [ ["sep", "Separator", { }],
 
	      ["intro", "Form", {continueMessage: "Pro vstup do experimentu, klikněte zde", html: { include: "example_intro.html" }}],

	      ["practice", aj, {s: {html: "<p>Pavel uviděl Marušku.</p><p><i>Tato věta je v pořádku. Pokud souhlasíte, vyberte jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "Ačkoliv byla Marie unavená, navštívila včera ještě vedoucího hasičské jednotky Tříbětice.</p><p><i>Tato věta je v pořádku. Pokud souhlasíte, vyberte jako odpověď jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "Byla Marie unavená ačkoliv, navštívila včera ještě ho v Tříběticích.</p><p><i>Tato věta není v pořádku. Pokud souhlasíte, vyberte jako odpověď jednu z možností v levém konci škály (nejspíš 1).</i></p>"}}],

	      ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-acc-all", 1], aj, {s: "Všichni návštěvníci se sebemenším zájmem o archeologii zvládli tento exponát hned poznat."}],
[["first-item1-acc-most", 1], aj, {s: "Většina návštěvníků se sebemenším zájmem o archeologii zvládla tento exponát hned poznat."}],
[["first-item1-acc-some", 1], aj, {s: "Někteří návštěvníci se sebemenším zájmem o archeologii zvládli tento exponát hned poznat."}],

[["first-item2-acc-all", 2], aj, {s: "Všechny zákaznice se sebemenší alergií na odlakovač musely ze salonu preventivně odejít.s"}],
[["first-item2-acc-most", 2], aj, {s: "Většina zákaznic se sebemenší alergií na odlakovač musela ze salonu preventivně odejít."}],
[["first-item2-acc-some", 2], aj, {s: "Některé zákaznice se sebemenší alergií na odlakovač musely ze salonu preventivně odejít."}],


["firstfiller1", aj, {s: "Já, starý sadař nejsem přišel do lesa celé roky." }],
["firstfiller_item2", aj, {s: "Já, starý sadař, jsem nepřišel do lesa celé roky." }],
["firstfiller_item3", aj, {s: "Ten nový student bude zítra přečíst tu vyžádanou knihu." }],
["firstfiller_item4", aj, {s: "Ten nový student přečte zítra tu vyžádanou knihu." }],
["firstfiller_item5", aj, {s: "Černý kocour pronásledovala po dvorku bílou kočku." }],
["firstfiller_item6", aj, {s: "Bílá kočka pronásledovala po dvorku černého kocoura." }],
["firstfiller_item7", aj, {s: "Svůj dědeček viděl Karla na nádraží." }],
["firstfiller_item8", aj, {s: "Karel viděl svého dědečka na nádraží." }],
["firstfiller_item9", aj, {s: "Petr chtěl, aby mu Karel pomůže se štípáním dřeva." }],
["firstfiller_item10", aj, {s: "Petr přijel včera až do půlnoci." }],
["firstfiller_item11", aj, {s: "Petr přečetl tu novou knihu celou noc." }],
["firstfiller_item12", aj, {s: "Petr slyšel Karlem zpívat celou noc." }],
["firstfiller_item13", aj, {s: "Pět chlapci přišli na dvůr hrát fotbal." }],
["firstfiller_item14", aj, {s: "Trojice chlapců včera v baru vypila pivo každý." }],
["firstfiller_item15", aj, {s: "Každý student se sešel včera na dvorku." }],
["firstfiller_item16", aj, {s: "Petr přinesl na dvůr všechen pes." }],
["firstfiller_item17", aj, {s: "Většina chlapců přinesli zadaný úkol v pořádku." }],
["firstfiller_item18", aj, {s: "Málo dívek přišlo na schůzku pozdě." }],
["firstfiller_item19", aj, {s: "Petr včera přijít do obchodu a jíst ten salám." }],
["firstfiller_item20", aj, {s: "Koho Petr viděl muže, který na dvorku pozdravil?" }],
["firstfiller_item21", aj, {s: "Koho na dvorku Petr viděl Kláru a?" }],
["firstfiller_item22", aj, {s: "Koho Petr nevěděl, kdo včera pozdravil?" }],
["firstfiller_item23", aj, {s: "Mladý muž se mu, který kouřil cigaretu, představil." }],
["firstfiller_item24", aj, {s: "Mladý muž, který kouřil cigaretu, se mu představil." }],
["firstfiller_item25", aj, {s: "Petr přinesl do sběrného dvora dvě dveře." }],
["firstfiller_item26", aj, {s: "Petr viděl včera večer mladého muže a v parku." }],
["firstfiller_item27", aj, {s: "Petr vrátil do knihovny knihu a unavený." }],
["firstfiller_item28", aj, {s: "Ta loď se bohužel potopila křižníkem." }],
["firstfiller_item29", aj, {s: "Petr mával celý večer pes." }],
["firstfiller_item30", aj, {s: "Když jsem přišel, Karel už byl dvě hodiny odjet." }],


["description-followup", "Message", {html: ["div", ["p", "Nyní se zeptáme na to, jestli jedna věta vyplývá z druhé. Při posuzování byste měli vycházet ze své intuice. Například Pavel je unavený - z této věty plyne, že je někdo unavený, ale neplyne, že jsou unavení všichni lidé."], ["p", "Svou volbu potvrdíte kliknutím na link -- Druhá věta vyplývá z první, nebo Druhá věta nevyplývá z první. Případně stiskněte klávesu 1 nebo 2."], ["p", "Experiment pokračuje po kliknutí na níže uvedený link."], ]}],

[["followup-item41-NR", 41], aj, {s: {html: "<p>Nový bača v Tatrách nechce, aby se ztratila jediná ovce.</p><p>Nový bača v Tatrách chce, aby se neztratila jediná ovce.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item41-CNR", 41], aj, {s: {html: "<p>Myslivci nevěří, že nový bača v Tatrách chce, aby se ztratila jediná ovce.</p><p>Myslivci věří, že nový bača v Tatrách chce, aby se neztratila jediná ovce.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item41-EWS", 41], aj, {s: {html: "<p>Ne všichni myslivci věří, že nový bača v Tatrách chce, aby se ovce měly dobře.</p><p>Někteří myslivci věří, že nový bača v Tatrách chce, aby se ovce měly špatně.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item42-NR", 42], aj, {s: {html: "<p>Nový vedoucí katedry nehodlá dopustit, aby se platy zaměstnanců zvedly.</p><p>Nový vedoucí katedry hodlá dopustit, aby se platy zaměstnanců nezvedly.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item42-CNR", 42], aj, {s: {html: "<p>Zaměstnanci nevěří, že nový vedoucí katedry hodlá dopustit, aby se jejich platy zvedly.</p><p>Zaměstnanci věří, že nový vedoucí katedry hodlá dopustit, aby se jejich platy nezvedly.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item42-EWS", 42], aj, {s: {html: "<p>Ne všichni zaměstnanci věří, že nový vedoucí katedry hodlá dopustit, aby se jejich platy zvedly.</p><p>Někteří zaměstnanci věří, že nový vedoucí katedry hodlá dopustit, aby se jejich platy nezvedly.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item43-NR", 43], aj, {s: {html: "<p>Tenhle renomovaný architekt nemá v úmyslu, aby tu vznikla nová zástavba.</p><p>Tenhle renomovaný architekt má v úmyslu, aby tu nevznikla nová zástavba.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item43-CNR", 43], aj, {s: {html: "<p>Obyvatelé města nevěří, že tenhle renomovaný architekt má v úmyslu, aby tu vznikla nová zástavba.</p><p>Obyvatelé města věří, že tenhle renomovaný architekt má v úmyslu, aby tu nevznikla nová zástavba.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item43-EWS", 43], aj, {s: {html: "<p>Ne všichni obyvatelé města věří, že tenhle renomovaný architekt má v úmyslu, aby tu vznikla nová zástavba.</p><p>Někteří obyvatelé města věří, že tenhle renomovaný architekt má v úmyslu, aby tu nevznikla nová zástavba.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item44-NR", 44], aj, {s: {html: "<p>Náš nový knihovník si nepřeje, aby zmizely ty nové knížky.</p><p>Náš nový knihovník si přeje, aby nezmizely ty nové knížky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item44-CNR", 44], aj, {s: {html: "<p>Studenti nevěří, že náš nový knihovník si přeje, aby zmizely ty nové knížky.</p><p>Studenti věří, že náš nový knihovník si přeje, aby nezmizely ty nové knížky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item44-EWS", 44], aj, {s: {html: "<p>Ne všichni studenti věří, že náš nový knihovník si přeje, aby zmizely ty nové knížky.</p><p>Někteří studenti věří, že náš nový knihovník si přeje, aby nezmizely ty nové knížky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item45-NR", 45], aj, {s: {html: "<p>Starý vévoda by nebyl rád, kdyby ze sklepa zmizelo nejlepší víno.</p><p>Starý vévoda by byl rád, kdyby ze sklepa nezmizelo nejlepší víno.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item45-CNR", 45], aj, {s: {html: "<p>Sluhové nevěří, že starý vévoda by byl rád, kdyby ze sklepa zmizelo nejlepší víno.</p><p>Sluhové věří, že starý vévoda by byl rád, kdyby ze sklepa nezmizelo nejlepší víno.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item45-EWS", 45], aj, {s: {html: "<p>Ne všichni sluhové věří, že starý vévoda by byl rád, kdyby ze sklepa zmizelo nejlepší víno.</p><p>Někteří sluhové věří, že starý vévoda by byl rád, kdyby ze sklepa nezmizelo nejlepší víno.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item46-NR", 46], aj, {s: {html: "<p>Nová vláda se nechystá, že by zrušila ty staré zákony.</p><p>Nová vláda se chystá, že nezruší nezruší ty staré zákony.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item46-CNR", 46], aj, {s: {html: "<p>Lidé nevěří, že nová vláda se chystá, že by zrušila ty staré zákony.</p><p>Lidé věří, že nová vláda se chystá, že nezruší ty staré zákony.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item46-EWS", 46], aj, {s: {html: "<p>Ne všichni lidé věří, že nová vláda se chystá, že by zrušila ty staré zákony.</p><p>Někteří lidé věří, že nová vláda se chystá, že nezruší ty staré zákony.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item47-NR", 47], aj, {s: {html: "<p>Ten známý zpěvák by nebyl potěšen, kdyby o něm psali v místních novinách.</p><p>Ten známý zpěvák by byl potěšen, kdyby o něm nepsali v místních novinách.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item47-CNR", 47], aj, {s: {html: "<p>Lidé nevěří, že ten známý zpěvák by byl potěšen, kdyby o něm psali v místních novinách.</p><p>Lidé věří, že ten známý zpěvák by byl potěšen, kdyby o něm nepsali v místních novinách.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item47-EWS", 47], aj, {s: {html: "<p>Ne všichni lidé věří, že ten známý zpěvák by byl potěšen, kdyby o něm psali v místních novinách.</p><p>Někteří lidé věří, že ten známý zpěvák by byl potěšen, kdyby o něm nepsali v místních novinách.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item48-NR", 48], aj, {s: {html: "<p>Tenhle spisovatel detektivek nepotřebuje, aby ho chválili novináři.</p><p>Tenhle spisovatel detektivek potřebuje, aby ho nechválili novináři.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item48-CNR", 48], aj, {s: {html: "<p>Čtenáři nevěří, že tenhle spisovatel detektivek potřebuje, aby ho chválili novináři.</p><p>Čtenáři věří, že tenhle spisovatel detektivek potřebuje, aby ho nechválili novináři.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item48-EWS", 48], aj, {s: {html: "<p>Ne všichni čtenáři věří, že tenhle spisovatel detektivek potřebuje, aby ho chválili novináři.</p><p>Někteří čtenáři věří, že tenhle spisovatel detektivek potřebuje, aby ho nechválili novináři.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item49-NR", 49], aj, {s: {html: "<p>Tento národ neusiloval o to, aby vyvinul zbraně hromadného ničení.</p><p>Tento národ usiloval o to, aby nevyvinul zbraně hromadného ničení.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item49-CNR", 49], aj, {s: {html: "<p>Okolní státy nevěří, že tento národ usiloval o to, aby vyvinul zbraně hromadného ničení.</p><p>Okolní státy věří, že tento národ usiloval o to, aby nevyvinul zbraně hromadného ničení.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item49-EWS", 49], aj, {s: {html: "<p>Ne všechny okolní státy věří, tento národ usiloval o to, aby vyvinul zbraně hromadného ničení.</p><p>Některé okolní státy věří, tento národ usiloval o to, aby nevyvinul zbraně hromadného ničení.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item50-NR", 50], aj, {s: {html: "<p>Ti mniši netoužili po tom, aby se ztratily ty vzácné knihy.</p><p>Ti mniši toužili po tom, aby se neztratily ty vzácné knihy.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item50-CNR", 50], aj, {s: {html: "<p>Historici nevěří, že ti mniši toužili po tom, aby se ztratily ty vzácné knihy.</p><p>Historici věří, že ti mniši toužili po tom, aby se neztratily ty vzácné knihy.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item50-EWS", 50], aj, {s: {html: "<p>Ne všichni historici věří, že ti mniši toužili po tom, aby se ztratily ty vzácné knihy.</p><p>Někteří historici věří, že ti mniši toužili po tom, aby se neztratily ty vzácné knihy.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item51-NR", 51], aj, {s: {html: "<p>Jako váš vedoucí vám neradím, abyste vynechali to školení.</p><p>Jako váš vedoucí vám radím, abyste nevynechali to školení.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item51-CNR", 51], aj, {s: {html: "<p>Zaměstnanci nevěřili, že jejich vedoucí jim radil, aby vynechali to školení.</p><p>Zaměstnanci věřili, že jejich vedoucí jim radil, aby nevynechali to školení.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item51-EWS", 51], aj, {s: {html: "<p>Ne všichni zaměstnanci věřili, že jejich vedoucí jim radil, aby vynechali to školení.</p><p>Někteří zaměstnanci věřili, že jejich vedoucí jim radil, aby nevynechali to školení.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item52-NR", 52], aj, {s: {html: "<p>S touhle novou zbraní nechceme, abychom ztratili jediného vojáka.</p><p>S touhle novou zbraní chceme, abychom neztratili jediného vojáka.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item52-CNR", 52], aj, {s: {html: "<p>Lidé nevěří, že s touhle novou zbraní chceme, abychom ztratili jediného vojáka.</p><p>Lidé věří, že s touhle novou zbraní chceme, abychom neztratili jediného vojáka.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item52-EWS", 52], aj, {s: {html: "<p>Ne všichni lidé věří, že s touhle novou zbraní chceme, abychom ztratili jediného vojáka.</p><p>Někteří lidé věří, že s touhle novou zbraní chceme, abychom neztratili jediného vojáka.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item53-NR", 53], aj, {s: {html: "<p>Jeho lékař Karlovi nedoporučil, aby vynechal tu léčebnou proceduru.</p><p>Jeho lékař Karlovi doporučil, aby nevynechal tu léčebnou proceduru.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item53-CNR", 53], aj, {s: {html: "<p>My nevěříme, že Karlův lékař mu doporučil, aby vynechal tu léčebnou proceduru.</p><p>My věříme, že Karlův lékař mu doporučil, aby nevynechal tu léčebnou proceduru.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item53-EWS", 53], aj, {s: {html: "<p>Ne všichni věříme, že Karlův lékař mu doporučil, aby vynechal tu léčebnou proceduru.</p><p>Někteří věříme, že Karlův lékař mu doporučil, aby nevynechal tu léčebnou proceduru.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item54-NR", 54], aj, {s: {html: "<p>V česky psaném textu není žádoucí, aby na konci řádku zůstaly jednoslabičné předložky.</p><p>V česky psaném textu je žádoucí, aby na konci řádku nezůstaly jednoslabičné předložky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item54-CNR", 54], aj, {s: {html: "<p>Korektoři nevěří, že v česky psaném textu je žádoucí, aby na konci řádku zůstaly jednoslabičné předložky.</p><p>Korektoři věří, že v česky psaném textu je žádoucí, aby na konci řádku nezůstaly jednoslabičné předložky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item54-EWS", 54], aj, {s: {html: "<p>Ne všichni korektoři věří, že v česky psaném textu je žádoucí, aby na konci řádku zůstaly jednoslabičné předložky.</p><p>Někteří korektoři věří, že v česky psaném textu je žádoucí, aby na konci řádku nezůstaly jednoslabičné předložky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item55-NR", 55], aj, {s: {html: "<p>Administrátoři těch stránek si nepřejí, aby se zrušilo jediné fórum.</p><p>Administrátoři těch stránek si přejí, aby se nezrušilo jediné fórum.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item55-CNR", 55], aj, {s: {html: "<p>Uživatelé nevěří, že administrátoři těch stránek si přejí, aby se zrušilo jediné fórum.</p><p>Uživatelé věří, že administrátoři těch stránek si přejí, aby se nezrušilo jediné fórum.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item55-EWS", 55], aj, {s: {html: "<p>Ne všichni uživatelé věří, že administrátoři těch stránek si přejí, aby se zrušilo jediné fórum.</p><p>Někteří uživatelé věří, že administrátoři těch stránek si přejí, aby se nezrušilo jediné fórum.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item56-NR", 56], aj, {s: {html: "<p>Není povinností policisty, aby přehlédl přestupky.</p><p>Je povinností policisty, aby nepřehlédl přestupky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item56-CNR", 56], aj, {s: {html: "<p>Občané nevěří, že je povinností policisty, aby přehlédl přestupky.</p><p>Občané věří, že je povinností policisty, aby nepřehlédl přestupky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item56-EWS", 56], aj, {s: {html: "<p>Ne všichni občané věří, že je povinností policisty, aby přehlédl přestupky.</p><p>Někteří občané věří, že je povinností policisty, aby nepřehlédl přestupky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item57-NR", 57], aj, {s: {html: "<p>Milí řidiči, nebylo by dobré, abyste nabourali testovací kužely.</p><p>Milí řidiči, bylo by dobré, abyste nenabourali testovací kužely.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item57-CNR", 57], aj, {s: {html: "<p>Instruktoři nevěří, že by pro řidiče bylo dobré, aby nabourali testovací kužely.</p><p>Instruktoři věří, že by pro řidiče bylo dobré, aby nenabourali testovací kužely.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item57-EWS", 57], aj, {s: {html: "<p>Ne všichni instruktoři věří, že by pro řidiče bylo dobré, aby nabourali testovací kužely.</p><p>Někteří instruktoři věří, že by pro řidiče bylo dobré, aby nenabourali testovací kužely.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item58-NR", 58], aj, {s: {html: "<p>Podle nové směrnice by nebylo vhodné, aby telefonní operátoři změnili stávající tarify.</p><p>Podle nové směrnice by bylo vhodné, aby telefonní operátoři nezměnili stávající tarify.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item58-CNR", 58], aj, {s: {html: "<p>Zákazníci nevěří, že podle nové směrnice by bylo vhodné, aby telefonní operátoři změnili stávající tarify.</p><p>Zákazníci věří, že podle nové směrnice by bylo vhodné, aby telefonní operátoři nezměnili stávající tarify.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item58-EWS", 58], aj, {s: {html: "<p>Ne všichni zákazníci věří, že podle nové směrnice by bylo vhodné, aby telefonní operátoři změnili stávající tarify.</p><p>Někteří zákazníci věří, že podle nové směrnice by bylo vhodné, aby telefonní operátoři nezměnili stávající tarify.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item59-NR", 59], aj, {s: {html: "<p>Nový náčelník policie nechce, aby se na ten případ nasadili zkorumpovaní policisté.</p><p>Nový náčelník policie chce, aby se na ten případ nasadili nezkorumpovaní policisté.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item59-CNR", 59], aj, {s: {html: "<p>Gangsteři nevěří, že nový náčelník policie chce, aby se na ten případ nasadili zkorumpovaní policisté.</p><p>Gangsteři věří, že nový náčelník policie chce, aby se na ten případ nasadili nezkorumpovaní policisté.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item59-EWS", 59], aj, {s: {html: "<p>Ne všichni gangsteři věří, že nový náčelník policie chce, aby se na ten případ nasadili zkorumpovaní policisté.</p><p>Někteří gangsteři věří, že nový náčelník policie chce, aby se na ten případ nasadili nezkorumpovaní policisté.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item60-NR", 60], aj, {s: {html: "<p>Jako dobrý znalec místních poměrů vám neradím, abyste šli tou cestou kolem jezera.</p><p>Jako dobrý znalec místních poměrů vám radím, abyste nešli tou cestou kolem jezera.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item60-CNR", 60], aj, {s: {html: "<p>Ti cestovatelé nevěřili, že ten dobrý znalec místních poměrů jim radil, aby šli tou cestou kolem jezera.</p><p>Ti cestovatelé věřili, že ten dobrý znalec místních poměrů jim radil, aby nešli tou cestou kolem jezera.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item60-EWS", 60], aj, {s: {html: "<p>Ne všichni cestovatelé věřili, že ten dobrý znalec místních poměrů jim radil, aby šli tou cestou kolem jezera.</p><p>Někteří cestovatelé věřili, že ten dobrý znalec místních poměrů jim radil, aby nešli tou cestou kolem jezera.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler1", aj, {s: {html: "<p>Petrovi se ztratilo několik ovcí.</p><p>Petrovi se ztratilo několik zvířat.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler2", aj, {s: {html: "<p>Petrovi se neztratila žádná zvířata.</p><p>Petrovi se neztratily žádné ovce.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler3", aj, {s: {html: "<p>Petr a Marie šli kolem jezera.</p><p>Petr šel kolem jezera.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler4", aj, {s: {html: "<p>Všechna kola v tomhle obchodě jsou předražená.</p><p>Některá kola v tomhle obchodě jsou předražená.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler5", aj, {s: {html: "<p>Petr lituje, že žije v Paříži.</p><p>Petr žije v Paříži.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler6", aj, {s: {html: "<p>Petr nevyhrál ten závod.</p><p>Petr se zúčastnil toho závodu.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler7", aj, {s: {html: "<p>Jestli venku sněží, tak vyjedou silničáři; venku sněží.</p><p>Vyjedou silničáři.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler8", aj, {s: {html: "<p>Když venku sněží, tak vyjedou silničáři; silničáři nevyjeli.</p><p>Venku nesněží.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler9", aj, {s: {html: "<p>Když venku sněží, tak vyjedou silničáři; venku nesněží.</p><p>Silničáři nevyjeli.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler10", aj, {s: {html: "<p>Petr napsal pět románů.</p><p>Petr napsal více než tři romány.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler11", aj, {s: {html: "<p>Petr je vyšší než všechny ostatní děti v jeho třídě; Klára chodí do Petrovy třídy.</p><p>Petr je vyšší než Klára.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler12", aj, {s: {html: "<p>Petr je vyšší než všechny ostatní děti v jeho třídě; Klára nechodí do Petrovy třídy.</p><p>Petr je vyšší než Klára.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler13", aj, {s: {html: "<p>Ne všechny děti přijely před třetí hodinou odpoledne.</p><p>Ne všechny děti přijely před druhou hodinou odpoledne.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler14", aj, {s: {html: "<p>Některé děti jsou skauti.</p><p>Někteří skauti jsou děti.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler15", aj, {s: {html: "<p>Každý člověk je smrtelný.</p><p>Každá smrtelná bytost je člověkem.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler16", aj, {s: {html: "<p>Málo lidí létá vrtulníkem.</p><p>Málo dětí létá vrtulníkem.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler17", aj, {s: {html: "<p>Málo dětí vlastní auto.</p><p>Málo lidí vlastní auto.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler18", aj, {s: {html: "<p>Někteří lidé umí plavat; některé plavající bytosti mají žábry.</p><p>Někteří lidé mají žábry.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler19", aj, {s: {html: "<p>Petr seděl v knihovně od rána do pozdního večera.</p><p>Petr seděl v knihovně (minimálně) od rána do poledne.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler20", aj, {s: {html: "<p>Petr nedostudoval vysokou školu.</p><p>Petr studoval vysokou školu.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler21", aj, {s: {html: "<p>Potkal jsem Petrova nejstaršího syna.</p><p>Petr má syna.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler22", aj, {s: {html: "<p>Petr neopravil všechny písemky.</p><p>Petr opravil některé písemky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler23", aj, {s: {html: "<p>Petr opravil většinu písemek.</p><p>Petr neopravil všechny písemky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler24", aj, {s: {html: "<p>Oba studenti tu zkoušku nezvládli.</p><p>Tu zkoušku nezvládl ani jeden z těch studentů.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler25", aj, {s: {html: "<p>Nebyl to zahradník, kdo zabil vévodu.</p><p>Vévoda byl zabit.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler26", aj, {s: {html: "<p>Všichni studenti přijeli ne autobusem, ale vlakem.</p><p>Žádný student nepřijel autobusem.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler27", aj, {s: {html: "<p>Na tu konferenci pojedu autobusem nebo vlakem; nepojedu vlakem.</p><p>Pojedu autobusem.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler28", aj, {s: {html: "<p>Všichni jezevčíci jsou psi; všichni psi štěkají.</p><p>Všichni jezevčíci štěkají.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler29", aj, {s: {html: "<p>Petr neví, že Klára odjela domů.</p><p>Klára odjela domů.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler30", aj, {s: {html: "<p>Jen Petr miluje Marii.</p><p>Nikdo kromě Petra Marii nemiluje.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}]

];
