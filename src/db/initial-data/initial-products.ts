import { IProduct } from "../../@types/@types";
import fastLoremIpsum from "fast-lorem-ipsum";

const products: IProduct[] = [
  {
    title: "צמיד פשוט",
    description: fastLoremIpsum("100w"),
    originalPrice: 1000,
    currentPrice: 900,
    discount: 10,
    imageFileNames: ["public/products/1723467445172.png"],
    stringAColor: "black",
    stringBColor: "brown",
    stone: "אודם",
    category: "צמידים",
    stock: 1000,
  },
  {
    title: "שרשרת פשוטה",
    description: fastLoremIpsum("100w"),
    originalPrice: 2000,
    currentPrice: 1800,
    discount: 10,
    imageFileNames: ["public/products/1723467445172.png"],
    stringAColor: "red",
    stringBColor: "green",
    stone: "אודם",
    category: "שרשראות",
    stock: 22,
  },
  {
    title: "עגילים",
    description:
      "עגילי מקרמה בעבודת יד אלו הם שילוב מושלם של עיצוב בוהו-שיק קלאסי ואמנות קראפט עכשווית. כל זוג עגילים עשוי מחוטי מקרמה איכותיים הנקשרים בקפידה ליצירת דפוסים ייחודיים ומורכבים. העגילים קלים ונוחים לענידה, ומוסיפים נגיעה של סטייל ייחודי לכל הופעה יומיומית או ערב אלגנטי. בין אם את מחפשת מתנה מקורית או תוספת אופנתית לאוסף שלך, עגילי המקרמה הללו הם הבחירה המושלמת.",

    originalPrice: 350,
    currentPrice: 350,
    discount: 0,
    imageFileNames: [
      "1724679146877.jpg",
      "1724679146905.jpg",
      "1724679146913.jpg",
      "1724679146922.jpg",
    ],
    stock: 2,
    stringAColor: "black",
    stringBColor: "white",
    stone: "אודם",
    category: "עגילים",
  },
  {
    title: "שרשרת",
    description:
      "שרשרת המקרמה הזו היא יותר מאשר תכשיט - היא יצירת אמנות של ממש. עשויה בקפידה מחוטי מקרמה איכותיים, כל שרשרת נרקמת בעבודת יד תוך תשומת לב לפרטים הקטנים ביותר. הדוגמאות המורכבות והחוטים הנשזרים בעדינות יוצרים עיצוב ייחודי ומלא נוכחות, שמוסיף טאץ' בוהו-שיקי לכל לוק. השרשרת ניתנת להתאמה אישית באורך ובצבע, כך שתוכלי לבחור את הסטייל שמתאים לך ביותר. אם את מחפשת פריט שיעניק ייחודיות ואופי להופעה שלך, שרשרת המקרמה הזו היא הבחירה המושלמת.",

    originalPrice: 780,
    currentPrice: 780,
    discount: 0,
    imageFileNames: [
      "1724679330997.jpg",
      "1724679331021.jpg",
      "1724679331024.jpg",
      "1724679331026.jpg",
      "1724679331036.jpg",
    ],
    stock: 0,
    stringAColor: "blue",
    stringBColor: "white",
    stone: "אמטיסט",
    category: "שרשראות",
  },
  {
    title: "עגיל-טבעת",
    description:
      "עגיל-טבעת מקרמה זה משלב בצורה מושלמת בין עיצוב קלאסי לנגיעות בוהו שיק. העגילים עשויים מחוטי מקרמה קלילים ועמידים הנקשרים בקפידה לעיצוב טבעת מעודנת. עם תוספת של אבן חן קטנה במרכז, כל עגיל מקבל מגע ייחודי ומלא חן. עגילים אלו מתאימים גם ליום וגם לערב, ומשדרים מראה טבעי ואלגנטי כאחד. בין אם את מחפשת תכשיט ייחודי לשדרג את ההופעה שלך או כמתנה מיוחדת, עגיל-טבעת מקרמה עם נגיעות אבן הוא הבחירה המושלמת.",
    originalPrice: 980,
    currentPrice: 980,
    discount: 0,
    imageFileNames: [
      "1724679752305.jpg",
      "1724679752307.jpg",
      "1724679752310.jpg",
      "1724679752314.jpg",
      "1724679752333.jpg",
    ],
    stock: 25,
    stringAColor: "pink",
    stringBColor: "beige",
    stone: "רוז קוורץ",
    category: "עגילי טבעת",
  },
  {
    title: "קישוט לשיער",
    description:
      "הכניסי נגיעה של סטייל בוהו לשיער שלך עם אקססורי מקרמה ייחודי בעבודת יד! פריט זה משדרג כל תסרוקת, בין אם מדובר בשיער פזור, קוקו גבוה או צמה. החוטים הארוגים בעדינות יוצרים דפוסים יפיפיים שמשלבים בין יוקרה ופשטות. האקססורי לשיער זמין במגוון צבעים ודוגמאות, כך שתוכלי להתאים אותו לכל מראה ולכל אירוע. זו הדרך המושלמת להוסיף נגיעה של סטייל אישי ותעוזה לכל הופעה.",
    originalPrice: 630,
    currentPrice: 630,
    discount: 0,
    imageFileNames: [
      "1724679930178.jpg",
      "1724679930183.jpg",
      "1724679930189.jpg",
      "1724679930200.jpg",
      "1724679930275.jpg",
    ],
    stock: 14,
    stringAColor: "orange",
    stringBColor: "yellow",
    stone: "סיטרין",
    category: "אקססוריז",
  },
  {
    title: "צמיד",
    description:
      "צמיד מקרמה זה משלב בעדינות בין חוטי מקרמה בעבודת יד לאלמנטים טבעיים כמו עץ, אבן או צדפים. הצמידים נרקמים בדוגמאות מתוחכמות ואלגנטיות, והם מתאימים גם לנשים וגם לגברים. כל צמיד ניתן להתאמה אישית באורך ובחומרי הגלם, כך שתוכלו ליצור פריט ייחודי שמתאים בדיוק לסגנון שלכם. צמיד המקרמה הזה הוא תוספת מושלמת לכל אוסף תכשיטים ומעניק נגיעה טבעית ורגועה לכל הופעה.",
    originalPrice: 435,
    currentPrice: 435,
    discount: 0,
    imageFileNames: [
      "1724680280610.jpg",
      "1724680280611.jpg",
      "1724680280613.jpg",
      "1724680280613.jpg",
      "1724680280615.jpg",
    ],
    stock: 6,
    stringAColor: "brown",
    stringBColor: "green",
    stone: "לאפיס לזולי",
    category: "צמידים",
  },
];

export default products;
