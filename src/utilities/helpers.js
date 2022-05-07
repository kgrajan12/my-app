import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageKey } from "./constants";

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const getUri = async () => {
    const data = await getData();
    const images = data?.images || [];
    return images;
};

export const pushUri = async (uri) => {
    const images = await getUri();
    uri.uri && images.push(uri);
    await storeData({
        images
    });
    return images;
};