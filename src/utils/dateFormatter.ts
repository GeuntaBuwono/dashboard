import * as dateFns from 'date-fns';

type FormatDate = 'dd-MM-yyyy';

const dateFormatter = ({ rawDate, formatDate }: { rawDate: Date; formatDate: FormatDate }) =>
  dateFns.format(rawDate, formatDate);

export default dateFormatter;
