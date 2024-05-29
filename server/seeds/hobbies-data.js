/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("hobbies").del();
  await knex("hobbies").insert([
    {
      id: 1,
      hobby_name: "Photography",
      hobby_description:
        "Photography is the art, application, and practice of creating durable images by recording light, either electronically or chemically.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Photography",
    },
    {
      id: 2,
      hobby_name: "Gardening",
      hobby_description:
        "Gardening involves the cultivation and management of a garden, where various plants, flowers, and vegetables are grown.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Gardening",
    },
    {
      id: 3,
      hobby_name: "Cooking",
      hobby_description:
        "Cooking is the process of preparing food by combining, mixing, and heating ingredients.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Cooking",
    },
    {
      id: 4,
      hobby_name: "Painting",
      hobby_description:
        "Painting is the practice of applying paint, pigment, color, or other medium to a solid surface to create an artwork.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Painting",
    },
    {
      id: 5,
      hobby_name: "Hiking",
      hobby_description:
        "Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Hiking",
    },
    {
      id: 6,
      hobby_name: "Writing",
      hobby_description:
        "Writing involves composing text for various purposes, including creative storytelling, communication, and documentation.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Writing",
    },
    {
      id: 7,
      hobby_name: "Knitting",
      hobby_description:
        "Knitting is a method by which yarn is manipulated to create a textile or fabric, often used for creating clothing items.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Knitting",
    },
    {
      id: 8,
      hobby_name: "Cycling",
      hobby_description:
        "Cycling, also known as biking, is the use of bicycles for transport, recreation, exercise, or sport.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Cycling",
    },
    {
      id: 9,
      hobby_name: "Birdwatching",
      hobby_description:
        "Birdwatching is the observation of birds in their natural habitat as a recreational activity.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Birdwatching",
    },
    {
      id: 10,
      hobby_name: "Fishing",
      hobby_description:
        "Fishing is the activity of catching fish, either for food or as a sport.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Fishing",
    },
    {
      id: 11,
      hobby_name: "Traveling",
      hobby_description:
        "Traveling is the movement of people between distant geographical locations for leisure, business, or other purposes.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Travel",
    },
    {
      id: 12,
      hobby_name: "Pottery",
      hobby_description:
        "Pottery is the process of shaping and molding clay into various objects and then firing them at high temperatures.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Pottery",
    },
    {
      id: 13,
      hobby_name: "Reading",
      hobby_description:
        "Reading involves the decoding of written or printed symbols to understand the meaning of text.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Reading_(process)",
    },
    {
      id: 14,
      hobby_name: "Origami",
      hobby_description:
        "Origami is the art of paper folding, often associated with Japanese culture, creating various shapes and figures.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Origami",
    },
    {
      id: 15,
      hobby_name: "Woodworking",
      hobby_description:
        "Woodworking is the skill of making items from wood, including furniture and decorative objects.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Woodworking",
    },
    {
      id: 16,
      hobby_name: "Yoga",
      hobby_description:
        "Yoga is a group of physical, mental, and spiritual practices aimed at achieving balance and relaxation.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Yoga",
    },
    {
      id: 17,
      hobby_name: "Dancing",
      hobby_description:
        "Dancing is the art of moving the body rhythmically, usually to music, for expressing emotions or storytelling.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Dance",
    },
    {
      id: 18,
      hobby_name: "Scrapbooking",
      hobby_description:
        "Scrapbooking involves creating decorative albums of photos, memorabilia, and journaling.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Scrapbooking",
    },
    {
      id: 19,
      hobby_name: "Model Building",
      hobby_description:
        "Model building is the construction of physical models representing real-world objects, often for display or hobby purposes.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Model_building",
    },
    {
      id: 20,
      hobby_name: "Astronomy",
      hobby_description:
        "Astronomy is the scientific study of celestial objects, space, and the universe as a whole.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Astronomy",
    },
    {
      id: 21,
      hobby_name: "Camping",
      hobby_description:
        "Camping involves spending time outdoors, often overnight, in a shelter such as a tent or a camper.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Camping",
    },
    {
      id: 22,
      hobby_name: "Swimming",
      hobby_description:
        "Swimming is the self-propulsion of a person through water, often as a form of recreation, sport, or exercise.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Swimming",
    },
    {
      id: 23,
      hobby_name: "Juggling",
      hobby_description:
        "Juggling is the skill of manipulating objects, typically balls or clubs, in a continuous pattern.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Juggling",
    },
    {
      id: 24,
      hobby_name: "Calligraphy",
      hobby_description:
        "Calligraphy is the art of beautiful handwriting, using special pens or brushes to create decorative text.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Calligraphy",
    },
    {
      id: 25,
      hobby_name: "Robotics",
      hobby_description:
        "Robotics involves the design, construction, and operation of robots for various applications, including education and entertainment.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Robotics",
    },
    {
      id: 26,
      hobby_name: "Genealogy",
      hobby_description:
        "Genealogy is the study of family ancestries and histories, often involving the use of historical records and DNA testing.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Genealogy",
    },
    {
      id: 27,
      hobby_name: "Metalworking",
      hobby_description:
        "Metalworking is the process of working with metals to create individual parts, assemblies, or large-scale structures.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Metalworking",
    },
    {
      id: 28,
      hobby_name: "Stargazing",
      hobby_description:
        "Stargazing is the activity of observing celestial objects in the night sky, often using telescopes or binoculars.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Astronomical_observing",
    },
    {
      id: 29,
      hobby_name: "Crossword Puzzles",
      hobby_description:
        "Crossword puzzles are word games that involve filling a grid with words based on given clues.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Crossword",
    },
    {
      id: 30,
      hobby_name: "Running",
      hobby_description:
        "Running is a method of terrestrial locomotion allowing humans and animals to move rapidly on foot.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Running",
    },
    {
      id: 31,
      hobby_name: "Magic Tricks",
      hobby_description:
        "Magic tricks involve performing illusions or sleight-of-hand techniques to entertain an audience.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Magic_(illusion)",
    },
    {
      id: 32,
      hobby_name: "Archery",
      hobby_description:
        "Archery is the sport, practice, or skill of using a bow to shoot arrows.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Archery",
    },
    {
      id: 33,
      hobby_name: "Rock Climbing",
      hobby_description:
        "Rock climbing involves climbing up, down, or across natural rock formations or artificial rock walls.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Rock_climbing",
    },
    {
      id: 34,
      hobby_name: "Sailing",
      hobby_description:
        "Sailing is the art of navigating a boat or ship using sails, often for recreation or sport.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Sailing",
    },
    {
      id: 35,
      hobby_name: "Chess",
      hobby_description:
        "Chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8×8 grid.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Chess",
    },
    {
      id: 36,
      hobby_name: "Martial Arts",
      hobby_description:
        "Martial arts are codified systems and traditions of combat practiced for various reasons, including self-defense and physical fitness.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Martial_arts",
    },
    {
      id: 37,
      hobby_name: "Scuba Diving",
      hobby_description:
        "Scuba diving is a mode of underwater diving where the diver uses a self-contained underwater breathing apparatus (scuba) to breathe underwater.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Scuba_diving",
    },
    {
      id: 38,
      hobby_name: "Ice Skating",
      hobby_description:
        "Ice skating is the activity of moving on ice by using ice skates.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Ice_skating",
    },
    {
      id: 39,
      hobby_name: "Kite Flying",
      hobby_description:
        "Kite flying is an activity where a kite is flown in the air, usually for recreation or competitive sport.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Kite_flying",
    },
    {
      id: 40,
      hobby_name: "Board Games",
      hobby_description:
        "Board games are tabletop games that typically involve pieces or counters moved or placed on a pre-marked surface or 'board.'",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Board_game",
    },
    {
      id: 41,
      hobby_name: "Leathercraft",
      hobby_description:
        "Leathercraft involves creating items from leather by cutting, shaping, and assembling.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Leathercraft",
    },
    {
      id: 42,
      hobby_name: "Camping",
      hobby_description:
        "Camping involves spending time outdoors, often overnight, in a shelter such as a tent or a camper.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Camping",
    },
    {
      id: 43,
      hobby_name: "Baking",
      hobby_description:
        "Baking is a method of cooking food that uses prolonged dry heat, typically in an oven.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Baking",
    },
    {
      id: 44,
      hobby_name: "Guitar Playing",
      hobby_description:
        "Guitar playing involves the use of a guitar to produce music, whether acoustic, electric, or classical.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Guitar",
    },
    {
      id: 45,
      hobby_name: "Philately",
      hobby_description:
        "Philately is the study and collection of postage stamps and related objects.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Philately",
    },
    {
      id: 46,
      hobby_name: "Quilting",
      hobby_description:
        "Quilting involves sewing together layers of fabric to create a quilted textile, often for bedding.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Quilting",
    },
    {
      id: 47,
      hobby_name: "Sculpting",
      hobby_description:
        "Sculpting is the art of shaping materials such as clay, stone, or metal into three-dimensional forms.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Sculpture",
    },
    {
      id: 48,
      hobby_name: "Golf",
      hobby_description:
        "Golf is a sport in which players use clubs to hit balls into a series of holes on a course in as few strokes as possible.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Golf",
    },
    {
      id: 49,
      hobby_name: "Astronomy",
      hobby_description:
        "Astronomy is the scientific study of celestial objects, space, and the universe as a whole.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Astronomy",
    },
    {
      id: 50,
      hobby_name: "Fly Fishing",
      hobby_description:
        "Fly fishing is an angling method that uses a lightweight lure, called an artificial fly, to catch fish.",
      image: "",
      hobby_wiki: "https://en.wikipedia.org/wiki/Fly_fishing",
    },
  ]);
};
