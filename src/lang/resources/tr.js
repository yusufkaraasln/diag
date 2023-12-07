import login from './partials/tr/login';
import user_conf from './partials/tr/user_conf';
import home from './partials/tr/home';
import diagnosis from './partials/tr/diagnosis';
import diagnosis_result from './partials/tr/diagnosis_result';
import account_settings from './partials/tr/account_settings';
import account_details from './partials/tr/account_details';

const tr = {
  ...login,
  ...user_conf,
  ...home,
  ...diagnosis,
  ...diagnosis_result,
  ...account_settings,
  ...account_details
};

export default tr;
