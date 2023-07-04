import React, { useState } from 'react';
import styled from 'styled-components'
import ImageLoader from './ImageLoader';
interface Player {
  id: string;
  name: string;
  surname: string;
  country: string;
  birth: string;
  position: string;
  height: string;
  image: string;
}

const players: Player[] = [
  {
      "id": "1",
      "name": "Ronaldo",
      "surname": "Cristiano",
      "country": "Portugal",
      "birth": "1985",
      "position": "Forward",
      "height": "187",
      "image": "https://digitalhub.fifa.com/transform/8fe3826e-c297-436a-9df9-5db29f5cc92b/1442847713?"
  },
  {
      "id": "2",
      "name": "Lionel",
      "surname": "Messi",
      "country": "Argentina",
      "birth": "1987",
      "position": "Forward",
      "height": "170",
      "image": "https://digitalhub.fifa.com/transform/40e6d6b5-9742-4123-8fb8-d69662c3b24a/1442770580?"
  },
  {
      "id": "3",
      "name": "Martinez",
      "surname": "Emiliano",
      "country": "Argentina",
      "birth": "1992 ",
      "position": "Goalkeeper",
      "height": "195",
      "image": "https://digitalhub.fifa.com/transform/ec57583f-85ed-4b6e-b619-8ec94de13b8f/1442740128?"
  },
  {
      "id": "4",
      "name": "Rulli",
      "surname": "Geronimo",
      "country": "Argentina",
      "birth": "1992",
      "position": "Goalkeeper",
      "height": "189",
      "image": "https://digitalhub.fifa.com/transform/08c7e932-41a2-460e-b14b-04903ac5ca8c/1442774135?"
  },
  {
      "id": "5",
      "name": "Armani",
      "surname": "Franco",
      "country": "Argentina",
      "birth": "1986",
      "position": "Goalkeeper",
      "height": "189",
      "image": "https://digitalhub.fifa.com/transform/55e9fe36-b328-44f5-86d8-1cba96a4d05e/1442740056?"
  },
  {
      "id": "6",
      "name": "Foyth",
      "surname": "Juan",
      "country": "Argentina",
      "birth": "1998",
      "position": "Defender",
      "height": "188",
      "image": "https://digitalhub.fifa.com/transform/fd88628f-36a5-4bef-875e-fcb52581207a/1442742652?"
  },
  {
      "id": "7",
      "name": "Tagliafico",
      "surname": "Nicolas",
      "country": "Argentina",
      "birth": "1992",
      "position": "Defender",
      "height": "172",
      "image": "https://digitalhub.fifa.com/transform/9c5788af-5f9c-4d80-ba26-296edd06e352/1442740186?"
  },
  {
      "id": "8",
      "name": "Montiel",
      "surname": "Gonzalo",
      "country": "Argentina",
      "birth": "1997",
      "position": "Defender",
      "height": "175",
      "image": "https://digitalhub.fifa.com/transform/d37e7b7f-e91d-4ed4-b601-8494b56af199/1442742819?"
  },
  {
      "id": "9",
      "name": "Pezzella",
      "surname": "German",
      "country": "Argentina",
      "birth": "1991",
      "position": "Defender",
      "height": "190",
      "image": "https://digitalhub.fifa.com/transform/57c8d393-5328-40ab-a5f2-59efd1a042df/1442742197?"
  },
  {
      "id": "10",
      "name": "Romero",
      "surname": "Cristian",
      "country": "Argentina",
      "birth": "1998",
      "position": "Defender",
      "height": "185",
      "image": "https://digitalhub.fifa.com/transform/10db8803-6d59-4a4b-909d-4cb0b297f904/1442742592?"
  },
  {
      "id": "11",
      "name": "Otamendi",
      "surname": "Nicolas",
      "country": "Argentina",
      "birth": "1988",
      "position": "Defender",
      "height": "183",
      "image": "https://digitalhub.fifa.com/transform/592d999d-3ded-4a1c-8df1-0ddcad20c18b/1442741360?"
  },
  {
      "id": "12",
      "name": "Martinez",
      "surname": "Lisandro",
      "country": "Argentina",
      "birth": "1998",
      "position": "Defender",
      "height": "175",
      "image": "https://digitalhub.fifa.com/transform/5c6bc06c-6694-4863-b543-e74b672741a3/1442801367?"
  },
  {
      "id": "13",
      "name": "Molina",
      "surname": "Nahuel",
      "country": "Argentina",
      "birth": "1998",
      "position": "Defender",
      "height": "175",
      "image": "https://digitalhub.fifa.com/transform/0c723ec4-6132-42de-8b21-a70ad7a1c4c1/1442742632?"
  },
  {
      "id": "14",
      "name": "Paredes",
      "surname": "Leandro",
      "country": "Argentina",
      "birth": "1994",
      "position": "Midfielder",
      "height": "180",
      "image": "https://digitalhub.fifa.com/transform/df4eb81d-b234-432c-a5d1-47f10fd6b844/1442742223?"
  },
  {
      "id": "15",
      "name": "De Paul",
      "surname": "Rodrigo",
      "country": "Argentina",
      "birth": "1994",
      "position": "Midfielder",
      "height": "180",
      "image": "https://digitalhub.fifa.com/transform/427cc23a-3489-42f1-892f-881b85b857d8/1442742174?"
  },
  {
      "id": "16",
      "name": "Acuna",
      "surname": "Marcos",
      "country": "Argentina",
      "birth": "1991",
      "position": "Midfielder",
      "height": "172",
      "image": "https://digitalhub.fifa.com/transform/b1d9ebe0-067f-4246-881d-ed9dab03835e/1442742836?"
  },
  {
      "id": "17",
      "name": "Palacios",
      "surname": "Exequiel",
      "country": "Argentina",
      "birth": "1998",
      "position": "Midfielder",
      "height": "177",
      "image": "https://digitalhub.fifa.com/transform/79db6a3d-02a5-470e-9b36-7828d5b2d02c/1442742805?"
  },
  {
      "id": "18",
      "name": "Almada",
      "surname": "Thiago",
      "country": "Argentina",
      "birth": "2001",
      "position": "Midfielder",
      "height": "171",
      "image": "https://digitalhub.fifa.com/transform/555f0c07-6203-4aaf-8830-6fd909a22193/1442770365?"
  },
  {
      "id": "19",
      "name": "Gomez",
      "surname": "Alejandro",
      "country": "Argentina",
      "birth": "1988",
      "position": "Midfielder",
      "height": "167",
      "image": "https://digitalhub.fifa.com/transform/a2a9f2d8-b6ef-4152-87ea-82314c0c106e/1442741064?"
  },
  {
      "id": "20",
      "name": "Rodriguez",
      "surname": "Guido",
      "country": "Argentina",
      "birth": "1994",
      "position": "Midfielder",
      "height": "185",
      "image": "https://digitalhub.fifa.com/transform/7819e5f3-30ca-40b3-82f1-e0d30b83e384/1442743421?"
  },
  {
      "id": "21",
      "name": "Mac Allister",
      "surname": "Alexis",
      "country": "Argentina",
      "birth": "1998",
      "position": "Midfielder",
      "height": "176",
      "image": "https://digitalhub.fifa.com/transform/587f8ff4-72a1-4499-bf71-c38bbc87c9ec/1442742544?"
  },
  {
      "id": "22",
      "name": "Fernandez",
      "surname": "Enzo",
      "country": "Argentina",
      "birth": "2001",
      "position": "Midfielder",
      "height": "178",
      "image": "https://digitalhub.fifa.com/transform/15281e95-c206-4287-a572-c52d523e188c/1442743507"
  },
  {
      "id": "23",
      "name": "Alvarez",
      "surname": "Julian",
      "country": "Argentina",
      "birth": "2000",
      "position": "Forward",
      "height": "170",
      "image": "https://digitalhub.fifa.com/transform/86f9d09d-336e-49e9-868f-78e8426d6bfb/1442743531?"
  },
  {
      "id": "24",
      "name": "Di Maria",
      "surname": "Angel",
      "country": "Argentina",
      "birth": "1988",
      "position": "Forward",
      "height": "180",
      "image": "https://digitalhub.fifa.com/transform/1ced2af1-6b06-4896-ba4b-111c9de737e9/1442742357"
  },
  {
      "id": "25",
      "name": "Correa",
      "surname": "Angel",
      "country": "Argentina",
      "birth": "1995",
      "position": "Forward",
      "height": "171",
      "image": "https://digitalhub.fifa.com/transform/1c0d0dd2-244d-4566-972d-f6bf0acd3632/1442770400?"
  },
  {
      "id": "26",
      "name": "Dybala",
      "surname": "Paulo",
      "country": "Argentina",
      "birth": "1993",
      "position": "Forward",
      "height": "177",
      "image": "https://digitalhub.fifa.com/transform/ca25a965-d216-44dc-b256-cc708605d2fc/1442740796"
  },
  {
      "id": "27",
      "name": "Martinez",
      "surname": "Lautaro",
      "country": "Argentina",
      "birth": "1997",
      "position": "Forward",
      "height": "174",
      "image": "https://digitalhub.fifa.com/transform/ce6502bd-6a21-4a83-a434-9ee5da63e99e/1442742404?"
  },
  {
      "id": "28",
      "name": "Ryan",
      "surname": "Mathew",
      "country": "Australia",
      "birth": "1992",
      "position": "Goalkeeper",
      "height": "184",
      "image": "https://digitalhub.fifa.com/transform/ab34d096-1c72-4fb0-bc8c-b2181a03afd8/Australia-Portraits-FIFA-World-Cup-Qatar-2022?"
  },
  {
      "id": "29",
      "name": "Redmayne",
      "surname": "Andrew",
      "country": "Australia",
      "birth": "1989",
      "position": "Goalkeeper",
      "height": "194",
      "image": "https://digitalhub.fifa.com/transform/369b5183-9588-4968-9332-01badba82fe0/Australia-Portraits-FIFA-World-Cup-Qatar-2022?"
  },
  {
      "id": "30",
      "name": "Vukovic",
      "surname": "Danny",
      "country": "Australia",
      "birth": "1985",
      "position": "Goalkeeper",
      "height": "187",
      "image": "https://digitalhub.fifa.com/transform/ab40e03a-255e-4413-9663-6e2a7b0ecefd/Australia-Portraits-FIFA-World-Cup-Qatar-2022"
  },
  {
      "id": "31",
      "name": "Degenek",
      "surname": "Milos",
      "country": "Australia",
      "birth": "1994",
      "position": "Defender",
      "height": "187",
      "image": "https://digitalhub.fifa.com/transform/4db65003-9d44-4ae3-9e99-9c1decde80ee/Australia-Portraits-FIFA-World-Cup-Qatar-2022"
  }
];

const HeaderMain = styled.div `
    background: var(--var-color-first);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.6vh 0;

    h1 {
      font-family: 'Author', sans-serif;
      font-weight: bold;
      color: var(--var-color-white);
      margin-bottom: 10px;
      font-size: calc(10px + 4vmin);
    }
`
const Wrapper = styled.div `
    border-radius: 20px;
    background-color: #ffff;
    padding-right: 12px;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 2px solid var(--var-color-first);
    max-width: 480px;
    color: var(--light-font);
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);
    overflow: hidden;
    margin-bottom: 10px;

    input {
        border: none;
        font-family: 'Author', sans-serif;
        font-weight: bold;
        flex: 1;
        outline: none;
        height: 100%;
        user-select: none;
        padding: 0 20px;
        border-radius: 30px;
        font-size: 22px;
        background-color: #fff;
        color: var(--var-color-first);
    }
`
const PlayerGround = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    padding: 1.5vh 4%;
    
`
const PlayerCart = styled.div `
    width: 330px;
    height: 400px;
    margin: 7px;
    z-index: 100;
    text-align: center;
    border-radius: 4px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    display: flex;
    padding-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    p {
      overflow: hidden;
      z-index: 0;
    }

    h1 {
      margin-top: 7px;
    }
    img {
      width: 60%;
      object-fit: cover;
    }
    div {
      img {
        width: 50px;
        position: absolute;
        transform: translate(95px, -332px);
        user-select: none;
        pointer-events: none;
      }
    }
`
const PlayerPosition = styled.p `
    color: var(--var-color-white);
    padding: 4px 7px;
    background: var(--var-color-first);
    font-size: 19px;
    margin-top: 6px;

`

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);


  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setSearch(e.target.value);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const filteredPlayers = players.filter(player =>
    (player.name.toLowerCase() + ' ' + player.surname.toLowerCase() + ' ' + player.country.toLowerCase() + ' ' + player.birth.toLowerCase() + ' ' + player.height.toLowerCase() + ' ' + player.position.toLowerCase()).includes(search.toLowerCase())
  );

  return (
    <div>
      <HeaderMain>
        <h1>World Cup Qatar 2022</h1>
        <Wrapper>
        <input
          type="text"
          placeholder="Search player..."
          onChange={handleSearch}
        />
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-search" viewBox="0 0 24 24">
          <defs />
          <circle cx={11} cy={11} r={8} />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        </Wrapper>
      </HeaderMain>
      <PlayerGround>
      {loading ? (
        <span className="loader"></span>
      ) : (
        filteredPlayers.map(player => (
          <PlayerCart key={player.id}>
           <ImageLoader  src={player.image} alt={player.name} />
            <h1>{player.name} {player.surname}</h1>
            <div>
            {player.country === 'Argentina' && (
            <img src="https://flagicons.lipis.dev/flags/4x3/ar.svg" alt="Argentina Flag" />
          )}
          {player.country === 'Portugal' && (
            <img src="https://flagicons.lipis.dev/flags/4x3/pt.svg" alt="Portugal Flag" />
          )}
            {player.country === 'France' && (
            <img src="https://flagicons.lipis.dev/flags/4x3/fr.svg" alt="Portugal Flag" />
          )}
             {player.country === 'Australia' && (
            <img src="https://flagicons.lipis.dev/flags/4x3/au.svg" alt="Portugal Flag" />
          )}
            </div>
            <PlayerPosition>{player.position}</PlayerPosition>
          </PlayerCart>
        ))
      )}
      </PlayerGround>
    </div>
  );
};

export default App;
