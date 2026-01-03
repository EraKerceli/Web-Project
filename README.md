- Create Event - permes React 

Faqja Create Event është një komponent funksional i ndërtuar me React që ofron një ndërfaqe për krijimin e eventeve të reja në aplikacion. Kjo komponentë është përgjegjëse për paraqitjen e formës së krijimit të eventit dhe është integruar në aplikacion përmes komponentës kryesore App. Renderimi në DOM realizohet nga index.js, i cili lidh aplikacionin React me elementin #root në dokumentin bazë HTML.

Ndërfaqja e përdoruesit përbëhet nga një header navigimi dhe një formë qendrore e vendosur në formë karte. Header-i përmban lidhje navigimi për seksione të ndryshme të aplikacionit, ndërsa forma përmban fusha për titullin e eventit, qytetin, numrin e kontaktit, datën dhe numrin maksimal të pjesëmarrësve. Fushat kryesore janë të detyrueshme për të garantuar që përdoruesi të mos dërgojë një event të paplotë. Struktura e komponentës është e pastër dhe modulare, duke e bërë atë të lehtë për mirëmbajtje dhe zgjerim.

Stilizimi i faqes realizohet përmes një kombinimi të CSS-it të personalizuar dhe bibliotekës Bootstrap 5. Bootstrap përdoret për sigurimin e një baze responsive dhe konsistente për tipografinë, spacing dhe layout-in, ndërsa CSS custom shërben për personalizimin e pamjes vizuale (ngjyrat, background-i, karta e formës dhe efektet vizuale). Bootstrap lidhet përmes CDN në index.html, duke shmangur nevojën për instalim lokal dhe duke garantuar që stilet bazë janë të disponueshme menjëherë në aplikacion.

Projekti është krijuar duke përdorur mjetin Create React App, i cili mundëson krijimin e shpejtë të një ambienti të gatshëm për zhvillim React me konfigurim automatik të Webpack, Babel dhe serverit lokal të zhvillimit. Krijimi i projektit bëhet përmes komandës npx create-react-app, pas së cilës instalohet automatikisht struktura bazë dhe varësitë e nevojshme.

Aplikacioni niset lokalisht përmes komandës npm start, e cila aktivizon serverin e zhvillimit dhe hap aplikacionin në shfletues në adresën http://localhost:3000. Çdo ndryshim në kod reflektohet automatikisht në shfletues falë funksionalitetit të hot reload.

Aktualisht faqja Create Event funksionon vetëm si ndërfaqe vizuale (UI) dhe nuk është e lidhur me backend apo databazë. Megjithatë, arkitektura e komponentës lejon integrimin e lehtë me API të jashtme për ruajtjen e eventeve, validimin e të dhënave dhe menaxhimin e tyre në të ardhmen.
