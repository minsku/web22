import FazerLunchMenuEn from './fazer-week-example-en.json';
import FazerLunchMenuFi from './fazer-week-example.json';

//console.log(FazerLunchMenu, FazerLunchMenuEn);

/**
 * Parses a menu for a day from Fazer weekly json data
 *
 * @param {*} lunchMenus - lunch menu data
 * @param {*} dayOfWeek - index number of the day (0: Monday)
 * @returns {Array} - meals for a day
 */
const parseDayMenu = (lunchMenus, dayOfWeek) => {
  const dayMenu = lunchMenus[dayOfWeek].SetMenus.map(setMenu => {
    const name = setMenu.Name;
    let meals = '';
    //TODO: clean output
    for (const meal of setMenu.Meals) {
      meals += meal.Name + ', ';
    }
    return name ? name + ': ' + meals : meals;
  });
  return dayMenu;
};
//console.log(parseDayMenu(FazerLunchMenuEn.LunchMenus, 0));

const coursesEn = parseDayMenu(FazerLunchMenuEn.LunchMenus, 0);
const coursesFi = parseDayMenu(FazerLunchMenuFi.LunchMenus, 0);

const FazerData = {coursesEn, coursesFi};
export default FazerData;



