import { IStone } from "../../@types/@types";
import fastLoremIpsum from "fast-lorem-ipsum";
import fs from "fs";

const stones: IStone[] = [
  {
    name: "אודם",
    zodiac: "אריה",
    description:
      "אבן האודם, הנחשבת לאחת מאבני החן היקרות והאהובות ביותר בעולם, משולבת במוצרים נבחרים באתר שלנו כדי להוסיף להם יוקרה ואנרגיה חיובית. לאבן האודם יש צבע אדום עמוק וזוהר שמסמל תשוקה, כוח ואומץ, והיא מוכרת מזה שנים רבות כאבן שמביאה עמה שפע ואהבה. מבחינה אסטרולוגית, אבן האודם מתאימה במיוחד לבני ובנות מזלות אריה, טלה ועקרב. עבורם, האבן יכולה לחזק את הביטחון העצמי, להעצים את הכוח הפנימי ולהביא מזל והצלחה. אם את מחפשת פריט שמכיל אנרגיה חזקה וייחודית, מוצרים המשולבים עם אבן אודם הם הבחירה האולטימטיבית.",
    imageFileName: "1724338944002.jpg",
  },
  {
    name: "אמטיסט",
    zodiac: "דגים",
    description:
      "אבן האמטיסט, בגוון סגול מהפנט, נחשבת לאבן הרוחניות והשלווה. היא ידועה כמסייעת בהרגעת הנפש ובאיזון רגשי, ומציעה הגנה מפני אנרגיות שליליות. האמטיסט מתאימה במיוחד לבני ובנות מזלות דגים, בתולה, וקשת, ותורמת להעצמת האינטואיציה ולחיזוק הקשר עם העצמי הפנימי. זו האבן המושלמת למי שמחפש חיבור עמוק יותר עם הרוחניות והיציבות הרגשית.",
    imageFileName: "1724338536380.jpg",
  },
  {
    name: "רוז קוורץ",
    zodiac: "שור",
    description:
      "רוז קוורץ, אבן האהבה ללא תנאים, מגיעה בגוון ורוד רך ועדין. היא נחשבת לאבן שמביאה איתה אהבה, שלווה ושלום, ומחזקת את תחושת ההרמוניה והאמפתיה. האבן מתאימה במיוחד לבני ובנות מזלות שור, סרטן, ומאזניים, ותורמת לפיתוח מערכות יחסים עמוקות ומלאות רגש. הרוז קוורץ היא הבחירה האידיאלית עבור מי שרוצה לטפח אהבה, גם כלפי עצמו וגם כלפי אחרים.",
    imageFileName: "1724338568812.jpg",
  },
  {
    name: "סיטרין",
    zodiac: "תאומים",
    description:
      "אבן הסיטרין, עם גווני הזהב הזוהרים שלה, נחשבת לאבן השפע וההצלחה. היא ידועה כמביאה איתה אושר, אופטימיות והצלחה פיננסית, וכן כמעודדת יצירתיות וביטחון עצמי. הסיטרין מתאימה במיוחד לבני ובנות מזלות תאומים, אריה, ומאזניים, ועוזרת למשוך שפע ואנרגיות חיוביות לחיים. זו האבן המתאימה למי שרוצה להגשים חלומות ולמשוך שפע לחייו.",
    imageFileName: "1724338810205.jpg",
  },
  {
    name: "לאפיס לזולי",
    zodiac: "דלי",
    description:
      "לאפיס לזולי, בגוון כחול עמוק עם נקודות זהב טבעיות, היא אבן המסמלת חוכמה, תובנה וחיבור רוחני. האבן עוזרת לחיזוק האינטלקט והתקשורת הפנימית, והיא משמשת ככלי לריפוי רוחני. לאפיס לזולי מתאימה במיוחד לבני ובנות מזלות דלי, קשת, ושור, ועוזרת בהבנה עמוקה של עצמם ושל הסביבה. אם את מחפשת חיבור עמוק יותר עם התודעה והרוחניות, לאפיס לזולי היא הבחירה הנכונה.",
    imageFileName: "1724338838501.jpg",
  },
];

export default stones;
