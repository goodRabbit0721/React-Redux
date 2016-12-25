import React from 'react';
import Colors from '../util/Colors';
import CommonStyles from '../util/CommonStyles';

const Title = ({
  title,
  subtitle,
  required = false,
  standalone = false,
}) => (
  <div style={standalone ? CommonStyles.elementContainer : {}}>
    {title &&
      <div style={styles.title}>
        {title}
        {required &&
          <span style={styles.asterisk}> *</span>
        }
      </div>
    }
    {subtitle &&
      <div style={styles.subtitle}>
        {subtitle}
      </div>
    }
  </div>
);

export default Title;

const styles = {
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
};
