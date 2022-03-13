import dateFormatter from '../dateFormatter';

describe('Date Formatter', () => {
  it('date should be formatted', () => {
    const result = dateFormatter({
      rawDate: new Date('2022-12-20T03:24:00'),
      formatDate: 'dd-MM-yyyy'
    });
    expect(result).toBe('20-12-2022');
  });
});
