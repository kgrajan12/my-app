export const storageKey = 'storeage';

export const screens = {
    home: 'Home',
    viewImage: 'ViewImage'
}

export const ignoreLogs = [
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
];

export const defaultScreenOptions = {
  headerShown: false,
};

export const imagePickerActions = {
  takeImage: {
    title: "Take Image",
    type: "capture",
    options: {
      saveToPhotos: true,
      mediaType: "photo",
      includeBase64: false,
      includeExtra: true,
    },
  },
  selectImage: {
    title: "Select Image",
    type: "library",
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: "photo",
      includeBase64: false,
      includeExtra: true,
    },
  },
  takeVideo: {
    title: "Take Video",
    type: "capture",
    options: {
      saveToPhotos: true,
      mediaType: "video",
      includeExtra: true,
    },
  },
  selectVideo: {
    title: "Select Video",
    type: "library",
    options: {
      selectionLimit: 0,
      mediaType: "video",
      includeExtra: true,
    },
  },
  selectMedia: {
    title: `Select Image or Video\n(mixed)`,
    type: "library",
    options: {
      selectionLimit: 0,
      mediaType: "mixed",
      includeExtra: true,
    },
  },
};
