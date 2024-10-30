

// TAPSIRIQ 3

// 1.----> 
// İstifadəçidən dairənin sahəsini hesablamaq üçün lazım olan dəyərləri alın.
// və bir function içində onun hesablanmasın yazın. (dairənin sahəsi S = πr^2)


// function dairəSahəsi() {
//     let radius = prompt("Radiusu daxil edin: ");
//     let sahə = 3.14 * radius * radius;
//     alert("Dairənin sahəsi: " + sahə);
//   }
  
//   dairəSahəsi();
  



// 2.----> 
// İstifadəçi iki ədəd daxil etsin. Həmin ədədlərin toplanmasını və vurulmasını həyata keçirən bir function yazın.

// function əməliyyatlar(a, b) {
//     let cəmi = a + b;
//     let vurma = a * b;
//     return [cəmi, vurma];
//   }

//   let ədəd1 = parseInt(prompt("Birinci ədədi daxil edin: "));
//   let ədəd2 = parseInt(prompt("İkinci ədədi daxil edin: "));

//   let [cəmi, vurma] = əməliyyatlar(ədəd1, ədəd2);
//   console.log(`Ədədlərin cəmi: ${cəmi}`);
//   console.log(`Ədədlərin vurulması: ${vurma}`);



//   3.----> 
// Dörd rəqəmnli bir ədəd daxil edin. Həmin ədəddə 1-ci və 4-cü yerdə duran rəqəmlər  və eyni zamanda 2-ci və 3-cü yerdə duran rəqəmlər bir birinə bərabərdirsə bizə console log da "YES" əks halda "NO" yazdırsın 
// Məsələn 6776 -- YES
//         8989 -- NO
//         6807 -- NO
//         9009 -- YES

// function yoxla(number) {
//     let yüzlər = parseInt(number / 1000);
//     let onlarla = parseInt((number % 1000) / 100);
//     let birliklər = parseInt((number % 100) / 10);
//     let tək  = number % 10;
  
//     console.log((yüzlər === tək  && onlarla === birliklər) ? "YES" : "NO");
//   }
  
//   yoxla(6776); // YES
//   yoxla(8989); // NO
//   yoxla(6807); // NO
//   yoxla(9009); // YES
  

// 4.----> 
// İstifadəçidən bir username alın. username daxil edildikdən sonra həmin istifadəçini salamlayan bir bildiriş pəncərəsi açılsın. Bunun üçün bir function-dan istifadə edin.

// function salamla() {
//     let username = prompt("Username daxil edin: ");

//     alert("Salam, " + username + "!");
// }

// salamla();

// 5.---->
// stifadəçidən bir ədəd daxil edin və həmin ədədin 100-dən böyük və ya kiçik olmasını eyni zamanda müsbət və mənfi olmasını və cüt və tək olmasını yoxlayan bir funksiya yazın. Sonda bizə bilidiriş şəklində ədəd haqqında məlumat göstərilisin Məsələn aşağıdakı kimi. (Console log istifadə etməyin)
// 1) 120 100-den boyukdur 2) 120 müsbətdir 3) 120 cütdür

// Əgər daxil etdiyimiz eded 100 və ya 0 olarsa onda yazdığımız funksiya işə düşmədən biza bildiriş olaraq "100 və 0 ədələrini daxil edə bilməzsiz" yazısını göstərsin. Şərtləri daxil edərkən tipə görədə yoxlayın.

// function checkNumber(input) {
    
//     if (typeof input !== 'number') {
//         alert("Zəhmət olmasa bir ədəd daxil edin.");
//         return;
//     }

    
//     if (input === 0 || input === 100) {
//         alert("100 və 0 ədələrini daxil edə bilməzsiz.");
//         return;
//     }
//     let sizeMessage = input > 100 ? `${input} 100-dən böyükdür` : `${input} 100-dən kiçikdir`;

//     let signMessage = input > 0 ? `${input} müsbətdir` : `${input} mənfidir`;

//     let parityMessage = input % 2 === 0 ? `${input} cütdür` : `${input} təkdir`;

//     alert(sizeMessage);
//     alert(signMessage);
//     alert(parityMessage);
// }
// checkNumber(120);
