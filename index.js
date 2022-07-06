/*  filmapp-ի մեջ փոփոխություններ եք անում, ամբողջովին պետք ա ռեֆակտորինգ անեք էդ կոդը, 
ու դա նորմալ ա դուք պետք ա սովորեք ձեր կոդերը փոփոխել կամ ուրիշի կոդերի վրա աշխատանքներ տանել, 
հետևաբար բոլոր այն ֆունկցիաները, որոնք մենք ստեղծել եք օբջեքթից դուրս, դարձրեք օբջեքթի մեթոդներ*/



  /*yourFavoriteGenres method-ում թույլ չտալ որպեսզի յուզեռը դատարկ տող ուղարկի, քենսլ անի, ու 20ից շատ սիմվոլ գրի, ու երբ որ յուզեռը էդ հարցերին պատասխանի,
  դուք console-ում forEach-ով տպեք յուզեռի սիրած ժանրերը բայց թվերով ու որ սկսվի մեկից, այսինքն Ձեր սիրելի ժանրը։ 
  ԺԱՆՐ 1․․․*/



"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat:true,
	rememberMyFilms () {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Ո՞րն ֆիլմն եք վերջերս դիտել", "");
			const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
		
			if (a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
				console.log("DONE");
			} else {
				console.log("ERROR");
				i--;
			}
		}
	},
	detectUserPersonalLevel () {
		if (personalMovieDB.numberOfFilms < 10) {
			console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
		} else if (personalMovieDB.numberOfFilms < 30) {
			console.log("Դուք ֆիլմի սիրահար եք");
		} else if (personalMovieDB.numberOfFilms >= 30) {
			console.log("Դուք Կինոման եք !!!");
		}
	},

	yourFavoriteGenres() {
		for (let i = 0; i <= 2; i++) {
			const genres = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`);
			if (genres.trim() != "" && genres != null && genres.length <= 20) {
					personalMovieDB.genres[i] = genres;

			} else {
				i--;
			}
		}
		personalMovieDB.genres.forEach ((item , index) => { 
			console.log(`Ձեր նախընտրելի ժանրն է ${index + 1} ${item}`);}); 
	},
	/* ստեղծեք նոր մեթոդ որի անունը պետք է  լինի isVisibleMyDB, ու ինքը պետք ա ստուգի, եթե privat-ը եթե true ա, դարձնի false,
 եթե false ա, դարձնի true, թեստ անել showMyDB մեթոդի հետ */
 showMyDB () {
	return personalMovieDB.privat === true?  console.log(personalMovieDB) : console.log ("Տվյալների բազան փակ է։");
},
	isVisibleMyDB(){
		personalMovieDB.privat === true ?  personalMovieDB.privat = false : personalMovieDB.privat = true ; return personalMovieDB.showMyDB();
	}
};

personalMovieDB.rememberMyFilms(personalMovieDB.movies);
personalMovieDB.detectUserPersonalLevel();
//personalMovieDB.showMyDB();
personalMovieDB.yourFavoriteGenres();
personalMovieDB.isVisibleMyDB();

