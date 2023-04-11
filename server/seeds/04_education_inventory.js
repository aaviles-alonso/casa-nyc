/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('education').del()
  await knex('education').insert([
    {
      id: "41769253",
      name: "Columbia University in the City of New York",
      address: "3078 Broadway · New York, NY 10027",
      phone: "(212) 854-1492",
      zipcode: "10027",
      description: "Columbia University offers classes for free to all residents living in the five boroughs. Depending on the level of your English, the classes are available in different levels that range from beginning to advanced. You can also choose to participate in courses to improve your pronunciation.",
      class_type: "ESOL, TASC, CAT preparation Courses",
      link: "https://undergrad.admissions.columbia.edu/studentgroup/jobs-and-education-empowerment-project-tasc-esol-and-cat-prep",
    },

    {
      id: "32657418",
      name: "Hostos Community College:Adult Learning Center",
      address: "560 Exterior Street, Bronx, NY 10451",
      phone: "(718) 514-7534",
      zipcode: "10451",
      description: "The mission of the Hostos Adult Learning Center (ALC) is to provide the academic skills, job training and support services needed for adults and young adults to achieve more productive lives for themselves and their families.We invite you to join the thousands of others who have enjoyed the supportive atmosphere and academic excellence that have made the ALC such a special place to learn.",
      class_type: "ESOL, TASC",
      link: "https://www.hostos.cuny.edu/Administrative-Offices/Division-of-Continuing-Education-Workforce-Develop",

    },
    {
      id: "98243671",
      name: "Lehman College Adult Learning Center (ALC)",
      address: "250 Bedford Park Boulevard West, Old Gym, Room 019,Bronx, NY 10468",
      phone: "(718) 960-8807",
      zipcode: "10468",
      description: "The ALC has long been dedicated to meeting the literacy and civics-education needs of adult learners in the Bronx, including those with disabilities. Our students represent a mix of Latino, African, Asian, South American and European heritages; many are recent immigrants. The ALC’s flexibly scheduled morning and evening classes combine educational, community and workforce-development resources so that participants can apply what they learn to their occupational and personal goals, while overcoming critical barriers to employment.",
      class_type: "ESOL TASC, ELA, GED",
      link: "https://www.lehman.edu/institute-literacy-studies/alc/index.php",

    },
    {
      id: "75986142",
      name: "Brooklyn College Adult Literacy Program",
      address: "2900 Bedford Avenue, Brooklyn, NY 11210",
      phone: "(718) 951-4117",
      zipcode: "11210",
      description: "The Brooklyn College Adult Literacy Program provides free classes to all New York State residents who are at least 18 years old.",
      class_type: "ESOL, TASC, GED",
      link: "http://www.brooklyn.cuny.edu/web/about/offices/literacy.php",

    },
    {
      id: "18492736",
      name: "Kingsborough Community College Continuing Education",
      address: "2001 Oriental Boulevard, Brooklyn, NY 11235",
      phone: "(718) 368-4870",
      zipcode: "11235",
      description: "CLIP (CUNY Language Immersion Program) is a theme-based program that helps English as a Second Language learners prepare for university study. The emphasis of the program is on reading and writing for academic purposes.",
      class_type: "ESOL, TASC, GED",
      link: "https://www.kbcc.cuny.edu/ce/divisional.html",

    },

    {
      id: "64781239",
      name: "Medgar Evers College",
      address: "1534 Bedford Avenue,Brooklyn, NY 11216",
      phone: "(718) 804-8880",
      zipcode: "11216",
      description: "Adult and Continuing Education (ACE) at Medgar Evers College has been providing professional and personal development services to the Brooklyn community for more than thirty years.",
      class_type: "ESOL, Literacy, GED",
      link: "https://mec.catalog.cuny.edu/school-of-professional-and-community-development/adult-and-continuing-education",

    },

    {
      id: "29173684",
      name: "New York City College of Technology-Adult Learning Center",
      address: "300 Jay St, Brooklyn, NY 11201",
      phone: "718-552-1140",
      zipcode: "11201",
      description: "Our students come from many countries but are united in their desire to succeed- to raise families, get better jobs, improve their skills, earn a high school equivalency diploma or go to college. City Tech AEP students enroll in a variety of classes",
      class_type: "ESOL, HSC, TASC",
      link: "http://www.citytech.cuny.edu/continuinged/",

    },

    {
      id: "53849627",
      name: "Borough of Community College-Adult Basic Education Programs",
      address: "25 Broadway, 8th floor, New York, NY 10004",
      phone: "(212) 346-8890",
      zipcode: "10004",
      description: "If you are interested in getting your high school equivalency diploma, join this program. We will help you pass the GED exam as well as prepare you for college.",
      class_type: "ESOL, GED",
      link: "https://www.bmcc.cuny.edu/ce/hse-ged-and-esol-programs/",

    },

    {
      id: "86142739",
      name: "City of New York-Continuing and Professional Studies",
      address: "259 Convent Avenue, New York, NY 10031",
      phone: "(212) 650-7312",
      zipcode: "10031",
      description: "The program helps non-native English speakers develop proficiency in grammar, reading, listening, speaking and writing skills as well as building students skills for success in college and the workplace. The program also provides ongoing advisory services to students.",
      class_type: "ESOL, GED",
      link: "https://www.ccny.cuny.edu/cps/esl",

    },

    {
      id: "31924765",
      name: "Hunter College SPELL Program",
      address: "695 Park Avenue, New York, NY 10021",
      phone: "(212) 772-4620",
      zipcode: "10021",
      description: "The Hunter College School of Education relies on strong partnerships in local schools and agencies to enhance the experience of our students. We believe our work is built on the strengths and assets of the dynamic urban community in which we live. The Hunter College School of Education offers two English as a Second Language (ESL) classes on Saturdays.",
      class_type: "ESOL",
      link: "https://education.hunter.cuny.edu/about/centers-and-initiatives/saturday-english-as-a-second-language-esl-classes/",

    },
    {
      id: "27491638",
      name: "LaGuardia Community College-Center for Immigration Education and Training",
      address: "31-10 Thomson Avenue, Long Island City, NY 11101",
      phone: "718-482-5460",
      zipcode: "11101",
      description: "The Center for Immigrant Education and Training (CIET) at LaGuardia Community College offers free, contextualized English classes and job training programs, along with career counseling and case management services to low-income Queens immigrants and their families. Our goal is to support our students in becoming lifelong learners and independent, contributing citizens of New York City.",
      class_type: "ESOL, GED",
      link: "https://www.laguardia.edu/ce/pages/english-language-learning/center-for-immigrant-education-and-training/",
    },
    {
      id: "93584716",
      name: "York College Learning Center",
      address: "94-43 160th Street, Jamaica, NY 1145",
      phone: "(718) 262-3861",
      zipcode: "11451",
      description: "The York College Learning Center offers foundational education and training, as well as advisement and referral services that expand opportunities for marginalized adults to achieve increased independence, realize life goals, and become active in civic and workplace responsibilities as individuals, parents, and members of the broader community.",
      class_type: "ESOL,TASC",
      link: "https://www.york.cuny.edu/administrative/economic-and-workforce-development/learning-center/about",
    },
    {
      id: "57283149",
      name: "College of Staten Island- Adult Literacy and Language Program",
      address: "2800 Victory Boulevard, Staten Island, New York 10314",
      phone: "(718) 982-3996",
      zipcode: "10314",
      description: "This program manages the College of Staten Island High School Equivalency (HSE) Test Center, which offers the test in English or Spanish, and in paper-based and computer-based versions. HSE classes are offered in Math, English, Social Studies, and Science. ALLP also offers beginner and intermediate levels of English as a Second Language (ESL) classes. All of our students receive supportive advisement for college and career planning.",
      class_type: "ESOL, GED, TASC",
      link: "https://www.csi.cuny.edu/about-csi/president-leadership/administration/office-vp-economic-development-and-community-partnerships/office-community-educational-engagement/csis-literacy-language-programs/adult-literacy-and-language-program",
    }

  ]);
};
