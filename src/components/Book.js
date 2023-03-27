import './Book.css'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Web application Firebase configuration


const firebaseConfig = {
    apiKey: "AIzaSyC50pXte71WKS61JVLei5n8lPg3kbZNtIo",
    authDomain: "mywebpage-93540.firebaseapp.com",
    databaseURL: "https://mywebpage-93540-default-rtdb.firebaseio.com",
    projectId: "mywebpage-93540",
    storageBucket: "mywebpage-93540.appspot.com",
    messagingSenderId: "266567997272",
    appId: "1:266567997272:web:08091c2c608d59b2e4772d"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const Book = () => {
    let Events = [
        {
            name: "Family Time",
            price: "100",
            image: "https://images.unsplash.com/photo-1518658761661-a3c568ee7b64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },

        {
            name: "Tourist Destination",
            price: "200",
            image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            name: "Birthday Celebrations",
            price: "300",
            image: "https://media.istockphoto.com/id/1154066614/photo/happy-birthday-to-you-concept.jpg?b=1&s=170667a&w=0&k=20&c=lQSEd39VNwYe8TGZVU0xDChxKatwCw_OHj-r1rnUUDo=",
        },
        {
            name: "Marriage Shoot",
            price: "400",
            image: "https://phometo.com/images/gallery/wedding-photographers-bangalore.jpg",
        },
        
    ]
    console.log(Events[0].price);
    const bookEvent1 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Events[0].image;
        nameTarget.innerHTML = Events[0].name;
        priceTarget.innerHTML = '$' + Events[0].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            EventImage: Events[0].image,
            EventName: Events[0].name,
            EventPrice: '$' + Events[0].price,
            });
        }

    }
    const bookEvent2 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Events[1].image;
        nameTarget.innerHTML = Events[1].name;
        priceTarget.innerHTML = '$' + Events[1].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            EventImage: Events[1].image,
            EventName: Events[1].name,
            EventPrice: '$' + Events[1].price,
            });
        }
    }
    const bookEvent3 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Events[2].image;
        nameTarget.innerHTML = Events[2].name;
        priceTarget.innerHTML = '$' + Events[2].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            EventImage: Events[2].image,
            EventName: Events[2].name,
            EventPrice: '$' + Events[2].price,
            });
        }
    }
    const bookEvent4 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Events[3].image;
        nameTarget.innerHTML = Events[3].name;
        priceTarget.innerHTML = '$' + Events[3].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking/'), {
            EventImage: Events[3].image,
            EventName: Events[3].name,
            EventPrice: '$' + Events[3].price,
            });
        }
    }
    const request = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";
        alert("Your request has been sent");
        
        imageTarget.src = '';
        nameTarget.innerHTML = '';
        priceTarget.innerHTML = '';

    }
    return (
        <div className="box">
            <div className="content">
                <div className="text">Our Best Services Offered</div>
                <div className="target">
                    <div className="trgt">
                    <div className="card">
                        <img src="" id='targetImage' alt="" />
                         <div className="event_name" id='targetName'></div>
                        <div className="price" id='targetPrice'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={bookEvent1}>
                            <img src={Events[0].image} alt="event1" />
                            <div className="event_name">{Events[0].name}</div>
                            <div className="price">{'$' + Events[0].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookEvent2}>
                            <img src={Events[1].image} alt="event2" />
                            <div className="event_name">{Events[1].name}</div>
                            <div className="price">{'$' + Events[1].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookEvent3}>
                            <img src={Events[2].image} alt="event3" />
                            <div className="event_name">{Events[2].name}</div>
                            <div className="price">{'$' + Events[2].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookEvent4}>
                            <img src={Events[3].image} alt="event4" />
                            <div className="event_name">{Events[3].name}</div>
                            <div className="price">{'$' + Events[3].price}</div>
                        </div>
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book;