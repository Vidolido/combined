/* Zadacha za doma
 1. Iskoristete go kodot vo client.js skriptata za da gi prevzemete podatocite koi vi se potrebni za rabota, i:
 * presmetajte kolku objavi ima sekoj korisnik poedinechno i zapishete go rezultatot sortiran vo opagjachki redosled vo datoteka statistika.txt vo format: "
 Korisnik: idKorisnik1 | Broj na objavi: brojNaObjavi1
 Korisnik: idKorisnik2 | Broj na objavi: brojNaObjavi2
 Korisnik: idKorisnik3 | Broj na objavi: brojNaObjavi3
 ...
 ...
 ...
 Korisnik: idKorisnikN | Broj na objavi: brojNaObjaviN
 "
 * pronajdete go korisnikot koj ima najmnogu objavi i zapishete go rezultatot vo datoteka najmnogu.txt vo format: "Korisnik so najmnogu objavi: idKorisnik"
 * pronajdete go korisnikot koj ima najmalku objavi i zapishete go rezultatot vo datoteka najmalku.txt vo format: "Korisnik so najmalku objavi: idKorisnik"
 * pronajdete go korisnikot koj ima najdolga objava i zapishete go rezultatot vo datoteka najdolga.txt vo format: "Korisnik so najdolga objava: idKorisnik | Sodzhina na objavata: sodzhinaNaObjavata"
 * pronajdete go korisnikot koj ima najkratka objava i zapishete go rezultatot vo datoteka najkratka.txt vo format: "Korisnik so najkratka objava: idKorisnik | Sodzhina na objavata: sodzhinaNaObjavata"
 * presmetajte go vkupniot broj na objavi i zapishete go rezultatot vo datoteka vkupno.txt vo format: "Vkupen broj na objavi: brojNaObjavi"
 * ispechatete ja vo konzola sodrzhinata na datotekata statistika.txt
 ZABELESHKA:
  Site operacii za chitanje/zapishuvanje/presmetuvanje treba da se izvrshuvaat asinhrono.
*/


(async () => {
    try {
        let blogRes = await fetch('https://jsonplaceholder.typicode.com/posts');
        let blogData = await blogRes.json();

        // podatocite koi vi se potrebni za rabota se smesteni vo blogData
        // console.log(blogData);

        // vashiot kod tuka

      const fs = require('fs');

      let idNiza = [];
      const calPostNo = (posts) => {
        posts.forEach((post) => {
          idNiza.push(post.userId);
        });
      };
      calPostNo(blogData);
      // console.log(idNiza);
      
      const usersNiza = []; // Niza od site Useri
      const noOfUserPosts = []; // Niza od Broj na Postovi od useri
      let postCounter = 0;
      for (let i = 0; i < idNiza.length; i++) {
        if (usersNiza[i] !== idNiza[i] && idNiza[i] !== idNiza[i + 1]) {
            usersNiza.push(idNiza[i]);
        }
        if (usersNiza[i] === usersNiza[i + 1]) {
            postCounter++;
        }
        if (idNiza[i] !== idNiza[i + 1]) {
            noOfUserPosts.push(postCounter);
            postCounter = 0;
        }
      };
      // console.log(usersNiza);

      let noOfPostsPerUser = [];  // Useri i Broj na Postovi
      for (let i = 0; i < usersNiza.length; i++) {
          noOfPostsPerUser[i] = {
            korisnik: usersNiza[i],
            postovi: noOfUserPosts[i],
          };
      };

      let finalPostsPerUser = [];
      for(let i = 0; i < noOfPostsPerUser.length; i++) {
        finalPostsPerUser.push ("Korisnik: " + usersNiza[i] + " | Broj na objavi " + noOfUserPosts[i]);
      };
      // console.log(noOfPostsPerUser);
      // console.log(finalPostsPerUser);

      // zapishuvanje na postovi po user vo statistika.txt

      fs.writeFile('statistika.txt', JSON.stringify(finalPostsPerUser, null, '\t'), (err) => {
        console.log("Users and Posts-per-User written in statistika.txt")  
        // In case of a error throw err.
        if (err) throw err;
      });

      allUserPosts = [];
      const postLength = (posts) => {
        for (let i = 0; i < posts.length; i++) {
          maxLengthPerUser = posts[i].body.length;
          allUserPosts[i] = {
          Korisnik: posts[i].userId,
          dolzina: posts[i].body.length,
          sodrzina: posts[i].body,
          };
        };
      };

      postLength(blogData);
      // console.log(allUserPosts.length);

      let finalPostNo = "Vkupen broj na objavi: " + allUserPosts.length;
      console.log(finalPostNo);

      // zapishuvanje na vkupno postovi vo vkupno.txt

      fs.writeFile('vkupno.txt', (finalPostNo), (err) => {
        console.log("Sum of all users post written in vkupno.txt")  
        // In case of a error throw err.
        if (err) throw err;
      });

      let longestPost = allUserPosts.reduce((previous, current) => {
        return current.dolzina > previous.dolzina ? current : previous;
      });
      // console.log(longestPost);
      finalLongestPost = "Korisnik so najdolga objava: " + longestPost.Korisnik + " | Sodzhina na objavata: " + longestPost.sodrzina ;
      // console.log(finalLongestPost);

      // zapishuvanje na najdolgiot post vo najdolga.txt

      fs.writeFile('najdolga.txt', (finalLongestPost), (err) => {
        console.log("User with longest post written in najdolga.txt")  
        // In case of a error throw err.
        if (err) throw err;
      });

      let shortestPost = allUserPosts.reduce((previous, current) => {
        return current.dolzina < previous.dolzina ? current : previous;
      });
      // console.log(shortestPost);
      finalShortestPost = "Korisnik so najkratka objava: " + shortestPost.Korisnik + " | Sodzhina na objavata: " + shortestPost.sodrzina ;
      // console.log(finalShortestPost);

      // Zapishuvanje na najkratkiot post vo najkratka.txt

      fs.writeFile('najkratka.txt', (finalShortestPost), (err) => {
        console.log("User with shortest post written in najkratka.txt")  
        // In case of a error throw err.
        if (err) throw err;
      });

      // Citanje na statistika.txt

      fs.readFile('statistika.txt', 'utf8', (err, data) => {
        console.log(data);
        // In case of a error throw err.
        if (err) throw err;
      });

    } catch (err) {
        console.log(err);
    }
})();

