USE `sequelize_program_library`;

-- Business Analytics Course Curriculum --
INSERT INTO Courses (name, degree_program, type, credits, pre_req)
VALUES ("FSEM 1111", "Business Analytics", "University Common Curriculum Requirement", "4", "None"), 
("WRIT 1122", "Business Analytics", "University Common Curriculum Requirement", "4", "FSEM"),
("WRIT 1133", "Business Analytics", "University Common Curriculum Requirement", "4", "WRIT 1122"),
("Foreign Language Sequence", "Business Analytics", "University Common Curriculum Requirement", "4-12", "None"),
("AI Society (two different disciplines)", "Business Analytics", "University Common Curriculum Requirement", "8", "None"),
("MATH 1200 or 1951 (fulfills AI Natural)", "Business Analytics", "University Common Curriculum Requirement", "4", "None"),
("ECON 1020 (fulfills first SI Society", "Business Analytics", "University Common Curriculum Requirement", "4", "None"),
("SI Society", "Business Analytics", "University Common Curriculum Requirement", "4", "None"),
("SI Natural Sequence", "Business Analytics", "University Common Curriculum Requirement", "12", "None"),
("ASEM", "Business Analytics", "University Common Curriculum Requirement", "4", "Junior Standing"),
("BUS 1440", "Business Analytics", "Business Core Requirement", "4", "None"),
("BUS 1099", "Business Analytics", "Business Core Requirement", "0", "None"),
("INFO 1010", "Business Analytics", "Business Core Requirement", "4", "None"),
("INFO 1020", "Business Analytics", "Business Core Requirement", "4", "MATH 1200 & INFO 1010"),
("MGMT 2100", "Business Analytics", "Business Core Requirement", "4", "BUS 1440"),
("MKTG 2800", "Business Analytics", "Business Core Requirement", "4", "MGMT 2100, INFO 1020, & Sophomore Standing"),
("LGST 2000", "Business Analytics", "Business Core Requirement", "4", "None"),
("INFO 2020", "Business Analytics", "Business Core Requirement", "4", "INFO 1020 & Excel"),
("ACTG 2200", "Business Analytics", "Business Core Requirement", "4", "INFO 1010, MATH 1200, ECON 1020, & Excel"),
("BUS 2099", "Business Analytics", "Business Core Requirement", "0", "Admission to Daniels & BUS 1099"),
("ACTG 2300", "Business Analytics", "Business Core Requirement", "4", "Admission to Daniels & ACTG 2200"),
("FIN 2800", "Business Analytics", "Business Core Requirement", "4", "Admission to Daniels & ACTG 2200"),
("BUS 3000", "Business Analytics", "Business Core Requirement", "4", "Admission to Daniels, BUS 1099, Word, & PPT"),
("MGMT 3000", "Business Analytics", "Business Core Requirement", "4", "Admission to Daniels, All Microsoft Certifications, MKTG 2800, LGST 2000, INFO 2020, ACTG 2300, FIN 2800, BUS 2099, & BUS 3000"),
("BUS 3099", "Business Analytics", "Business Core Requirement", "0", "Admission to Daniels & BUS 2099"),
("BUS 3800", "Business Analytics", "Business Core Requirement", "4", "Admission to Daniels, BUS 3099, & MGMT 3000"),
("INFO 3100", "Business Analytics", "Business Analytics Major Requirement", "4", "INFO 2020"),
("INFO 3140", "Business Analytics", "Business Analytics Major Requirement", "4", "INFO 2020 & INFO 3100 (can be co-req)"),
("INFO 3200", "Business Analytics", "Business Analytics Major Requirement", "4", "INFO 2020"),
("INFO 3240", "Business Analytics", "Business Analytics Major Requirement", "4", "INFO 3140"),
("INFO 3300", "Business Analytics", "Business Analytics Major Requirement", "4", "INFO 3240"),
("INFO 3340", "Business Analytics", "Business Analytics Major Requirement", "4", "INFO 2020"),
("INFO 3400", "Business Analytics", "Business Analytics Major Requirement", "4", "INFO 3200"),
("INFO 3440", "Business Analytics", "Business Analytics Major Requirement", "4", "INFO 2020"),
("INFO 3500", "Business Analytics", "Business Analytics Major Requirement", "4", "All other major courses"),
("INFO 3110", "Business Analytics", "Business Analytics Major Elective (only 8 credits needed)", "4", "INFO 2020"),
("INFO 3350", "Business Analytics", "Business Analytics Major Elective (only 8 credits needed)", "4", "INFO 2020"),
("INFO 3477", "Business Analytics", "Business Analytics Major Elective (only 8 credits needed)", "4", "INFO 3140"),
("INFO 3700", "Business Analytics", "Business Analytics Major Elective (only 8 credits needed)", "4", "None"),
("INFO 3980 (Note: Maximum of 4 internship hours will count toward the 8 hours of electives required)", "Business Analytics", "Business Analytics Major Elective (only 8 credits needed)", "4", "None"),
("MKTG 2930", "Business Analytics", "Business Analytics Major Elective (only 8 credits needed)", "4", "MKTG 2800 & INFO 1020"),
("MKTG 3485 (Note: BIA majors should choose no more than 1 MKTG prefix class for major elective requirements", "Business Analytics", "Business Analytics Major Elective (only 8 credits needed)", "4", "MKTG 2800"),
("INTZ 2501 (if studying abroad)", "Business Analytics", "General Elective (Including Minors)", "2", "None"),
("International Experience Course (if not studying abroad)", "Business Analytics", "General Elective (Including Minors)", "4", "None");

-- Computer Science Course Curriculum -- 
