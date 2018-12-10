import { sortBy } from "underscore";

const filterTitles = (titles, programType) => {
	let series = titles.filter(title =>
		title.releaseYear >= 2010 &&
		title.programType === programType
	);
	
	series = sortBy(series, "title");

	return series.slice(0, 21);
};

export { filterTitles };