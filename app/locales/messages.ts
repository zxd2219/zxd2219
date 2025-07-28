import en_navigation from "./en/navigation.json";
import fr_navigation from "./fr/navigation.json";
import zh_cn_navigation from "./zh_cn/navigation.json";

import en_contact from "./en/contact.json";
import fr_contact from "./fr/contact.json";
import zh_cn_contact from "./zh_cn/contact.json";

import en_global from "./en/global.json";
import fr_global from "./fr/global.json";
import zh_cn_global from "./zh_cn/global.json";

import en_writing from "./en/writing.json";
import fr_writing from "./fr/writing.json";
import zh_cn_writing from "./zh_cn/writing.json";

import en_about from "./en/about.json";
import fr_about from "./fr/about.json";
import zh_cn_about from "./zh_cn/about.json";

const messages = {
  zh_cn: {
    navigation: zh_cn_navigation,
    contact: zh_cn_contact,
    global: zh_cn_global,
    writing: zh_cn_writing,
    about: zh_cn_about,
  },
  en: {
    navigation: en_navigation,
    contact: en_contact,
    global: en_global,
    writing: en_writing,
    about: en_about,
  },
  fr: {
    navigation: fr_navigation,
    contact: fr_contact,
    global: fr_global,
    writing: fr_writing,
    about: fr_about,
  },
};

export default messages;
