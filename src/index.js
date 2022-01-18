console.log('Hello console!');
'use strict';

const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

                for (let i = 0; i < coursesEn.length; i++) {
                  console.log(coursesEn[i]);
                  document.getElementById("menuEn").innerHTML += coursesEn[i] + '<br />';

              }

              for (let f = 0; f < coursesFi.length; f++) {
                  console.log(coursesFi[f]);
                  document.getElementById("menuFi").innerHTML += coursesFi[f] + '<br />';
              }

              const langButton = document.getElementById("lang");
              const sortButton = document.getElementById("sort");
              const randomButton = document.getElementById("rand");

              const enDiv = document.getElementById("menuEn");
              const fiDiv = document.getElementById("menuFi");
              const sortEn = document.getElementById("sortEn");
              const sortFi = document.getElementById("sortFi");

              langButton.onclick = () => {
                  if (enDiv.style.display !== "none") {
                      enDiv.style.display = "none";
                      fiDiv.style.display = "block";
                      langButton.innerHTML = "Eng";
                  } else {
                      enDiv.style.display = "block";
                      fiDiv.style.display = "none";
                      langButton.innerHTML = "Fin";
                  }
              };

              coursesEn.sort();
              coursesFi.sort();

              sortButton.onclick = () => {
                  coursesEn.reverse();
                  coursesFi.reverse();

                  document.getElementById("menuEn").innerHTML = coursesEn.join('<br />');
                  document.getElementById("menuFi").innerHTML = coursesFi.join('<br />');
              };

              randomButton.onclick = () => {
                  if (enDiv.style.display !== "none") {
                      let randomDish = coursesEn[Math.floor(Math.random() * coursesEn.length)];
                      document.getElementById("randomDish").innerHTML = randomDish;
                  } else {
                      let randomDish = coursesFi[Math.floor(Math.random() * coursesFi.length)];
                      document.getElementById("randomDish").innerHTML = randomDish;
                  }

              };
