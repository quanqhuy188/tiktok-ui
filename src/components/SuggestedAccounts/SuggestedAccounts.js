import React from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

const SuggestedAccounts = ({ label }) => {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className={cx('more-btn')}>{'See All'}</p>
    </div>
  );
};

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
