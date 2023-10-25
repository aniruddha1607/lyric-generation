import React, {useEffect, useState } from 'react'

import { HiUserCircle } from "react-icons/hi2";
import { SlMagnifier } from "react-icons/sl";
import { SlMenu } from "react-icons/sl";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaMusic } from "react-icons/fa";
import ArtistCard from './ArtistCard';


const Content = () => {



function TextLetterByLetter({ text }) {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentLetterIndex < text.length) {
        setDisplayedText(text.slice(0, currentLetterIndex + 1));
        setCurrentLetterIndex(currentLetterIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentLetterIndex, text]);

  return <p>{displayedText}</p>;
}

  const d = new Date();
  const dstr = d.toString();


  const [date, setDate] = useState([]);
  const [artist, setArtist] = useState(null);
  const [lyrics, setLyrics] = useState("Select an artist to generate lyrics");
  const [recentartists, setRecentArtists] = useState([]);
  const [recentlyrics, setRecentLyrics] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setRecentArtists((prevValue => {return [...prevValue, artist]}))
    fetch(`/${artist}`).then(
      res => res.json()
      
    ).then(
      data => {
        setLyrics(data.lyric)
        console.log(artist)
        setLoading(false)
        setDate((prevValue => {return [...prevValue, dstr]}))
        
      }
      
    )

  }

  // useEffect(() => {

  // })

  return (
    <>
    <div className="flex flex-col m-1 p-5 w-1/4 h-full">

    <p className="text-gray-800 mb-2 text-lg font-bold ml-1">Supported Artists</p>
    <input type="text" name="name" placeholder="Search" className="rounded-xl p-2 hover:border-fuchsia-300 border-2 sele:border-fuchsia-300 h-12 mb-3"/>
    <p className="text-gray-800 mb-2 text-lg font-bold ml-1">Recent Artist queries:</p>
    <div className='flex flex-col-reverse overflow-auto min-h-[400px] h-full'>
    
    {recentartists.map((item) =>  (
        <ArtistCard artistName={item} lyr={recentlyrics} date={date}/>
    ))}
    </div>
    


    </div>
    <div className="flex flex-col m-1 w-3/4">
      <div className="flex flex-row w-full p-4 items-center h-1/6">
        <FaMusic  size='4em' color="gray"/>
        <p className="mx-4 text-xl font-bold">Lyric Generator</p>
        <SlMagnifier  size='2em' color="gray" className="fixed right-28"/>   
        <SlMenu  size='2em' color="gray" className="fixed right-12"/>
      </div>
      <div className="bg-blue-200 flex flex-col h-5/6 rounded-3xl p-4 px-8 w-full overflow-x-auto overflow-y-auto">
      <div className="flex flex-row fixed bottom-10 items-center w-3/4">
        {/* <input type="text" name="name" placeholder="Search" className="rounded-xl p-3 w-3/4 mx-4"/> */}
        <form onSubmit={handleSubmit} className='flex flex-row mb-4'>
        <div className='w-[900px]'>
        <select 
          id="artist"
          onChange={(e) => setArtist(e.target.value)}
          defaultValue="edsheeran"
          className="rounded-xl p-3 px-4 w-full ">
          <option value="edsheeran">Ed Sheeran</option>
          <option value="taylorswift">Taylor Swift</option>
          <option value="eminem">Eminem</option>
          <option value="1975">1975</option>
          <option value="sonunigam">Sonu Nigam</option>
          <option value="shreyaghosal">Shreya Ghosal</option>
          <option value="kishorekumar">Kishore Kumar</option>
          <option value="arianagrande">Ariana Grande</option>
          <option value="beyonce">Beyonce</option>
          <option value="drake">Drake</option>
          <option value="arjitsingh">Arjit Singh</option>
          <option value="badshah">Badshah</option>
          <option value="elton">Elton</option>
          <option value="elvis">Elvis Presley</option>
          <option value="kk">KK</option>
          <option value="lata">Lata mangeshkar</option>
          <option value="gulzar">Gulzar</option>
          <option value="imaginedragons">Imagine Dragons</option>
          <option value="jlo">Jennifer Lopez</option>
          <option value="michael">Michael Jackson</option>
          <option value="oned">One Direction</option>
          
        </select>
        </div>

        {artist && (
          <div className="hover:bg-green-300 rounded-2xl p-2 bg-blue-300 px-4 ml-2">
          
          <button>
          <AiOutlineArrowUp  size='2em' color="white"/>
          </button>
        </div>
            )}
        
        </form>
        
      </div>
      <div className='max-w-[800px]'>

      <p className="m-5 text-3xl leading-10 mb-16 pr-5">{!loading ? (
        <pre>
          <TextLetterByLetter text={lyrics}/>
        </pre>
        
      ) : "Loading..."}</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default Content

