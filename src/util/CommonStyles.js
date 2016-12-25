import Colors from './Colors';

const CommonStyles = {
  asterisk: {
    color: Colors.ERROR,
    fontSize: 20,
  },
  subtitle: {
    fontSize: 13,
    lineHeight: '135%',
  },
  title: {
    fontSize: 20,
  },
  elementContainer: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  scrollContainer: {
    paddingTop: 16,
    paddingBottom: 34,
  },
  section: {
    paddingLeft: 34,
    paddingRight: 34,
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    backgroundColor: Colors.PRIMARY,
    marginTop: 34,
    marginBottom: 16,
    color: 'white',
    fontWeight: '500',
    paddingLeft: 34,
    paddingRight: 34,
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 20,
  },
  table: {
    display: 'table',
    border: '1px solid black',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    width: '100%',
  },
  table2: {
    display: 'table',
    border: '1px solid black',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    width: '100%',
  },
  feedback: {
    backgroundColor: 'rgb(242, 242, 242)',
    marginLeft: -34,
    marginRight: -34,
    paddingLeft: 34,
    paddingRight: 34,
    marginBottom: 16,
  },
  row: {
    display: 'table-row',
  },
  cell: {
    display: 'table-cell',
    border: '1px solid black',
    padding: 16,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  group: {
    display: 'table-row-group',
  },
  caption: {
    display: 'table-caption',
  },
  labelCell: {
    // width: 120,
    width: '25%',
  },
  noTopBorder: {
    borderTopWidth: 0,
  },
  error: {
    color: Colors.ERROR,
    fontSize: 13,
  },
};

export default CommonStyles;
