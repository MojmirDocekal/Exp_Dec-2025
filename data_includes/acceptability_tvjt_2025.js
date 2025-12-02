var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("first-item"), startsWith("firstfiller"))), "practice-two-before", seq("practice-two"), "practice-two-over", sepWith("sep", rshuffle(startsWith("followup"), startsWith("filler"))));

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

[["first-item2-acc-all", 2], aj, {s: "Všechny zákaznice se sebemenší alergií na odlakovač musely ze salonu preventivně odejít."}],
[["first-item2-acc-most", 2], aj, {s: "Většina zákaznic se sebemenší alergií na odlakovač musela ze salonu preventivně odejít."}],
[["first-item2-acc-some", 2], aj, {s: "Některé zákaznice se sebemenší alergií na odlakovač musely ze salonu preventivně odejít."}],

[["first-item3-acc-all", 3], aj, {s: "Všichni občané se sebemenší vírou v Boha chtěli nalezenému dítěti naplánovat křest."}],
[["first-item3-acc-most", 3], aj, {s: "Většina občanů se sebemenší vírou v Boha chtěla nalezenému dítěti naplánovat křest."}],
[["first-item3-acc-some", 3], aj, {s: "Někteří občané se sebemenší vírou v Boha chtěli nalezenému dítěti naplánovat křest."}],



["firstfiller1", aj, {s: "Já, starý sadař nejsem přišel do lesa celé roky." }],
["firstfiller_item2", aj, {s: "Já, starý sadař, jsem nepřišel do lesa celé roky." }],

["practice-two-before", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí první část experimentu. Klikněte níže pro vysvětlení druhé části experimentu."]]}],

 ["practice-two", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_nd_wrong.jpg?raw=true\"></td><td><img style=\"display:block;max-width:400px;max-height:400px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_non-distributive.jpg?raw=true\"></td></table></center>Kontext: Aleš a Bedřich byli včera se svými manželkami na večírku. Obě manželky požádaly své manžele, aby je vyfotili. Aleš svoji manželku vyfotil, ale Bedřich ne, protože měl vybitý telefon.<center><p>Věta: <i>Pouze jeden manžel vyfotil svoji manželku.</i></p></p>Věta je adekvátní vůči kontextu a zároveň odpovídá levému obrázku, neboť na něm pouze jeden muž fotí ženu. Pravý obrázek neodpovídá, neboť na něm fotí dva muži. Odpověď <i>ani jeden</i> zde není adekvátní, protože k větě se hodí obrázek nalevo. Klikněte tedy na odpověď <i>levý</i>.</center>"}, hasCorrect: 0}],
             
["practice-two", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:400px;max-height:400px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/9_non-d_f.jpg?raw=true\"></td><td><img style=\"display:block;max-width:370px;max-height:370px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/9_nd.jpg?raw=true\"></td></table></center>Kontext: Děti si hrály na půdě, kde našly staré rozbité hračky. Byly z toho smutné. Přinesly je ukázat tatínkovi a prosily ho, zda by mohl rozbité hračky opravit.</p><center><p>Věta: <i>Každé dítě přineslo jednu hračku. </i></p></p>Věta je adekvátní vůči kontextu a zároveň odpovídá pravému obrázku, neboť na něm má každé dítě v ruce jednu hračku. Na levém obrázku nese hračku pouze holčička, zatímco chlapeček má prázdné ruce. Odpověď <i>ani jeden</i> zde není adekvátní, protože se k větě hodí obrázek napravo. Klikněte tedy na odpověď <i>pravý</i>.</center>"}, hasCorrect: 2}],
            
["practice-two", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:450px;max-height:450px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/3_d.jpg?raw=true\"></td><td><img style=\"display:block;max-width:610px;max-height:610px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/3_d_f.jpg?raw=true\"></td></table></center>Kontext: Alena přišla navštívit svoji sestru Mariku. Alena byla celý týden na dovolené, a proto jí uniklo několik dílů oblíbeného detektivního seriálu. Marika jí proto stručně vylíčila, co se tam odehrálo.</p><center><p>Věta: <i>Marika řekla, že policista Jan zatkl dva zloděje. </i></p></p>Věta je sice adekvátní vůči kontextu, ale ani jeden obrázek dané větě neodpovídá. Levý obrázek větě neodpovídá, protože jsou na něm dva policisté a každý z nich zatkl dva zloděje. Vyslovená věta ovšem zmiňuje pouze jednoho policistu. Pravý obrázek také neodpovídá, protože jsou na něm dva policisté a každý z nich zatkl jednoho zloděje. Ani jeden obrázek tedy neodpovídá větě. Zvolte možnost <i>ani jeden</i>.</center>"}, hasCorrect: 1}],             

          ["practice-two-over", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["followup-item1-d-ref", 1], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_d_wrong.jpg?raw=true\"></td></table></center> Kontext: Včera se konal v Praze večírek celebrit. Sešli se zde známí herci, zpěváci, modelky a samozřejmě novináři bulvárních časopisů. Večírku se zúčastnily také herečky Simona a Kamila. Šéfredaktoři přikázali novinářům pořídit fotografie ukazující temnou stránku celebrit. Novináři Karel a Jakub tedy doufali, že se jim pořadí pořídit kompromitující fotografie pozvaných osobností, které by mohly čtenáře časopisů zajímat.</p><center><p>Věta: <i> Karel i Jakub vyfotili dvě herečky.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["followup-item1-d-svo", 1], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_d_wrong.jpg?raw=true\"></td></table></center>Kontext: Včera se konal v Praze večírek celebrit. Sešli se zde známí herci, zpěváci, modelky a samozřejmě novináři bulvárních časopisů. Večírku se zúčastnily také herečky Simona a Kamila. Šéfredaktoři přikázali novinářům pořídit fotografie ukazující temnou stránku celebrit. Novináři Karel a Jakub tedy doufali, že se jim pořadí pořídit kompromitující fotografie pozvaných osobností, které by mohly čtenáře časopisů zajímat.</p><center><p>Věta: <i> Dva novináři vyfotili Simonu i Kamilu.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["followup-item1-d-move-a", 1], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_d_wrong.jpg?raw=true\"></td></table></center>Kontext: Včera se konal v Praze večírek celebrit. Sešli se zde známí herci, zpěváci, modelky a samozřejmě novináři bulvárních časopisů. Večírku se zúčastnily také herečky Simona a Kamila. Šéfredaktoři přikázali novinářům pořídit fotografie ukazující temnou stránku celebrit. Novináři Karel a Jakub tedy doufali, že se jim pořadí pořídit kompromitující fotografie pozvaných osobností, které by mohly čtenáře časopisů zajímat.</p><center><p>Věta: <i> Na večírku byly Simona i Kamila vyfoceny dvěma novináři.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["followup-item1-d-move-abar", 1], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_d_wrong.jpg?raw=true\"></td></table></center>Kontext: Včera se konal v Praze večírek celebrit. Sešli se zde známí herci, zpěváci, modelky a samozřejmě novináři bulvárních časopisů. Večírku se zúčastnily také herečky Simona a Kamila. Šéfredaktoři přikázali novinářům pořídit fotografie ukazující temnou stránku celebrit. Novináři Karel a Jakub tedy doufali, že se jim pořadí pořídit kompromitující fotografie pozvaných osobností, které by mohly čtenáře časopisů zajímat.</p><center><p>Věta: <i> Simonu i Kamilu dva novináři vyfotili až po půlnoci.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["followup-item2-nd-ref", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:290px;max-height:290px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center>Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Muž i žena vyrobili dva dřevěné výrobky.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["followup-item2-nd-svo", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:290px;max-height:290px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center>Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Dva soutěžící vyrobili židli i ptačí budku.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],

[["followup-item2-nd-move-a", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:290px;max-height:290px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center>Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Na veletrhu byly židle i ptačí budka vyrobeny dvěma soutěžícími.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],
             
[["followup-item2-nd-move-abar", 2], aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:290px;max-height:290px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_non-distributive.jpg?raw=true\"></td><td><img style=\"display:block;max-width:270px;max-height:270px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/2_nd_wrong.jpg?raw=true\"></td></table></center>Kontext: Minulý víkend se konal na výstavišti kutilský veletrh, v rámci kterého byly pořádány soutěže. Úkolem jedné z nich bylo vyrobit dřevený výrobek za 6 hodin. Nejkrásnější výrobky byly hodnoceny porotou. Soutěžící mohli porotě předložit k hodnocení libovolný počet výrobků, ovšem výrobky, které nestihly dokončit během daného časového limitu, nebyly brány porotou v úvahu. Soutěže se mohly zúčastnit týmy i jednotlivci.</p><center><p>Věta: <i>Židle i ptačí budku dva soutěžící vyrobili během daného limitu.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],



["filler1-bad", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:300px;max-height:300px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_nd_wrong.jpg?raw=true\"></td><td><img style=\"display:block;max-width:350px;max-height:350px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/1_d_wrong.jpg?raw=true\"></td></table></center>Kontext: Známý modní dům pořádal módní přehlídku nové kolekce. Bylo pozváno spoustu důležitých osob a také zástupci módních časopisů. Akci uzavírala noční přehlídka dvou světových modelek. Fotografové měli plné ruce práce.</p><center><p>Věta: <i>Každý fotograf vyfotil obě modelky.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}],
           
["filler2-good-right", aj, {s: {html: "<center><table><table cellspacing=100><tr><td><img style=\"display:block;max-width:450px;max-height:450px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/3_d.jpg?raw=true\"></td><td><img style=\"display:block;max-width:600px;max-height:600px;width: auto;height: auto;\" src=\"https://github.com/MojmirDocekal/jan_2019_brn_vie/blob/master/3_non-d_f.jpg?raw=true\"></td></table></center>Kontext: Policisté pronásledovali skupinu zlodějů aut. Ti byli po krátké honičce s policisty dopadeni v kradených autech. Některým policistům se podařilo dopadnout a zatknout více zlodějů, někteří zůstali s policejními psy a nezatkli žádného zločince.</p><center><p>Věta: <i>Pouze jeden policista zatkl jednoho zloděje.</i></p></p>Větě v daném kontextu odpovídá obrázek:</center>"}}], 
             
             
                     

];
