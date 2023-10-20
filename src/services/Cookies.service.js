import Cookie from 'js-cookie';

export default class CookiesService {
  static async setter(key, value) {
    //? cookie setter
    //? catch all possible errors
    try {
      if (value === undefined) return false; //? make sure the value sent isn't undefined
      value = JSON.stringify(value);
      await Cookie.set(key, value, {
        sameSite: 'strict',
      }); //? setting the value
      return true;
    } catch (err) {
      return false;
    }
  }
  static getter(key) {
    //? cookie getter
    //? catch all possible errors
    try {
      //? CHECKS!
      if (!Cookie.get(key)) return false; //? Check if the value exists

      let value = Cookie.get(key);
      return JSON.parse(value); //? returning the value.
    } catch (err) {
      return false;
    }
  }
  static remover(key) {
    //? cookie remover
    //? catch all possible errors
    try {
      //? CHECKS!
      if (!Cookie.get(key)) return false; //? Check if the value exists

      Cookie.remove(key);
      return true; //? returning the value.
    } catch (err) {
      return false;
    }
  }
}
