const db = require("../app/models");

const majors = [
  {
    program_name: "Business Analytics",
  }
];

const businessCourses = [
  {
    course_name: "FSEM 1111",
    majorId: 1,
    type: "University Common Curriculum Requirement",
    credits: 4,
    pre_req: "None"
  },
  {
    course_name: "WRIT 1122",
    majorId: 1,
    type: "University Common Curriculum Requirement",
    credits: 4,
    pre_req: "FSEM"
  },
  {
    course_name: "WRIT 1133",
    majorId: 1, 
    type: "University Common Curriculum Requirement",
    credits: 4,
    pre_req: "WRIT 1122"
  },
  {
    course_name: "Foreign Language Sequence",  majorId: 1,
    type: "University Common Curriculum Requirement", 
    credits: "4-12", 
    pre_req: "N/A"
  },
  {
    course_name: "AI Society (two different disciplines)",
    majorId: 1,
    type: "University Common Curriculum Requirement", 
    credits: "8", 
    pre_req: "None"
  },
  {
    course_name: "MATH 1200 or 1951 (fulfills AI Natural)",
    majorId: 1,
    type: "University Common Curriculum Requirement",
    credits: "4", 
    pre_req: "None"
  },
  {
    course_name: "ECON 1020 (fulfills first SI Society", 
    majorId: 1,
    type: "University Common Curriculum Requirement", 
    credits: "4", 
    pre_req: "None"
  },
  {
    course_name: "SI Society", 
    majorId: 1,
    type: "University Common Curriculum Requirement", 
    credits: "4", 
    pre_req: "None"
  },
  {
    course_name: "SI Natural Sequence",
    majorId: 1, 
    type: "University Common Curriculum Requirement", 
    credits: "12", 
    pre_req: "None"
  },
  {
    course_name: "ASEM", 
    majorId: 1, 
    type: "University Common Curriculum Requirement", 
    credits: "4", 
    pre_req: "Junior Standing"
  }, 
  {
    course_name: "BUS 1440", 
    majorId: 1, 
    type: "Business Core Requirement", 
    credits: "4", 
    pre_req: "None"
  },
  {
    course_name: "BUS 1099", 
    majorId: 1, 
    type: "Business Core Requirement", 
    credits: "0", 
    pre_req: "None"
  },
  {
    course_name: "INFO 1010", 
    majorId: 1, 
    type: "Business Core Requirement", 
    credits: "4", 
    pre_req: "None"
  },
  {
    course_name: "INFO 1020", 
    majorId: 1, 
    type: "Business Core Requirement", 
    credits: "4", 
    pre_req: "MATH 1200 & INFO 1010"
  },
  {
    course_name: "MGMT 2100", 
    majorId: 1, 
    type: "Business Core Requirement", 
    credits: "4", 
    pre_req: "BUS 1440"
  },
  {
    course_name: "MKTG 2800", 
    majorId: 1, 
    type: "Business Core Requirement", 
    credits: "4", 
    pre_req: "MGMT 2100, INFO 1020, & Sophomore Standing"
  },
  {
    course_name: "LGST 2000", 
    majorId: 1, 
    type: "Business Core Requirement", 
    credits: "4", 
    pre_req: "None"
  },
  {
    course_name: "INFO 2020", 
    majorId: 1, 
    type: "Business Core Requirement",
    credits: "4", 
    pre_req: "INFO 1020 & Excel"
  },
  {
    course_name: "ACTG 2200", 
    majorId: 1, 
    type: "Business Core Requirement", 
    credits: "4", 
    pre_req: "INFO 1010, MATH 1200, ECON 1020, & Excel"
  },
  {
    course_name: "BUS 2099", 
    majorId: 1,
    type: "Business Core Requirement", 
    credits: "0", 
    pre_req: "Admission to Daniels & BUS 1099"
  },
  {
    course_name: "ACTG 2300", 
    majorId: 1,
    type: "Business Core Requirement", 
    credits: "4", 
    pre_req: "Admission to Daniels & ACTG 2200"
  },
  {
    course_name: "FIN 2800", 
    majorId: 1,
    type: "Business Core Requirement", 
    credits: "4", 
    pre_req: "Admission to Daniels & ACTG 2200"
  },
  {
    course_name: "BUS 3000", 
    majorId: 1,
    type: "Business Core Requirement", 
    credits: "4", 
    pre_req: "Admission to Daniels, BUS 1099, Word, & PPT"
  },
  {
    course_name: "MGMT 3000", 
    majorId: 1, 
    type: "Business Core Requirement", 
    credits: "4", 
    pre_req: "Admission to Daniels, All Microsoft Certifications, MKTG 2800, LGST 2000, INFO 2020, ACTG 2300, FIN 2800, BUS 2099, & BUS 3000"
  },
  {
    course_name: "BUS 3099", 
    majorId: 1, 
    type: "Business Core Requirement", 
    credits: "0", 
    pre_req: "Admission to Daniels & BUS 2099"
  },
  {
    course_name: "BUS 3800", 
    majorId: 1, 
    type: "Business Core Requirement", 
    credits: "4",
    pre_req: "Admission to Daniels, BUS 3099, & MGMT 3000"
  },
  {
    course_name: "INFO 3100", 
    majorId: 1, 
    type: "Business Analytics Major Requirement", 
    credits: "4", 
    pre_req: "INFO 2020"
  },
  {
    course_name: "INFO 3140", 
    majorId: 1, 
    type: "Business Analytics Major Requirement", 
    credits: "4", 
    pre_req: "INFO 2020 & INFO 3100 (can be co-req)"
  },
  {
    course_name: "INFO 3200", 
    majorId: 1, 
    type: "Business Analytics Major Requirement", 
    credits: "4", pre_req: "INFO 2020"
  },
  {
    course_name: "INFO 3240", 
    majorId: 1, 
    type: "Business Analytics Major Requirement", 
    credits: "4", 
    pre_req: "INFO 3140"
  },
  {
    course_name: "INFO 3300", 
    majorId: 1, 
    type: "Business Analytics Major Requirement", 
    credits: "4", 
    pre_req: "INFO 3240"
  },
  {
    course_name: "INFO 3340", 
    majorId: 1,
    type: "Business Analytics Major Requirement", 
    credits: "4", 
    pre_req: "INFO 2020"
  },
  {
    course_name: "INFO 3400", 
    majorId: 1, 
    type: "Business Analytics Major Requirement", 
    credits: "4", 
    pre_req: "INFO 3200"
  },
  {
    course_name: "INFO 3440", 
    majorId: 1, 
    type: "Business Analytics Major Requirement", 
    credits: "4", 
    pre_req: "INFO 2020"
  }, 
  {
    course_name: "INFO 3500", 
    majorId: 1, 
    type: "Business Analytics Major Requirement", 
    credits: "4", 
    pre_req: "All other major courses"
  },
  {
    course_name: "INFO 3110",
    majorId: 1, 
    type: "Business Analytics Major Elective (only 8 credits needed)", 
    credits: "4", 
    pre_req: "INFO 2020"
  },
  {
    course_name: "INFO 3350", 
    majorId: 1, 
    type: "Business Analytics Major Elective (only 8 credits needed)", 
    credits: "4", 
    pre_req: "INFO 2020"
  },
  {
    course_name: "INFO 3477", 
    majorId: 1, 
    type: "Business Analytics Major Elective (only 8 credits needed)", 
    credits: "4", 
    pre_req: "INFO 3140"
  },
  {
    course_name: "INFO 3700", 
    majorId: 1, 
    type: "Business Analytics Major Elective (only 8 credits needed)", 
    credits: "4", 
    pre_req: "None"
  }, 
  {
    course_name: "INFO 3980 (Note: Maximum of 4 internship hours will count toward the 8 hours of electives required)", 
    majorId: 1, 
    type: "Business Analytics Major Elective (only 8 credits needed)", 
    credits: "4", 
    pre_req: "None"
  },
  {
    course_name: "MKTG 2930", 
    majorId: 1,
    type: "Business Analytics Major Elective (only 8 credits needed)", 
    credits: "4", 
    pre_req: "MKTG 2800 & INFO 1020"
  },
  {
    course_name: "MKTG 3485 (Note: BIA majors should choose no more than 1 MKTG prefix class for major elective requirements", 
    majorId: 1,
    type: "Business Analytics Major Elective (only 8 credits needed)", 
    credits: "4", 
    pre_req: "MKTG 2800"
  },
  {
    course_name: "INTZ 2501 (if studying abroad)",
    majorId: 1, 
    type: "General Elective (Including Minors)", 
    credits: "2", 
    pre_req: "None"
  },
  {
    course_name: "International Experience Course (if not studying abroad)", 
    majorId: 1, 
    type: "General Elective (Including Minors)", 
    credits: "4", 
    pre_req: "None"
  }
];

const userDemo = [{
  email: "test@gmail.com",
  password: "test123",
  majorId: 1
}];

module.exports = {majors, businessCourses, userDemo}