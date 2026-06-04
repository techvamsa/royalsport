import clientCourseContent from "./clientCourseContent.json";

const personalTrainerCourseImage =
  "https://royalsportsnfitness.com/static/media/fitness1New.bcc4962ea57c0b5dfea5.jpeg";
const  dietNutritionCourseImage=
  "https://royalsportsnfitness.com/static/media/fitness3New.5f031631aa2f77de3256.jpeg";
const nutritionCourseImage =
  "https://royalsportsnfitness.com/static/media/RSF.2b94c4d5881e8b6d535b.png";
const academyTrainingImage = "/imgs/equipment/Fitness-Academy.jpg";
const academyGymImage = "/imgs/fitness-bg.webp";

const staticMediaImage = (path) =>
  `https://royalsportsnfitness.com${path.replace(/ /g, "%20")}`;

const clientCourseByCode = Object.fromEntries(
  clientCourseContent.courses.map((course) => [course.courseCode, course])
);

const formatCourseMode = (mode) => (Array.isArray(mode) ? mode.join(" / ") : mode);

const normalizeChapterTopics = (topics) => {
  if (Array.isArray(topics)) return topics;

  return Object.entries(topics).flatMap(([group, values]) => [
    group.charAt(0).toUpperCase() + group.slice(1),
    ...values,
  ]);
};

const getClientCourseOverride = (courseCode) => {
  const course = clientCourseByCode[courseCode];

  if (!course) return {};

  return {
    title: course.courseName,
    shortTitle: course.courseCode,
    tag: course.courseCode,
    eyebrow: `${course.courseCode} Course`,
    summary: course.overview,
    cardSummary: course.overview,
    description: course.overview,
    overviewTitle: `${course.courseName} overview`,
    overview: [course.overview],
    duration: course.totalHours
      ? `${course.duration} (${course.totalHours} Hours)`
      : course.duration,
    mode: course.mode,
    classes: formatCourseMode(course.mode),
    eligibility: course.eligibility,
    assessment: course.assessment,
    examFormat: course.assessment,
    modulesTitle: "Complete syllabus chapters and topics.",
    points: course.chapters.slice(0, 4).map((chapter) => chapter.title),
    modules: course.chapters.map((chapter) => ({
      title: chapter.title,
      topics: normalizeChapterTopics(chapter.topics),
    })),
    benefitsKicker: "Career Opportunities",
    benefitsTitle: "Career Opportunities",
    benefits: course.careerOpportunities,
    certification: course.certification,
  };
};

const baseCourseDetails = [
  {
    slug: "certified-personal-training-cpt",
    title: "Personal Training Certification",
    shortTitle: "Personal Trainer Course",
    tag: "CPT",
    image: personalTrainerCourseImage,
    eyebrow: "Online Personal Training Certification",
    summary:
      "Become a certified personal trainer with a complete online course covering exercise science, client assessment, programming, nutrition, safety, and business skills.",
    cardSummary:
      "A complete online personal trainer certification covering anatomy, physiology, nutrition, assessment, exercise programming, safety, business skills, and final certification.",
    description:
      "Our certified personal trainer program begins with a deep understanding of human anatomy and physiology, enabling you to create tailored exercise plans for each client based on their abilities and goals.",
    overview: [
      "Our certified personal trainer program begins with a deep understanding of human anatomy and physiology, which enables you to create tailored exercise plans for each client based on their abilities and goals. We also cover essential topics such as nutrition and injury prevention, ensuring that you have a holistic approach to training your clients.",
      "One of the great things about our program is that it is entirely online, making it very convenient for those with busy schedules. Our curriculum is self-paced, meaning you can complete the program at your own pace, taking as much time as you need. We've developed a comprehensive learning platform with in-depth tutorials, educational videos, and quizzes to aid learning.",
      "We also include business training, which helps you start your own personal training practice. We provide the tools and resources you need to create a sustainable business, from making effective marketing campaigns to managing your finances.",
      "With our certification, you open yourself to endless fitness industry possibilities. You can work at a gym, start a personal training business, or even work for celebrities and professional athletes.",
      "At Royal Sports and Fitness, we're passionate about helping people achieve their dreams. We have helped countless individuals become certified personal trainers and achieve their desired success.",
    ],
    duration: "8 Weeks",
    classes: "32 Classes",
    eligibility:
      "12th pass students, fitness enthusiasts, athletes, gym trainers, and anyone planning to start a personal training career.",
    examFormat:
      "Theory MCQ exam, practical exercise demonstration, client-program design assignment, and viva.",
    points: [
      "Exercise science and human anatomy",
      "Client assessment and goal setting",
      "Exercise programming, safety, and technique",
      "Professional business and marketing skills",
    ],
    benefitsTitle: "Benefits of Personal Trainer Course",
    benefits: [
      {
        title: "In-Depth Knowledge and Expertise",
        text: "A personal trainer course offers in-depth knowledge and expertise to individuals who want to pursue a career in personal training. The system provides a comprehensive understanding of human anatomy, physiology, and nutrition, which can help trainers design effective training programs.",
      },
      {
        title: "Career Prospects",
        text: "With the increasing demand for personal trainers, several career prospects are available for individuals who complete a personal trainer course. Upon completion of the course, individuals can obtain certification, an essential requirement for starting a career as a personal trainer.",
      },
      {
        title: "Personal Growth",
        text: "Pursuing a personal trainer course can also offer personal growth. The procedure can help individuals develop discipline, patience, resilience, better communication skills, emotional intelligence, and empathy.",
      },
    ],
    modules: [
      {
        title: "Introduction to the Field of Fitness / Personal Training",
        image: staticMediaImage("/static/media/Module1.ccb46af8356bead90e27.jpg"),
        topics: [
          "Importance and History of Fitness Industry and Personal Training",
          "Scope of Fitness Industry",
          "Types of Businesses in Fitness Industry",
          "Rules, Regulations, Responsibilities and Qualities of Personal Trainer",
          "Eligibility and Scope of Work",
          "Marketing Ideas for Personal Trainers",
        ],
      },
      {
        title: "Exercise Science",
        image: staticMediaImage("/static/media/2.6191a4024c3f9cb941eb.png"),
        topics: [
          "General Anatomy and Skeletal System",
          "Neuromuscular Anatomy and Physiology",
          "Energy Systems",
          "Muscular Anatomy and Physiology",
          "Cardiorespiratory Anatomy and Physiology",
          "Biomechanics",
        ],
      },
      {
        title: "Basic Nutrition",
        image: staticMediaImage("/static/media/3.fb09de57dc623c86f5a7.png"),
        topics: [
          "Macronutrients and Micronutrients",
          "Energy Balance and Weight Management",
          "Nutritional Needs for Different Populations",
          "Sports Nutrition",
          "Supplements and Ergogenic Aids",
        ],
      },
      {
        title: "Client Assessment and Goal Setting",
        image: staticMediaImage("/static/media/4.4f09832d09db02642cd2.png"),
        topics: [
          "Client Motivation and Behavior Change",
          "Client Intake and Health History",
          "Body Composition Measurements",
          "Cardiovascular and Strength Assessments",
          "Goal Setting and Program Design",
        ],
      },
      {
        title: "Exercise Prescription and Programming",
        image: staticMediaImage("/static/media/5.ef855c8ac77aef802e7e.png"),
        topics: [
          "Resistance Training",
          "Cardiovascular Training",
          "Flexibility Training",
          "Periodization and Progression",
        ],
      },
      {
        title: "Exercise Technique and Safety",
        image: staticMediaImage("/static/media/Module 6.c543e74d033593a1e7df.jpg"),
        topics: [
          "Proper Form and Technique for Resistance Training",
          "Common Exercise Mistakes and How to Correct Them",
          "Safety Considerations for Different Exercises",
          "Warm-up and Cool-down Protocols",
          "Injury Prevention and Rehabilitation",
          "Special Populations",
          "First Aid and CPR",
        ],
      },
      {
        title: "Professional and Business Skills",
        image: staticMediaImage("/static/media/7.7bb7bd764bd164e451bf.png"),
        topics: [
          "Scope of Practice and Code of Ethics",
          "Legal and Liability Issues",
          "Communication and Interpersonal Skills",
          "Marketing and Sales Techniques",
          "Business Planning and Management",
        ],
      },
      {
        title: "Conclusion",
        image: staticMediaImage("/static/media/15.52aefd8729dfb706a336.png"),
        topics: [
          "Final Exam and Certification",
          "Continuing Education and Professional Development",
        ],
      },
    ],
    idealFor: [
      "Aspiring personal trainers",
      "Gym floor trainers",
      "Fitness enthusiasts",
      "Online coaches",
    ],
    blogKeywords: ["personal trainer", "certified", "resistance training"],
  },
  {
    slug: "diet-and-nutrition-beginners-course",
    title: "Diet and Nutrition: A Beginners Course",
    shortTitle: "Diet and Nutrition",
    tag: "Nutrition",
    image: dietNutritionCourseImage,
    eyebrow: "Beginner Nutrition Course",
    summary:
      "Learn foundational diet and nutrition knowledge to build healthier habits, understand nutrients, read food labels, and support long-term wellness.",
    cardSummary:
      "A beginner-friendly nutrition course covering the human body, macro and micronutrients, hydration, weight management, muscle-gain diets, food labels, and sports supplements.",
    description:
      "Royal Sports n Fitness offers a beginner course on diet and nutrition designed to give students the foundational knowledge needed for healthier lifestyle choices and future nutrition learning.",
    overview: [
      "Are you interested in learning more about diet and nutrition? Royal Sports n Fitness has developed the Best personal training certification course. It is proud to offer a beginner's class on diet and food designed to provide you with the foundational knowledge you need to achieve a healthier lifestyle.",
      "This course teaches you about proper nutrition's importance for optimal health and well-being. We cover the basics of a healthy diet, nutrient requirements for different age groups and lifestyles, and the role of macronutrients and micronutrients in our diet.",
      "You'll learn how to read food labels and make informed choices about the food you consume. Our experienced instructors provide practical tips and strategies for incorporating healthy nutrition habits into your daily routine.",
      "Whether you want to improve your health and well-being or are interested in pursuing a career in nutrition, this beginner's course provides the foundational knowledge you need to get started.",
    ],
    duration: "4 Weeks",
    classes: "16 Classes",
    eligibility:
      "Open to beginners, fitness enthusiasts, students, trainers, and anyone who wants to understand diet and nutrition from the foundation level.",
    examFormat:
      "Theory MCQ assessment, food-label reading task, beginner diet-planning assignment, and viva.",
    points: [
      "Human body and nutrition basics",
      "Macro and micronutrient fundamentals",
      "Hydration, weight management, and muscle-gain diets",
      "Food labels, supplements, and daily nutrition habits",
    ],
    benefitsTitle: "Benefits of Diet and Nutrition",
    benefits: [
      {
        title: "Better weight management",
        text: "Following a healthy diet can help with weight loss or weight management. Eating a diet high in fiber and low in processed foods and added sugars can help people feel full and satisfied, leading to reduced calorie intake and weight loss.",
      },
      {
        title: "Increased energy and productivity",
        text: "Proper nutrition can give the body the energy needed to perform daily tasks and increase productivity. A balanced diet can fuel the body with essential nutrients required for optimal cognitive function, better alertness, concentration, focus, and sleep quality.",
      },
      {
        title: "Improved overall health and well-being",
        text: "A balanced diet consisting of nutrient-dense foods including fruits, vegetables, whole grains, lean proteins, and healthy fats can provide the body with essential vitamins and minerals and reduce the risk of chronic diseases.",
      },
    ],
    modules: [
      {
        title: "Introduction to Human Body",
        image: staticMediaImage("/static/media/Intro to Human Body.115f23798aaa481897b4.png"),
        topics: [
          "Cell and its Organelles",
          "Anatomy of the Nervous System",
          "Anatomy of the Respiratory System",
          "Anatomy of the Cardiovascular System",
          "Anatomy of the Digestive System",
          "Oxidation and Role of Antioxidants",
          "BMR and Factors Affecting BMR",
          "Basic Terms and Definitions",
        ],
      },
      {
        title: "Fundamentals of the Macronutrients",
        image: staticMediaImage("/static/media/Macronutrients.7f375e5ccb50cb7736ff.png"),
        topics: [
          "Carbohydrates",
          "Proteins",
          "Fats & Lipids",
          "Requirements and Calculations of Carbohydrates",
        ],
      },
      {
        title: "Fundamentals of the Micronutrients",
        image: staticMediaImage("/static/media/Micronutrients.84d31257e0c1c1147996.png"),
        topics: [
          "Vitamins",
          "Vitamin C",
          "Vitamin E",
          "Vitamin B Complex",
          "Vitamin D",
          "Minerals",
          "Calcium",
          "Iron",
          "Magnesium",
          "Zinc",
        ],
      },
      {
        title: "Water and Hydration",
        image: staticMediaImage("/static/media/Water and Hydration.88d880e0eed0571f1774.png"),
        topics: [
          "Functions of Body Water",
          "Water Balance in Human Body",
          "Requirement of Water",
          "Risk Factors and Complications of Dehydration",
        ],
      },
      {
        title: "Fundamentals of Obesity, Fat Loss and Weight Management",
        image: staticMediaImage("/static/media/Weight Management.717bdbd3763436346ccb.png"),
        topics: [
          "Distribution of Body Fat",
          "Health and Fitness Assessments and Measurements",
          "Modifying Body Composition",
          "Factors Responsible for Obesity",
          "Weight Management",
          "Treatment of Obesity",
          "Calculations of Macronutrients for Weight/Fat Loss",
        ],
      },
      {
        title: "Exercise and Muscle Gain Diets",
        image: staticMediaImage("/static/media/Exercise and muscle gain.ca1a5294b8ce19dbe3da.png"),
        topics: [
          "Benefits of Exercise",
          "Nutritional Recommendations for Physically Active Individuals",
        ],
      },
      {
        title: "Fundamentals of Nutrition and Sports Supplements",
        image: staticMediaImage(
          "/static/media/Nutrition and Sports Supplements.e32446f0502617c11765.png"
        ),
        topics: [
          "Introduction to Nutrition Supplements",
          "Foods and Supplement Labels and Compositions",
          "Level 1 Supplements - Whey Protein, Casein Protein, Plant Protein",
          "Level 2 Supplements - Glutamine, Branched Chain Amino Acids (BCAA)",
        ],
      },
    ],
    idealFor: [
      "Nutrition beginners",
      "Fitness enthusiasts",
      "Personal trainers",
      "Wellness learners",
    ],
    blogKeywords: ["nutrition", "diet", "fitness goals"],
  },
  {
    slug: "certified-nutrition-specialist-cns",
    title: "Certified Nutrition Specialist (CNS)",
    shortTitle: "Certified Nutrition Specialist",
    tag: "CNS",
    image: nutritionCourseImage,
    eyebrow: "Nutrition Certification",
    summary:
      "Learn nutrition science, diet planning, lifestyle coaching, and client education for sustainable health and fitness results.",
    description:
      "The Certified Nutrition Specialist course teaches students how food, habits, macros, micronutrients, hydration, recovery, and goal-based diet planning work together. It is built for trainers and learners who want to guide clients with simple, practical, and sustainable nutrition support.",
    duration: "6 Weeks",
    classes: "24 Classes",
    eligibility:
      "12th pass students, fitness trainers, athletes, gym owners, wellness coaches, and nutrition beginners.",
    examFormat:
      "Theory MCQ exam, practical diet-plan case study, client counselling assignment, and viva.",
    points: [
      "Nutrition basics and food science",
      "Macro and micronutrient planning",
      "Diet structure for different goals",
      "Client counselling for sustainable habits",
    ],
    benefits: [
      "Understand calories, macros, micronutrients, hydration, and meal timing.",
      "Build practical diet structures for fat loss, muscle gain, and general health.",
      "Guide clients without making extreme or unsustainable food rules.",
      "Improve follow-up skills through habit tracking and food-log review.",
      "Add nutrition support to a personal training or wellness coaching career.",
    ],
    modules: [
      {
        title: "Nutrition Fundamentals",
        text: "Calories, energy balance, digestion basics, macronutrients, micronutrients, and hydration.",
      },
      {
        title: "Goal-Based Diet Planning",
        text: "Nutrition planning for fat loss, muscle gain, maintenance, and lifestyle improvement.",
      },
      {
        title: "Food Groups and Meal Structure",
        text: "Meal timing, food quality, portions, plate planning, and practical substitution options.",
      },
      {
        title: "Client Counselling",
        text: "Food history, habit coaching, adherence, motivation, and realistic progress conversations.",
      },
      {
        title: "Fitness Nutrition",
        text: "Pre-workout meals, post-workout recovery, protein planning, and basic supplement awareness.",
      },
      {
        title: "Case Study Practice",
        text: "Build, explain, and revise diet plans using real-life client scenarios.",
      },
    ],
    idealFor: [
      "Fitness trainers",
      "Nutrition beginners",
      "Wellness coaches",
      "Gym owners",
    ],
    blogKeywords: ["nutrition", "personal training certification", "diet"],
  },
  {
    slug: "special-population-trainer-spt",
    title: "Special Population Trainer (SPT)",
    shortTitle: "Special Population Trainer",
    tag: "SPT",
    image: academyTrainingImage,
    eyebrow: "Special Population Training",
    summary:
      "Develop skills to coach clients who need extra care due to age, lifestyle, limited mobility, medical background, or movement restrictions.",
    description:
      "The Special Population Trainer course helps fitness professionals understand safer screening, communication, exercise selection, progression, and supervision for clients who need modified training plans. The course focuses on practical boundaries, risk awareness, and referral readiness.",
    duration: "4 Weeks",
    classes: "16 Classes",
    eligibility:
      "Certified trainers, fitness students, physiotherapy learners, sports science students, and coaches with basic exercise knowledge.",
    examFormat:
      "Case-based theory exam, exercise modification practical, screening worksheet, and viva.",
    points: [
      "Training modifications for special groups",
      "Screening basics and risk awareness",
      "Mobility, stability, and low-impact progressions",
      "Safe coaching communication and supervision",
    ],
    benefits: [
      "Learn to adapt exercises for older adults, beginners, and deconditioned clients.",
      "Understand when to modify, pause, or refer a client to a medical professional.",
      "Improve confidence while coaching clients with limited mobility or special needs.",
      "Use low-impact progressions for strength, balance, flexibility, and function.",
      "Add a more responsible and inclusive coaching skill set to your profile.",
    ],
    modules: [
      {
        title: "Special Population Overview",
        text: "Age groups, lifestyle conditions, training limitations, and the role of a fitness trainer.",
      },
      {
        title: "Screening and Risk Awareness",
        text: "Basic PAR-Q style checks, red flags, communication, and referral boundaries.",
      },
      {
        title: "Older Adult Training",
        text: "Balance, mobility, functional strength, low-impact conditioning, and safe progression.",
      },
      {
        title: "Weight Management Clients",
        text: "Joint-friendly programming, low-impact conditioning, habit support, and confidence building.",
      },
      {
        title: "Exercise Modification",
        text: "Regression, progression, range control, tempo, equipment choice, and pain-aware coaching.",
      },
      {
        title: "Practical Case Planning",
        text: "Build safe and realistic plans from client scenarios with special considerations.",
      },
    ],
    idealFor: [
      "Certified trainers",
      "Fitness students",
      "Rehab-support coaches",
      "Gym instructors",
    ],
    blogKeywords: ["trainer", "training", "fitness"],
  },
  {
    slug: "advance-nutrition-specialist",
    title: "Advance Nutrition Specialist",
    shortTitle: "Advance Nutrition",
    tag: "Nutrition",
    image: nutritionCourseImage,
    eyebrow: "Advanced Nutrition Course",
    summary:
      "Go deeper into nutrition strategy for performance, body composition, lifestyle transformation, and case-based client planning.",
    description:
      "The Advance Nutrition Specialist course is designed for learners who already understand basic nutrition and want a more structured, case-study-driven approach. Students learn advanced meal planning, sports nutrition concepts, supplement awareness, plateaus, follow-ups, and client plan adjustments.",
    duration: "6 Weeks",
    classes: "24 Classes",
    eligibility:
      "Basic nutrition knowledge, CNS students, personal trainers, wellness coaches, and fitness professionals.",
    examFormat:
      "Advanced MCQ exam, detailed case-study diet plan, plan-review presentation, and viva.",
    points: [
      "Advanced meal planning frameworks",
      "Body composition and performance nutrition",
      "Supplement awareness and practical guidance",
      "Case-based nutrition plan development",
    ],
    benefits: [
      "Handle more complex fat-loss, muscle-gain, and performance nutrition scenarios.",
      "Understand plateaus, compliance issues, recovery, and plan adjustments.",
      "Create more detailed meal plans without overcomplicating client execution.",
      "Use supplement knowledge responsibly within a fitness coaching scope.",
      "Improve premium coaching value through structured reviews and case work.",
    ],
    modules: [
      {
        title: "Advanced Energy Balance",
        text: "Metabolic adaptation, plateaus, activity tracking, refeed logic, and realistic adjustments.",
      },
      {
        title: "Performance Nutrition",
        text: "Training-day nutrition, recovery meals, hydration, electrolytes, and endurance versus strength goals.",
      },
      {
        title: "Body Composition Planning",
        text: "Fat loss, lean gain, recomposition, protein timing, and weekly progress interpretation.",
      },
      {
        title: "Supplement Awareness",
        text: "Common supplements, safety basics, evidence awareness, client education, and scope limits.",
      },
      {
        title: "Lifestyle and Adherence",
        text: "Sleep, stress, cravings, travel, social eating, and client behavior patterns.",
      },
      {
        title: "Advanced Case Studies",
        text: "Build and defend nutrition plans for realistic transformation and performance cases.",
      },
    ],
    idealFor: [
      "Nutrition coaches",
      "Personal trainers",
      "CNS graduates",
      "Transformation coaches",
    ],
    blogKeywords: ["nutrition", "fitness goals", "personal training"],
  },
  {
    slug: "diploma-in-personal-training",
    title: "Diploma In Personal Training",
    shortTitle: "Personal Training Diploma",
    tag: "Diploma",
    image: academyGymImage,
    eyebrow: "Complete Trainer Pathway",
    summary:
      "A complete personal training pathway that combines exercise science, practical coaching, assessment, programming, and career support.",
    description:
      "The Diploma In Personal Training is a broader career-focused program for students who want a full foundation before entering the fitness industry. It combines theory, gym-floor practice, client assessment, strength and cardio programming, nutrition basics, soft skills, and placement-focused preparation.",
    duration: "12 Weeks",
    classes: "48 Classes",
    eligibility:
      "12th pass students, career switchers, athletes, gym enthusiasts, and learners who want a complete fitness career pathway.",
    examFormat:
      "Theory exam, practical assessment, program-design project, viva, and final coaching evaluation.",
    points: [
      "Complete trainer foundation and practicals",
      "Client assessment and goal mapping",
      "Strength, cardio, and flexibility programming",
      "Certification and placement-focused support",
    ],
    benefits: [
      "Get a complete personal training foundation from basics to practical coaching.",
      "Learn to assess, plan, demonstrate, correct, and progress client sessions.",
      "Combine strength, cardio, mobility, flexibility, and basic nutrition knowledge.",
      "Build confidence through repeated gym-floor practical exposure.",
      "Prepare for interviews, gym roles, freelance work, and long-term fitness careers.",
    ],
    modules: [
      {
        title: "Exercise Science Foundation",
        text: "Anatomy, physiology, biomechanics, energy systems, posture, and movement principles.",
      },
      {
        title: "Assessment and Goal Mapping",
        text: "Client intake, measurements, movement checks, goal setting, and progress tracking.",
      },
      {
        title: "Strength Training Practical",
        text: "Machines, free weights, bodyweight movements, spotting, cueing, and form correction.",
      },
      {
        title: "Cardio, Mobility and Flexibility",
        text: "Conditioning, warm-up design, flexibility methods, mobility drills, and recovery basics.",
      },
      {
        title: "Nutrition and Lifestyle Basics",
        text: "Calories, macros, hydration, habits, basic diet structures, and client education.",
      },
      {
        title: "Career and Placement Preparation",
        text: "Interview readiness, session presentation, client handling, sales basics, and professional conduct.",
      },
    ],
    idealFor: [
      "Career starters",
      "Gym trainers",
      "Athletes",
      "Fitness entrepreneurs",
    ],
    blogKeywords: ["personal trainer", "fitness academy", "certification"],
  },
];

const clientCourseOverrides = {
  "certified-personal-training-cpt": getClientCourseOverride("CPT"),
  "special-population-trainer-spt": getClientCourseOverride("PTSP"),
  "advance-nutrition-specialist": getClientCourseOverride("ANS"),
};

export const courseDetails = baseCourseDetails.map((course) => ({
  ...course,
  ...(clientCourseOverrides[course.slug] || {}),
}));

export const courseNavItems = courseDetails.map((course) => ({
  label: course.shortTitle,
  href: `/fitness-academy/${course.slug}`,
}));

export const academyCourseCards = courseDetails.map((course) => ({
  title: course.title,
  image: course.image,
  tag: course.tag,
  summary: course.cardSummary || course.description,
  points: course.points,
  href: `/fitness-academy/${course.slug}`,
}));

export const getCourseBySlug = (slug) =>
  courseDetails.find((course) => course.slug === slug);

export const getRelatedCourses = (slug, limit = 3) =>
  courseDetails.filter((course) => course.slug !== slug).slice(0, limit);
