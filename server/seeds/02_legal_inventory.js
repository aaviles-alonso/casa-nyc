/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('legal').del()
  await knex('legal').insert([

    {
      id: "61824793",
      name: "Rasoulpour Torregoza PLLC",
      address: "276 5th Ave Suite 704, New York, NY 10001",
      phone: "(888) 445-7066",
      zipcode: "10001",
      link: "https://www.rasoulpourtorregoza.com/",
    },
    {
      id: "93485176",
      name: "J & K Law",
      address: "30 Broad Street 14th Floor, New York, NY 10004",
      phone: " (212) 390-1024",
      zipcode: "10004",
      link: "https://www.jklaw.com/",
    },
    {
      id: "78513926",
      name: "Rebecca Sosa of Sosa Law",
      address: "43-01 21st St, Queens, NY 11101",
      phone: "(212) 988-7770",
      zipcode: "11101",
      link: "http://www.sosalaw.nyc/",
    },
    {
      id: "29134578",
      name: "The Law Office of Cheryl R. David",
      address: "299 Broadway STE 706, New York, NY 10007",
      phone: "(516) 882-6687",
      zipcode: "10007",
      link: "https://www.cheryldavidlaw.com/",
    },
    {
      id: "57349821",
      name: "Claudia Slovinsky and Associates, PLLC",
      address: "233 Broadway # 2005, New York, NY 10279",
      phone: "(212) 925-0101",
      zipcode: "10279",
      link: "http://www.slovinsky.com/",
    },
    {
      id: "86192473",
      name: "Murga and Hunter LLP",
      address: "1740 Broadway 15th floor, New York, NY 10019",
      phone: "(212) 334-2397",
      zipcode: "10019",
      link: "https://murgahunter.com/",
    },
    {
      id: "42769531",
      name: "Law Office of Craig Relles",
      address: "12 Water St, White Plains, NY 10601",
      phone: "(914) 919-9040",
      zipcode: "10601",
      link: "https://www.crelleslaw.com/",
    },
    {
      id: "59318624",
      name: "Terezakis Law Firm, PLLC",
      address: "170 Old Country Rd Suite 508, Mineola, NY 11501",
      phone: "(516) 742-3838",
      zipcode: "11501",
      link: "https://www.nassaudefender.com/",
    },

  ]);
};
