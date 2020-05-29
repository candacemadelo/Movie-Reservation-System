// KEY: movies
var movie_details = [
    {
        movie_id: "movie1",
        title: "Aladdin",
        genre: "Family/Romance",
        rating: "PG",
        runtime: "2H 8M",
        synopsis: "A kind-hearted street rat frees a genie from a lamp, granting all of his wishes and transforming himself into a charming prince in order to marry a beautiful princess. But soon, an evil sorcerer becomes hell-bent on securing the lamp for his own sinister purposes.",
        poster: "images/aladdin.jpg"
    },
    {
        movie_id: "movie2",
        title: "Cinderella",
        genre: "Musical/Drama",
        rating: "PG",
        runtime: "1H 45M",
        synopsis: "When her father unexpectedly dies, young Ella finds herself at the mercy of her cruel stepmother and her scheming stepsisters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger.",
        poster: "images/cinderella.jpg"
    },
    {
        movie_id: "movie3",
        title: "The Greatest Showman",
        genre: "Biography/Drama/Musical",
        rating: "PG",
        runtime: "1H 45M",
        synopsis: "Celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.",
        poster: "images/showman.jpg"
    },
    {
        movie_id: "movie4",
        title: "Mulan",
        genre: "Action/Adventure/Drama ",
        rating: "PG-13",
        runtime: "1H 55M",
        synopsis: "A young Chinese maiden disguises herself as a male warrior in order to save her father. A live-action feature film based on Disney's 'Mulan.'",
        poster: "images/mulan.jpg"
    },
    {
        movie_id: "movie5",
        title: "The Avengers",
        genre: "Action/Adventure/Sci-Fi",
        rating: "PG-13",
        runtime: "2H 23M",
        synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        poster: "images/avengers.jpg"
    },
    {
        movie_id: "movie6",
        title: "The Avengers: Age of Ultron",
        genre: "Action/Adventure/Sci-Fi",
        rating: "PG-13",
        runtime: "2H 21M",
        synopsis: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
        poster: "images/ultron.jpg"
    },
    {
        movie_id: "movie7",
        title: "The Avengers: Infinity War",
        genre: "Action/Adventure/Sci-Fi",
        rating: "PG-13",
        runtime: "2H 29M",
        synopsis: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        poster: "images/infinity.jpg"
    },
    {
        movie_id: "movie8",
        title: "The Avengers: Endgame",
        genre: "Action/Adventure/Sci-Fi",
        rating: "PG-13",
        runtime: "3H 1M",
        synopsis: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        poster: "images/endgame.jpg"
    }
    
];

if (!localStorage.getItem("movies")) {
	localStorage.setItem("movies", JSON.stringify(movie_details));
}
		

// KEY: schedules
var sched_details = [
    {
        sched_id: "sched1",
        movie_id: "movie1",
        date: "2020-04-28",
        end_time: "12:08 PM",
        cinema: "Cinema 1",
        price: 180
    },
    {
        sched_id: "sched2",
        movie_id: "movie3",
        date: "2020-04-28",
        end_time: "11:45 AM",
        cinema: "Cinema 2",
        price: 200
    },
    {
        sched_id: "sched3",
        movie_id: "movie5",
        date: "2020-04-28",
        end_time: "12:23 PM",
        cinema: "Cinema 3",
        price: 600
    },
    {
        sched_id: "sched4",
        movie_id: "movie7",
        date: "2020-04-28",
        end_time: "12:29 PM",
        cinema: "Cinema 4",
        price: 750
    },
    {
        sched_id: "sched5",
        movie_id: "movie2",
        date: "2020-04-29",
        end_time: "11:45 AM",
        cinema: "Cinema 1",
        price: 180
    },
    {
        sched_id: "sched6",
        movie_id: "movie4",
        date: "2020-04-29",
        end_time: "11:55 AM",
        cinema: "Cinema 2",
        price: 200
    },
    {
        sched_id: "sched7",
        movie_id: "movie6",
        date: "2020-04-29",
        end_time: "12:21 PM",
        cinema: "Cinema 3",
        price: 600
    },
    {
        sched_id: "sched8",
        movie_id: "movie8",
        date: "2020-04-29",
        end_time: "01:01 PM",
        cinema: "Cinema 4",
        price: 750
    },
    {
        sched_id: "sched9",
        movie_id: "movie5",
        date: "2020-04-30",
        end_time: "12:23 PM",
        cinema: "Cinema 1",
        price: 180
    },
    {
        sched_id: "sched10",
        movie_id: "movie1",
        date: "2020-04-30",
        end_time: "12:08 PM",
        cinema: "Cinema 2",
        price: 200
    },
    {
        sched_id: "sched11",
        movie_id: "movie4",
        date: "2020-04-30",
        end_time: "11:55 AM",
        cinema: "Cinema 3",
        price: 600
    },
    {
        sched_id: "sched12",
        movie_id: "movie8",
        date: "2020-04-30",
        end_time: "01:01 PM",
        cinema: "Cinema 4",
        price: 750
    },
    {
        sched_id: "sched13",
        movie_id: "movie2",
        date: "2020-05-01",
        end_time: "11:45 AM",
        cinema: "Cinema 1",
        price: 180
    },
    {
        sched_id: "sched14",
        movie_id: "movie4",
        date: "2020-05-01",
        end_time: "11:45 PM",
        cinema: "Cinema 2",
        price: 200
    },
    {
        sched_id: "sched15",
        movie_id: "movie7",
        date: "2020-05-01",
        end_time: "12:29 PM",
        cinema: "Cinema 3",
        price: 600
    },
    {
        sched_id: "sched16",
        movie_id: "movie6",
        date: "2020-05-01",
        end_time: "12:21 PM",
        cinema: "Cinema 4",
        price: 750
    },
    {
        sched_id: "sched17",
        movie_id: "movie2",
        date: "2020-05-02",
        end_time: "11:45 AM",
        cinema: "Cinema 1",
        price: 180
    },
    {
        sched_id: "sched18",
        movie_id: "movie3",
        date: "2020-05-02",
        end_time: "11:45 AM",
        cinema: "Cinema 2",
        price: 200
    },
    {
        sched_id: "sched19",
        movie_id: "movie8",
        date: "2020-05-02",
        end_time: "11:45 AM",
        cinema: "Cinema 3",
        price: 600
    },
    {
        sched_id: "sched20",
        movie_id: "movie6",
        date: "2020-05-02",
        end_time: "12:21 PM",
        cinema: "Cinema 4",
        price: 750
    },
    {
        sched_id: "sched21",
        movie_id: "movie5",
        date: "2020-05-03",
        end_time: "12:23 PM",
        cinema: "Cinema 1",
        price: 180
    },
    {
        sched_id: "sched22",
        movie_id: "movie7",
        date: "2020-05-03",
        end_time: "12:29 PM",
        cinema: "Cinema 2",
        price: 200
    },
    {
        sched_id: "sched23",
        movie_id: "movie3",
        date: "2020-05-03",
        end_time: "11:45 AM",
        cinema: "Cinema 3",
        price: 600
    },
    {
        sched_id: "sched24",
        movie_id: "movie1",
        date: "2020-05-03",
        end_time: "12:08 PM",
        cinema: "Cinema 4",
        price: 750
    },
    {
        sched_id: "sched25",
        movie_id: "movie5",
        date: "2020-05-04",
        end_time: "",
        cinema: "Cinema 1",
        price: 180
    },
    {
        sched_id: "sched26",
        movie_id: "movie6",
        date: "2020-05-04",
        end_time: "12:21 PM",
        cinema: "Cinema 2",
        price: 200
    },
    {
        sched_id: "sched27",
        movie_id: "movie4",
        date: "2020-05-04",
        end_time: "11:55 AM",
        cinema: "Cinema 3",
        price: 600
    },
    {
        sched_id: "sched28",
        movie_id: "movie2",
        date: "2020-05-04",
        end_time: "11:45 AM",
        cinema: "Cinema 4",
        price: 750
    },
    {
        sched_id: "sched29",
        movie_id: "movie1",
        date: "2020-05-05",
        end_time: "11:45 AM",
        cinema: "Cinema 1",
        price: 180
    },
    {
        sched_id: "sched30",
        movie_id: "movie7",
        date: "2020-05-05",
        end_time: "12:29 PM",
        cinema: "Cinema 2",
        price: 200
    },
    {
        sched_id: "sched31",
        movie_id: "movie3",
        date: "2020-05-05",
        end_time: "11:45 AM",
        cinema: "Cinema 3",
        price: 600
    },
    {
        sched_id: "sched32",
        movie_id: "movie8",
        date: "2020-05-05",
        end_time: "01:01 PM",
        cinema: "Cinema 4",
        price: 750
    },
    {
        sched_id: "sched33",
        movie_id: "movie5",
        date: "2020-05-06",
        end_time: "12:23 PM",
        cinema: "Cinema 1",
        price: 180
    },
    {
        sched_id: "sched34",
        movie_id: "movie6",
        date: "2020-05-06",
        end_time: "12:21 PM",
        cinema: "Cinema 2",
        price: 200
    },
    {
        sched_id: "sched35",
        movie_id: "movie1",
        date: "2020-05-06",
        end_time: "12:08 PM",
        cinema: "Cinema 3",
        price: 600
    },
    {
        sched_id: "sched36",
        movie_id: "movie2",
        date: "2020-05-06",
        end_time: "11:45 AM",
        cinema: "Cinema 4",
        price: 750
    }
];

if (!localStorage.getItem("schedules")) {
	localStorage.setItem("schedules", JSON.stringify(sched_details));
}