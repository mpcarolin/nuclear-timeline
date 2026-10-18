import type { TTimelineEvent } from "@/types/timeline";

import { infinite } from "@/utils/infinite";

const nextInt = infinite();

// See: https://ahf.nuclearmuseum.org/ahf/nuc-history/timeline/
export const events: TTimelineEvent[] = [
    {
        id: nextInt().toString(),
        date: new Date('1945-07-16T00:00:00'),
        title: "Trinity",
        description: "The first detonation of a nuclear weapon is conducted by the United States Army. Part of the Manhattan project, the test uses an implosion-design plutonium bomb.",
        image: {
            src: "/trinity.jpg",
            attribution: "Berlyn Brixner, Los Alamos National Laboratory"
        },
        coord: {
            lat: 34.307144,
            long: -106.018066,
            name: "Alamogordo Bombing Range (south of Los Alamos, New Mexico)"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1945-08-06T00:00:00'),
        title: "Hiroshima",
        description: "Atomic bomb \"Little Boy\" is dropped on Hiroshima, Japan by the United States military. It is the first instance of a nuclear weapon used in warfare",
        coord: {
            lat: 34.3947,
            long: 132.4547,
            name: "Hiroshima, Japan"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1945-08-09T00:00:00'),
        title: "Nagasaki",
        description: "Atomic bomb \"Fat Man\" is dropped on Nagasaki, Japan by the United States military. The second atomic bomb ever used in warfare and also the last. It was larger than the one used in Hiroshima.",
        image: {
            src: "/nagasaki.jpg",
            attribution: "Charles Levy, Office for Emergency Management"
        },
        coord: {
            lat: 32.7736,
            long: 129.8633,
            name: "Nagasaki, Japan"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1946-01-24T00:00:00'),
        title: "UNAEC",
        description: "The United Nations Atomic Energy Commission (UNAEC) is created.",
        coord: {
            lat: 51.5,
            long: -0.13,
            name: "Westminster, London"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1946-07-01T00:00:00'),
        title: "Operation Crossroads",
        description: "The United States conducts its first postwar test of a nuclear weapon in the marshall Islands. The goal is to study the capabilities of nuclear weaponry for naval warfare.",
        image: {
            src: "/operation_crossroads.gif",
            attribution: "USDE"
        },
        coord: {
            lat: 11.59,
            long: 165.5,
            name: "Bikini Atoll, Marshall Islands"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1946-12-25T00:00:00'),
        title: "Soviet Union Enters the Mix",
        description: "The Soviets produce a nuclear chain reaction in a laboratory setting for the first time.",
        coord: {
            lat: 55.7961,
            long: 37.4786,
            name: "Moscow, Russia"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1949-08-29T00:00:00'),
        title: "First USSR Explosion",
        description: "Using the United States' \"Fat Man\" bomb as a model, the Soviet Union detonates an atomic bomb for the first time. The yield is similar to the bombs used in Hiroshima and Nagasaki, at 22 kilotons.",
        image: {
            src: "/joe-1.jpg",
            attribution: "nuclearweaponarchive.org"
        },
        coord: {
            lat: 50.4375,
            long: 77.8142,
            name: "Near Semipalatinsk, Kazakhstan"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1950-03-10T00:00:00'),
        title: "Thermonuclear",
        description: "President Truman approves the development of an advanced form of nuclear weaponry that incorporates nuclear fusion, which came to be called \"Hydrogen\" bombs.",
        coord: {
            lat: 38.8977,
            long: -77.0365,
            name: "Washington D.C."
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1950-06-09T00:00:00'),
        title: "Bohr's Open Letter",
        description: "Physicist Niels Bohr addresses the United Nations in a letter asking for transparent nuclear research and military development among nations, arguing international arms control will be difficult without this.",
        image: {
            src: "/bohr_letter.jpg",
        },
        coord: {
            lat: 55.6969,
            long: 12.5717,
            name: "Copenhagen, Denmark"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1951-01-27T00:00:00'),
        title: "Nevada Test Site",
        description: "The United States tests the first nuclear weapon at the Nevada Test Site as part of Operation Ranger.",
        image: {
            src: "mk_4a.jpg"
        },
        coord: {
            lat: 36.8256,
            long: -115.9650,
            name: "Frenchman Flat, Area 5, Nevada Test Site"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1951-12-20T00:00:00'),
        title: "Nuclear Reactor",
        description: "A nuclear reactor generates electricity in a self-sustaining manner for the first time.",
        coord: {
            lat: 43.5113,
            long: -113.0064,
            name: "National Reactor Testing Station near Arco, Idaho"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1952-10-03T00:00:00'),
        title: "UK Enters the Mix",
        description: "The United Kingdom tests its first nuclear bomb named \"Hurricane\"",
        coord: {
            lat: -20.4053,
            long: 115.5664,
            name: "Off the coast of Western Australia"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1952-11-01T00:00:00'),
        title: "Thermonuclear Test",
        description: "The United States tests its first thermonuclear bomb in the South Pacific. At 10 megatons, this device is roughly 1000 times more powerful than the Hiroshima bomb.",
        coord: {
            lat: 11.6667,
            long: 162.1869,
            name: "Elugelab Island, Enewetak Atoll, Marshall Islands"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1953-08-12T00:00:00'),
        title: "Russia's Thermonuclear Bomb",
        description: "The Soviet Union tests their first hydrogen bomb, with a yield of roughly 400 kilotons.",
        coord: {
            lat: 50.4378,
            long: 77.8142,
            name: "Near Semipalatinsk, Kazakhstan"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1953-12-08T00:00:00'),
        title: "Eisenhower's Speech",
        description: "President Eisenhower delivers his speech titled \"Atoms for Peace\", in which he presents a program for peaceful distribution of nuclear technology to countries with less advanced research.",
        image: {
            src: "atoms_for_peace.jpg",
            attribution: "energy.gov"
        },
        coord: {
            lat: 40.7494,
            long: -73.9681,
            name: "New York City"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1954-03-01T00:00:00'),
        title: "Bravo",
        description: "U.S. detonates the largest thermonuclear nuclear bomb up to this point, at 15 megatons, in a test titled \"Bravo\". This bomb was promptly made into a weaponized form that could be delivered by aircraft.",
        image: {
            src: "bravo.gif",
            attribution: "USDE"
        },
        coord: {
            lat: 11.6972,
            long: 165.2719,
            name: "Bikini Atoll, Marshall Islands"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1955-11-22T00:00:00'),
        title: "Soviets continue testing",
        description: "Within Kazakhstan, the Soviets detonate their first Hydrogen bomb in the megaton-range.",
        coord: {
            lat: 50.42,
            long: 77.78,
            name: "Near Semipalatinsk, Kazakhstan"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1957-06-24T00:00:00'),
        title: "Priscilla",
        description: "The United States conducts a test called \"Shot Priscilla\" in the Nevada Test Site. This was the third in a series of nuclear tests that later became controversial for civilian exposure to radiation. The operation's tests released around 58,300 kilocuries of radioiodine into the atmosphere.",
        image: {
            src: "priscilla.gif",
            attribution: "USDE/AEC"
        },
        coord: {
            lat: 36.8256,
            long: -115.9650,
            name: "Frenchman Flat, Area 5, Nevada Test Site"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1958-08-27T00:00:00'),
        title: "Explosions in Space",
        description: "United States conducts \"Operation Argus\", detonating a nuclear device in space, creating a radiation belt that wraps the planet. The detonation was intended to test if this radiation in space could defend against Soviet missiles by overloading warheads' electronics.",
        image: {
            src: "argus.gif",
            attribution: "AEC/USDE - Trinity & Beyond: The Atomic Bomb Movie"
        },
        coord: {
            lat: -38.5,
            long: -11.5,
            name: "Above the South Atlantic Ocean"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1960-02-13T00:00:00'),
        title: "France",
        description: "France detonates its first nuclear bomb.",
        coord: {
            lat: 26.3117,
            long: -0.0572,
            name: "Near Reggane, Algerian Sahara"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1961-10-30T00:00:00'),
        title: "Tsar Bomba",
        description: "The largest nuclear weapon ever detonated in history is carried out by the Soviet Union in its far north. Named \"Tsar Bomba\", it yielded 57 megatons, 4 times larger than any weapon tested by the United States.",
        image: {
            src: "tsar_bomba.png",
            attribution: "Rosatom State Corporation Communications Department"
        },
        coord: {
            lat: 73.8500,
            long: 54.5000,
            name: "~4km above Severny Island, Novaya Zemlya, Russia"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1962-10-16T00:00:00'),
        title: "Cuban Missile Crisis",
        description: "The Cuban Missile Crisis begins when the United States discovers Soviet missiles in Cuba.",
        image: {
            src: "cuba_crisis.png",
            attribution: "Defense Intelligence Agency"
        },
        coord: {
            lat: 22.6681,
            long: -83.2972,
            name: "Pinar del Rio, Cuba"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1963-10-10T00:00:00'),
        title: "A Treaty between Superpowers",
        description: "The \"Limited Test Ban Treaty\", signed by John F. Kennedy and Nikita Khrushchev, enters into effect. It bans nuclear testing above ground, underwater, in the atmosphere, and also in space",
        coord: {
            lat: 55.75,
            long: 37.6158,
            name: "Moscow, Russia"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1964-10-16T00:00:00'),
        title: "China",
        description: "China carries out its first test of an atomic bomb.",
        coord: {
            lat: 40.8125,
            long: 89.79,
            name: "Lop Nur Test Ground, Xinjiang China"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1966-01-17T00:00:00'),
        title: "An emergency in Spain",
        description: "An American B-52 accidentally crashes in Spain -- and with it four hydrogen bombs. The crash results in a 1 square mile plutonium contamination and a 3 month long search to recover a missing bomb which had fallen into the Mediterranean sea.",
        coord: {
            lat: 37.2492,
            long: -1.7969,
            name: "Almeria, Spain"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1967-06-17T00:00:00'),
        title: "China goes Thermonuclear",
        description: "China detonates its first thermonuclear bomb, and it is the fastest progression in history of fission to fusion development.",
        coord: {
            lat: 40.7439,
            long: 89.7750,
            name: "Lop Nur Test Ground, Xinjiang China"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1968-07-01T00:00:00'),
        title: "A Non-Proliferation treaty begins",
        description: "The Nuclear Non-Proliferation Treaty starts accepting nations to sign. Since 1968, 190 parties have joined this treaty.",
        coord: {
            lat: 38.8977,
            long: -77.0365,
            name: "Washington D.C."
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1968-08-24T00:00:00'),
        title: "France goes Thermonuclear",
        description: "France carries out its first thermonuclear test. It is the 5th nation to do so.",
        coord: {
            lat: -22.2433,
            long: -138.7250,
            name: "French Polynesia"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1970-03-05T00:00:00'),
        title: "Non-Proliferation Activates",
        description: "The Nuclear Non-Proliferation Treaty enters into effect. Under the agreement, nations could share nuclear technology peacefully with nations who had not yet developed atomic weaponry, but only under the promise that said nations would not develop atomic weapons.",
        coord: {
            lat: 38.8977,
            long: -77.0365,
            name: "Washington D.C."
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1972-05-26T00:00:00'),
        title: "Slow down the Arms Race",
        description: "The Anti-Ballistic Missile Treaty (ABM) and the Strategic Arms Limitation Treaty (SALT) are signed by President Nixon and Soviet Premier Leonid Brezhnev.",
        image: {
            src: "salt_abm.jpg",
            attribution: "White House Photo Office"
        },
        coord: {
            lat: 55.7961,
            long: 37.4786,
            name: "Moscow, Russia"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1974-05-18T00:00:00'),
        title: "India becomes a nuclear weapon state",
        description: "India tests its first nuclear device, named \"Smiling Buddha\", and calls it a \"peacefull nuclear device\" (PNE). Its the detonation carried out by a nation which was not a permanent member of the U.N. security council.",
        coord: {
            lat: 27.0945,
            long: 71.7537,
            name: "Rajasthan, India"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1978-04-07T00:00:00'),
        title: "Neutron Bomb",
        description: "President Jimmy Carter cancels production of a neutron bomb, a weapon with little explosion energy that instead uses neutron radiation.",
        coord: {
            lat: 38.8977,
            long: -77.0365,
            name: "Washington D.C."
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1979-03-28T00:00:00'),
        title: "Three Mile Island",
        description: "The Three Mile Island Nuclear Power Plant undergoes a (partial) nuclear meltdown in Pennsylvania. Although only small quantities of radioactive gases and iodine leak into the environment, it is considered the worst nuclear power accident in American history.",
        coord: {
            lat: 40.1539,
            long: -76.7247,
            name: "Dauphin County, PA"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1983-03-11T00:00:00'),
        title: "Pakistan",
        description: "Pakistan begins its own nuclear weapons program.",
        coord: {
            lat: 31.9663,
            long: 72.7026,
            name: "Punjab, Pakistan"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1983-09-26T00:00:00'),
        title: "Nuclear war narrowly avoided",
        description: "A soviet officer is alerted by an early-warning system that a nuclear-armed missile had just been launched by the United States. The officer, Stanislav Petrov, believes it to be a false alarm and prevents a retaliatory nuclear attack on the United States. Later investigation determines that the system was indeed malfunctioning.",
        coord: {
            lat: 55.0683,
            long: 37.0414,
            name: "Serpukhov-15 early warning command center, Russia"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1986-04-26T00:00:00'),
        title: "Chernobyl",
        description: "Chernobyl Nuclear Power Plant in Ukraine undergoes a catastrophic nuclear meltdown. Large quantities of radiation is released into Ukraine and spreads over much of Europe and the western Soviet Union.",
        image: {
            src: "chernobyl.jpg",
            attribution: "International Atomic Energy Agency"
        },
        coord: {
            lat: 51.3892,
            long: 30.0994,
            name: "Reactor 4, Chernobyl Nuclear Power Plant, by Pripyat, Ukraine"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1986-10-05T00:00:00'),
        title: "Israeli Nuclear Program",
        description: "The Israeli nuclear weapons program is revealed by the London Sunday Times investigation.",
        coord: {
            lat: 31.0013,
            long: 35.1445,
            name: "Negev Nuclear Research Center, Dimona, Israel"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1992-09-23T00:00:00'),
        title: "The last American test",
        description: "The United States carries out its last nuclear test in history, underground in Nevada.",
        coord: {
            lat: 37.0206,
            long: -115.9888,
            name: "Area 3, Nevada Test Site"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1998-05-11T00:00:00'),
        title: "India continues",
        description: "India tests its first nuclear bombs since 1974.",
        coord: {
            lat: 27.0789,
            long: 71.7222,
            name: "Rajasthan, India"
        }
    },
    {
        id: nextInt().toString(),
        date: new Date('1998-05-28T00:00:00'),
        title: "Pakistan responds",
        description: "In response to India's testing, Pakistan tests its first nuclear weapons, raising concerns about a nuclear conflict between the two nations.",
        coord: {
            lat: 28.7927,
            long: 64.9457,
            name: "Balochistan, Pakistan"
        },
        image: {
            src: "/pakistan_test_region.jpg"
        }
    },
]
