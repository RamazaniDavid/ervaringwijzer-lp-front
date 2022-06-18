import React from 'react';
import Slider from 'react-slick';

import Rating from '../misc/Rating';

function Quotes() {
  const slickRef = React.useRef<Slider>(null);

  const quotes = [
    {
      id: 1,
      author: {
        name: 'Jochem Janssen',
        Logo: 'Jochem-Janssen.png',
        nameClassName: '',
        logoClassName: '',
      },
      company: {
        name: 'Stichting Balans',
        nameClassName: '',
        Logo: 'logoStichtingBalans-1.svg',
        logoClassName: '',
      },
      quote: {
        text: 'Het verspreiden van de lijsten is erg makkelijk te realiseren. Met de groep waar ik de lijst heb uitgezet heb ik direct en persoonlijk contact. Hierdoor lukt het om iedereen de lijst te laten invullen met als gevolg 90% respons.',
        rate: 5,
        className: '',
        containerClassName: 'bg-[#96c22d]',
      },
      link: 'https://www.stichtingbalans.nl/contact/medewerkers/',
    },
    {
      id: 2,
      author: {
        name: 'Joop van der Zee',
        Logo: 'Joop-van-der-Zee.webp',
        nameClassName: '',
        logoClassName: '',
      },
      company: {
        name: 'Gemeente Utrecht',
        nameClassName: '',
        Logo: 'Gemeente-Utrecht.svg',
        logoClassName: '',
      },
      quote: {
        text: 'De app biedt informatie waar je als zorgaanbieder en gemeente écht iets aan hebt!',
        rate: 5,
        className: '',
        containerClassName: 'bg-[#be0004]',
      },
      link: 'https://www.ervaringwijzer.nl/blog/clientervaring-meer-dan-een-verplicht-nummer/',
    },
    {
      id: 3,
      author: {
        name: 'Brigit den Hartog',
        Logo: 'Foto-Brigit-den-Hartog.webp',
        nameClassName: '',
        logoClassName: '',
      },
      company: {
        name: 'Stichtin Pulse',
        nameClassName: '',
        Logo: 'Logo-Stichting-Pulse-1.svg',
        logoClassName: '',
      },
      quote: {
        text: 'Sinds begin dit jaar gebruikt Stichting Pulse Ervaringwijzer. Een laagdrempelige manier om de klanttevredenheid in beeld te krijgen. Ook hebben de medewerkers direct inzicht in de resultaten, dit werkt prettig.',
        rate: 4,
        className: '',
        containerClassName: 'bg-[#42247a]',
      },
      link: 'https://www.google.com/maps/contrib/108587246824777751288?hl=nl-NL&sa=X&ved=2ahUKEwjKyrnt0Jj0AhVY8LsIHT7rCT8QvvQBegQIARAd',
    },
    {
      id: 4,
      author: {
        name: 'Dragan Saric',
        Logo: 'Dragan.jpeg',
        nameClassName: '',
        logoClassName: '',
      },
      company: {
        name: 'Gemeente Soest',
        nameClassName: '',
        Logo: 'Kleine-soest.svg',
        logoClassName: '',
      },
      quote: {
        text: 'We hebben voor Ervaringwijzer gekozen zodat we met z’n allen, naast het hebben van een soortgelijke vragenlijst, ook kunnen werken in een soortgelijke omgeving.',
        rate: 5,
        className: '',
        containerClassName: 'bg-[#1f5f28]',
      },
      link: 'https://www.ervaringwijzer.nl/blog/de-soestermethode-een-methode-waar-je-u-tegen-zegt/',
    },
    {
      id: 5,
      author: {
        name: 'Jolanda Spoelstra',
        Logo: 'Jolanda-Spoelstra.png',
        nameClassName: '',
        logoClassName: '',
      },
      company: {
        name: 'Delft Support',
        nameClassName: '',
        Logo: 'Logo-Delft-Support-1.svg',
        logoClassName: '',
      },
      quote: {
        text: 'Dit jaar is de organisatie waar ik voor werk met Ervaringwijzer gaan werken. Ik ben heel tevreden, Ervaringwijzer is een gebruiksvriendelijke tool',
        rate: 5,
        className: '',
        containerClassName: 'bg-[#f00083]',
      },
      link: 'https://www.linkedin.com/posts/delft-support_cliaebntparticipatie-activity-6815570750825664512-Lmjl',
    },
    {
      id: 6,
      author: {
        name: 'Robin Tromp',
        Logo: 'Robin-Tromp.png',
        nameClassName: '',
        logoClassName: '',
      },
      company: {
        name: 'Gemeente Utrecht',
        nameClassName: '',
        Logo: 'Gemeente-Utrecht.svg',
        logoClassName: '',
      },
      quote: {
        text: 'Ervaringwijzer geeft ons de mogelijkheid om vragen op te nemen die betekenisvoller en beter passend zijn.',
        rate: 5,
        className: '',
        containerClassName: 'bg-[#be0004]',
      },
      link: 'https://www.ervaringwijzer.nl/blog/clientervaring-meer-dan-een-verplicht-nummer/',
    },
    {
      id: 7,
      author: {
        name: 'Vincent de Goeij',
        Logo: 'Vincent-de-Goeij.png',
        nameClassName: '',
        logoClassName: '',
      },
      company: {
        name: 'Gemeente West Betuwe',
        nameClassName: '',
        Logo: 'Gemeente-West-Betuwe.svg',
        logoClassName: '',
      },
      quote: {
        text: 'Ervaringwijzer zorgt ervoor dat vragenlijsten voor cliënt-ervaring in een handomdraai gemaakt kunnen worden. De verschillende mogelijkheden van versturen van de vragenlijsten helpen bij het beter bereiken van de doelgroepen om zo respons te verhogen.',
        rate: 5,
        className: '',
        containerClassName: 'bg-[#0a285a]',
      },
      link: 'https://www.google.com/maps/contrib/102304451325671188647?hl=nl-NL&sa=X&ved=2ahUKEwjKyrnt0Jj0AhVY8LsIHT7rCT8QvvQBegQIARBX',
    },
    {
      id: 8,
      author: {
        name: 'Katja van Staveren',
        Logo: 'Katja-van-Staveren.png',
        nameClassName: '',
        logoClassName: '',
      },
      company: {
        name: 'Gemeente Bunnik',
        nameClassName: '',
        Logo: 'Logo-gemeente-Bunnik.svg',
        logoClassName: '',
      },
      quote: {
        text: 'Wij hebben beargumenteerd dat het instrument ook breder ingezet kan worden voor klantervaringsonderzoeken van andere afdelingen.',
        rate: 4,
        className: '',
        containerClassName: 'bg-[#53b137]',
      },
      link: 'https://www.ervaringwijzer.nl/blog/monitoring-sociaal-domein-met-ervaringwijzer/',
    },
    {
      id: 9,
      author: {
        name: 'Karin de Bruin',
        Logo: 'karin.jpeg',
        nameClassName: '',
        logoClassName: '',
      },
      company: {
        name: 'Gemeente Utrecht',
        nameClassName: 'Gemeente-Utrecht.svg',
        Logo: '',
        logoClassName: '',
      },
      quote: {
        text: 'Bij deze tool hebben ze de KISS – principes goed toegepast waardoor het zeer geschikt is voor de wat minder (digi)taalvaardige mensen.',
        rate: 5,
        className: '',
        containerClassName: 'bg-[#be0004]',
      },
      link: 'https://www.linkedin.com/posts/karindebruinhaarlem_fieldlab-gemeenten-ervarin-activity-6686145596337795072-1wav',
    },
    {
      id: 10,
      author: {
        name: 'Alma van Baal',
        Logo: 'Alma-van-Baal.png',
        nameClassName: '',
        logoClassName: '',
      },
      company: {
        name: 'Gemeente Wijk bij Duurstede',
        nameClassName: '',
        Logo: 'Gemeente-Wijk-bij-Duurstede.svg',
        logoClassName: '',
      },
      quote: {
        text: 'De tool is makkelijk in gebruik en is zonder onderzoeksbureau te gebruiken.',
        rate: 4,
        className: '',
        containerClassName: 'bg-[#0a0a0a]',
      },
      link: '',
    },
    {
      id: 11,
      author: {
        name: 'Sanneke Verweij',
        Logo: 'Sanne-Verweij.png',
        nameClassName: '',
        logoClassName: '',
      },
      company: {
        name: 'Movisie',
        nameClassName: '',
        Logo: 'Logo-Movisie.sv',
        logoClassName: '',
      },
      quote: {
        text: 'Het is bijzonder dat door de flexibiliteit van de webapplicatie de monitoring zoveel mogelijk kan worden aangesloten op de belevingswereld van de cliënt.',
        rate: 4,
        className: '',
        containerClassName: 'bg-[#6b9600]',
      },
      link: 'https://www.ervaringwijzer.nl/blog/monitoring-sociaal-domein-met-ervaringwijzer/',
    },
    {
      id: 12,
      author: {
        name: 'Idelette Sleurink',
        Logo: 'Idelette-Sleurink.png',
        nameClassName: '',
        logoClassName: '',
      },
      company: {
        name: 'Stichting Welzijn Ouderen Soest',
        nameClassName: '',
        Logo: 'Logo-SWOS-1.svg',
        logoClassName: '',
      },
      quote: {
        text: 'Ik ben heel content met de ondersteuning van Ervaringwijzer bij het maken en verzenden van de vragenlijsten. Prettige samenwerking, behulpzaam en snel reagerend.',
        rate: 5,
        className: '',
        containerClassName: 'bg-[#c1031f]',
      },
      link: 'https://www.google.com/maps/contrib/116939297308441948691?hl=nl-NL&sa=X&ved=2ahUKEwjKyrnt0Jj0AhVY8LsIHT7rCT8QvvQBegQIARB7',
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  React.useEffect(() => {
    console.log(slickRef);

    return () => {};
  }, [slickRef]);

  return (
    <section id="quotes">
      <div className="mt-12 flex w-full flex-col">
        <div className="mx-auto flex flex-row p-4 xl:w-10/12 2xl:w-8/12">
          <span className=" text-left  text-4xl text-[#082446]">
            Wat klanten zeggen
          </span>
        </div>
        <div>
          <Slider {...settings} ref={slickRef}>
            {quotes.map((item) => (
              <div
                key={item.id}
                className="flex  w-full flex-col justify-between  p-4"
              >
                <div
                  className={`flex flex-col ${item.quote.containerClassName} h-[inherit] rounded-t-lg text-white  px-0 lg:px-12`}
                >
                  <div className="flex flex-col space-y-8 p-4">
                    <Rating rating={item.quote.rate} />
                    <div className="my-4 text-left text-lg">
                      {item.quote.text}
                    </div>
                  </div>
                </div>
                <div className="mb-4 flex flex-row rounded-b-lg bg-white p-4 shadow-lg md:mb-2">
                  <div className="hidden lg:flex"></div>
                  <div className="flex flex-col">
                    <span>Door {item.author.name}</span>
                    <span>{item.company.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Quotes;
