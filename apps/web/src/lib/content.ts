export interface Article {
  id: string;
  slug: string;
  title: string;
  category: "achievements" | "activities" | "announcements" | "tahfidz";
  categoryLabel: string;
  publishedDate: string;
  formattedDate: string;
  author: string;
  summary: string;
  content: string[];
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "tahfidz" | "activities" | "achievements" | "facilities";
  categoryLabel: string;
  date: string;
  description: string;
  location: string;
}

export const fallbackArticles: Article[] = [
  {
    id: "1",
    slug: "grand-tahfidz-graduation-cohort-iv",
    title:
      "Grand Tahfidz Graduation Cohort IV: 35 Students Complete Tasmi' Examination",
    category: "tahfidz",
    categoryLabel: "Tahfidz & Islamic Studies",
    publishedDate: "2026-09-28",
    formattedDate: "September 28, 2026",
    author: "Ustadzah Siti Fatimah, Lc., M.Ag.",
    summary:
      "A heartfelt atmosphere of gratitude filled the main hall of SD Al-Birru Sukabumi during the Cohort IV Tahfidz Graduation. A total of 35 students were officially graduated after completing the tasmi' bil-ghaib examination for Juz 30, 29, and 28.",
    content: [
      "All praise is due to Allah Subhanahu wa Ta'ala. On Saturday (09/28), SD Al-Birru Sukabumi successfully held the Cohort IV Tahfidzul Qur'an Graduation at the Main Graha Al-Birru Hall. The event was attended by the board of trustees, local education office officials, faculty instructors, and parents of the graduates.",
      "This year's graduation ceremony was attended by 35 students from grades 4, 5, and 6 who completed all stages of the tasmi' bil-ghaib examination (recitation from memory without looking at the mushaf) one full juz in a single sitting before certified sanad examiners. Twelve students completed 3 mutqin juz (Juz 28, 29, and 30), while 23 other students completed 1 to 2 full juz with complete tajweed and gharib rules.",
      "The Principal of SD Al-Birru, Ustadz H. Ahmad Fauzi, M.Pd., expressed his profound pride in the students and parents. 'Children who memorize the Qur'an are crowns of nobility for their parents in the hereafter. Memorizing the Qur'an at primary age is not merely reciting verses, but instilling an enduring love for Allah's words that will guide their morals and character in an era of challenges,' he emphasized.",
      "The ceremony concluded with the symbolic pinning of honorary sashes and flower crowns by students onto their parents, accompanied by tears of joy and prayers of blessing for the SD Al-Birru Sukabumi family.",
    ],
    tags: ["Tahfidz", "Graduation", "Tasmi'", "Student Achievements"],
  },
  {
    id: "2",
    slug: "science-and-nature-educational-visit",
    title:
      "Science & Nature Educational Visit: Grade 3 & 4 Students Explore Applied Ecosystems",
    category: "activities",
    categoryLabel: "School Activities",
    publishedDate: "2026-09-15",
    formattedDate: "September 15, 2026",
    author: "Ustadz Rahmat Hidayat, S.Pd.",
    summary:
      "Integrating contemplation of nature with the National Curriculum, dozens of SD Al-Birru students enthusiastically observed flora, fauna, and water conservation in their natural habitats.",
    content: [
      "As a practical implementation of the character building and sustainability curriculum under the theme 'Sustainable Lifestyles', grade 3 and 4 students of SD Al-Birru held an Outdoor Learning & Field Trip program to the Sukabumi nature conservation area.",
      "During this activity, students investigated biodiversity hands-on. Divided into small teams equipped with interactive science observation sheets, they documented leaf classifications, observed insect metamorphosis, and learned natural water filtration processes.",
      "Ustadz Rahmat Hidayat, Curriculum Coordinator, explained that learning directly in nature naturally sparks children's curiosity. Beyond scientific concepts, students reflect upon natural verses demonstrating that Allah's creation is governed by extraordinary wisdom and harmony.",
      "The field trip concluded with a community clean-up drive around the observation grounds to instill environmental stewardship and cleanliness as an essential reflection of faith.",
    ],
    tags: ["Science", "Outdoor Learning", "Applied Ecology", "Curriculum"],
  },
  {
    id: "3",
    slug: "admissions-2026-2027-phase-1-open",
    title: "New Student Admissions (PPDB) 2026/2027 Phase I Officially Open",
    category: "announcements",
    categoryLabel: "Official Announcements",
    publishedDate: "2026-09-01",
    formattedDate: "September 01, 2026",
    author: "SD Al-Birru Admissions Committee",
    summary:
      "SD Al-Birru Sukabumi officially opens new student registration for Academic Year 2026/2027. Class quota is strictly limited to 2 classrooms to guarantee an ideal 1:15 ratio and premium tahfidz coaching.",
    content: [
      "In the name of Allah, the Most Gracious, the Most Merciful. The New Student Admissions Committee of SD Al-Birru Sukabumi announces that new student enrollment for Academic Year 2026/2027 Phase I is officially open from September 1, 2026 through December 31, 2026.",
      "SD Al-Birru's commitment to educational quality is demonstrated through strict quota caps of 2 classes with 20 students each (a teacher-to-student ratio of 1:15). This ensures daily one-on-one talaqqi tahfidz guidance and character mentoring remain personalized and focused.",
      "Registration can be completed online via this official portal under Admissions, or directly at the SD Al-Birru Secretariat on weekdays (Monday - Friday 08:00 - 14:00 WIB, and Saturday 08:00 - 12:00 WIB).",
      "During Phase I, the committee provides a streamlined consultation and child aptitude mapping session with the school's educational psychologist at no extra charge.",
    ],
    tags: ["Admissions 2026", "Enrollment Information", "Limited Quota"],
  },
  {
    id: "4",
    slug: "student-wins-first-place-young-orator",
    title:
      "Pride of Al-Birru: Grade 5 Student Wins 1st Place in Regional Young Da'i Competition",
    category: "achievements",
    categoryLabel: "Student Achievements",
    publishedDate: "2026-08-20",
    formattedDate: "August 20, 2026",
    author: "Ustadz Muhammad Ilham, S.Pd.I.",
    summary:
      "Muhammad Fathan (Grade 5) captivated the judging panel with his speech titled 'Devotion to Parents as the Key to Life's Blessings' at the Islamic Youth Festival.",
    content: [
      "SD Al-Birru Sukabumi celebrates another proud accomplishment. In the City and Regency Islamic Youth Festival held at the Islamic Center, Muhammad Fathan Al-Ghifari (Grade 5) won 1st Place in the Young Orator Competition.",
      "Delivering a sermon on 'Birrul Walidain: The Key to Paradise During Learning Years', Fathan spoke with clear articulation, compelling resonance, and recited relevant Qur'anic verses and Hadiths with tartil melody.",
      "Public speaking advisor Ustadz Muhammad Ilham noted that intensive training covering stage presence, makhraj accuracy, and emotional expression had been cultivated over the past two months.",
      "This victory serves as an inspiring catalyst for all SD Al-Birru students to develop their communication potential and share positive values in public spheres.",
    ],
    tags: ["Young Orator", "First Place", "Youth Festival", "Achievements"],
  },
  {
    id: "5",
    slug: "school-literacy-week-and-storytelling",
    title:
      "School Literacy Week: Fostering a Passion for Reading Through Islamic Storytelling",
    category: "activities",
    categoryLabel: "School Activities",
    publishedDate: "2026-08-10",
    formattedDate: "August 10, 2026",
    author: "Ustadzah Dewi Anggraeni, S.Pd.",
    summary:
      "Celebrating Literacy Month, SD Al-Birru presented prophetic biographical storytelling, a student costume parade, and book reviews authored by students from grades 1 through 6.",
    content: [
      "Reading is the gateway of civilization and the very first divine commandment in Islam (Iqra'). To kindle an enduring love for books early on, SD Al-Birru hosted School Literacy Week and Islamic Storytelling Festival.",
      "Throughout the week, morning homeroom began with a '15-Minute Silent Reading' session across classroom reading corners and campus gardens. Students chose from illustrated storybooks, Islamic science encyclopedias, and prophetic companion histories.",
      "The grand finale featured a national storyteller recounting the educational journeys of early scholars using interactive puppets, eliciting enthusiastic participation across hundreds of young listeners.",
    ],
    tags: ["Literacy", "Reading Corner", "Storytelling", "Iqra'"],
  },
];

export const fallbackGallery: GalleryItem[] = [
  {
    id: "g1",
    title: "Tahfidz Halaqah & Morning Muroja'ah",
    category: "tahfidz",
    categoryLabel: "Tahfidzul Qur'an",
    date: "October 2026",
    description:
      "Students reverently recite memorized Qur'anic verses using the talaqqi method under certified sanad teachers.",
    location: "Al-Birru Mosque Hall",
  },
  {
    id: "g2",
    title: "Traditional Sunnah Archery Training",
    category: "activities",
    categoryLabel: "Extracurriculars",
    date: "September 2026",
    description:
      "Cultivating focus, emotional calm, and posture discipline during weekly archery practice.",
    location: "Campus Sports Field",
  },
  {
    id: "g3",
    title: "Applied Science Practicum & Nature Experiments",
    category: "activities",
    categoryLabel: "Academics",
    date: "September 2026",
    description:
      "Students observe insect life cycles and clean water filtration in the outdoor open-air science lab.",
    location: "Science Laboratory",
  },
  {
    id: "g4",
    title: "Grand Tahfidz Graduation Cohort IV",
    category: "achievements",
    categoryLabel: "Graduation & Honors",
    date: "September 2026",
    description:
      "Solemn ceremony conferring crowns and sashes to students completing certified juz memorization.",
    location: "Al-Birru Main Auditorium",
  },
  {
    id: "g5",
    title: "Dhuha Prayer & Daily Congregational Devotion",
    category: "tahfidz",
    categoryLabel: "Character & Ethics",
    date: "October 2026",
    description:
      "Daily congregational morning prayer instilling spiritual discipline and purity of heart before classes.",
    location: "School Mosque",
  },
  {
    id: "g6",
    title: "Air-Conditioned Thematic Learning Classrooms",
    category: "facilities",
    categoryLabel: "Campus Facilities",
    date: "October 2026",
    description:
      "Modern classrooms with an ideal 1:15 student-teacher ratio providing cool, comfortable, and interactive spaces.",
    location: "Academic Building 1",
  },
];

export async function getArticles(category?: string): Promise<Article[]> {
  if (!category || category === "all") {
    return fallbackArticles;
  }
  return fallbackArticles.filter((item) => item.category === category);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const found = fallbackArticles.find((item) => item.slug === slug);
  return found || null;
}

export async function getGalleryItems(
  category?: string,
): Promise<GalleryItem[]> {
  if (!category || category === "all") {
    return fallbackGallery;
  }
  return fallbackGallery.filter((item) => item.category === category);
}
