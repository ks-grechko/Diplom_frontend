
//Месяца в нужном формате

const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    
const correctMonth = (number) =>{
    return month[number];
    }

    
// Дата в формате, необходимом для карточек с новостями
    
export const correctDate = (string) =>{
	const date = new Date(string);
	return `${date.getDate()} ${correctMonth(date.getMonth())}, ${date.getFullYear()}`;
}


