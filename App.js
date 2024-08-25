import React, { useEffect, useState, Component } from 'react';
import { SafeAreaView, Button, Text, View, StyleSheet, Image, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';
//import songs from './data'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

 class Skib extends Component {
  state = {
    titlePage: 'block',
    genrePage: 'none',
    musicPage: 'none',
    subPage: 'none',
    genreNumber: 0,
    genreName: '',
    genreDescription: '',
    genreImage: '',
    sub1: '',
    sub2: '',
    sub3: '',
    song1title:"",
    song1artist:"",
    song1image:'',
    url:'',
    song2title:"",
    song2artist:"",
    song2image:'',
    url2:'',
  }
  back = () =>{
        this.setState({
            titlePage: 'block',
            genrePage: 'none',
            subPage: 'none',
        })
    }
   hiphop = () =>{
        this.setState({
            titlePage: 'none',
            genrePage: 'block',
            genreNumber: 0,
            genreName: 'HipHop',
            genreDescription: 'Hip-hop is a genre that originated in the early 1980s that is highly connected to rap. Hip hop is a subculture that involved lyricism, DJing, graffiti, and breakdancing.',
            genreImage: 'https://codehs.com/uploads/3b05c6053de6ccb07a2899f10fd19588',
            sub1: 'Trap',
            sub2: 'Drill',
            sub3: 'Alt Rap',
            song1title:"United In Grief",
            song1artist:"Kendrick Lamar",
            song1image:'https://codehs.com/uploads/7517a856e72405a832b1aaee17bef2a1',
            url:'https://audio.jukehost.co.uk/ZVK3SIwoyd1vdJfpMHuMq6oLiobPpyae',
            song2title:"MELTDOWN (featuring Drake)",
            song2artist:"Travis Scott",
            song2image:'https://codehs.com/uploads/03fdacbda9cf9d8eff92d1a5ef1619b8',
            url2:'https://audio.jukehost.co.uk/aWvE0qiT4GmxcUjqgTTOWM82rXpaHiBN',
        })
    }
  pop = () => {
        this.setState({
            titlePage: 'none',
            genrePage: 'block',
            genreNumber: 1,
            genreName: 'Pop',
            genreDescription: 'Pop is a genre stemming from 1950s America and UK that included very basic structured songs with repeated choruses and simple rhythms meant to be catchy and danceable. Most pop music borrows elements and sounds from other genres.',
            genreImage: 'https://codehs.com/uploads/fdb5eb15164ae680bc0cf02d47c1c282',
            sub1: 'Latin Pop',
            sub2: 'Dance Pop',
            sub3: 'Pop Rock',
            song1title:"Bad Romance",
            song1artist:"Lady Gaga",
            song1image:'https://codehs.com/uploads/97f3610e863ab908c75de9066dcfac76',
            url:'https://audio.jukehost.co.uk/qvm5KU5gRI8ZGTP16gTDyIxxNfOixdOo',
            song2title:"Call Me Maybe",
            song2artist:"Carly Rae Jepsen",
            song2image:'https://codehs.com/uploads/7cab352d7f809586be6edce449221583',
            url2:'https://audio.jukehost.co.uk/xUQvwpeAz0tqZ9J813r1pRsovcAtMjNs',
        })
    }
  rock = () => {
        this.setState({
            titlePage: 'none',
            genrePage: 'block',
            genreNumber: 2,
            genreName: 'Rock',
            genreDescription: 'Rock, also called rock & roll, was a genre that mainly emerged in the late 1940s and was defined mainly by bands consisting of but not limited to: electric guitar, bass, and drums. By the end of the 20th century, rock became the most popular genre in the world, changing the music industry forever.',
            genreImage: 'https://codehs.com/uploads/0ce61af5dec4ff9451962bd2a738d7f5',
            sub1: 'Punk Rock',
            sub2: 'J-Rock',
            sub3: 'Post-Hardcore',
            song1title:"Smells Like Teen Spirit",
            song1artist:"Nirvana",
            song1image:'https://codehs.com/uploads/eeda8faf3385d4f7a389f0a9333405b7',
            url:'https://audio.jukehost.co.uk/vCZxTsJrOEOUhvV8Zzevh9Rc4nV9Vw8E',
            song2title:"Highway To Hell",
            song2artist:"AC/DC",
            song2image:'https://codehs.com/uploads/540552d956787fc9a009b10b63e36b1b',
            url2:'https://audio.jukehost.co.uk/KppbbzBxctNmVl3AnmcphqLKYacsu5H7',
        })
    }
  electronic = () => {
        this.setState({
            titlePage: 'none',
            genrePage: 'block',
            genreNumber: 3,
            genreName: 'Electronic',
            genreDescription: 'Electronic music broadly is a group of music genres that employ electronic musical instruments, circuitry-based music technology and software, or general-purpose electronics (such as personal computers) in its creation.',
            genreImage: 'https://codehs.com/uploads/63f359ed5ac24a96a23f26edd1a8d652',
            sub1: 'Drum & Bass',
            sub2: 'House',
            sub3: 'Hardstyle',
            song1title:"Space Battle",
            song1artist:"F-777",
            song1image:'https://codehs.com/uploads/6a0739d204e87035164ec48963f9c746',
            url:'https://audio.jukehost.co.uk/f3AhY6d3MZGpeow8QNANgoRF6GZ1B7mX',
            song2title:"New Game",
            song2artist:"Nitro Fun",
            song2image:'https://codehs.com/uploads/f0e3e7979f3248341e6189638bbb7410',
            url2:'https://audio.jukehost.co.uk/lUnqmq6ZtceVUrkQzTle1brV1KoIPqdg',
        })
    }
  indie = () => {
        this.setState({
            titlePage: 'none',
            genrePage: 'block',
            genreNumber: 4,
            genreName: 'Indie',
            genreDescription: 'Indie music typically refers to music that is produced independently from major commercial record labels or their subsidiaries. Indie music often features a diverse range of styles and genres, and is known for its emphasis on artistic expression and creative freedom.',
            genreImage: 'https://codehs.com/uploads/a9377f1001d2e133563d3e7e0abc386b',
            sub1: 'Math Rock',
            sub2: 'Shoegaze',
            sub3: 'Midwest Emo',
            song1title:"Freaks",
            song1artist:"Surf Curse",
            song1image:'https://codehs.com/uploads/391eb9e63cf8e9f1e4e459c637b84d6a',
            url:'https://audio.jukehost.co.uk/3SXk0rUke2kukhlcb92U6x1oZO4CzgB3',
            song2title:"Take Me to the Sun",
            song2artist:"d4vd",
            song2image:'https://codehs.com/uploads/2cb493edaf09344f03c76b4acc21227e',
            url2:'https://audio.jukehost.co.uk/tVsXaTTG0Cy8CxJDxBwhLvQ3lbdPkHOh',
        })
    }
  metal = () => {
        this.setState({
            titlePage: 'none',
            genrePage: 'block',
            genreNumber: 5,
            genreName: 'Metal',
            genreDescription: 'Heavy metal (or simply metal) is a genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and United States. With roots in blues rock, psychedelic rock and acid rock, heavy metal bands developed a thick, monumental sound characterized by distorted guitars, extended guitar solos, aggressive vocals, emphatic beats and loudness.',
            genreImage: 'https://codehs.com/uploads/eadc6100ed4fc2e241fefbf6df11557c',
            sub1: 'Metalcore',
            sub2: 'Prog-Metal',
            sub3: 'Nu-Metal',
            song1title:"Tornado of Souls",
            song1artist:"Megadeth",
            song1image:'https://codehs.com/uploads/6aeb99a2877d3162e8b8fea043e9fbad',
            url:'https://audio.jukehost.co.uk/rRzOMbQY7AYhtPT7NBbMForG1w8pIwTR',
            song2title:"Seek & Destroy",
            song2artist:"Metallica",
            song2image:'https://codehs.com/uploads/0baea611ff86006ea1ada42bc5ee4513',
            url2:'https://audio.jukehost.co.uk/EkHpciHdoM7PHv8ZvXDd4CzgtH2rTVKT',
        })
    }
  subgenre1 = () => {
      switch(this.state.genreNumber){
        case 0:
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Trap',
              genreDescription: 'Trap is a type of rap music, originating in the South, characterized by slow and heavy bass drums with quick high-hat cymbals and gritty lyrics about drug culture.',
              genreImage: 'https://codehs.com/uploads/c6e74963f71476ed8893c249ff8590b8',
              song1title:"Sicko Mode (featuring Drake)",
              song1artist:"Travis Scott",
              song1image:'https://codehs.com/uploads/786598756ce15aad4061f49bbe636bb6',
              url:'https://audio.jukehost.co.uk/3ORWmQsxTSDieYc6vwd1NmQiiztl5WLW',
              song2title:"Mask Off",
              song2artist:"Future",
              song2image:'https://codehs.com/uploads/32af8db7c2caf4a746cc14c8f9fe4807',
              url2:'https://audio.jukehost.co.uk/awJsna85DnwuB1W39lWnnvgzJMZfNxPA',
          });
          break;
        case 1:
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Latin Pop',
              genreDescription: 'Latin pop is a pop music subgenre that is a fusion of US–style music production with Latin music genres from anywhere in Latin America and Spain. Originating with Spanish-speaking musicians, Latin pop may also be made by musicians in Portuguese and the various Romance Creole languages',
              genreImage: 'https://codehs.com/uploads/b52e6ec106b7aaf7cab23c9f8f5f5aea',
              song1title:"Despacito (featuring Daddy Yankee)",
              song1artist:"Luis Fonsi",
              song1image:'https://codehs.com/uploads/a4aac2f80ad91e3bd32b5b89470e2a19',
              url:'https://audio.jukehost.co.uk/4hzkxUNigkQjhx2PLwApXuXYTN8TT5qD',
              song2title:"Bailando (ft. Descemer Bueno, Gente De Zona)",
              song2artist:"Enrique Iglesias",
              song2image:'https://codehs.com/uploads/5faf9b2b01358b37eaa8d0b13cf361c2',
              url2:'https://audio.jukehost.co.uk/Y8a7MNwK0OiTpQHkCipTFKiPvdsCR8ce',
              
          });
          break;
          case 2: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Punk Rock',
              genreDescription: 'Punk rock is a music genre that emerged in the mid-1970s. Rooted in 1950s rock and roll and 1960s garage rock, punk bands rejected the corporate nature of mainstream 1970s rock music. They typically produced short, fast-paced songs with hard-edged melodies and singing styles with stripped-down instrumentation.',
              genreImage: 'https://codehs.com/uploads/3c0e4f5e3dab149a09243e7421392a77',
              song1title:"All the Small Things",
              song1artist:"Blink-182",
              song1image:'https://codehs.com/uploads/33fcb70a673094181f1ffb9a5b0b4d2f',
              url:'https://audio.jukehost.co.uk/EaGVo8StxK5p9dK2ivSjBDjAdc9OTPlT',
              song2title:"Brain Stew",
              song2artist:"Green Day",
              song2image:'https://codehs.com/uploads/9a181efb6bb89e25971334a50f5c0530',
              url2:'https://audio.jukehost.co.uk/tfvJkhnMm25YqIaNscVYAObgctkO2Zj5',
              
          });
          break;
          case 3: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Drum & Bass',
              genreDescription: 'Drum and bass is a genre of electronic dance music characterised by fast breakbeats with heavy bass and sub-bass lines, samples, and synthesizers. The genre grew out of the UK jungle scene in the 1990s. The popularity of drum and bass at its commercial peak ran parallel to several other UK dance styles.',
              genreImage: 'https://codehs.com/uploads/92de85ee36b8886309da1ed716d0c420',
              song1title:"Tour",
              song1artist:"Macky Gee",
              song1image:'https://codehs.com/uploads/845563681c0ca782c917bd324276dc9d',
              url:'https://audio.jukehost.co.uk/kEEKQmhcJr9yojJ2H6bPTd7yUHtpLVzc',
              song2title:"MAKE A MOVE",
              song2artist:"REAPER",
              song2image:'https://codehs.com/uploads/550ec533eb8cdac0dce566f514029176',
              url2:'https://audio.jukehost.co.uk/sIqsEZHsf5kZ0OPxnibSPpiXVVHkpc5I',
              
          });
          break;
          case 4: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Math Rock',
              genreDescription: 'Math rock is a style of alternative and indie rock with roots in bands such as King Crimson and Rush. It is characterized by complex, atypical rhythmic structures, counterpoint, odd time signatures, and extended chords. It bears similarities to post-rock.',
              genreImage: 'https://codehs.com/uploads/ad1ffd20fb904262f7c0728b495203db',
              song1title:"Playing God",
              song1artist:"Polyphia",
              song1image:'https://codehs.com/uploads/493fa34f3a0318d1eaa0cb698b6664ec',
              url:'https://audio.jukehost.co.uk/MY9CpA03lbFVgTaBGo2Q1l6L1b7P1mov',
              song2title:"Chinchilla",
              song2artist:"This Town Needs Guns",
              song2image:'https://codehs.com/uploads/f366e9eaf1e07b93bebe96ffc1a547be',
              url2:'https://audio.jukehost.co.uk/pMt48sJNaWx509o5bli5o7SzCM524zEp',
              
          });
          break;
          case 5: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Metalcore',
              genreDescription: 'Metalcore is a fusion genre combining elements of extreme metal and hardcore punk, that originated in the late 1980s. Metalcore is noted for its use of breakdowns, heavy guitar riffs often utilizing percussive pedal tones, and double bass drumming. Vocalists in the genre typically perform screaming, more popular bands often combine this with the use of standard singing, usually during the bridge or chorus of a song.',
              genreImage: 'https://codehs.com/uploads/ebddd108d8f5e681e320b47068f25e3e',
              song1title:"Can You Feel My Heart",
              song1artist:"Bring Me the Horizon",
              song1image:'https://codehs.com/uploads/8e666de44dfebe43ea68ec4f28721275',
              url:'https://audio.jukehost.co.uk/Wf0j6RSxd4TV9Y4bfVgKMSMayOSlrlEA',
              song2title:"Nightmare",
              song2artist:"Polaris",
              song2image:'https://codehs.com/uploads/314ae8f920613744c8e75127095c7762',
              url2:'https://audio.jukehost.co.uk/hlt8PspFfJlyTDnjBo1dFYTsZwmKcJX0',
              
          });
          break;
      }
  }
  subgenre2 = () => {
    switch(this.state.genreNumber){
      case 0: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Drill',
              genreDescription: 'Drill is a subgenre of hip-hop that originated in Chicago in the early 2010s. It is characterised by its aggressive, trap-style beats and lyrics that often focus on themes of violence, crime and life on the streets.',
              genreImage: 'https://codehs.com/uploads/6b23548dd5fbc102fd494472433677c5',
              song1title:"Oliver Twist",
              song1artist:"ArrDee",
              song1image:'https://codehs.com/uploads/7e841de16266e61d0b3d8f5929036836',
              url:'https://audio.jukehost.co.uk/iA1JVbaI2ResavBwf9yjsX5wBXDBDaD2',
              song2title:"One Up",
              song2artist:"Central Cee",
              song2image:'https://codehs.com/uploads/bff3487e56e934c49bf8a00010ba8753',
              url2:'https://audio.jukehost.co.uk/kPUAFD9qc0HoL0NTFqqNVo9wtqz0r2nG',
              
          });
          break;
          case 1: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Dance Pop',
              genreDescription: 'Dance-pop is a subgenre of pop music that originated in the late 1970s to early 1980s. It is generally uptempo music intended for nightclubs with the intention of being danceable but also suitable for contemporary hit radio.',
              genreImage: 'https://codehs.com/uploads/4a3a83dfa0eb19d8de1d91174d292219',
              song1title:"I Gotta Feeling",
              song1artist:"Black Eyed Peas",
              song1image:'https://codehs.com/uploads/fdfc93aa227bc74b46c550d527c6753a',
              url:'https://audio.jukehost.co.uk/GazWeN82O9DAIlhWFqUarp5wAVJthdnK',
              song2title:"Party Rock Anthem",
              song2artist:"LMFAO",
              song2image:'https://codehs.com/uploads/e393d8ad8ad3d113d07719f8e2b3e9e1',
              url2:'https://audio.jukehost.co.uk/es8pswHM1X9y4oPQ5paogb9FUzCUASXk',
              
          });
          break;
      case 2: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'J-Rock',
              genreDescription: 'Japanese rock, sometimes abbreviated to J-rock, is rock music from Japan. A defining aspect of J-rock that has stood the test of time is the strong focus on visuals and aesthetics. Typically, a J-rock band will feature complex hairstyles, elaborate outfits, and excessive make-up.',
              genreImage: 'https://codehs.com/uploads/632bc248289b6c6b49ddd651ad0a30f0',
              song1title:"Silhouette",
              song1artist:"Kana-Boon",
              song1image:'https://audio.jukehost.co.uk/EXRsnyE4hlQayW9AcKxK7PxTZFU244MU',
              url:'https://audio.jukehost.co.uk/5OhJosejM85EyBNsnCr2MFG9wMMHT03S',
              song2title:"Absolute Zero",
              song2artist:"Natori",
              song2image:'https://codehs.com/uploads/b0565621987391f17206d67a9db1cb31',
              url2:'https://audio.jukehost.co.uk/oIWxRDdkdQdtSx9uepHZVinYvGkL4V69',
              
          });
          break;
          case 3: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'House',
              genreDescription: 'House is a genre of electronic dance music characterized by a repetitive four-on-the-floor beat and a typical tempo of 120-130 beats per minute as a re-emergence of 1970s disco.',
              genreImage: 'https://codehs.com/uploads/856b86589cb00e04f9d1fd86c718db6a',
              song1title:"Poppin Bottles",
              song1artist:"Chico Rose, Jaden Bojsen",
              song1image:'https://codehs.com/uploads/ba0719c810a0c0650dac152e8dc2d2db',
              url:'https://audio.jukehost.co.uk/5JztYeNsAEx6uyV1QbyGtttoFKXTnydc',
              song2title:"Move Your Body",
              song2artist:"Öwnboss, Sevek",
              song2image:'https://codehs.com/uploads/6a58c20c518efc7659081299d631586b',
              url2:'https://audio.jukehost.co.uk/mXXoWdUwXCCkBBpKz645ZxCROK5bVdZh',
              
          });
          break;
          case 4: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Shoegaze',
              genreDescription: 'Shoegaze (originally called shoegazing and sometimes conflated with dream pop) is a subgenre of indie and alternative rock characterized by its ethereal mixture of obscured vocals, guitar distortion and effects, feedback, and overwhelming volume.',
              genreImage: 'https://codehs.com/uploads/84954a00996c48b91e132902d83f0883',
              song1title:"When the Sun Hits",
              song1artist:"Slowdive",
              song1image:'https://codehs.com/uploads/8a3cfafdc4b4278ef704789e85fe78ec',
              url:'https://audio.jukehost.co.uk/vfzmG2A0VCv9cQFKaRlmTpJWQuLS1Kol',
              song2title:"When You Sleep",
              song2artist:"My Bloody Valentine",
              song2image:'https://codehs.com/uploads/66cfc9e51a0c389bcf6cf1e7624ed221',
              url2:'https://audio.jukehost.co.uk/ksK9SNsDI0A2i00KDe4gGU7svwmJKFzO',
              
          });
          break;
          case 5: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Progressive Metal',
              genreDescription: 'Progressive metal (often shortened to prog metal or prog) is a broad fusion music genre melding heavy metal and progressive rock, combining the loud aggression and amplified guitar-driven sound of the former with the more experimental, cerebral or quasi-classical compositions of the latter.',
              genreImage: 'https://codehs.com/uploads/f45da5fb931c654ff27bb9f4b0506f29',
              song1title:"The Summoning",
              song1artist:"Sleep Token",
              song1image:'https://codehs.com/uploads/b846a86c502e48c9f91b35c838a2a2c2',
              url:'https://audio.jukehost.co.uk/Y1IauaIMBYK2dZwFuNOp7S0WAt7muSLW',
              song2title:"Lateralus",
              song2artist:"Tool",
              song2image:'https://codehs.com/uploads/8e9c092ebcb7b0f54017c5f7ec0a9f4c',
              url2:'https://audio.jukehost.co.uk/Sox7Gm5mFKigCy5eFF0ckURacDtyk2oN',
              
          });
          break;
    }
  }
  subgenre3 = () => {
      switch(this.state.genreNumber){
      case 0: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Alt Rap',
              genreDescription: 'Alternative hip hop is a subgenre of hip hop music that encompasses a wide range of styles that are not typically identified as mainstream. AllMusic defines it as comprising hip hop groups that refuse to conform to any of the traditional stereotypes of rap, such as gangsta, bass, hardcore, and party rap.',
              genreImage: 'https://codehs.com/uploads/f72b20bc81b32ad9bfd19c2518253beb',
              
          });
          break;
          case 1: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Pop Rock',
              genreDescription: 'Pop rock (also typeset as pop/rock) is a fusion genre characterized by a strong commercial appeal, with more emphasis on professional songwriting and recording craft, and less emphasis on attitude than standard rock music.',
              genreImage: 'https://codehs.com/uploads/9d17f007eee2fd3933fa25a93763deab',
              
          });
          break;
      case 2: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Post-Hardcore',
              genreDescription: 'Post-hardcore is a rock music genre that maintains the aggression and intensity of hardcore punk but emphasizes a greater degree of creative expression initially inspired by post-punk and noise rock.',
              genreImage: 'https://codehs.com/uploads/ad0b445864b99bdcc31462ec1052747d',
              
          });
          break;
          case 3: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Hardstyle',
              genreDescription: 'Hardstyle is an electronic dance genre that emerged in the late 1990s, with origins in the Netherlands, Belgium and Italy. Hardstyle typically consists of a deep, hard-sounding kick drum, intense faded or reversed basslines accompanying the beat, a synth playing a melody, and detuned and distorted sounds.',
              genreImage: 'https://codehs.com/uploads/45679c0868803dbea98ca0371c88ebee',
              
          });
          break;
          case 4: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Midwest Emo',
              genreDescription: 'Midwest emo refers to the emo scene and subgenre that developed in the 1990s Midwestern United States. Employing unconventional vocal stylings, distinct guitar riffs and arpeggiated melodies, Midwest emo bands shifted away from the genres hardcore punk roots and drew on indie rock and math rock approaches.',
              genreImage: 'https://codehs.com/uploads/0bad63f00bb8d8ac3cc2f4d0d7b10394',
              
          });
          break;
          case 5: 
          this.setState({
              genrePage: 'none',
              subPage: 'block',
              genreName: 'Nu-Metal',
              genreDescription: 'Nu metal (sometimes stylized as nü-metal) is a subgenre of alternative metal that combines elements of heavy metal music with elements of other music genres such as hip hop, funk, industrial, and grunge.',
              genreImage: 'https://codehs.com/uploads/88a9391285b3e346714b24b6e9bd3e51',
              
          });
          break;
    }
  }


render(){
  const { songs, toggleSound, isPlaying, currentSongIndex } = this.props;
  return(
    <View style = {styles.container}>
    <View style = {{display: this.state.titlePage}}>
    <View style = {{marginTop: deviceHeight / 12}}>
      <Text style = {styles.heading}> 
      Genrefy
      </Text>
    </View>
      <ScrollView>
        <View style = {styles.rowContainer}>
        
          <TouchableHighlight
          onPress = {this.hiphop}>
            <View style = {styles.genreContainer}>
              <Image
              source={{ uri: 'https://codehs.com/uploads/3b05c6053de6ccb07a2899f10fd19588' }}
              style={{ height: deviceHeight / 9, width: deviceWidth / 3.5, resizeMode: 'cover'}}
              />
              <Text style = {styles.genreText}>
                Hip-Hop
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
          onPress = {this.pop}>
            <View style = {styles.genreContainer}>
              <Image
              source={{ uri: 'https://codehs.com/uploads/fdb5eb15164ae680bc0cf02d47c1c282' }}
              style={{ height: deviceHeight / 9, width: deviceWidth / 4, resizeMode: 'contain'}}
              />
              <Text style = {styles.genreText}>
                Pop
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {styles.rowContainer}>
          <TouchableHighlight
          onPress = {this.rock}>
            <View style = {styles.genreContainer}>
              <Image
              source={{ uri: 'https://codehs.com/uploads/0ce61af5dec4ff9451962bd2a738d7f5' }}
              style={{ height: deviceHeight / 9, width: deviceWidth / 3.5, resizeMode: 'cover'}}
              />
              <Text style = {styles.genreText}>
                Rock
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
          onPress = {this.electronic}>
            <View style = {styles.genreContainer}>
              <Image
              source={{ uri: 'https://codehs.com/uploads/63f359ed5ac24a96a23f26edd1a8d652' }}
              style={{ height: deviceHeight / 9, width: deviceWidth / 3.5, resizeMode: 'cover'}}
              />
              <Text style = {styles.genreText}>
                Electronic
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {styles.rowContainer}>
        <TouchableHighlight
          onPress = {this.indie}>
            <View style = {styles.genreContainer}>
              <Image
              source={{ uri: 'https://codehs.com/uploads/a9377f1001d2e133563d3e7e0abc386b' }}
              style={{ height: deviceHeight / 9, width: deviceWidth / 3.5, resizeMode: 'cover'}}
              />
              <Text style = {styles.genreText}>
                Indie
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
          onPress = {this.metal}>
            <View style = {styles.genreContainer}>
              <Image
              source={{ uri: 'https://codehs.com/uploads/eadc6100ed4fc2e241fefbf6df11557c' }}
              style={{ height: deviceHeight / 9, width: deviceWidth / 3.5, resizeMode: 'cover'}}
              />
              <Text style = {styles.genreText}>
                Metal
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
      </View>
    
{/*genre display page*/}
      <View style = {{display: this.state.genrePage}}>
        <ScrollView style={styles.scrollView}>
            <TouchableHighlight
            onPress = {this.back}>
            <View style = {{marginTop: deviceHeight / 15, marginLeft: deviceWidth / 12}}>
              <Image
              source={{ uri: 'https://codehs.com/uploads/f9eaa61f73d12706dd8a46cb8ce6abbb' }}
              style={{ height: deviceWidth / 10, width: deviceWidth / 10}}
              />
              </View>
            </TouchableHighlight>
            <View style = {styles.genreImage}>
              <Image
              source={{ uri: this.state.genreImage }}
              style={{ height: deviceWidth / 3, width: deviceHeight / 6, resizeMode: 'contain'}}
              />
            </View>
     
          <Text style = {styles.title}>
            {this.state.genreName}
          </Text>
          <View style = {{width: deviceWidth / 1.3, marginLeft: deviceWidth / 7}}>
            <Text style = {styles.genreDescriptionText}>
              {this.state.genreDescription}
            </Text>
          </View>
          <Text style = {styles.title}>
            Subgenres:
          </Text>

          <View style = {styles.rowContainer}>
          <View style = {styles.wrapper}>
            <TouchableHighlight
              onPress = {this.subgenre1}>
              <Text style = {styles.genreNameText}>
                {this.state.sub1}
              </Text>
            </TouchableHighlight>
          </View>
          <View style = {styles.wrapper}>
            <TouchableHighlight
              onPress = {this.subgenre2}>
              <Text style = {styles.genreNameText}>
                {this.state.sub2}
              </Text>
            </TouchableHighlight>
            </View>
            <View style = {styles.wrapper}>
            <TouchableHighlight
              onPress = {this.subgenre3}>
              <Text style = {styles.genreNameText}>
                {this.state.sub3}
              </Text>
            </TouchableHighlight>
            </View>
          </View>

          <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: deviceHeight / 10 }}>
          <Image source={this.state.song1image} style={{ width: deviceWidth / 2, height: deviceWidth / 2 }} />
          <Text style = {{color: 'white'}}>{this.state.song1title} - {this.state.song1artist}</Text>
          <Button
            title={isPlaying && currentSongIndex === 1 ? 'Pause' : 'Play'}
            onPress={() => toggleSound(this.state.url, 1)}
          />
          </SafeAreaView>

          <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: deviceHeight / 10 }}>
          <Image source={this.state.song2image} style={{ width: deviceWidth / 2, height: deviceWidth / 2 }} />
          <Text style = {{color: 'white'}}>{this.state.song2title} - {this.state.song2artist}</Text>
          <Button
            title={isPlaying && currentSongIndex === 2 ? 'Pause' : 'Play'}
            onPress={() => toggleSound(this.state.url2, 2)}
          />
          </SafeAreaView>

      </ScrollView>
      </View>

{/*subgenre display page*/}
      <View style = {{display: this.state.subPage}}>
        <ScrollView style={styles.scrollView}>
            <TouchableHighlight
            onPress = {this.back}>
            <View style = {{marginTop: deviceHeight / 15, marginLeft: deviceWidth / 12}}>
              <Image
              source={{ uri: 'https://codehs.com/uploads/f9eaa61f73d12706dd8a46cb8ce6abbb' }}
              style={{ height: deviceWidth / 10, width: deviceWidth / 10,}}
              />
            </View>
            </TouchableHighlight>
            <View style = {styles.genreImage}>
              <Image
              source={{ uri: this.state.genreImage }}
              style={{ height: deviceWidth / 3, width: deviceHeight / 6, resizeMode: 'contain'}}
              />
            </View>
     
          <Text style = {styles.title}>
            {this.state.genreName}
          </Text>
          <View style = {{width: deviceWidth / 1.3, marginLeft: deviceWidth / 10}}>
            <Text style = {styles.genreDescriptionText}>
              {this.state.genreDescription}
            </Text>
          </View>


          <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: deviceHeight / 10 }}>
          <Image source={this.state.song1image} style={{ width: deviceWidth / 2, height: deviceWidth / 2 }} />
          <Text style = {{color: 'white'}}>{this.state.song1title} - {this.state.song1artist}</Text>
          <Button
            title={isPlaying && currentSongIndex === 1 ? 'Pause' : 'Play'}
            onPress={() => toggleSound(this.state.url, 1)}
          />
          </SafeAreaView>

          <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: deviceHeight / 10 }}>
          <Image source={this.state.song2image} style={{ width: deviceWidth / 2, height: deviceWidth / 2 }} />
          <Text style = {{color: 'white'}}>{this.state.song2title} - {this.state.song2artist}</Text>
          <Button
            title={isPlaying && currentSongIndex === 2 ? 'Pause' : 'Play'}
            onPress={() => toggleSound(this.state.url2, 2)}
          />
          </SafeAreaView>

      </ScrollView>
      </View>
      </View>
  );
  }
}
function App(){
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [positionMillis, setPositionMillis] = useState(0);

  async function toggleSound(songUrl, index) {
    try {
      if (sound) {
        if (isPlaying && currentSongIndex === index) {
          await sound.pauseAsync();
          setIsPlaying(false);
          console.log('Paused Sound');
        } else {
          if (currentSongIndex !== index) {
            // If switching to a different song, stop and unload the current sound
            await sound.stopAsync();
            await sound.unloadAsync();
            console.log('Unloaded Sound');
          }

          const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: songUrl },
            { shouldPlay: true, positionMillis } // Start from the last position if available
          );
          setSound(newSound);
          setIsPlaying(true);
          setCurrentSongIndex(index);
          console.log('Playing Sound');
        }
      } else {
        console.log('Loading Sound');
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: songUrl },
          { shouldPlay: true, positionMillis } // Start from the last position if available
        );
        setSound(newSound);
        setIsPlaying(true);
        setCurrentSongIndex(index);
        console.log('Playing Sound');
      }
    } catch (error) {
      console.log('Error occurred while playing sound:', error);
    }
  }

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
        console.log('Unloaded Sound');
      }
    };
  }, [sound]);

  useEffect(() => {
    const updatePosition = async () => {
      if (sound && isPlaying) {
        const status = await sound.getStatusAsync();
        setPositionMillis(status.positionMillis);
      }
    };

    const interval = setInterval(updatePosition, 1000); // Update position every second

    return () => clearInterval(interval);
  }, [sound, isPlaying]);
  return(
    <Skib
    toggleSound={toggleSound}
    sound={sound}
    isPlaying={isPlaying}
    currentSongIndex={currentSongIndex}
  />);
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8,
    alignItems: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  genreContainer: {
    backgroundColor: 'white',
    width: deviceWidth / 3,
    height: deviceHeight / 6,
    alignItems: 'center',
    margin: deviceWidth / 16,
  },
  genreText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  genreImage: {
    backgroundColor: 'white',
    width: deviceWidth / 3,
    height: deviceHeight / 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: deviceWidth / 3,
  },
  genreDescriptionText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    padding: 1,
  },
  genreNameText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#37b2eb',
    textDecorationLine: 'underline',
    padding: 5,
    marginLeft: deviceWidth/12,
  },
  scrollView: {
    height: deviceHeight,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    padding: 1,
    fontWeight: 'bold',
  },
  wrapper: {
    width: deviceWidth / 3,
  }
});
